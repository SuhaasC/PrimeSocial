# Google Analytics Setup Guide

## ✅ What's Already Done:
- Google Analytics package (react-ga4) installed
- Analytics utility functions created
- Page view tracking implemented
- Button click tracking added to all CTA buttons
- External link tracking setup

## 🔧 What You Need To Do:

### Step 1: Get Your Google Analytics Measurement ID

1. Go to [Google Analytics](https://analytics.google.com)
2. Sign in with your Google account
3. Click "Start measuring" or "Create Account"
4. Set up your account:
   - **Account name**: Prime Social
   - **Property name**: Prime Social Website
   - **Website URL**: Your domain (e.g., primesocial.agency)
   - **Industry category**: Advertising & Marketing
   - **Time zone**: Your local timezone
5. Accept the terms and create
6. Copy your **Measurement ID** (looks like `G-XXXXXXXXXX`)

### Step 2: Add Your Measurement ID

1. Open `src/utils/analytics.ts`
2. Replace `'G-XXXXXXXXXX'` with your actual Measurement ID:
```typescript
const GA_MEASUREMENT_ID = measurementId || 'G-YOUR-ACTUAL-ID';
```

### Step 3: Test Your Setup

1. Start your development server: `npm run dev`
2. Open your website in a browser
3. Open browser developer tools (F12)
4. Check the console for "Google Analytics initialized" message
5. Navigate between pages and click buttons to test tracking

### Step 4: Verify in Google Analytics

1. Go back to Google Analytics
2. Click on "Realtime" in the left sidebar
3. Browse your website and you should see activity appear in real-time

## 📊 What Gets Tracked:

### Automatic Tracking:
- **Page Views**: Every page visit is tracked
- **Route Changes**: Navigation between pages

### Button Click Tracking:
- **Header CTA**: "Book Free Audit" button clicks
- **Mobile Menu CTA**: "Book Free Audit" button clicks  
- **Final CTA Section**: Both "Book Free Audit" and "Email Us" buttons
- **External Links**: Links to Calendly and email

### Custom Events Available:
- `trackButtonClick(buttonName, location)` - Track any button click
- `trackFormSubmit(formName)` - Track form submissions
- `trackExternalLink(url, linkText)` - Track external link clicks
- `trackScrollDepth(percentage)` - Track how far users scroll

## 🔐 Privacy Considerations:

- Google Analytics is GDPR compliant when configured properly
- Consider adding a cookie consent banner for EU visitors
- You can use privacy-focused alternatives like Plausible if preferred

## 📈 What You'll See in Analytics:

- **Real-time visitors**
- **Page views and popular pages**
- **Traffic sources** (Google, social media, direct, etc.)
- **User behavior** (time on site, bounce rate)
- **Goal conversions** (button clicks, form submissions)
- **Geographic data** (countries, cities)
- **Device information** (mobile vs desktop)

## 🚀 Next Steps:

1. Set up **Goals** in Google Analytics for conversions
2. Connect **Google Search Console** for SEO data
3. Set up **Google Ads** conversion tracking if you run ads
4. Create custom **Audiences** for remarketing

Your website is now ready to track visitor behavior and help you optimize your marketing efforts! 🎯

