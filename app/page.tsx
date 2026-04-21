"use client";

import Hero from "@/components/Hero";
import { SectionContainer } from "@/components/SectionContainer";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { EducationSection } from "@/components/EducationSection";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { ContactSection } from "@/components/Contact";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Code2,
  BookOpen,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const sectionTitleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <main className="w-full min-h-screen">
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Experience Section */}
      <SectionContainer id="experience">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionTitleVariants}
          className="space-y-12"
        >
          <div className="flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-violet-400" />
            <h2 className="section-title">Professional Experience</h2>
          </div>

          <ExperienceTimeline />
        </motion.div>
      </SectionContainer>

      {/* Education Section */}
      <SectionContainer id="education">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionTitleVariants}
          className="space-y-12"
        >
          <div className="flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-green-400" />
            <h2 className="section-title">Education</h2>
          </div>

          <EducationSection />
        </motion.div>
      </SectionContainer>

      {/* Projects Section */}
      <SectionContainer id="projects">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionTitleVariants}
          className="space-y-12"
        >
          <div className="flex items-center gap-3">
            <Code2 className="w-8 h-8 text-blue-400" />
            <h2 className="section-title">Software Projects</h2>
          </div>

          <ProjectsGrid showResearch={false} />
        </motion.div>
      </SectionContainer>

      {/* Research Section */}
      <SectionContainer id="research">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionTitleVariants}
          className="space-y-12"
        >
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-pink-400" />
            <h2 className="section-title">Research & Papers</h2>
          </div>

          <p className="text-white/60 max-w-3xl">
            Exploring cutting-edge topics in computer science, from distributed
            systems to machine learning optimization. Here are my latest research
            initiatives and papers.
          </p>

          <ProjectsGrid showResearch={true} />
        </motion.div>
      </SectionContainer>

      {/* Contact Section */}
      <SectionContainer id="contact">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionTitleVariants}
          className="space-y-12"
        >
          <div className="flex items-center gap-3">
            <Mail className="w-8 h-8 text-cyan-400" />
            <h2 className="section-title">Get in Touch</h2>
          </div>

          <p className="text-white/60 max-w-2xl">
            Have an exciting opportunity or just want to chat? Feel free to reach
            out. I'm always interested in connecting with like-minded developers
            and exploring new possibilities.
          </p>

          <ContactSection />
        </motion.div>
      </SectionContainer>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
          <p>© 2024 Baki Billah Rahat. All rights reserved.</p>

          <div className="flex gap-6">
            <a
              href="#home"
              className="hover:text-white transition-colors underline-effect"
            >
              Home
            </a>
            <a
              href="#experience"
              className="hover:text-white transition-colors underline-effect"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-white transition-colors underline-effect"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-colors underline-effect"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
