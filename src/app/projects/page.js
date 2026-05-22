"use client";

import { motion } from "motion/react";
import {
  CtaCard,
  PrimaryButton,
  ProjectMetric,
  SecondaryButton,
  useMotionSettings,
  viewport,
} from "../components/ui";


const projects = [
  {
    title: "Nexus Protocol",
    label: "UI/UX CASE",
    copy:
      "A decentralized fintech aggregator built for the next-generation of institutional finance. The interface uses a tracking trading core with real-time privacy layers.",
    stats: [
      ["150%", "engagement up"],
      ["~20ms", "data latency"],
    ],
    visual: "dashboard",
  },
  {
    title: "Aether Analytics",
    label: "AI PLATFORM",
    copy:
      "Machine learning-powered predictive maintenance for enterprise fleets. Tuned to prevent, 1.7M infrastructure daily per vehicle with deep analytics.",
    stats: [
      ["Zero", "downtime incidents"],
      ["97.5%", "forecast accuracy"],
    ],
    visual: "devices",
  },
  {
    title: "Titan OS",
    label: "ENTERPRISE ERP",
    copy:
      "A custom operational operating system designed for high-scale teams. Linking HR, finance, logistics into a single, lightened command-shell interface.",
    stats: [
      ["4.2M", "daily events"],
      ["612M", "data records"],
    ],
    visual: "desktop",
    featured: true,
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

  const scan = reduceMotion
    ? {}
    : {
        x: ["-15%", "115%"],
        opacity: [0, 0.75, 0],
        transition: { duration: 3.8, repeat: Infinity, ease: "easeInOut" },
      };

  return (
    <>
        <section className="relative py-16 sm:py-20 lg:py-24">
          <motion.div
            animate={float}
            className="absolute right-6 top-20 hidden h-32 w-32 rounded-full border border-cyan-200/10 bg-cyan-300/5 blur-sm lg:block"
          />
          <motion.div
            className="max-w-4xl"
            initial="hidden"
            animate="show"
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
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              variants={reveal}
            >
              {filters.map((filter, index) => (
                <FilterButton
                  active={index === 0}
                  key={filter}
                  hover={buttonHover}
                  tap={buttonTap}
                >
                  {filter}
                </FilterButton>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <motion.section
          className="grid gap-5 lg:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger}
        >
          {projects.map((project) => (
            <ProjectCard
              hover={cardHover}
              key={project.title}
              project={project}
              scanAnimation={scan}
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

function FilterButton({ active, children, hover, tap }) {
  const colorClass = active
    ? "border-cyan-300 bg-cyan-300 text-slate-950"
    : "border-white/10 bg-white/[.03] text-zinc-300";

  return (
    <motion.button
      className={`rounded-full border px-4 py-2 text-xs font-bold ${colorClass}`}
      type="button"
      whileHover={hover}
      whileTap={tap}
    >
      {children}
    </motion.button>
  );
}

function ProjectCard({ project, variants, hover, scanAnimation }) {
  const layoutClass = project.featured ? "lg:col-span-2 lg:grid lg:grid-cols-[1.45fr_1fr]" : "";

  return (
    <motion.article
      className={`glow-card glow-card--project overflow-hidden rounded-lg border border-white/10 bg-slate-900/80 shadow-2xl shadow-black/20 ${layoutClass}`}
      variants={variants}
      whileHover={hover}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      <ProjectVisual animateScan={scanAnimation} type={project.visual} />
      <div className="flex flex-col p-6 sm:p-8">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="text-[10px] font-black uppercase tracking-[0.22em] text-violet-300">
            {project.label}
          </span>
          <span className="text-xs text-zinc-500">↗</span>
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

function ProjectVisual({ type, animateScan }) {
  if (type === "devices") {
    return (
      <div className="relative min-h-72 overflow-hidden bg-gradient-to-br from-[#071d1d] to-[#0b1018] p-8">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          className="absolute right-8 top-10 h-40 w-56 rounded-lg border border-cyan-200/20 bg-slate-950/80 p-4 shadow-2xl shadow-cyan-950/30"
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <MiniChart />
        </motion.div>
        <div className="absolute bottom-12 left-12 h-28 w-16 rounded-md border border-cyan-200/20 bg-slate-950/90 p-2">
          <MiniChart compact />
        </div>
        <motion.span
          animate={animateScan}
          className="absolute top-0 h-full w-16 rotate-12 bg-cyan-200/10 blur-md"
        />
      </div>
    );
  }

  if (type === "desktop") {
    return (
      <div className="relative min-h-80 overflow-hidden bg-gradient-to-br from-[#092523] to-[#06080d] p-8">
        <div className="absolute bottom-10 left-1/2 h-10 w-36 -translate-x-1/2 rounded-full bg-black/50 blur-xl" />
        <motion.div
          animate={{ y: [0, -6, 0] }}
          className="relative mx-auto mt-2 h-56 max-w-2xl rounded-md border border-cyan-200/20 bg-slate-950/90 p-5 shadow-2xl shadow-black/40"
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="grid h-full grid-cols-[.8fr_1.4fr_1fr] gap-4">
            <PanelLines count={7} />
            <PanelLines count={9} wide />
            <PanelLines count={6} />
          </div>
        </motion.div>
        <div className="mx-auto h-10 w-3 bg-slate-700" />
        <div className="mx-auto h-3 w-44 rounded-full bg-slate-800" />
      </div>
    );
  }

  return (
    <div className="relative min-h-72 overflow-hidden bg-gradient-to-br from-[#07151f] to-[#0d0b18] p-8">
      <motion.div
        animate={{ y: [0, -7, 0] }}
        className="relative mx-auto mt-3 h-48 max-w-xl rounded-md border border-cyan-200/20 bg-slate-950/90 p-5 shadow-2xl shadow-black/40"
        transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="grid h-full grid-cols-[1.2fr_.8fr] gap-4">
          <MiniChart />
          <PanelLines count={6} />
        </div>
      </motion.div>
      <motion.span
        animate={animateScan}
        className="absolute top-0 h-full w-16 rotate-12 bg-cyan-200/10 blur-md"
      />
    </div>
  );
}

function MiniChart({ compact = false }) {
  const bars = compact ? [36, 58, 42, 70, 54] : [46, 74, 52, 82, 64, 88, 58];

  return (
    <div className="flex h-full flex-col justify-end gap-4">
      <div className="grid gap-2">
        <span className="h-2 w-1/2 rounded-full bg-cyan-300/50" />
        <span className="h-2 w-3/4 rounded-full bg-slate-600/50" />
      </div>
      <div className="flex h-20 items-end gap-2">
        {bars.map((height, index) => (
          <span
            className="flex-1 rounded-t bg-cyan-300/50 shadow-[0_0_18px_rgba(34,211,238,.18)]"
            key={`${height}-${index}`}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
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
