"use client";

import { motion, useReducedMotion } from "motion/react";

export const viewport = { once: true, margin: "-80px" };

export function useMotionSettings({
  revealY = 22,
  revealDuration = 0.62,
  hoverY = -3,
  cardHover,
} = {}) {
  const reduceMotion = useReducedMotion();

  return {
    reduceMotion,
    buttonHover: reduceMotion ? undefined : { y: hoverY, scale: 1.02 },
    buttonTap: reduceMotion ? undefined : { scale: 0.98 },
    cardHover: reduceMotion ? undefined : cardHover,
    reveal: {
      hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: revealY, scale: 0.98 },
      show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: revealDuration, ease: [0.2, 0.8, 0.2, 1] },
      },
    },
    stagger: {
      hidden: {},
      show: {
        transition: {
          staggerChildren: reduceMotion ? 0 : 0.08,
          delayChildren: reduceMotion ? 0 : 0.08,
        },
      },
    },
  };
}

export function PrimaryButton({
  as = "a",
  children,
  className = "",
  hover,
  tap,
  ...props
}) {
  const Component = as === "button" ? motion.button : motion.a;

  return (
    <Component
      className={`rounded-md bg-cyan-300 px-6 py-3 text-sm font-black text-slate-950 ${className}`}
      whileHover={hover}
      whileTap={tap}
      {...props}
    >
      {children}
    </Component>
  );
}

export function SecondaryButton({ children, className = "", hover, tap, ...props }) {
  return (
    <motion.a
      className={`rounded-md border border-white/10 bg-white/[.03] px-6 py-3 text-sm font-bold text-zinc-200 ${className}`}
      whileHover={hover}
      whileTap={tap}
      {...props}
    >
      {children}
    </motion.a>
  );
}

export function SectionIntro({ title, copy, centered = false, titleClassName, variants }) {
  return (
    <motion.div
      className={centered ? "mx-auto max-w-2xl text-center" : "mb-6 flex items-end justify-between"}
      initial="hidden"
      variants={variants}
      viewport={viewport}
      whileInView="show"
    >
      <div>
        <h2 className={titleClassName || "text-2xl font-bold tracking-normal text-zinc-100 sm:text-3xl"}>
          {title}
        </h2>
        {copy ? <p className="mt-4 text-sm leading-7 text-zinc-400">{copy}</p> : null}
      </div>
      {!centered ? (
        <div className="hidden h-px flex-1 bg-gradient-to-r from-cyan-300/30 to-transparent sm:ml-6 sm:block" />
      ) : null}
    </motion.div>
  );
}

export function StatCard({ value, label, variants, hover }) {
  return (
    <motion.article
      className="rounded-lg border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-black/20"
      variants={variants}
      whileHover={hover}
    >
      <span className="text-lg font-black text-cyan-300">#</span>
      <h3 className="mt-4 text-3xl font-black text-zinc-100">{value}</h3>
      <p className="mt-2 text-xs uppercase tracking-[0.14em] text-zinc-500">{label}</p>
    </motion.article>
  );
}

export function ProjectMetric({ value, label }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[.04] px-4 py-3">
      <p className="text-lg font-black text-zinc-100">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-zinc-500">{label}</p>
    </div>
  );
}

export function CtaCard({ title, copy, children, className = "", titleClassName, variants }) {
  return (
    <motion.section
      id="contact"
      className={`my-8 rounded-lg border border-white/10 p-8 text-center shadow-2xl shadow-cyan-950/10 sm:my-10 sm:p-12 ${className}`}
      initial="hidden"
      variants={variants}
      viewport={viewport}
      whileInView="show"
    >
      <h2 className={titleClassName || "text-3xl font-black tracking-normal text-zinc-100 sm:text-4xl"}>
        {title}
      </h2>
      {copy ? <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-400">{copy}</p> : null}
      {children}
    </motion.section>
  );
}
