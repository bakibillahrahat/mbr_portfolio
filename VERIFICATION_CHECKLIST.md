# ✅ Portfolio Setup Verification Checklist

Use this checklist to verify your portfolio is configured correctly and ready for development/deployment.

---

## 🔧 Prerequisites

- [ ] Node.js 18+ installed (`node --version`)
- [ ] npm/yarn installed (`npm --version`)
- [ ] PostgreSQL database or Supabase account
- [ ] Git initialized (if deploying)

---

## 📦 Installation & Configuration

- [ ] Cloned/opened project in VS Code
- [ ] Created `.env` file with `DATABASE_URL` and `DIRECT_URL`
- [ ] Ran `npm install` (dependencies installed)
- [ ] Confirmed no installation errors in terminal

---

## 🗄️ Database Setup

- [ ] Verified database connection string is correct
- [ ] Ran `npx prisma db push` successfully
- [ ] Confirmed Prisma client generated to `app/generated/prisma/`
- [ ] Ran `npm run seed` successfully
- [ ] Sample data populated (check with `npx prisma studio`)

### Database Verification Commands:
```bash
# Check if Prisma client exists
ls -la app/generated/prisma/

# View database in studio
npx prisma studio

# Run seed script
npm run seed
```

---

## 🎨 Frontend Verification

### Home Page
- [ ] Page loads at `http://localhost:3000`
- [ ] All 7 sections visible:
  - [ ] Hero section (intro + skills)
  - [ ] Experience section (timeline)
  - [ ] Education section (cards)
  - [ ] Projects section (grid)
  - [ ] Research section (filtered view)
  - [ ] Contact section (form + links)
  - [ ] Footer

### Animations & Styling
- [ ] Animated gradient background visible (4 moving blobs)
- [ ] Smooth scroll animations when scrolling
- [ ] Hover effects on cards and buttons
- [ ] Responsive design (test on mobile/tablet)
- [ ] No console errors or warnings (check DevTools)

### Navigation
- [ ] Can scroll to all sections smoothly
- [ ] Links to social media work (LinkedIn, GitHub)
- [ ] Project cards display with tech tags
- [ ] Contact form submits without errors

---

## 🔗 API Endpoints

Test each endpoint by visiting in browser or using curl:

### `/api/projects`
```bash
# Test command:
curl http://localhost:3000/api/projects

# Expected: JSON array of projects
# Should include: title, description, isResearch, technologies, etc.
```
- [ ] Endpoint responds with 200 status
- [ ] Returns JSON array
- [ ] Filter `?isResearch=true` works
- [ ] Filter `?isResearch=false` works

### `/api/experience`
```bash
# Test command:
curl http://localhost:3000/api/experience

# Expected: JSON array of experiences
```
- [ ] Endpoint responds with 200 status
- [ ] Returns JSON array
- [ ] Ordered by date (most recent first)

### `/api/education`
```bash
# Test command:
curl http://localhost:3000/api/education

# Expected: JSON array of education entries
```
- [ ] Endpoint responds with 200 status
- [ ] Returns JSON array
- [ ] All fields present (school, degree, gpa, etc.)

---

## 📄 Dynamic Project Pages

- [ ] Can navigate to `/projects/ai-communication-agent`
- [ ] Can navigate to `/projects/analytics-dashboard`
- [ ] Project detail page displays:
  - [ ] Project title
  - [ ] Brief description
  - [ ] Technologies list
  - [ ] Links to demo/GitHub
  - [ ] Case study content (Problem → Solution → Challenges)
- [ ] Back navigation works
- [ ] Not found page shows for invalid slugs

---

## 📱 Responsive Design

Test on different screen sizes (use browser DevTools):

### Mobile (< 640px)
- [ ] Single column layout
- [ ] Typography readable
- [ ] Navigation accessible
- [ ] Buttons large enough

### Tablet (640px - 1024px)
- [ ] Two column layouts working
- [ ] Spacing appropriate
- [ ] All sections visible

### Desktop (> 1024px)
- [ ] Three column grids displaying
- [ ] Full animations working smoothly
- [ ] No horizontal scrolling

---

## 🎯 Performance Checks

```bash
# Build for production
npm run build

# Check build size
du -sh .next/

# Expected: < 500MB for optimal loading
```

- [ ] Build completes without errors
- [ ] No warnings in build output
- [ ] Bundle size reasonable (< 500MB)
- [ ] Page load time < 3 seconds

---

## 🧪 Customization Tests

### Update a Project (Test Database Integration)
1. Open `prisma/seed.ts`
2. Modify one project entry
3. Run `npm run seed`
4. Refresh page at `/projects/[slug]`
5. [ ] Changes reflected on page

### Update a Section (Test Component)
1. Open `components/Hero.tsx`
2. Change text (e.g., modify skill name)
3. Save file (auto-reload should trigger)
4. Check page updates
5. [ ] Changes visible immediately

### Add New Data Point
1. Add to seed script
2. Run `npm run seed`
3. Refresh page
4. [ ] New data appears in appropriate section

---

## 🔍 Browser Console Check

Open DevTools (F12) → Console tab:

- [ ] **No red errors** (critical issues)
- [ ] **Yellow warnings acceptable** (may include depencies)
- [ ] **Network tab**: All resources load (200 status)
- [ ] **Performance**: FCP < 1.5s, LCP < 2.5s

### Common Warning (✓ Safe to Ignore):
```
Warning: baseline-browser-mapping...
```
This is informational only from a bundled dependency.

---

## 🚀 Pre-Deployment Checklist

- [ ] All content customized with your information
- [ ] No hardcoded sample data (except seed script)
- [ ] All links point to correct destinations
- [ ] Contact form tested and working
- [ ] Social media links updated
- [ ] Projects showcase your actual work
- [ ] No console errors
- [ ] Build succeeds: `npm run build`
- [ ] `.env` file excluded from git (check `.gitignore`)
- [ ] Database backups taken (if applicable)

---

## 📋 Post-Deployment Checks

After deploying to production:

- [ ] Site loads at custom domain
- [ ] All pages accessible
- [ ] API endpoints respond (may have latency)
- [ ] Database connections from production work
- [ ] Forms functional
- [ ] Analytics tracking installed (optional)
- [ ] SSL certificate valid (green lock icon)
- [ ] Performance acceptable (Lighthouse score > 80)

---

## 🆘 Troubleshooting

If something fails, check:

### Pages won't load
```bash
# 1. Check dev server is running
npm run dev

# 2. Check .env file exists
cat .env

# 3. Verify database connection
npm run seed

# 4. Clear Next.js cache
rm -rf .next
npm run dev
```

### API endpoints 404
```bash
# 1. Verify files exist
ls -la app/api/

# 2. Restart dev server
npm run dev

# 3. Check imports in route files
cat app/api/projects/route.ts | grep "import"
```

### Database issues
```bash
# 1. Validate connection
npx prisma db validate

# 2. Check Prisma client
ls -la app/generated/prisma/

# 3. Regenerate client
npx prisma generate

# 4. Re-seed
npm run seed
```

### Styling issues
```bash
# 1. Check Tailwind config
cat tailwind.config.ts

# 2. Rebuild CSS
npm run dev

# 3. Hard refresh browser (Ctrl+Shift+R)

# 4. Check globals.css imports
head -5 app/globals.css
```

---

## 📊 Expected Metrics (Development)

After running `npm run dev`:

```
✓ Ready in: 2-5 seconds
✓ Compiled /: 1-3 seconds
✓ Compiled /api/projects: < 1 second
✓ Memory usage: < 500MB
✓ Hot reload: < 1 second on file change
```

---

## 🎯 Success Criteria

Your portfolio is **fully configured** when:

1. ✅ Dev server runs without errors
2. ✅ All 7 sections visible and animated
3. ✅ All 3 API endpoints respond
4. ✅ Project detail pages load
5. ✅ Responsive design works (mobile/tablet/desktop)
6. ✅ No console errors
7. ✅ Build succeeds
8. ✅ You've customized all content

---

## 📚 Quick Links

| Action | Command |
|--------|---------|
| Start dev server | `npm run dev` |
| View database | `npx prisma studio` |
| Re-seed data | `npm run seed` |
| Build for prod | `npm run build` |
| Run production | `npm start` |
| Check types | `npx tsc --noEmit` |
| Generate Prisma | `npx prisma generate` |
| Sync database | `npx prisma db push` |

---

## ✨ Final Status

Print this when complete:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Portfolio Successfully Configured!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚀 Your portfolio is ready to:
   • Showcase your skills
   • Feature your projects
   • Display your experience
   • Impress potential employers

📝 Next Steps:
   1. Customize content with your information
   2. Add your actual projects and experiences
   3. Update social media links
   4. Deploy to production
   5. Share with the world!

💪 You've got this! Good luck! 🎉
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

**Date Verified:** _______________  
**By:** _______________  
**Environment:** Development / Production (circle one)  

---

Need help? Check `PORTFOLIO_DOCUMENTATION.md` or `QUICK_START.md`
