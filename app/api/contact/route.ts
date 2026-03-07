import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ContactPayload = {
  name: string;
  clinicName: string;
  email: string;
  phone: string;
  monthlyAdSpend: string;
  message: string;
};

type ContactRequestBody = ContactPayload & {
  website?: string;
};

const PRIMARY_CONTACT_EMAIL = 'suhaas@primesocial.agency';

const ALLOWED_AD_SPEND = new Set([
  'Under £2,000',
  '£2,000 - £4,999',
  '£5,000 - £9,999',
  '£10,000+',
]);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestHistoryByIp = new Map<string, number[]>();

const getClientIp = (request: NextRequest): string => {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) return forwardedFor.split(',')[0]?.trim() || 'unknown';

  const realIp = request.headers.get('x-real-ip');
  if (realIp) return realIp.trim();

  return 'unknown';
};

const isRateLimited = (ip: string): boolean => {
  const now = Date.now();
  const threshold = now - RATE_LIMIT_WINDOW_MS;
  const recentAttempts = (requestHistoryByIp.get(ip) || []).filter((timestamp) => timestamp > threshold);

  if (recentAttempts.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestHistoryByIp.set(ip, recentAttempts);
    return true;
  }

  recentAttempts.push(now);
  requestHistoryByIp.set(ip, recentAttempts);
  return false;
};

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const getSanitizedPayload = (body: unknown): ContactPayload | null => {
  if (!body || typeof body !== 'object') return null;
  const data = body as Partial<ContactRequestBody>;
  const websiteTrap = String(data.website || '').trim();

  if (websiteTrap) return null;

  const payload: ContactPayload = {
    name: String(data.name || '').trim(),
    clinicName: String(data.clinicName || '').trim(),
    email: String(data.email || '').trim(),
    phone: String(data.phone || '').trim(),
    monthlyAdSpend: String(data.monthlyAdSpend || '').trim(),
    message: String(data.message || '').trim(),
  };

  if (!payload.name) return null;
  if (!payload.clinicName) return null;
  if (!payload.email || !emailRegex.test(payload.email)) return null;
  if (!payload.phone) return null;
  if (!ALLOWED_AD_SPEND.has(payload.monthlyAdSpend)) return null;
  if (!payload.message || payload.message.length < 20) return null;

  return payload;
};

const requiredEnv = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
] as const;

const missingEnvVars = requiredEnv.filter((key) => !process.env[key]);

export async function POST(request: NextRequest) {
  try {
    if (missingEnvVars.length > 0) {
      return NextResponse.json(
        { success: false, error: 'Email service is not configured.' },
        { status: 500 }
      );
    }

    const clientIp = getClientIp(request);
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { success: false, error: 'Too many submissions. Please wait a few minutes and try again.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const payload = getSanitizedPayload(body);

    if (!payload) {
      return NextResponse.json(
        { success: false, error: 'Please submit all required fields with valid values.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT || 587) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const fromEmail = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER;
    const toEmail = PRIMARY_CONTACT_EMAIL;

    const safeName = escapeHtml(payload.name);
    const safeClinicName = escapeHtml(payload.clinicName);
    const safeEmail = escapeHtml(payload.email);
    const safePhone = escapeHtml(payload.phone);
    const safeMonthlyAdSpend = escapeHtml(payload.monthlyAdSpend);
    const safeMessage = escapeHtml(payload.message).replace(/\n/g, '<br/>');

    await transporter.sendMail({
      from: `Prime Social Website <${fromEmail}>`,
      to: toEmail,
      replyTo: payload.email,
      subject: `New Booking Review Application - ${payload.clinicName}`,
      text: `New application received:

Name: ${payload.name}
Clinic Name: ${payload.clinicName}
Email: ${payload.email}
Phone: ${payload.phone}
Monthly Ad Spend: ${payload.monthlyAdSpend}

Message:
${payload.message}
`,
      html: `
<h2>New Booking Review Application</h2>
<p><strong>Name:</strong> ${safeName}</p>
<p><strong>Clinic Name:</strong> ${safeClinicName}</p>
<p><strong>Email:</strong> ${safeEmail}</p>
<p><strong>Phone:</strong> ${safePhone}</p>
<p><strong>Monthly Ad Spend:</strong> ${safeMonthlyAdSpend}</p>
<p><strong>Message:</strong></p>
<p>${safeMessage}</p>
`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Unable to submit the form right now. Please try again later.' },
      { status: 500 }
    );
  }
}
