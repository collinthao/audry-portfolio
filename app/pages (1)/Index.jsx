"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const CASE_STUDIES = [
  {
    id: 1,
    category: "UX / UI",
    title: "Hobart Triple 7 Corded Landing Page",
    bg: "#F47C3D",
    textColor: "text-black",
    buttonStyle: "dark",
  },
  {
    id: 2,
    category: "UX / UI",
    title: "ITW Email Newsletter Redesign",
    bg: "#007AC3",
    textColor: "text-white",
    buttonStyle: "light",
    outline: true,
  },
  {
    id: 3,
    category: "UX / UI",
    title: "Target Job Listing Page Redesign",
    bg: "#C00",
    textColor: "text-white",
    buttonStyle: "light",
    outline: true,
  },
  {
    id: 4,
    category: "UX / UI",
    title: "Hobart Triple 7 Corded Landing Page",
    bg: "#00704A",
    textColor: "text-white",
    buttonStyle: "light",
    outline: true,
  },
  {
    id: 5,
    category: "REDESIGN",
    title: "Hobart Triple 7 Corded Landing Page",
    bg: "#F1F1F1",
    textColor: "text-black",
    buttonStyle: "arrow-only",
    outline: true,
  },
];

export default function Index() {
  const router = useRouter();
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

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", next ? "dark" : "light");
    }
  };
  
  return (
    <div className={`min-h-screen bg-white text-black ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className="mx-auto flex min-h-screen w-full max-w-[1556px] flex-col items-center gap-32 px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex w-full max-w-[1200px] flex-col gap-8">
          <section className="mx-auto flex w-full max-w-[650px] flex-col gap-4 items-start text-left">
            <div className="flex flex-col gap-4 items-start">
              <div className="flex flex-col gap-4 items-start">
                <h1 className="font-inter text-[32px] font-semibold leading-[120%] tracking-[-0.8px] text-black dark:text-white">
                  Adriana–Portfolio
                </h1>
                <p className="w-full text-base leading-[150%] tracking-[-0.16px] text-black/75 dark:text-white/75">
                  Curious UX/UI designer who enjoys turning messy ideas into simple experiences. Passionate about learning and improving through every design.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-start gap-2">
                <Badge label="Linkedin" isDark={isDark} />
                <Badge label="Dribbble" isDark={isDark} />
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-8 items-center">
            {CASE_STUDIES.map((study) => (
              <StudyCard key={study.id} study={study} router={router} />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}

function Badge({ label, isDark }) {
  return (
    <div className={`rounded-[6px] bg-[#ECECEC] px-2 ${isDark ? "bg-white/10" : "bg-[#ECECEC]"}`}>
      <span className={`font-inter text-[12px] inline-block align-middle font-medium leading-[1.5] ${isDark ? "text-white/75" : "text-black/75"}`}>
        {label}
      </span>
    </div>
  );
}

function StudyCard({ study, router }) {
  const { id, category, title, bg, textColor, buttonStyle, outline } = study;

  const buttonClasses = buttonStyle === "dark"
    ? "bg-black text-white"
    : outline
      ? "border border-white bg-white text-black"
      : "bg-black text-white";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: id * 0.05 }}
      className="mx-auto h-[450px] w-full max-w-[650px] rounded-[24px] border border-black/25 p-8"
      style={{ backgroundColor: bg }}
    >
      <div className="flex h-full flex-col justify-between gap-10">
        <div className="flex flex-col gap-4">
          <span className={`font-inter text-[13px] font-semibold uppercase tracking-[0.26px] ${textColor}`}>
            {category}
          </span>
          <h2 className={`font-inter max-w-[480px] text-[40px] tracking-[-2.0px] font-semibold leading-[120%] ${textColor}`}>
            {title}
          </h2>
        </div>

        <div className="flex justify-end">
          {buttonStyle === "arrow-only" ? (
            <button
              onClick={() => router.push(`/case-study/${id}`)}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white hover:opacity-80 transition-opacity"
            >
              <ArrowRightIcon color="white" />
            </button>
          ) : (
            <button
              onClick={() => router.push(`/case-study/${id}`)}
              className={`flex items-center gap-2 rounded-[24px] px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.24px] transition-opacity hover:opacity-80 ${buttonClasses}`}
            >
              <span>View case study</span>
              <ArrowRightIcon color={buttonStyle === "dark" ? "white" : "black"} />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ArrowRightIcon({ color = "white" }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 12h8m0 0l-4-4m4 4l-4 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
