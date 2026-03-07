# Prime Social Website

Prime Social marketing site built with Next.js (App Router).

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Nodemailer (form delivery)

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Environment Variables

Create `.env.local` with (copy from `.env.example` and fill in real values):

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
CONTACT_FROM_EMAIL=noreply@primesocial.agency
```

Notes:

- Form submissions send to `suhaas@primesocial.agency`.
- `SMTP_*` variables are **required** for the application form to work. Use your email provider's SMTP settings (e.g. Gmail App Password, SendGrid, Resend, Mailgun).

## Deployment Notes

- Deploy as a Node.js Next.js app.
- Do not deploy legacy `dist/` static output for this project.
- Ensure the platform runs:
  - `npm install`
  - `npm run build`
  - `npm run start`

## Useful Scripts

- `npm run dev` - Start dev server
- `npm run build` - Create production build
- `npm run start` - Run production server
- `npm run lint` - Lint project
