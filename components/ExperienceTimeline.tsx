"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: string;
  isCurrently: boolean;
}

const SAMPLE_EXPERIENCES: ExperienceItem[] = [
  {
    id: 1,
    title: "Senior Backend Developer",
    company: "Tech Innovation Lab",
    startDate: "Jan 2023",
    description:
      "Built scalable microservices architecture handling 1M+ requests daily using Python and PostgreSQL. Implemented AI-powered chatbots using LLMs.",
    isCurrently: true,
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    company: "Digital Solutions Inc.",
    startDate: "Jun 2021",
    endDate: "Dec 2022",
    description:
      "Developed end-to-end solutions with React and Node.js. Optimized database queries reducing response time by 60%.",
    isCurrently: false,
  },
  {
    id: 3,
    title: "Junior Developer",
    company: "StartUp Ventures",
    startDate: "Jan 2020",
    endDate: "May 2021",
    description:
      "Built REST APIs and contributed to frontend development. Learned best practices in code quality and team collaboration.",
    isCurrently: false,
  },
];

export function ExperienceTimeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {SAMPLE_EXPERIENCES.map((exp, index) => (
        <motion.div key={exp.id} variants={itemVariants} className="relative">
          {/* Timeline Line */}
          {index !== SAMPLE_EXPERIENCES.length - 1 && (
            <div className="absolute left-[15px] top-12 w-0.5 h-24 bg-gradient-to-b from-violet-500/50 to-transparent" />
          )}

          {/* Card */}
          <div className="experience-card">
            {/* Header */}
            <div className="flex items-start gap-4">
              <div className="mt-1 p-2 rounded-lg bg-violet-500/20">
                <Briefcase className="w-5 h-5 text-violet-400" />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-violet-400 font-medium">{exp.company}</p>
                  </div>

                  {exp.isCurrently && (
                    <div className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/50">
                      <span className="text-xs font-semibold text-green-300">
                        Current
                      </span>
                    </div>
                  )}
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-white/50 text-sm mt-2">
                  <Calendar className="w-4 h-4" />
                  {exp.startDate} {exp.endDate && `- ${exp.endDate}`}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="mt-4 text-white/70 leading-relaxed pl-12">
              {exp.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
