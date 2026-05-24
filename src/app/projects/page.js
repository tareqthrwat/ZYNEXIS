"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  CtaCard,
  PrimaryButton,
  ProjectMetric,
  SecondaryButton,
  useMotionSettings,
  viewport,
} from "../components/ui";
import projectOne from "./pohot/Screenshot from 2026-05-22 02-11-01.png";
import projectTwo from "./pohot/Screenshot from 2026-05-22 02-11-55.png";
import projectThree from "./pohot/Screenshot from 2026-05-22 02-12-58.png";
import projectFour from "./pohot/Screenshot from 2026-05-22 02-13-44.png";
import projectFive from "./pohot/Screenshot from 2026-05-22 02-18-05.png";
import projectSix from "./pohot/Screenshot from 2026-05-22 02-37-14.png";

const projects = [
  {
    title: "Nexus Protocol",
    label: "WEB EXPERIENCE",
    copy:
      "A high-polish digital interface with strong hierarchy, responsive sections, and a sharp conversion path.",
    image: projectOne,
    stats: [
      ["01", "screen"],
      ["UI", "delivery"],
    ],
  },
  {
    title: "Aether Analytics",
    label: "AI PLATFORM",
    copy:
      "A product presentation built around focused storytelling, compact content blocks, and crisp visual rhythm.",
    image: projectTwo,
    stats: [
      ["02", "screen"],
      ["UX", "system"],
    ],
  },
  {
    title: "Titan OS",
    label: "ENTERPRISE ERP",
    copy:
      "A broad desktop layout designed for technical buyers, with dense information presented in a clean flow.",
    image: projectThree,
    stats: [
      ["03", "screen"],
      ["Web", "build"],
    ],
    featured: true,
  },
  {
    title: "Quantum Studio",
    label: "CREATIVE SITE",
    copy:
      "A visual-first build that keeps the brand in front while preserving fast scanning and clear navigation.",
    image: projectFour,
    stats: [
      ["04", "screen"],
      ["Brand", "site"],
    ],
  },
  {
    title: "Helio Grid",
    label: "SAAS INTERFACE",
    copy:
      "An application-style surface with practical sections, polished spacing, and a dashboard-ready composition.",
    image: projectFive,
    stats: [
      ["05", "screen"],
      ["SaaS", "layout"],
    ],
  },
  {
    title: "Vector Labs",
    label: "PRODUCT SYSTEM",
    copy:
      "A refined product page direction with confident imagery, concise messaging, and strong presentation detail.",
    image: projectSix,
    stats: [
      ["06", "screen"],
      ["Case", "study"],
    ],
  },
];

export default function ProjectsPage() {
  const { reduceMotion, buttonHover, buttonTap, cardHover, reveal, stagger } =
    useMotionSettings({
      cardHover: {
        y: -6,
        borderColor: "rgba(34, 211, 238, .45)",
        boxShadow: "0 24px 70px rgba(8, 145, 178, .16)",
      },
    });

  const secondaryHover = reduceMotion
    ? undefined
    : { y: -3, borderColor: "rgba(34, 211, 238, .42)", color: "#cffafe" };

  const float = reduceMotion
    ? {}
    : {
        y: [0, -8, 0],
        transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
      };

  return (
    <>
      <section className="relative py-16 sm:py-20 lg:py-24">
        <motion.div
          animate={float}
          className="absolute right-6 top-20 hidden h-32 w-32 rounded-full border border-cyan-200/10 bg-cyan-300/5 blur-sm lg:block"
        />
        <motion.div
          animate="show"
          className="max-w-4xl"
          initial="hidden"
          variants={stagger}
        >
          <motion.span
            className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-cyan-200"
            variants={reveal}
          >
            Our Case Studies
          </motion.span>
          <motion.h1
            className="mt-7 max-w-3xl text-balance text-4xl font-black leading-[1.02] tracking-normal text-zinc-100 sm:text-6xl lg:text-7xl"
            variants={reveal}
          >
            Engineering the Future Interface.
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base"
            variants={reveal}
          >
            A curated selection of high-performance digital ecosystems, spanning from
            decentralized protocols to enterprise-grade AI solutions.
          </motion.p>
        </motion.div>
      </section>

      <motion.section
        className="grid gap-5 lg:grid-cols-2"
        initial="hidden"
        variants={stagger}
        viewport={viewport}
        whileInView="show"
      >
        {projects.map((project) => (
          <ProjectCard
            hover={cardHover}
            key={project.title}
            project={project}
            variants={reveal}
          />
        ))}
      </motion.section>

      <CtaCard
        className="bg-gradient-to-br from-slate-800/90 via-slate-950 to-slate-900"
        copy="If a world-class operating core is in your 2026 roadmap, let's discuss how we can engineer your vision into an irreplaceable thesis."
        title={
          <>
            Ready to build your <span className="text-cyan-200">Masterpiece?</span>
          </>
        }
        titleClassName="text-3xl font-black tracking-normal sm:text-4xl"
        variants={reveal}
      >
        <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3 sm:flex-row sm:justify-center">
          <PrimaryButton href="#contact" hover={buttonHover} tap={buttonTap}>
            Start a Project
          </PrimaryButton>
          <SecondaryButton
            className="border-white/15 font-black"
            href="#contact"
            hover={secondaryHover}
            tap={buttonTap}
          >
            Schedule a Call
          </SecondaryButton>
        </div>
      </CtaCard>
    </>
  );
}

function ProjectCard({ project, variants, hover }) {
  const layoutClass = project.featured ? "lg:col-span-2 lg:grid lg:grid-cols-[1.25fr_1fr]" : "";

  return (
    <motion.article
      className={`glow-card glow-card--project overflow-hidden rounded-lg border border-white/10 bg-slate-900/80 shadow-2xl shadow-black/20 ${layoutClass}`}
      transition={{ duration: 0.28, ease: "easeOut" }}
      variants={variants}
      whileHover={hover}
    >
      <div className="relative min-h-72 overflow-hidden bg-slate-950">
        <Image
          alt={`${project.title} project screenshot`}
          className="object-cover"
          fill
          placeholder="blur"
          sizes={
            project.featured
              ? "(max-width: 1024px) 100vw, 58vw"
              : "(max-width: 1024px) 100vw, 50vw"
          }
          src={project.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
      </div>
      <div className="flex flex-col p-6 sm:p-8">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="text-[10px] font-black uppercase tracking-[0.22em] text-violet-300">
            {project.label}
          </span>
          <span className="text-xs text-zinc-500">-&gt;</span>
        </div>
        <h2 className="text-2xl font-black tracking-normal text-zinc-100">{project.title}</h2>
        <p className="mt-4 text-sm leading-7 text-zinc-400">{project.copy}</p>
        <div className="mt-8 grid grid-cols-2 gap-3">
          {project.stats.map(([value, label]) => (
            <ProjectMetric key={value} label={label} value={value} />
          ))}
        </div>
        {project.featured ? (
          <a className="mt-auto pt-8 text-sm font-bold text-cyan-200" href="#contact">
            Visit Project Study -&gt;
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}

function PanelLines({ count, wide = false }) {
  return (
    <div className="grid content-start gap-3 rounded border border-white/5 bg-white/[.03] p-3">
      {Array.from({ length: count }).map((_, index) => (
        <span
          className="h-2 rounded-full bg-cyan-300/20"
          key={index}
          style={{ width: wide && index % 3 === 0 ? "92%" : `${44 + ((index * 17) % 45)}%` }}
        />
      ))}
    </div>
  );
}
