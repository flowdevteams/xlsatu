# ⚡ Quick Reference Guide - InternetID Landing Page

## 🎯 10-Minute Setup

### 1. Local Development (3 min)
```bash
pnpm install
pnpm dev
# Open http://localhost:3000
```

### 2. Update Company Info (5 min)
**File**: `app/layout.tsx`
```javascript
// Update metadata
title: 'YOUR COMPANY NAME | YOUR TAGLINE'
description: 'Your description...'

// Update contact
openGraph: { url: 'YOUR_DOMAIN' }
```

### 3. Update Contact Info (2 min)
**File**: `components/footer.tsx`
```javascript
// Update phone, email, address
phone: '+62-YOUR-PHONE'
email: 'your-email@company.com'
```

---

## 📋 File Locations - Quick Edit

| What to Change | File | Line Range |
|---|---|---|
| Site Title & Meta | `app/layout.tsx` | 1-60 |
| Pricing Packages | `components/pricing-section.tsx` | 15-60 |
| Coverage Regions | `components/coverage-section.tsx` | 10-25 |
| Features | `components/features-section.tsx` | 10-35 |
| FAQ Questions | `components/faq-section.tsx` | 10-70 |
| Contact Info | `components/footer.tsx` | 25-45 |
| Colors | `app/globals.css` | 5-35 |

---

## 🎨 Quick Design Changes

### Change Primary Color
**File**: `app/globals.css`
```css
--primary: #0284c7;      /* Change this */
--accent: #0ea5e9;       /* And this */
```

### Change Font Size
**File**: Any component
```tsx
<h1 className="text-5xl">   /* Large */
<h1 className="text-4xl">   /* Medium */
<h1 className="text-3xl">   /* Small */
```

### Add Spacing
```tsx
<div className="py-20">      /* 20 units padding Y */
<div className="px-8">       /* 8 units padding X */
<div className="gap-4">      /* 4 units gap */
```

---

## 💰 Update Pricing

**File**: `components/pricing-section.tsx` (Line 20-70)

```javascript
{
  id: 'basic',
  name: 'Paket Hemat',
  speed: '10 Mbps',
  price: 299000,        // Change this
  period: '/bulan',
  description: 'Your description',
  features: [
    'Feature 1',
    'Feature 2',
  ],
  highlighted: false,
  popular: false,
}
```

---

## 🗺️ Update Coverage

**File**: `components/coverage-section.tsx` (Line 10-25)

```javascript
const indonesianRegions = [
  { id: 'jkt', name: 'Jakarta', covered: true },
  { id: 'bdg', name: 'Bandung', covered: true },
  { id: 'new', name: 'New City', covered: false },  // Add new
]
```

---

## 🚀 Deploy Commands

### Vercel
```bash
pnpm deploy
# Or via CLI:
npm i -g vercel
vercel
```

### Build & Test
```bash
pnpm build
pnpm start
```

---

## 📱 Test Responsive Design

```bash
# Open DevTools
F12

# Toggle device toolbar
Ctrl+Shift+M (Windows)
Cmd+Shift+M (Mac)

# Test viewports:
- Mobile: 375px
- Tablet: 768px
- Desktop: 1920px
```

---

## 🔍 SEO Checklist

Quick SEO verification:

```
□ Meta title (60 chars): app/layout.tsx
□ Meta description (160 chars): app/layout.tsx
□ Keywords added: All sections
□ H1 tag present: Check
□ Headings hierarchy: Check
□ Alt text ready: images
□ Internal links: Check
□ Sitemap: /sitemap.xml
□ Robots: /robots.txt
□ Schema markup: 3 types
□ Mobile responsive: Check
```

---

## 🆘 Common Issues & Fixes

### Issue: Page won't load
```bash
# Clear cache & rebuild
pnpm clean
pnpm install
pnpm dev
```

### Issue: Mobile looks bad
```
Check:
1. Viewport meta tag
2. Tailwind responsive classes
3. Touch target size (48px min)
```

### Issue: Form not working
```
Check:
1. API endpoint
2. CORS settings
3. Form validation
4. Console errors
```

### Issue: Slow loading
```
Check:
1. Image optimization
2. CSS bundle size
3. JavaScript files
4. External requests
```

---

## 📊 Analytics Setup

### Google Analytics 4
1. Get GA ID: `G-XXXXXXXXXX`
2. Add to `app/layout.tsx`
3. Track events in components

### Google Search Console
1. Go to `search.google.com/search-console`
2. Add property
3. Verify ownership
4. Submit sitemap

### Recommended Events
```javascript
// Page view (automatic)

// Button click
gtag('event', 'cta_click', {
  button: 'Pesan Sekarang'
})

// Form submit
gtag('event', 'form_submit', {
  form_name: 'contact'
})
```

---

## 🔐 Security Checklist

- [ ] HTTPS enabled
- [ ] Domain configured
- [ ] SSL certificate valid
- [ ] Security headers set
- [ ] CORS configured
- [ ] Environment variables protected
- [ ] Form validation added
- [ ] Rate limiting on forms

---

## 📞 Contact Methods (Update All)

**Files to update with contact info**:
1. `app/layout.tsx` - Contact Point schema
2. `components/footer.tsx` - Footer contact
3. `components/contact-section.tsx` - Contact form

---

## 🎯 CTA Button Text

Quick CTA reference to use:

```
Actions:
- "Pesan Sekarang" (Order now)
- "Cek Coverage" (Check coverage)
- "Hubungi Kami" (Contact us)
- "Daftar Sekarang" (Register)
- "Lihat Paket" (View packages)
- "Get Started" (English)
```

---

## 📈 Performance Targets

| Metric | Target | How to Check |
|---|---|---|
| PageSpeed Mobile | 95+ | PageSpeed Insights |
| PageSpeed Desktop | 98+ | PageSpeed Insights |
| Core Web Vitals | All Green | PageSpeed Insights |
| Mobile Score | 90+ | GTmetrix |
| SEO Score | 100 | SEO Checker |

---

## 🚢 Launch Checklist

**Day Before Launch**:
- [ ] All content updated
- [ ] Links tested
- [ ] Forms working
- [ ] Mobile tested
- [ ] Analytics ready
- [ ] Backup created

**Launch Day**:
- [ ] Domain configured
- [ ] SSL working
- [ ] Go live!
- [ ] Monitor first hour
- [ ] Send email to users
- [ ] Social media announce

**Post Launch**:
- [ ] Check Google indexing
- [ ] Monitor analytics
- [ ] Verify all pages load
- [ ] Check rankings starting week 2

---

## 💡 Pro Tips

1. **Use headless CMS** for content
2. **Add blog section** for SEO
3. **Implement email signup** for leads
4. **Add trust badges** for credibility
5. **Use testimonials** for social proof
6. **Add FAQ schema** for snippets
7. **Optimize images** for performance
8. **Monitor rankings** regularly
9. **Create content calendar** for blogs
10. **A/B test CTAs** for conversions

---

## 📚 Documentation Quick Links

| Document | Purpose | Length |
|---|---|---|
| **README.md** | Overview & setup | 500 lines |
| **SEO_OPTIMIZATION.md** | SEO strategies | 310 lines |
| **IMPLEMENTATION_GUIDE.md** | Setup guide | 507 lines |
| **CONTENT_OPTIMIZATION.md** | Content tips | 466 lines |
| **PROJECT_SUMMARY.md** | Status report | 437 lines |
| **QUICK_REFERENCE.md** | This file | 300 lines |

---

## 🎓 Learning Resources

```
Next.js:      nextjs.org/docs
React:        react.dev
Tailwind:     tailwindcss.com
Lucide:       lucide.dev
SEO:          search.google.com/search-console
Analytics:    analytics.google.com
```

---

## ⏰ Time Estimates

| Task | Time |
|---|---|
| Install & setup | 5 min |
| Update basic info | 10 min |
| Update pricing | 10 min |
| Add images | 30 min |
| Configure analytics | 20 min |
| Deploy | 10 min |
| Monitor first day | 30 min |
| **Total** | **~2 hours** |

---

## 🚀 Quick Deploy

```bash
# 1. Make changes
# Edit files in /components and /app

# 2. Test locally
pnpm dev

# 3. Build
pnpm build

# 4. Deploy to Vercel
npm i -g vercel
vercel

# Done! 🎉
```

---

## 📞 Need Help?

1. **Check documentation** - SEO_OPTIMIZATION.md, IMPLEMENTATION_GUIDE.md
2. **Read code comments** - Check component files for hints
3. **Review examples** - Look at existing implementations
4. **Test locally** - Use `pnpm dev` to debug
5. **Check console** - F12 for JavaScript errors

---

## ✅ Success Metrics

After 1 month:
- ✅ Site indexed by Google
- ✅ Getting organic traffic
- ✅ Form submissions coming in
- ✅ Mobile score 90+
- ✅ SEO score 100

---

## 🎉 You're Ready!

Everything is set up for you to launch. Just:

1. Update your content
2. Add your images
3. Configure analytics
4. Deploy
5. Monitor & optimize

**Good luck! 🚀**

---

**Last Updated**: 2026
**Version**: 1.0
**Status**: Ready to Use ✅
