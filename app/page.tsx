"use client";

import Hero from "@/components/Hero";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Trophy,
  User,
  BriefcaseBusiness,
  ExternalLink,
  Mail
} from "lucide-react";

import {
  personalInfo,
  projects,
  socialLinks,
  experiences,
  tools,
  goals,
  achievements,
  skills,
  certificates,
  animatedBlobs
} from "@/lib/data";
import pp from "/pp.jpg";

export default function Home() {
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(new Date().toLocaleDateString())
    const timer = setInterval(() => setTime(new Date().toLocaleDateString()), 1000);
    return () => clearInterval(timer);
  }, []);

  const containerVarients = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        ease: "easeOut",
      },
    },
  };

  const itemVarients = {
    hidden: { opacity: 0 , y: 40},
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-[#0a0a0a] text-white p-4 md:py-14 font-mono overflow-hidden">
      <h1 className="text-white text-8xl font-bold">
        MD. BAKIBILLAH RAHAT | Professional Software Developer
      </h1>
    </div>
  );
}
