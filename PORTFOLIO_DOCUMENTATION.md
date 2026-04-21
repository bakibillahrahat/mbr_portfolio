# Modern Portfolio Website - Complete Rebuild

## 🚀 Project Overview

This is a fully rebuilt, modern portfolio website showcasing expertise as a backend developer specializing in Python, PostgreSQL, and AI-driven solutions. The portfolio features a responsive single-page design with smooth animations, database-driven content, and dynamic project case studies.

## ✨ Key Features

### 1. **Modern Design**
- Animated gradient background with moving, rotating blobs
- Smooth scroll animations and section transitions
- Fully responsive design (mobile, tablet, desktop)
- Dark theme with violet and cyan accent colors
- Custom Tailwind CSS animations and components

### 2. **Dynamic Content Management**
- PostgreSQL database for all portfolio content
- Prisma ORM for type-safe database operations
- API routes for fetching data (projects, experience, education)
- Real-time data updates

### 3. **Project Showcase**
- Separate grids for Software Projects and Research Papers
- Project cards with technology tags
- Individual project detail pages with case studies
- MDX support for rich content and code blocks

### 4. **Professional Sections**
- **Hero Section**: Eye-catching introduction with core skills
- **Experience Timeline**: Vertical timeline of professional background
- **Education**: Educational history with GPA and descriptions
- **Projects**: Showcase of both software projects and research
- **Contact**: Contact form and social media links
- **Footer**: Navigation and copyright

## 🏗️ Technology Stack

### Frontend
- **Next.js 16** with App Router
- **React 19** for UI components
- **Tailwind CSS 4** for styling
- **Framer Motion** for animations
- **Lucide React** for icons

### Backend & Database
- **Prisma 6.19** ORM
- **PostgreSQL** (via Supabase)
- **TypeScript** for type safety

### Content & MDX
- **@next/mdx** for MDX integration
- **next-mdx-remote** for MDX rendering
- **gray-matter** for frontmatter parsing

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ and npm
- PostgreSQL database (local or Supabase)

### Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment variables**
   
   Create a `.env` file with:
   ```
   DATABASE_URL=your_postgresql_connection_string
   DIRECT_URL=your_direct_postgresql_connection_string
   ```

3. **Setup database**
   ```bash
   npx prisma db push
   npx prisma generate
   npm run seed
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 📁 Project Structure

```
mbr_portfolio/
├── app/
│   ├── api/                    # API routes
│   │   ├── projects/           # GET /api/projects
│   │   ├── experience/         # GET /api/experience
│   │   └── education/          # GET /api/education
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.tsx        # Dynamic project detail page
│   ├── globals.css             # Global styles and animations
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Main portfolio page
│   └── generated/
│       └── prisma/             # Generated Prisma client
├── components/
│   ├── Hero.tsx                # Hero section
│   ├── ExperienceTimeline.tsx   # Experience section
│   ├── EducationSection.tsx     # Education section
│   ├── ProjectsGrid.tsx         # Projects grid display
│   ├── Contact.tsx              # Contact form
│   ├── SectionContainer.tsx     # Reusable section wrapper
│   ├── AnimatedBackground.tsx   # Animated gradient blobs
│   └── ui/                      # UI components
├── lib/
│   ├── mdx.ts                  # MDX processing utilities
│   └── data.ts                 # Sample data
├── prisma/
│   ├── schema.prisma           # Database schema
│   └── seed.ts                 # Database seeding script
├── public/                     # Static assets
├── next.config.ts              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── package.json
```

## 📊 Database Schema

### Models

1. **User Model**
   - Represents the portfolio owner
   - Stores name, email, headline, bio, and avatar URL
   - Relations: experiences, projects, education

2. **Experience Model**
   - Job positions and professional background
   - Fields: title, company, dates, description, isCurrently

3. **Education Model**
   - Educational background
   - Fields: school, degree, field, dates, GPA, description

4. **Project Model**
   - Software projects and research papers
   - Fields: title, description, slug, technologies, links, isResearch
   - Unique slug for dynamic routing

5. **Certification Model**
   - Professional certifications
   - Fields: name, issuer, date, credential URL

## 🎨 Customization Guide

### Update Portfolio Content

1. **Direct Database Updates**
   - Edit the seed script in `prisma/seed.ts`
   - Run `npm run seed` to update

2. **Via API / Admin Panel**
   - Create admin routes to manage content
   - POST/PUT/DELETE endpoints (to be implemented)

### Modify Design

1. **Colors**: Update color schemes in `app/globals.css`
2. **Animations**: Modify animation durations in component files
3. **Fonts**: Change fonts in `app/layout.tsx`
4. **Responsive Breakpoints**: Update Tailwind classes in components

### Add New Project

1. Update database:
   ```sql
   INSERT INTO "Project" (userId, title, description, slug, technologies, isResearch)
   VALUES (1, 'New Project', 'Description...', 'new-project', '["Tech1", "Tech2"]', false);
   ```

2. Create detail page in `app/projects/[slug]/page.tsx`

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Other Platforms
1. Build: `npm run build`
2. Start: `npm start`
3. Environment variables as in .env

## 📝 Content Sections

### Hero Section
- Introduction with animated gradient text
- Core skills display
- Call-to-action buttons
- Social media links

### Experience Timeline
- Vertical timeline design
- Current/past employment
- Rich descriptions
- Visual hierarchy

### Education Section
- Grid layout for institutions
- Degree, field, and dates
- GPA display
- Educational descriptions

### Projects Grid
- Filter between projects and research
- Technology tags
- Links to demos and GitHub
- Card-based layout

### Project Details (Dynamic Routes)
- Case study format
- Three main sections:
  1. What problem I solved
  2. How I solved it
  3. Challenges I faced
- Code examples and technical breakdowns
- Links to demo and repository

### Contact Section
- Contact information cards
- Email, LinkedIn, GitHub links
- Contact form
- Success/error feedback

## 🔧 API Endpoints

### Get All Projects
```
GET /api/projects?isResearch=false
```

### Get All Experience
```
GET /api/experience
```

### Get All Education
```
GET /api/education
```

## 🎯 Performance Optimizations

1. **Image Optimization**: Next.js Image component (ready to use)
2. **Code Splitting**: Automatic route-based splitting
3. **Caching**: Optimized database queries
4. **Animations**: GPU-accelerated transitions
5. **SEO**: Metadata and open graph tags

## 📱 Responsive Design

- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

All sections adapt seamlessly across screen sizes.

## 🔐 Security Considerations

1. Environment variables for sensitive data
2. Database connection pooling
3. Input validation on forms
4. CORS-enabled API routes (if needed)

## 📚 MDX Features

The project supports rich content in case studies:

- **Markdown**: Headers, lists, emphasis
- **Code Blocks**: Syntax highlighting
- **Custom Components**: React components in content
- **Frontmatter**: Metadata for each project

Example MDX:
```mdx
---
title: Project Name
date: 2024-01-01
---

## Problem

# Solution

\`\`\`python
# Code example
\`\`\`
```

## 🚦 Next Steps

1. **Add Authentication**: Implement admin panel
2. **Add CMS**: Integrate headless CMS for content management
3. **Add Comments**: Enable blog comment discussions
4. **Add Analytics**: Integrate analytics tracking
5. **Add Newsletter**: Email subscription feature
6. **Add Search**: Site-wide search functionality

## 📞 Support & Contact

For questions or issues, refer to the contact section on the website or check the GitHub repository.

## 📄 License

This project is personal and proprietary.

---

**Built with ❤️ by Baki Billah Rahat**
