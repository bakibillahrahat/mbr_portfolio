"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

interface EducationItem {
  id: number;
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
}

const SAMPLE_EDUCATION: EducationItem[] = [
  {
    id: 1,
    school: "American International University-Bangladesh",
    degree: "Bachelor of Science",
    field: "Computer Science",
    startDate: "2018",
    endDate: "2022",
    gpa: "3.8/4.0",
    description:
      "Focused on software engineering, algorithms, and AI/ML. Completed capstone project on machine learning.",
  },
  {
    id: 2,
    school: "Online Learning Platform",
    degree: "Professional Certificate",
    field: "Advanced Python & Cloud Architecture",
    startDate: "2022",
    endDate: "2023",
    description: "Specialized courses in backend development and cloud services.",
  },
];

export function EducationSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {SAMPLE_EDUCATION.map((edu) => (
        <motion.div
          key={edu.id}
          variants={itemVariants}
          className="card card-violet group p-6 transition-all hover:shadow-xl"
        >
          {/* Icon */}
          <div className="p-3 rounded-lg bg-violet-500/20 group-hover:bg-violet-500/30 w-fit mb-4 transition-colors">
            {edu.degree.includes("Certificate") ? (
              <Award className="w-6 h-6 text-violet-400" />
            ) : (
              <GraduationCap className="w-6 h-6 text-violet-400" />
            )}
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold text-white mb-1">{edu.school}</h3>

          <div className="space-y-2 mb-4">
            <p className="text-violet-400 font-semibold">{edu.degree}</p>
            <p className="text-white/70">{edu.field}</p>

            {edu.gpa && (
              <p className="text-sm text-white/50 font-mono">GPA: {edu.gpa}</p>
            )}
          </div>

          {/* Date */}
          <div className="flex items-center gap-2 text-white/50 text-sm mb-3">
            <Calendar className="w-4 h-4" />
            {edu.startDate} - {edu.endDate}
          </div>

          {/* Description */}
          {edu.description && (
            <p className="text-white/60 text-sm leading-relaxed">
              {edu.description}
            </p>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
