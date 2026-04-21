# MBR Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Prisma. Showcases education, experience, and projects with a dynamic database backend.

## Features

- **Modern Design**: Animated background with smooth transitions and responsive layout
- **Dynamic Content**: API routes to fetch education, experience, and projects data
- **Database-Driven**: Prisma ORM with SQLite for managing portfolio content
- **MDX Support**: Write project descriptions using Markdown and React components
- **Type-Safe**: Full TypeScript support for better development experience
- **Mobile Responsive**: Optimized for all device sizes with Tailwind CSS
- **SEO Optimized**: Next.js meta tags and structured data support

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + PostCSS
- **Database**: SQLite with Prisma ORM
- **Content**: MDX for rich text content
- **Deployment**: Vercel-ready

## Project Structure

```
├── app/
│   ├── api/              # API routes for education, experience, projects
│   ├── projects/         # Dynamic project detail pages
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/           # Reusable React components
│   ├── Hero.tsx
│   ├── ExperienceTimeline.tsx
│   ├── EducationSection.tsx
│   ├── ProjectsGrid.tsx
│   └── ui/              # UI components
├── lib/
│   ├── data.ts          # Data utilities
│   └── mdx.tsx          # MDX configuration
├── prisma/
│   ├── schema.prisma    # Database schema
│   └── seed.ts          # Database seeding script
└── public/              # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bakibillahrahat/mbr_portfolio.git
cd mbr_portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up the database:
```bash
npx prisma migrate dev
npx prisma db seed
```

4. Create `.env.local` file (if needed):
```env
DATABASE_URL="file:./dev.db"
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result. The page auto-refreshes when you edit files.

### Build

Create an optimized production build:
```bash
npm run build
npm run start
```

### Database

- **Migrate**: `npx prisma migrate dev` - Create and apply new migrations
- **Studio**: `npx prisma studio` - Open Prisma Studio to manage data
- **Seed**: `npx prisma db seed` - Populate database with sample data

## API Routes

- `GET /api/education` - Fetch all education entries
- `GET /api/experience` - Fetch all experience entries
- `GET /api/projects` - Fetch all projects

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure build settings
4. Deploy with a single click

For manual deployment, build and start the production server:
```bash
npm run build
npm run start
```

## Development Tips

- Edit components in `/components` to update the UI
- Update portfolio data in `/lib/data.ts` or through the database
- Use `npx prisma studio` for visual database management
- Check `/prisma/schema.prisma` for database structure

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## License

This project is open source and available under the MIT License.
