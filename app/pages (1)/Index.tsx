"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Tab = "recent work" | "case studies" | "ux ui" | "other";

export default function Index() {
  const [activeTab, setActiveTab] = useState<Tab>("case studies");

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[680px] mx-auto">
        <div className="flex flex-col items-center gap-24">
          <div className="flex flex-col items-center gap-24 w-full">
            <LogoIcon />
            
            <div className="flex flex-col items-start gap-6 w-full">
              <h1 className="font-orbit text-2xl tracking-[0.96px] w-full">
                ADRIANA–Portfolio
              </h1>
              
              <div className="flex flex-col items-start gap-4 w-full">
                <p className="font-inter text-lg leading-[180%] tracking-[-0.18px] w-full">
                  <span className="text-black/75">
                    Centralize communications, create advance AI assistants through chat, and gain actionable insights–all while keeping your data private. AI assistants through chat, and gain actionable insights–all while keeping your
                  </span>
                  <span className="text-black"> data private.</span>
                </p>
                
                <div className="flex items-start gap-4 flex-wrap">
                  <SocialBadge label="Linkedin" />
                  <SocialBadge label="Dribbble" />
                  <SocialBadge label="##" />
                </div>
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-8 w-full border-b border-black/25">
            <TabButton 
              label="recent work" 
              active={activeTab === "recent work"} 
              onClick={() => setActiveTab("recent work")} 
            />
            <TabButton 
              label="case studies" 
              active={activeTab === "case studies"} 
              onClick={() => setActiveTab("case studies")} 
            />
            <TabButton 
              label="ux ui" 
              active={activeTab === "ux ui"} 
              onClick={() => setActiveTab("ux ui")} 
            />
            <TabButton 
              label="other" 
              active={activeTab === "other"} 
              onClick={() => setActiveTab("other")} 
            />
          </nav>

          <div className="flex flex-col gap-16 w-full">
            <CaseStudyCard
              id={1}
              title="Hobart Product Landing Page Redesign"
              tags={["UX/UI Design", "Landing Page", "2024"]}
              description="A product landing page redesign for Hobart focused on improving product clarity, visual hierarchy, and user engagement for a corded wire product."
            />
            <CaseStudyCard />
            <CaseStudyCard />
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoIcon() {
  return (
    <svg 
      width="60" 
      height="24" 
      viewBox="0 0 60 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="flex justify-center items-start gap-3"
    >
      <circle cx="12" cy="12" r="11" stroke="black" strokeOpacity="0.25" strokeWidth="2"/>
      <path d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3V21Z" fill="black" fillOpacity="0.25"/>
      <circle cx="48" cy="12" r="11" stroke="black" strokeOpacity="0.9" strokeWidth="2"/>
      <circle cx="48" cy="12" r="4" fill="black" fillOpacity="0.9"/>
      <circle cx="48" cy="5" r="2" fill="black" fillOpacity="0.9"/>
      <circle cx="48" cy="19" r="2" fill="black" fillOpacity="0.9"/>
      <circle cx="55" cy="12" r="2" fill="black" fillOpacity="0.9"/>
      <circle cx="41" cy="12" r="2" fill="black" fillOpacity="0.9"/>
      <circle cx="43" cy="7" r="2" fill="black" fillOpacity="0.9"/>
      <circle cx="53" cy="7" r="2" fill="black" fillOpacity="0.9"/>
      <circle cx="53" cy="17" r="2" fill="black" fillOpacity="0.9"/>
      <circle cx="43" cy="17" r="2" fill="black" fillOpacity="0.9"/>
    </svg>
  );
}

function SocialBadge({ label }: { label: string }) {
  return (
    <div className="flex px-2 py-1 justify-center items-center gap-2 rounded-md bg-[#ECECEC]">
      <span className="text-black/75 font-inter text-sm leading-[150%] tracking-[-0.14px]">
        {label}
      </span>
    </div>
  );
}

function TabButton({ 
  label, 
  active, 
  onClick 
}: { 
  label: string; 
  active: boolean; 
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex h-10 justify-center items-center relative ${
        active ? 'border-b border-black' : ''
      }`}
    >
      <span 
        className={`font-orbit text-sm text-center leading-[150%] tracking-[0.14px] ${
          active ? 'text-black' : 'text-black/50'
        }`}
      >
        {label}
      </span>
    </button>
  );
}

function CaseStudyCard({
  id,
  title = "Build an AI powered business without the complexity",
  tags,
  description = "Centralize communications, create advance AI assistants through chat, and gain actionable insights–all while keeping your data private.",
}: {
  id?: number;
  title?: string;
  tags?: string[];
  description?: string;
}) {
  const router = useRouter();

  const handleViewDetails = () => {
    if (id) {
      router.push(`/case-study/${id}`);
    }
  };

  return (
    <article className="flex w-full pb-16 flex-col justify-center items-start gap-6 border-b border-black/25 bg-white">
      <div className="flex flex-col items-start gap-6 w-full">
        <h2 className="font-inter text-[28px] font-semibold leading-[120%] tracking-[-0.28px] w-full">
          {title}
        </h2>

        <div className="flex flex-col items-start gap-4 w-full">
          {tags && tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="flex px-2 py-0.5 justify-center items-center gap-1 rounded-[6px] bg-[#F2F2F2]"
                >
                  <span className="font-inter text-[12px] font-semibold leading-[150%] tracking-[-0.12px] text-black/75">
                    {tag}
                  </span>
                </span>
              ))}
            </div>
          )}

          <p className="text-black/75 font-inter text-sm leading-[150%] w-full">
            {description}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start gap-6 w-full">
        <div className="flex h-[255px] justify-between items-center w-full rounded-2xl bg-[#F4F4F4]"></div>

        <div className="flex items-start gap-6 w-full flex-col sm:flex-row">
          <div className="flex flex-1 min-w-0 sm:w-auto flex-col items-start gap-2 rounded-2xl bg-[#F4F4F4]">
            <div className="flex h-[178px] w-full justify-between items-center rounded-2xl"></div>
          </div>
          <div className="flex h-[176px] flex-1 min-w-0 sm:w-auto justify-between items-center rounded-2xl bg-[#F4F4F4]"></div>
        </div>

        <button
          onClick={handleViewDetails}
          className="flex py-4 px-5 justify-center items-center gap-1 w-full rounded-lg border border-black/50 hover:bg-black/5 transition-colors"
        >
          {!id && <LockIcon />}
          <span className="text-black text-center font-inter text-sm font-semibold tracking-[0.28px] uppercase">
            {id ? "View Case Study" : "View Details"}
          </span>
        </button>
      </div>
    </article>
  );
}

function LockIcon() {
  return (
    <svg 
      width="19" 
      height="19" 
      viewBox="0 0 19 19" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-[19px] h-[19px]"
    >
      <g clipPath="url(#clip0_lock)">
        <path 
          d="M14.2513 6.33073H13.4596V4.7474C13.4596 2.5624 11.6863 0.789062 9.5013 0.789062C7.3163 0.789062 5.54297 2.5624 5.54297 4.7474V6.33073H4.7513C3.88047 6.33073 3.16797 7.04323 3.16797 7.91406V15.8307C3.16797 16.7016 3.88047 17.4141 4.7513 17.4141H14.2513C15.1221 17.4141 15.8346 16.7016 15.8346 15.8307V7.91406C15.8346 7.04323 15.1221 6.33073 14.2513 6.33073ZM7.1263 4.7474C7.1263 3.43323 8.18714 2.3724 9.5013 2.3724C10.8155 2.3724 11.8763 3.43323 11.8763 4.7474V6.33073H7.1263V4.7474ZM13.4596 15.8307H5.54297C5.10755 15.8307 4.7513 15.4745 4.7513 15.0391V8.70573C4.7513 8.27031 5.10755 7.91406 5.54297 7.91406H13.4596C13.8951 7.91406 14.2513 8.27031 14.2513 8.70573V15.0391C14.2513 15.4745 13.8951 15.8307 13.4596 15.8307ZM9.5013 13.4557C10.3721 13.4557 11.0846 12.7432 11.0846 11.8724C11.0846 11.0016 10.3721 10.2891 9.5013 10.2891C8.63047 10.2891 7.91797 11.0016 7.91797 11.8724C7.91797 12.7432 8.63047 13.4557 9.5013 13.4557Z" 
          fill="black" 
          fillOpacity="0.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_lock">
          <rect width="19" height="19" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}
