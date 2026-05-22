"use client";

import { motion } from "motion/react";
import {
  PrimaryButton,
  SecondaryButton,
  SectionIntro,
  useMotionSettings,
  viewport,
} from "./components/ui";

const services = [
  {
    title: "Web Development",
    accent: "cyan",
    copy:
      "High-performance, scalable web architecture built with React, Next.js, and TypeScript. A full-stack craft model from frontend to backend.",
    meta: [
      "96% Core Web Vitals",
      "Custom CMS integration",
      "AI + SEO Experience",
      "Real-time data sync",
    ],
    link: "Explore full-stack",
    span: "lg:col-span-2",
  },
  {
    title: "UI/UX Design",
    accent: "violet",
    copy:
      "Human-centered interfaces that blend refined visuals with intentionally smooth flows.",
    meta: ["UI/UX design logic", "3D Prototyping", "Usability Testing"],
    link: "View designs",
  },
  {
    title: "SaaS Platforms",
    accent: "cyan",
    copy:
      "End-to-end cloud infrastructure for scalable, reliable subscription software.",
    meta: [],
    link: "SaaS Architecture",
  },
  {
    title: "ERP Systems",
    accent: "slate",
    copy:
      "Custom enterprise resource planning tools that streamline operations, data flows, and daily supervision.",
    meta: [],
    link: "Core Systems Lab",
  },
  {
    title: "Booking Systems",
    accent: "violet",
    copy:
      "Seamless scheduling engines with real-time availability, booking logic, and operational tracking.",
    meta: [],
    link: "Booking workflow",
  },
  {
    title: "Branding",
    accent: "cyan",
    copy:
      "Visual identity systems that define how your presence is made to feel lasting.",
    meta: [],
    link: "Brand lab",
    span: "md:col-span-2",
    orbit: true,
  },
  {
    title: "Motion Design",
    accent: "violet",
    copy:
      "Dynamic visual narratives and micro-interactions that bring ideas to life.",
    meta: [],
    link: "Discover",
    span: "md:col-span-2",
    reel: true,
  },
];

const lifecycle = [
  ["01", "Discovery", "Mapping objectives, constraints, and the technical direction."],
  ["02", "Architecture", "Drafting the system and interface structure for scalability."],
  ["03", "Engineering", "Refined construction cycles with immersive integration."],
  ["04", "Deployment", "Analytics, QA, optimization, and guided release flows."],
];

export default function ServicesPage() {
  const { reduceMotion, buttonHover, buttonTap, cardHover, reveal, stagger } =
    useMotionSettings({
      revealY: 24,
      revealDuration: 0.72,
      hoverY: -4,
      cardHover: {
        y: -6,
        borderColor: "rgba(103, 232, 249, .38)",
        backgroundColor: "rgba(15, 23, 42, .92)",
      },
    });

  const secondaryHover = reduceMotion
    ? undefined
    : { y: -4, borderColor: "rgba(103, 232, 249, .42)", color: "#cffafe" };

  const floatAnimation = reduceMotion
    ? {}
    : {
        y: [0, -10, 0],
        transition: { duration: 5.8, repeat: Infinity, ease: "easeInOut" },
      };

  const pulseAnimation = reduceMotion
    ? {}
    : {
        opacity: [0.2, 0.9, 0.2],
        scaleX: [0.72, 1, 0.72],
        transition: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
      };

  const orbitAnimation = reduceMotion
    ? {}
    : {
        rotate: 360,
        transition: { duration: 7, repeat: Infinity, ease: "linear" },
      };

  const nodeAnimation = reduceMotion
    ? {}
    : {
        boxShadow: [
          "0 0 0 0 rgba(103, 232, 249, .28)",
          "0 0 0 10px rgba(103, 232, 249, 0)",
          "0 0 0 0 rgba(103, 232, 249, .28)",
        ],
        transition: { duration: 3.4, repeat: Infinity, ease: "easeInOut" },
      };

  return (
    <>
        <section className="relative grid min-h-[520px] place-items-center py-16 text-center sm:py-20 lg:py-24">
          <motion.div
            animate={pulseAnimation}
            className="absolute left-1/2 top-12 h-px w-48 -translate-x-1/2 origin-center bg-cyan-300/30"
          />
          <motion.div
            animate={floatAnimation}
            className="absolute right-[12%] top-[22%] hidden h-24 w-24 rounded-full border border-cyan-200/10 bg-cyan-300/5 blur-sm lg:block"
          />
          <motion.div
            className="relative z-10 flex max-w-4xl flex-col items-center"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.span
              className="mb-6 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-200"
              variants={reveal}
            >
              Next-Gen Digital Solutions
            </motion.span>
            <motion.h1
              className="max-w-4xl text-balance text-4xl font-black leading-[1.02] tracking-normal text-zinc-100 sm:text-6xl lg:text-7xl"
              variants={reveal}
            >
              Precision Engineering for Every{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Digital Frontier.
              </span>
            </motion.h1>
            <motion.p
              className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base"
              variants={reveal}
            >
              A synthetic brand experience where precision, craft, and elite digital
              creativity build the infrastructure of tomorrow&apos;s smartest businesses.
            </motion.p>
            <motion.div
              className="mt-9 flex w-full max-w-sm flex-col gap-3 sm:flex-row sm:justify-center"
              variants={reveal}
            >
              <PrimaryButton
                className="font-bold shadow-[0_0_32px_rgba(34,211,238,.25)]"
                href="#technical-core"
                hover={buttonHover}
                tap={buttonTap}
              >
                Explore Ecosystem
              </PrimaryButton>
              <SecondaryButton
                className="bg-white/3"
                href="#lifecycle"
                hover={secondaryHover}
                tap={buttonTap}
              >
                View Methods
              </SecondaryButton>
            </motion.div>
          </motion.div>
        </section>

        <section id="technical-core" className="py-10 sm:py-14">
          <SectionIntro title="Technical Core" variants={reveal} />

          <motion.div
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={stagger}
          >
            {services.map((service) => (
              <ServiceCard
                hover={cardHover}
                key={service.title}
                orbitAnimation={orbitAnimation}
                reelAnimation={floatAnimation}
                service={service}
                variants={reveal}
              />
            ))}
          </motion.div>
        </section>

        <section id="lifecycle" className="py-16 text-center sm:py-20 lg:py-24">
          <SectionIntro
            centered
            copy="From concept to enterprise deployment, our lifecycle turns digital ambition into measurable, reliable systems."
            title="The Lifecycle"
            titleClassName="text-3xl font-black tracking-normal sm:text-4xl"
            variants={reveal}
          />

          <motion.div
            className="relative mt-12 grid gap-8 md:grid-cols-4"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={stagger}
          >
            <div className="absolute left-[12%] right-[12%] top-5 hidden h-px bg-gradient-to-r from-transparent via-cyan-200/25 to-transparent md:block" />
            {lifecycle.map(([step, title, copy]) => (
              <LifecycleStep
                animation={nodeAnimation}
                copy={copy}
                key={title}
                step={step}
                title={title}
                variants={reveal}
              />
            ))}
          </motion.div>
        </section>

        <motion.section
          id="contact"
          className="mb-16 rounded-lg border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/30 p-6 shadow-2xl shadow-cyan-950/10 sm:p-9"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={reveal}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-black tracking-normal sm:text-3xl">Ready to scale?</h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-400">
                Join the next wave of industry leaders, as one carefully engineered
                platform for 2026.
              </p>
            </div>
            <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="email">
                Enter your email
              </label>
              <input
                className="min-h-12 flex-1 rounded-md border border-white/10 bg-black/20 px-4 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-cyan-300/60"
                id="email"
                placeholder="Enter your email"
                type="email"
              />
              <motion.button
                className="min-h-12 rounded-md bg-cyan-300 px-6 text-sm font-black text-slate-950"
                type="submit"
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                Open Project
              </motion.button>
            </form>
          </div>
        </motion.section>

    </>
  );
}

function ServiceCard({ service, variants, hover, orbitAnimation, reelAnimation }) {
  return (
    <motion.article
      className={`glow-card glow-card--service min-h-56 rounded-lg border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-black/20 ${service.span || ""}`}
      variants={variants}
      whileHover={hover}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <ServiceIcon accent={service.accent} title={service.title} />
        {service.orbit ? <OrbitVisual animation={orbitAnimation} /> : null}
        {service.reel ? <ReelVisual animation={reelAnimation} /> : null}
      </div>
      <h3 className="text-xl font-bold text-zinc-100">{service.title}</h3>
      <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-400">{service.copy}</p>
      {service.meta.length ? <ServiceMeta items={service.meta} /> : null}
      <a className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-cyan-200" href="#contact">
        {service.link}
        <span className="card-arrow transition-transform">-&gt;</span>
      </a>
    </motion.article>
  );
}

function ServiceIcon({ accent, title }) {
  const accentClass = {
    cyan: "border-cyan-300/20 bg-cyan-300/10 text-cyan-200",
    slate: "border-slate-300/20 bg-slate-300/10 text-slate-200",
    violet: "border-violet-300/20 bg-violet-400/10 text-violet-200",
  }[accent];
  const initials = title
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  return (
    <div className={`grid h-9 w-9 place-items-center rounded-md border text-xs font-black ${accentClass}`}>
      {initials}
    </div>
  );
}

function ServiceMeta({ items }) {
  return (
    <ul className="mt-6 grid gap-3 text-xs text-zinc-300 sm:grid-cols-2">
      {items.map((item) => (
        <li className="flex items-center gap-2" key={item}>
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function OrbitVisual({ animation }) {
  return (
    <div className="relative h-24 w-24 shrink-0 rounded-full border border-cyan-200/20">
      <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200" />
      <motion.span
        animate={animation}
        className="absolute left-2 top-2 h-3 w-3 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,.8)]"
        style={{ transformOrigin: "42px 42px" }}
      />
    </div>
  );
}

function ReelVisual({ animation }) {
  return (
    <motion.div
      animate={animation}
      className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md bg-gradient-to-br from-violet-300/20 to-slate-900"
    >
      <span className="absolute right-3 top-3 h-5 w-8 rounded-sm border border-violet-100/30" />
      <span className="absolute bottom-0 left-0 h-1/2 w-full bg-cyan-300/5" />
    </motion.div>
  );
}

function LifecycleStep({ step, title, copy, animation, variants }) {
  return (
    <motion.div className="relative" variants={variants}>
      <motion.div
        animate={animation}
        className="mx-auto grid h-11 w-11 place-items-center rounded-full border border-cyan-200/20 bg-slate-900 text-[10px] font-black text-cyan-100"
      >
        {step}
      </motion.div>
      <h3 className="mt-5 text-lg font-bold text-zinc-100">{title}</h3>
      <p className="mx-auto mt-3 max-w-56 text-xs leading-6 text-zinc-400">{copy}</p>
    </motion.div>
  );
}
