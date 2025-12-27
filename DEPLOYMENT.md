# Deployment to Netlify

## Prerequisites
- GitHub account (Starbright Lab)
- Netlify account (Starbright Lab)
- Node.js 20+ installed

## Step 1: Push to GitHub

```bash
cd /Users/andrewlawson/development/chamberlainsinternational/website

# Initialize git (if not already done)
git init
git add .
git commit -m "Initial website build"

# Create repo on GitHub and push
git remote add origin https://github.com/YOUR_USERNAME/chamberlains-website.git
git branch -M main
git push -u origin main
```

## Step 2: Create netlify.toml Configuration

Already created in the project root with these settings:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "20"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Step 3: Deploy on Netlify

1. **Log in to Netlify** (Starbright Lab account)
2. **Click "Add new site" → "Import an existing project"**
3. **Connect to GitHub** and select the repository
4. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: `20`
5. **Click "Deploy site"**

## Step 4: Configure Custom Domain

### For chamberlainsinternational.com (GoDaddy):

**Option A: Use Netlify DNS (Recommended)**
1. In Netlify: Go to Domain settings → Add custom domain
2. Copy Netlify's nameservers
3. In GoDaddy: Update nameservers to Netlify's
4. Wait for DNS propagation (up to 48 hours)

**Option B: Keep GoDaddy DNS**
1. In Netlify: Get the Netlify site URL (e.g., `chamberlains-123456.netlify.app`)
2. In GoDaddy DNS settings:
   - Add A record: `@` → `75.2.60.5` (Netlify's load balancer)
   - Add CNAME record: `www` → `chamberlains-123456.netlify.app`

### For preservemanagement.com (Florida Hosting):

**Set up 301 redirect:**
1. In Florida Hosting control panel
2. Create redirect: `preservemanagement.com` → `https://chamberlainsinternational.com`
3. Include www subdomain

## Step 5: Enable HTTPS

Netlify automatically provisions SSL certificates via Let's Encrypt.
Just enable "Force HTTPS" in domain settings.

## Step 6: Test Deployment

Visit your site at:
- https://chamberlainsinternational.com
- https://www.chamberlainsinternational.com
- https://preservemanagement.com (should redirect)

Check all pages:
- Homepage: /
- Buy: /buy
- Sell: /sell
- Property Management: /property-management
- About: /about
- Contact: /contact

## Future: Form Submissions

The contact form currently shows an alert. To implement:

**Option 1: Netlify Forms (Free)**
```html
<form name="contact" method="POST" data-netlify="true">
  <!-- form fields -->
</form>
```

**Option 2: Resend (Email API)**
```bash
npm install resend
# Create API route at app/api/contact/route.ts
```

## Monitoring

Netlify provides:
- Build logs
- Deploy previews for branches
- Analytics (paid feature)
- Form submissions (if using Netlify Forms)

## Continuous Deployment

Every push to `main` branch automatically triggers a new deployment!

## Cost

Current setup: **$0/month**
- Netlify Free Tier: 100GB bandwidth, 300 build minutes
- Perfect for this site's expected traffic

---

**Need help?** Check Netlify docs or contact Andrew at Starbright Lab LLC
