"use client";

import { motion, Variants } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowRight, Code2, Sparkles, Wrench } from "lucide-react";

export default function Home() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const stagger: Variants = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/bakibillahrahat", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/bakibillahrahat/", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/mbrcoder", label: "Twitter" },
    { icon: Mail, href: "mailto:bakibillahrahat@protonmail.com", label: "Email" }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a] text-white overflow-hidden">
      {/* Animated background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main content */}
      <motion.div 
        className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {/* Under Construction Notice */}
        <motion.div 
          className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 rounded-full bg-yellow-500/10 border border-yellow-500/30 backdrop-blur-sm"
          variants={fadeInUp}
        >
          <Wrench className="w-4 h-4 text-yellow-400" />
          <span className="text-sm text-yellow-300 font-medium">Under Construction - Main Version Coming Soon</span>
        </motion.div>

        {/* Badge */}
        {/* <motion.div 
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
          variants={fadeInUp}
        >
          <Sparkles className="w-4 h-4 text-violet-400" />
          <span className="text-sm text-white/80">Available for new opportunities</span>
        </motion.div> */}

        {/* Main heading */}
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-linear-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent leading-tight"
          variants={fadeInUp}
        >
          MD. Bakibillah Rahat
        </motion.h1>

        {/* Subtitle */}
        <motion.div 
          className="flex items-center justify-center gap-3 mb-8"
          variants={fadeInUp}
        >
          <Code2 className="w-6 h-6 text-violet-400" />
          <h2 className="text-xl md:text-2xl text-white/70 font-light">
            Professional Software Developer
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p 
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
          variants={fadeInUp}
        >
          Crafting elegant solutions through clean code and thoughtful design. 
          Specialized in building modern web applications that make a difference.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
          variants={fadeInUp}
        >
          <a
            href="#contact"
            className="group px-8 py-4 bg-linear-to-r from-violet-600 to-cyan-600 rounded-full font-semibold hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300 flex items-center gap-2"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#projects"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-semibold backdrop-blur-sm transition-all duration-300"
          >
            View My Work
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex items-center justify-center gap-6"
          variants={fadeInUp}
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
