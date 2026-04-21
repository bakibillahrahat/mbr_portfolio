# 🚀 Getting Started - Quick Reference

## ⚡ Quick Start (5 minutes)

```bash
# 1. Install dependencies
npm install

# 2. Setup database (if not already connected)
# Make sure DATABASE_URL is set in .env

# 3. Sync database schema
npx prisma db push

# 4. Generate Prisma client
npx prisma generate

# 5. Seed sample data
npm run seed

# 6. Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

---

## 📋 What's Included

### ✅ Components (7 Total)
- **Hero** - Landing section with skills and CTAs
- **ExperienceTimeline** - Professional background
- **EducationSection** - Educational history
- **ProjectsGrid** - Project showcase (filterable)
- **Contact** - Contact form + social links
- **AnimatedBackground** - Animated gradient blobs
- **SectionContainer** - Reusable section wrapper

### ✅ Pages (2 Total)
- **Main Page** (`/`) - Portfolio home with all sections
- **Project Details** (`/projects/[slug]`) - Individual project case studies

### ✅ APIs (3 Total)
- **GET `/api/projects`** - Fetch projects
- **GET `/api/experience`** - Fetch work experience
- **GET `/api/education`** - Fetch educational background

### ✅ Styling
- Animated gradient background
- Responsive design (mobile, tablet, desktop)
- Custom Tailwind components
- Framer Motion animations
- Dark theme with violet/cyan accents

### ✅ Database
- PostgreSQL via Prisma
- 5 models: User, Experience, Education, Project, Certification
- Sample data pre-populated
- Automatic timestamps

---

## 📂 Project Structure

```
mbr_portfolio/
├── app/
│   ├── api/                ← API routes
│   ├── projects/[slug]/    ← Dynamic project pages
│   ├── globals.css         ← Global styles + animations
│   ├── layout.tsx          ← Root layout
│   └── page.tsx            ← Home page
├── components/             ← React components
│   ├── Hero.tsx
│   ├── ExperienceTimeline.tsx
│   ├── EducationSection.tsx
│   ├── ProjectsGrid.tsx
│   ├── Contact.tsx
│   ├── AnimatedBackground.tsx
│   └── SectionContainer.tsx
├── lib/                    ← Utilities
│   └── mdx.ts             ← MDX configuration
├── prisma/
│   ├── schema.prisma       ← Database schema
│   └── seed.ts            ← Seed script
└── package.json            ← Dependencies
```

---

## 🔐 Environment Setup

Create `.env` file:
```env
DATABASE_URL=postgresql://user:password@host:port/dbname
DIRECT_URL=postgresql://user:password@host:port/dbname
```

For Supabase:
1. Go to [supabase.com](https://supabase.com)
2. Create project
3. Copy connection strings
4. Paste into `.env`

---

## 🎨 Key Features

### Dynamic Content
- All content stored in database
- API routes for data fetching
- Real-time updates

### Modern Design
- Animated background with moving blobs
- Smooth scroll animations
- Hover effects on all interactive elements
- Fully responsive

### Case Studies
- Individual project pages
- Three-section template: Problem → Solution → Challenges
- Code examples with syntax highlighting
- Links to demos and repositories

### Contact
- Contact form with validation
- Social media links
- Email integration ready

---

## 🛠️ Common Tasks

### Update Portfolio Content

**Option 1: Direct Database Update**
```bash
# Edit prisma/seed.ts with your data
# Run: npm run seed
```

**Option 2: API Requests** (if add admin panel later)
```bash
curl -X POST http://localhost:3000/api/experience \
  -H "Content-Type: application/json" \
  -d '{"title":"Role","company":"Company",...}'
```

### Add New Project
1. Database: Add to seed script or create via API
2. URL: Automatically available at `/projects/[slug]`
3. Content: Edit in static data or fetch from DB

### Customize Design
1. **Colors**: Edit `app/globals.css` color values
2. **Animations**: Update timing in component files
3. **Layout**: Modify grid sizes in component props
4. **Fonts**: Change in `app/layout.tsx`

---

## 📱 Responsive Breakpoints

```css
/* Mobile: < 640px */
/* Tablet: 640px - 1024px */
/* Desktop: > 1024px */
```

All components automatically stack and reflow.

---

## 🚀 Deployment

### Vercel (Recommended - 1 minute)
```bash
npm install -g vercel
vercel
# Follow prompts, connect GitHub
```

### Manual Deployment
```bash
# Build
npm run build

# Test production build locally
npm start

# Deploy using your preferred platform
# (Netlify, AWS, Heroku, etc.)
```

**Remember**: Set environment variables on your hosting platform!

---

## 🐛 Troubleshooting

### Database not connecting
```bash
# Check connection string
npm run seed

# If that fails, verify with Prisma
npx prisma db validate
```

### Build errors
```bash
# Clear Next.js cache
rm -rf .next

# Regenerate Prisma client
npx prisma generate

# Rebuild
npm run build
```

### Styles not loading
```bash
# Restart dev server
# Clear browser cache (Cmd/Ctrl + Shift + Delete)
# Hard refresh (Cmd/Ctrl + Shift + R)
```

---

## 📊 Database Queries

Check your database directly:

```bash
# Via Prisma Studio
npx prisma studio

# Via psql (if PostgreSQL installed)
psql -U user -d dbname -c "SELECT * FROM \"Project\";"
```

---

## 🎯 Next Steps

1. **Customize Content**: Edit `prisma/seed.ts` with your information
2. **Update Links**: Change social media URLs in components
3. **Add Images**: Use Next.js Image component for optimization
4. **Test APIs**: Verify endpoints at `/api/projects`, etc.
5. **Deploy**: Push to Vercel or your hosting platform
6. **Monitor**: Set up Sentry for error tracking

---

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [Framer Motion Docs](https://www.framer.com/motion)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [MDX Docs](https://mdxjs.com)

---

## 💡 Pro Tips

1. **Use Prisma Studio** to visualize database:
   ```bash
   npx prisma studio
   ```

2. **Test API routes** directly:
   ```bash
   curl http://localhost:3000/api/projects
   ```

3. **Monitor build size**:
   ```bash
   npm run build
   # Check .next/static folder size
   ```

4. **Speed up development**:
   - Use Turbopack (Next.js 13.1+)
   - Enable Fast Refresh
   - Use React DevTools

---

## ✅ Verification Checklist

- [ ] Dependencies installed (`npm install`)
- [ ] Prisma client generated (`npx prisma generate`)
- [ ] Database synced (`npx prisma db push`)
- [ ] Sample data seeded (`npm run seed`)
- [ ] Dev server runs (`npm run dev`)
- [ ] Home page loads (http://localhost:3000)
- [ ] Project pages work (`/projects/ai-communication-agent`)
- [ ] API endpoints respond (http://localhost:3000/api/projects)
- [ ] Contact form works
- [ ] Mobile responsive (test with browser devtools)

---

## 🎉 You're All Set!

Your modern portfolio website is ready to showcase your skills. Start customizing with your own content and deploy when ready!

**Need help?** Check `PORTFOLIO_DOCUMENTATION.md` for detailed guides.

---

**Happy coding! 🚀**
