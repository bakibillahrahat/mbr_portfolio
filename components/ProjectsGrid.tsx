"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Sparkles,
  Zap,
  Database,
  Code2,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  slug: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
  isResearch: boolean;
  thumbnail?: string;
}

const SAMPLE_PROJECTS: Project[] = [
  {
    id: 1,
    title: "AI Communication Agent",
    description:
      "Intelligent chatbot system powered by LLMs with context awareness and multi-language support.",
    slug: "ai-communication-agent",
    technologies: ["Python", "LLM", "PostgreSQL", "FastAPI"],
    isResearch: false,
    githubLink: "https://github.com/bakibillahrahat",
  },
  {
    id: 2,
    title: "Real-time Analytics Dashboard",
    description:
      "High-performance dashboard analyzing 1M+ events daily with WebSockets and Supabase.",
    slug: "analytics-dashboard",
    technologies: ["React", "Node.js", "WebSocket", "PostgreSQL"],
    isResearch: false,
    demoLink: "https://example.com",
    githubLink: "https://github.com/bakibillahrahat",
  },
  {
    id: 3,
    title: "Distributed Cache System",
    description:
      "Multi-threaded caching layer reducing database queries by 85% using Redis patterns.",
    slug: "cache-system",
    technologies: ["Python", "Redis", "Architecture"],
    isResearch: true,
  },
  {
    id: 4,
    title: "ML Model Deployment Pipeline",
    description:
      "Automated CI/CD pipeline for deploying machine learning models with monitoring.",
    slug: "ml-pipeline",
    technologies: ["Python", "MLOps", "Docker", "PostgreSQL"],
    isResearch: true,
  },
  {
    id: 5,
    title: "E-commerce Platform",
    description:
      "Fully-featured e-commerce system with payment integration and real-time inventory.",
    slug: "ecommerce-platform",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Supabase"],
    isResearch: false,
    githubLink: "https://github.com/bakibillahrahat",
  },
  {
    id: 6,
    title: "API Rate Limiting Study",
    description:
      "Research on distributed rate limiting algorithms and their impact on API performance.",
    slug: "rate-limiting-research",
    technologies: ["Research", "Algorithms", "Performance"],
    isResearch: true,
  },
];

interface ProjectsGridProps {
  showResearch?: boolean;
}

export function ProjectsGrid({ showResearch = false }: ProjectsGridProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects = showResearch
    ? SAMPLE_PROJECTS.filter((p) => p.isResearch)
    : SAMPLE_PROJECTS.filter((p) => !p.isResearch);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case "python":
        return <Code2 className="w-4 h-4" />;
      case "postgresql":
        return <Database className="w-4 h-4" />;
      case "fastapi":
        return <Zap className="w-4 h-4" />;
      case "ai":
      case "llm":
      case "research":
      case "mlops":
        return <BookOpen className="w-4 h-4" />;
      default:
        return <Code2 className="w-4 h-4" />;
    }
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          variants={itemVariants}
          onHoverStart={() => setHoveredId(project.id)}
          onHoverEnd={() => setHoveredId(null)}
          className="group"
        >
          <Link href={`/projects/${project.slug}`}>
            <div className="project-card h-full flex flex-col">
              {/* Thumbnail placeholder */}
              <div className="w-full h-32 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 rounded-lg mb-4 flex items-center justify-center group-hover:from-violet-500/20 group-hover:to-cyan-500/20 transition-colors">
                <Sparkles className="w-12 h-12 text-violet-400/30 group-hover:text-violet-400/50 transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                {project.title}
              </h3>

              <p className="text-white/60 text-sm flex-grow leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, idx) => (
                  <div
                    key={idx}
                    className="tech-tag text-xs flex items-center gap-1"
                  >
                    {getTechIcon(tech)}
                    {tech}
                  </div>
                ))}
                {project.technologies.length > 3 && (
                  <div className="tech-tag text-xs">
                    +{project.technologies.length - 3}
                  </div>
                )}
              </div>

              {/* Links */}
              <div className="flex gap-2 pt-4 border-t border-white/10">
                <motion.a
                  href={`/projects/${project.slug}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all text-sm font-medium group/link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Details
                  <ExternalLink className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </motion.a>

                {project.githubLink && (
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                )}

                {project.demoLink && (
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    title="Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                )}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
