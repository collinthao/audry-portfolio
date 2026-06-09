"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";

const CASE_STUDIES = {
  1: {
    tags: ["UX/UI Design", "Landing Page", "2024"],
    title: "Hobart Product Landing Page Redesign",
    heroBg: "#E8E8E8",
    metadata: {
      role: "UX/UI Designer",
      timeline: "1 Week",
      platform: "Email",
      tools: "Figma\nWireframe",
    },
    overview: "A product landing page redesign for Hobart focused on improving product clarity, visual hierarchy, and user engagement for a corded wire product.",
    problem: {
      heading: "The problem: Overcoming an under-leveraged landing page layout",
      paragraphs: [
        "The existing landing page had a dated design and confusing layout, which made the product seem less premium and obscured its key features. This led to low user engagement.",
        "The goal was to redesign the page within one week and under a $5,000 budget to improve visual clarity and product presentation, guiding users toward key actions while maintaining the existing brand tone and core content.",
      ],
    },
    role: "Led the full UX/UI redesign—focusing on layout and hierarchy—and coordinated with graphic designers and project managers to meet all business, timeline, and budget goals.",
    research: {
      heading: "Design process",
      imageLayout: "2col-2col",
      description: "The design process began by reviewing existing product and competitor pages to understand industrial marketing approaches. The focus was then shifted to creating a simplified layout that prioritized product imagery, key features, and clear calls-to-action through quick wireframe drafts.",
    },
    solution: {
      heading: "The Result: A high-impact, conversion-focused landing page",
      paragraphs: [
        "The redesign delivered a modern, visually-driven landing page that transforms product presentation. By implementing a clear visual hierarchy, bold product imagery, and strategic call-to-action placement, the new design makes the corded wire's value and key features immediately understandable, guiding users seamlessly toward the next step.",
      ],
    },
    nextStudy: 2,
  },
  2: {
    tags: ["UX/UI Design", "Email", "Newsletter", "2024"],
    title: "Redesigning a Weekly Newsletter for better Readability",
    heroBg: "#2B7DD4",
    metadata: {
      role: "UX/UI Designer",
      timeline: "6 Weeks",
      platform: "Email",
      tools: "Figma",
    },
    overview: "A refresh of ITW's weekly newsletter that modernized an outdated design system, improved product presentation, and increased the visibility of key content and promotional messaging.",
    problem: {
      heading: "The Problem: Refresh an Outdated Newsletter Experience",
      paragraphs: [
        "An aging design made the newsletter feel stale and visually crowded. Product features, headlines, and promotional content lacked the hierarchy needed to effectively capture attention and drive engagement.",
        "The goal was to modernize the experience while showcasing products more effectively and improving visibility across key content areas.",
      ],
    },
    role: "Led the full UX/UI redesign—focusing on layout and hierarchy—and coordinated with graphic designers and project managers to meet all business, timeline, and budget goals.",
    research: {
      heading: "Design process",
      imageLayout: "stacked",
      description: "The redesigned newsletter introduced a more modern visual identity, improved content hierarchy, and stronger product presentation while maintaining the existing content structure. By increasing the visibility of key content and calls to action, the experience became easier to scan and more engaging for readers.",
    },
    solution: {
      heading: "The Result: A high-impact, conversion-focused landing page",
      paragraphs: [
        "The redesigned newsletter introduced a more modern visual identity, improved content hierarchy, and stronger product presentation while maintaining the existing content structure. By increasing the visibility of key content and calls to action, the experience became easier to scan and more engaging for readers.",
        "The redesign was extremely well received by the client team, who praised the refreshed look and updated branding direction. Throughout the project, we also encouraged more engaging content strategies by sharing examples and recommendations during presentations, helping align both the design and content experience.",
        "The final newsletter contributed to increased user engagement and reinforced how thoughtful design, hierarchy, and content presentation can elevate content-heavy email experiences.",
      ],
    },
    nextStudy: 3,
  },
  3: {
    tags: ["UX/UI Design", "Job Board", "2024"],
    title: "Target Job Listing Page Redesign",
    heroBg: "#C9171E",
    metadata: {
      role: "UX/UI Designer",
      timeline: "2 Weeks",
      platform: "Web",
      tools: "Figma",
    },
    overview: "A redesign of Target's job listing experience focused on improving clarity, accessibility, and conversion for job seekers browsing open roles.",
    problem: {
      heading: "The Problem: A cluttered, hard-to-navigate job listing page",
      paragraphs: [
        "The existing job listing page presented too much information without clear hierarchy, making it difficult for users to quickly identify relevant roles and take action.",
        "The goal was to simplify the layout, improve filtering options, and create a more intuitive browsing experience that drives applications.",
      ],
    },
    role: "Led the UX/UI redesign end-to-end, from research and wireframing to final visual design and stakeholder presentations.",
    research: {
      heading: "Design process",
      imageLayout: "2col-2col",
      description: "Started with a competitive audit of leading job board experiences, followed by wireframing key layout changes to improve filtering and listing clarity. Multiple iterations were reviewed with stakeholders before final design approval.",
    },
    solution: {
      heading: "The Result: A cleaner, more conversion-focused job listing experience",
      paragraphs: [
        "The redesigned page made it significantly easier for job seekers to find relevant roles and apply. Clear visual hierarchy, improved filters, and a more scannable card layout resulted in a more engaging and effective job browsing experience.",
      ],
    },
    nextStudy: 4,
  },
};

export default function CaseStudyDetail() {
  const router = useRouter();
  const { id } = useParams();
  const studyId = parseInt(id, 10) || 1;
  const study = CASE_STUDIES[studyId] || CASE_STUDIES[1];

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <div className="mx-auto flex min-h-screen w-full max-w-[1556px] flex-col items-center gap-32 px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-[650px] flex flex-col gap-32">
          <div className="flex justify-end">
            <button
              onClick={() => router.push("/")}
              aria-label="Back"
              className={`flex items-center justify-center w-9 h-9 rounded-full border transition-colors hover:opacity-70 ${isDark ? "border-white/25 text-white" : "border-black/20 text-black"}`}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.667 8H3.333M3.333 8L8 12.667M3.333 8L8 3.333" stroke={isDark ? "white" : "black"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="w-full flex flex-col gap-10">
            {/* Tags */}
            <div className="flex items-center gap-2 flex-wrap">
              {study.tags.map((tag, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span className={`font-inter text-xs ${isDark ? "text-white/50" : "text-black/50"}`}>{tag}</span>
                  {i < study.tags.length - 1 && (
                    <span className={`font-inter text-xs ${isDark ? "text-white/25" : "text-black/25"}`}>·</span>
                  )}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className={`font-inter text-2xl sm:text-3xl lg:text-4xl font-bold leading-[120%] ${isDark ? "text-white" : "text-black"}`}>
              {study.title}
            </h1>

            {/* Hero Image */}
            <div
              className="w-full max-w-[650px] rounded-2xl overflow-hidden"
              style={{ backgroundColor: study.heroBg, minHeight: "450px" }}
            >
              <div className="w-full h-[450px]" />
            </div>

            {/* Metadata */}
            <div className={`border-t pt-5 grid grid-cols-2 sm:grid-cols-4 gap-y-5 gap-x-4 ${isDark ? "border-white/10" : "border-black/10"}`}>
              <MetadataItem label="Role" value={study.metadata.role} isDark={isDark} />
              <MetadataItem label="Timeline" value={study.metadata.timeline} isDark={isDark} />
              <MetadataItem label="Platform" value={study.metadata.platform} isDark={isDark} />
              <MetadataItem label="Tools" value={study.metadata.tools} isDark={isDark} />
            </div>

            {/* Overview */}
            <ContentSection eyebrow="OVERVIEW" heading="Overview" headingClass="text-xl sm:text-2xl" isDark={isDark}>
              <p className={`font-inter text-sm leading-[175%] ${isDark ? "text-white/65" : "text-black/65"}`}>
                {study.overview}
              </p>
            </ContentSection>

            {/* The Problem */}
            <ContentSection eyebrow="THE PROBLEM" heading={study.problem.heading} isDark={isDark}>
              <div className="flex flex-col gap-4">
                {study.problem.paragraphs.map((p, i) => (
                  <p key={i} className={`font-inter text-sm leading-[175%] ${isDark ? "text-white/65" : "text-black/65"}`}>{p}</p>
                ))}
              </div>
            </ContentSection>

            {/* My Role */}
            <ContentSection eyebrow="MY ROLE" heading="My role & collaboration" isDark={isDark}>
              <p className={`font-inter text-sm leading-[175%] ${isDark ? "text-white/65" : "text-black/65"}`}>
                {study.role}
              </p>
            </ContentSection>

            {/* Research & Discovery */}
            <ContentSection eyebrow="RESEARCH & DISCOVERY" heading={study.research.heading} isDark={isDark}>
              <div className="flex flex-col gap-4">
                {study.research.imageLayout === "2col-2col" ? (
                  <>
                    <div className="grid grid-cols-2 gap-3">
                      <PlaceholderImage height="h-[160px] sm:h-[200px]" isDark={isDark} />
                      <PlaceholderImage height="h-[160px] sm:h-[200px]" isDark={isDark} />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <PlaceholderImage height="h-[160px] sm:h-[200px]" isDark={isDark} />
                      <PlaceholderImage height="h-[160px] sm:h-[200px]" isDark={isDark} />
                    </div>
                  </>
                ) : (
                  <>
                    <PlaceholderImage height="h-[220px] sm:h-[280px]" isDark={isDark} />
                    <PlaceholderImage height="h-[220px] sm:h-[280px]" isDark={isDark} />
                  </>
                )}
                <p className={`font-inter text-sm leading-[175%] ${isDark ? "text-white/65" : "text-black/65"}`}>
                  {study.research.description}
                </p>
              </div>
            </ContentSection>

            {/* Solution */}
            <ContentSection eyebrow="SOLUTION" heading={study.solution.heading} isDark={isDark}>
              <div className="flex flex-col gap-4">
                <PlaceholderImage height="h-[260px] sm:h-[360px]" isDark={isDark} />
                {study.solution.paragraphs.map((p, i) => (
                  <p key={i} className={`font-inter text-sm leading-[175%] ${isDark ? "text-white/65" : "text-black/65"}`}>{p}</p>
                ))}
              </div>
            </ContentSection>

            {/* Bottom Navigation */}
            <div className="flex items-stretch gap-3 w-full flex-col sm:flex-row pt-2">
              <button
                onClick={() => router.push("/")}
                className={`flex py-3.5 px-5 justify-center items-center gap-2.5 flex-1 rounded-xl border transition-colors ${isDark ? "border-white/25 bg-transparent hover:bg-white/5 text-white" : "border-black/20 bg-white hover:bg-black/5 text-black"}`}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.25 9H3.75M3.75 9L9 14.25M3.75 9L9 3.75" stroke={isDark ? "white" : "black"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-inter text-xs font-semibold tracking-[0.24px] uppercase">
                  Back to Case Studies
                </span>
              </button>

              <button
                onClick={() => router.push(`/case-study/${study.nextStudy}`)}
                className="flex py-3.5 px-5 justify-center items-center gap-2.5 flex-1 rounded-xl bg-[#3A3A3A] hover:bg-[#2A2A2A] transition-colors text-white"
              >
                <span className="font-inter text-xs font-semibold tracking-[0.24px] uppercase">
                  View Next Case Study
                </span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.75 9H14.25M14.25 9L9 3.75M14.25 9L9 14.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PlaceholderImage({ height, isDark }) {
  return (
    <div className={`w-full rounded-xl ${height} ${isDark ? "bg-white/5" : "bg-[#F0F0F0]"}`} />
  );
}

function MetadataItem({ label, value, isDark }) {
  return (
    <div className="flex flex-col gap-1">
      <p className={`font-inter text-[10px] font-semibold tracking-widest uppercase ${isDark ? "text-white/40" : "text-black/40"}`}>
        {label}
      </p>
      <p className={`font-inter text-sm leading-[160%] whitespace-pre-line ${isDark ? "text-white" : "text-black"}`}>
        {value}
      </p>
    </div>
  );
}

function ContentSection({ eyebrow, heading, headingClass = "text-xl sm:text-2xl", isDark, children }) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-1.5">
        <p className={`font-inter text-[10px] font-semibold tracking-widest uppercase ${isDark ? "text-white/40" : "text-black/40"}`}>
          {eyebrow}
        </p>
        <h2 className={`font-inter ${headingClass} font-bold leading-[130%] ${isDark ? "text-white" : "text-black"}`}>
          {heading}
        </h2>
      </div>
      {children}
    </div>
  );
}
