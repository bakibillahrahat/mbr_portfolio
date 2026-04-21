import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baki Billah Rahat | Backend Developer & AI Specialist",
  description:
    "Backend Developer specializing in Python, PostgreSQL, and AI-driven communication agents. Explore my portfolio and latest projects.",
  keywords: [
    "Backend Developer",
    "Python",
    "PostgreSQL",
    "AI",
    "Supabase",
    "Full-stack",
  ],
  authors: [{ name: "Baki Billah Rahat" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mbr-portfolio.vercel.app",
    title: "Baki Billah Rahat | Backend Developer & AI Specialist",
    description:
      "Backend Developer specializing in Python, PostgreSQL, and AI-driven communication agents.",
    siteName: "MBR Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a]`}
      >
        <AnimatedBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
