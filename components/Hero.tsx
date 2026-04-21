"use client";

import { motion, Variants } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowRight,
  Code2,
  Sparkles,
  Zap,
  Database,
  BookOpen,
} from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const stagger: Variants = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/bakibillahrahat",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/bakibillahrahat/",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://twitter.com/mbrcoder", label: "Twitter" },
    {
      icon: Mail,
      href: "mailto:bakibillahrahat@protonmail.com",
      label: "Email",
    },
  ];

  const skills = [
    { name: "Python", icon: Code2, color: "from-yellow-500 to-orange-500" },
    {
      name: "PostgreSQL",
      icon: Database,
      color: "from-blue-500 to-cyan-500",
    },
    { name: "Supabase", icon: Zap, color: "from-green-500 to-emerald-500" },
    {
      name: "AI/ML",
      icon: Sparkles,
      color: "from-violet-500 to-pink-500",
    },
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-8 py-20">
      {/* Main Hero Content */}
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-8"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {/* Badge */}
        <motion.div variants={fadeInUp} className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-white/80">
              Backend Developer & AI Specialist
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={fadeInUp} className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text animate-pulse">Baki Billah</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 font-light">
            Crafting robust backend solutions and AI-driven systems
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed"
        >
          I specialize in building scalable backend architectures with{" "}
          <span className="text-white/80">Python</span> and{" "}
          <span className="text-white/80">PostgreSQL</span>, creating
          communication agents powered by{" "}
          <span className="text-white/80">AI/ML</span>, and leveraging
          <span className="text-white/80"> Supabase</span> for rapid development.
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-4 pt-4"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.button
                key={skill.name}
                className="relative group"
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`px-4 py-2 rounded-lg bg-gradient-to-r ${skill.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                <div className="absolute inset-0 px-4 py-2 rounded-lg flex items-center gap-2 text-white font-semibold">
                  <Icon className="w-4 h-4" />
                  {skill.name}
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
        >
          <motion.a
            href="#projects"
            className="gradient-btn group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="#contact"
            className="secondary-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={fadeInUp}
          className="flex justify-center gap-6 pt-12"
        >
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title={link.label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2 hover:border-white/40 transition-colors cursor-pointer">
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}