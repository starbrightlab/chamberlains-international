# Chamberlains Real Estate & Preserve Property Management Website

Modern, responsive website for Chamberlains Real Estate International and Preserve Property Management.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

## 🎨 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Inter (primary), Playfair Display (accents)
- **Deployment:** Netlify (via Starbright Lab LLC)

## 📁 Project Structure

```
website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles & Tailwind config
├── components/
│   ├── Header.tsx          # Sticky navigation header
│   ├── Hero.tsx            # Homepage hero section
│   ├── Services.tsx        # Services grid
│   ├── ContactCTA.tsx      # Contact call-to-action bar
│   └── Footer.tsx          # Site footer
└── public/
    ├── logo.png            # Chamberlains logo
    ├── ppm-logo.jpg        # Preserve logo
    └── head.jpg            # Hero background image
```

## 🎨 Brand Colors

```css
--chamberlains-navy: #1e3a5f   /* Primary brand color */
--chamberlains-blue: #2563eb   /* CTAs and links */
--preserve-green: #10b981      /* Property management */
--warm-accent: #f59e0b         /* Highlights */
```

## 📝 Content Areas

### Homepage Sections
1. **Header** - Sticky navigation with phone number
2. **Hero** - Large image with dual CTAs
3. **Services** - Three main service offerings
4. **Why Choose Us** - Benefits and statistics
5. **Service Areas** - Champions Gate, Davenport, Kissimmee
6. **Contact CTA** - Call-to-action bar
7. **Footer** - Links and contact information

## 🔧 Customization

### Adding New Pages
Create new routes in the `app/` directory:
```typescript
// app/about/page.tsx
export default function About() {
  return <div>About Us</div>;
}
```

### Updating Content
- **Text content:** Edit component files in `components/`
- **Images:** Add to `public/` directory
- **Metadata:** Update `app/layout.tsx`

## 🌐 Deployment

This site is deployed via Netlify under the Starbright Lab LLC account.

### Build Command
```bash
npm run build
```

### Environment Variables
None required for basic deployment.

### Domain Configuration
- Primary: chamberlainsinternational.com
- Redirect: preservemanagement.com → chamberlainsinternational.com

## 📱 Responsive Design

The site is mobile-first and fully responsive:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML elements
- WCAG AA color contrast ratios
- Keyboard navigation support
- Screen reader friendly

## 🔮 Future Enhancements

- [ ] MLS property listings integration
- [ ] Contact form with email delivery
- [ ] Property search filters
- [ ] Decap CMS for content management
- [ ] Blog/news section
- [ ] Testimonials section
- [ ] Virtual tour embeds
- [ ] Multi-language support (Spanish)

## 📞 Contact

**Starbright Lab LLC**  
Website Development & Maintenance  
Andrew Lawson

---

Built with ❤️ by Starbright Lab LLC
