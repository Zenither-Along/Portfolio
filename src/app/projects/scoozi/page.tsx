"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import ProfileBar from "@/components/hero/ProfileBar";
import Footer from "@/components/footer/Footer";

// Project data
const projectData = {
  title: "Scoozi - Artisan Café",
  subtitle: "Premium Café Experience with Dynamic Menu",
  description:
    "Scoozi - Artisan Café is a modern web application designed to elevate the digital presence of a premium café. It features an immersive user experience powered by smooth animations and glassmorphism design. The platform introduces a dynamic menu system with live category filtering, detailed food item views with dietary badges, and smart recommendations. Built with a mobile-first approach, it ensures seamless access across all devices while maintaining top-tier performance using Next.js 16.",
  image: "/2project.jpg", // Using the image from projectsData
  year: "2025",
  role: "Full-Stack Developer & UI Designer",
  duration: "3 weeks", // Estimated based on features
  features: [
    "Immersive User Experience with Framer Motion animations and scroll-reveal effects",
    "Interactive Design featuring responsive hover states and glassmorphism elements",
    "Dynamic Menu System with live category filtering (Coffee, Traditional Bodo, Light Bites)",
    "Detailed Food Item Views with high-res imagery, prices, and dietary badges",
    "Smart Recommendations suggesting related dishes",
    "Reservation System for booking tables efficiently",
    "Testimonials Carousel showcasing customer stories",
    "Responsive Gallery capturing ambiance and dishes",
    "Mobile-First Architecture ensuring seamless cross-device compatibility",
    "Performance Optimized with Next.js App Router for fast loading",
  ],
  techStack: [
    { name: "Next.js 16", category: "Framework" },
    { name: "React 19", category: "Core" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS v4", category: "Styling" },
    { name: "Framer Motion", category: "Animations" },
    { name: "Lucide React", category: "Icons" },
  ],
  liveUrl: "#", // Placeholder as none provided
  githubUrl: "#", // Placeholder as none provided
};

export default function ScooziProjectPage() {
  return (
    <>
      <ProfileBar />
      <main 
        className="min-h-screen bg-[#fafafa] flex flex-col items-center w-full"
        style={{ paddingTop: '120px', paddingBottom: '80px' }}
      >
        {/* Hero Section with Title and Project Image */}
        <section 
          className="w-full"
          style={{ maxWidth: '768px', paddingLeft: '24px', paddingRight: '24px', marginBottom: '64px' }}
        >
          {/* Title Above Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
            style={{ marginBottom: '32px' }}
          >
            <span 
              className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-gray-600 text-sm font-medium"
              style={{ marginBottom: '16px' }}
            >
              {projectData.year}
            </span>
            <h1 
              className="text-3xl md:text-5xl font-bold text-gray-900"
              style={{ marginBottom: '12px' }}
            >
              {projectData.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-500">
              {projectData.subtitle}
            </p>
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden bg-white shadow-xl"
          >
            <div className="relative w-full h-[200px] md:h-[400px]">
              <Image
                src={projectData.image}
                alt={projectData.title}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>
        </section>

        {/* Content - Single Column Centered */}
        <section 
          className="w-full"
          style={{ maxWidth: '768px', paddingLeft: '24px', paddingRight: '24px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
            {/* Project Info Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-start text-left"
              style={{ gap: '48px' }}
            >
              <div>
                <span className="text-sm text-gray-500 uppercase tracking-wide block mb-1">
                  Role
                </span>
                <p className="text-gray-900 font-medium">
                  {projectData.role}
                </p>
              </div>
              <div>
                <span className="text-sm text-gray-500 uppercase tracking-wide block mb-1">
                  Duration
                </span>
                <p className="text-gray-900 font-medium">
                  {projectData.duration}
                </p>
              </div>
              <div>
                <span className="text-sm text-gray-500 uppercase tracking-wide block mb-1">
                  Year
                </span>
                <p className="text-gray-900 font-medium">
                  {projectData.year}
                </p>
              </div>
            </motion.div>

            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-left"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Overview
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {projectData.description}
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-left">
                Key Features
              </h2>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {projectData.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" style={{ marginTop: '10px' }} />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-left"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Tech Stack
              </h2>
              <div 
                className="grid grid-cols-2 md:grid-cols-3"
                style={{ gap: '16px' }}
              >
                {projectData.techStack.map((tech, index) => {
                  // Different accent colors for each tech
                  const colors = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#06b6d4', '#ef4444'];
                  const accentColor = colors[index % colors.length];
                  
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 + index * 0.08 }}
                      className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow cursor-default"
                      style={{ 
                        borderLeft: `4px solid ${accentColor}`,
                        padding: '16px'
                      }}
                    >
                      <p className="font-semibold text-gray-900" style={{ marginBottom: '4px' }}>
                        {tech.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {tech.category}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row justify-start"
              style={{ gap: '16px', paddingTop: '32px' }}
            >
              <a
                href={projectData.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all hover:scale-105"
                style={{ padding: '16px 32px', fontSize: '16px' }}
              >
                <HiExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                View Live Project
              </a>
              <a
                href={projectData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-white text-gray-900 rounded-xl font-semibold border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all hover:scale-105"
                style={{ padding: '16px 32px', fontSize: '16px' }}
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                View Source Code
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
