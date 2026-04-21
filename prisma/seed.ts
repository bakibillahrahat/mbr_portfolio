import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  try {
    console.log("🌱 Starting database seed...");

    // Create or get user
    const user = await prisma.user.upsert({
      where: { email: "bakibillahrahat@protonmail.com" },
      update: {},
      create: {
        name: "Baki Billah Rahat",
        email: "bakibillahrahat@protonmail.com",
        headline: "Backend Developer specializing in Python & PostgreSQL",
        bio: "Building scalable systems and AI-driven solutions. Passionate about clean code and infinite learning.",
      },
    });

    console.log("✓ User created/updated:", user.name);

    // Create experiences
    const experiences = await Promise.all([
      prisma.experience.upsert({
        where: { id: 1 },
        update: {},
        create: {
          userId: user.id,
          title: "Senior Backend Developer",
          company: "Tech Innovation Lab",
          startDate: new Date("2023-01-01"),
          description:
            "Built scalable microservices architecture handling 1M+ requests daily using Python and PostgreSQL. Implemented AI-powered chatbots using LLMs and designed distributed caching systems.",
          shortDescription: "Led backend architecture and AI integration",
          isCurrently: true,
        },
      }),

      prisma.experience.upsert({
        where: { id: 2 },
        update: {},
        create: {
          userId: user.id,
          title: "Full-Stack Developer",
          company: "Digital Solutions Inc.",
          startDate: new Date("2021-06-01"),
          endDate: new Date("2022-12-31"),
          description:
            "Developed end-to-end solutions with React and Node.js. Optimized database queries reducing response time by 60%. Mentored junior developers on best practices.",
          shortDescription: "Full-stack development and performance optimization",
          isCurrently: false,
        },
      }),

      prisma.experience.upsert({
        where: { id: 3 },
        update: {},
        create: {
          userId: user.id,
          title: "Junior Developer",
          company: "StartUp Ventures",
          startDate: new Date("2020-01-01"),
          endDate: new Date("2021-05-31"),
          description:
            "Built REST APIs and contributed to frontend development. Learned best practices in code quality and team collaboration.",
          shortDescription: "Early career development and learning",
          isCurrently: false,
        },
      }),
    ]);

    console.log(`✓ Created ${experiences.length} experience entries`);

    // Create education
    const education = await Promise.all([
      prisma.education.upsert({
        where: { id: 1 },
        update: {},
        create: {
          userId: user.id,
          school: "American International University-Bangladesh",
          degree: "Bachelor of Science",
          field: "Computer Science",
          startDate: new Date("2018-01-01"),
          endDate: new Date("2022-12-31"),
          gpa: "3.8/4.0",
          description:
            "Focused on software engineering, algorithms, and AI/ML. Completed capstone project on machine learning recommendation systems.",
        },
      }),

      prisma.education.upsert({
        where: { id: 2 },
        update: {},
        create: {
          userId: user.id,
          school: "Coursera & Udacity",
          degree: "Professional Certificate",
          field: "Advanced Python & Cloud Architecture",
          startDate: new Date("2022-06-01"),
          endDate: new Date("2023-06-30"),
          description: "Specialized courses in backend development and cloud services.",
        },
      }),
    ]);

    console.log(`✓ Created ${education.length} education entries`);

    // Create projects
    const projects = await Promise.all([
      prisma.project.upsert({
        where: { slug: "ai-communication-agent" },
        update: {},
        create: {
          userId: user.id,
          title: "AI Communication Agent",
          description:
            "Intelligent chatbot system powered by LLMs with context awareness and multi-language support.",
          slug: "ai-communication-agent",
          technologies: ["Python", "LLM", "PostgreSQL", "FastAPI", "Redis"],
          isResearch: false,
          demoLink: "https://example.com",
          githubLink: "https://github.com/bakibillahrahat",
          dateCompleted: new Date("2024-01-15"),
        },
      }),

      prisma.project.upsert({
        where: { slug: "analytics-dashboard" },
        update: {},
        create: {
          userId: user.id,
          title: "Real-time Analytics Dashboard",
          description:
            "High-performance dashboard analyzing 1M+ events daily with WebSockets and Supabase.",
          slug: "analytics-dashboard",
          technologies: ["React", "Node.js", "WebSocket", "PostgreSQL", "Chart.js"],
          isResearch: false,
          demoLink: "https://example.com",
          githubLink: "https://github.com/bakibillahrahat",
          dateCompleted: new Date("2023-11-20"),
        },
      }),

      prisma.project.upsert({
        where: { slug: "ecommerce-platform" },
        update: {},
        create: {
          userId: user.id,
          title: "E-commerce Platform",
          description:
            "Fully-featured e-commerce system with payment integration and real-time inventory.",
          slug: "ecommerce-platform",
          technologies: ["Next.js", "Stripe", "PostgreSQL", "Supabase", "Tailwind"],
          isResearch: false,
          githubLink: "https://github.com/bakibillahrahat",
          dateCompleted: new Date("2023-09-10"),
        },
      }),

      prisma.project.upsert({
        where: { slug: "distributed-cache-system" },
        update: {},
        create: {
          userId: user.id,
          title: "Distributed Cache System",
          description:
            "Multi-threaded caching layer reducing database queries by 85% using Redis patterns.",
          slug: "distributed-cache-system",
          technologies: ["Python", "Redis", "Architecture", "Performance"],
          isResearch: true,
          dateCompleted: new Date("2024-02-05"),
        },
      }),

      prisma.project.upsert({
        where: { slug: "ml-model-deployment" },
        update: {},
        create: {
          userId: user.id,
          title: "ML Model Deployment Pipeline",
          description:
            "Automated CI/CD pipeline for deploying machine learning models with monitoring.",
          slug: "ml-model-deployment",
          technologies: ["Python", "MLOps", "Docker", "PostgreSQL", "Kubernetes"],
          isResearch: true,
          dateCompleted: new Date("2023-08-20"),
        },
      }),

      prisma.project.upsert({
        where: { slug: "rate-limiting-research" },
        update: {},
        create: {
          userId: user.id,
          title: "API Rate Limiting Study",
          description:
            "Research on distributed rate limiting algorithms and their impact on API performance.",
          slug: "rate-limiting-research",
          technologies: ["Research", "Algorithms", "Performance Analysis"],
          isResearch: true,
          dateCompleted: new Date("2024-03-01"),
        },
      }),
    ]);

    console.log(`✓ Created ${projects.length} projects`);

    console.log("\n✅ Database seed completed successfully!");
    console.log("\nSummary:");
    console.log(`- User: ${user.name}`);
    console.log(`- Experiences: ${experiences.length}`);
    console.log(`- Education: ${education.length}`);
    console.log(`- Projects: ${projects.length}`);
  } catch (error) {
    console.error("❌ Seed failed:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
