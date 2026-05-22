"use client";

import { motion } from "motion/react";
import {
  CtaCard,
  PrimaryButton,
  StatCard,
  useMotionSettings,
  viewport,
} from "../components/ui";

const stats = [
  ["50+", "Successful builds in 2025"],
  ["100M+", "Users per month"],
  ["Global", "Remote-ready"],
];

const architects = [
  ["Marcus Thorne", "Lead Architect"],
  ["Elena Voss", "Experience Director"],
  ["Julian Chen", "AI Systems Engineer"],
  ["Sarah Knox", "Product Strategist"],
];

const culture = [
  [
    "Focused Approach",
    "We work with high-intensity clarity, turning vague ideas into exact technical direction and visible progress.",
  ],
  [
    "Zero Friction Delivery",
    "Every handoff, workflow, and launch path is designed to keep momentum strong and decisions clean.",
  ],
  [
    "Technical Rigor",
    "Our engineering standards protect performance, accessibility, maintainability, and long-term scale.",
  ],
  [
    "Design Intelligence",
    "Design decisions are shaped by research, product logic, and the emotional quality of the interface.",
  ],
];

export default function TeemPage() {
  const { reduceMotion, buttonHover, buttonTap, cardHover, reveal, stagger } =
    useMotionSettings({
      cardHover: {
        y: -6,
        borderColor: "rgba(103, 232, 249, .42)",
        boxShadow: "0 24px 70px rgba(8, 145, 178, .13)",
      },
    });

  const scan = reduceMotion
    ? {}
    : {
        x: ["-20%", "120%"],
        opacity: [0, 0.55, 0],
        transition: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
      };

  return (
    <>
        <section className="relative grid min-h-[430px] place-items-center py-16 text-center sm:py-20 lg:py-24">
          <div className="absolute inset-x-[-1rem] top-0 h-full overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,.12),transparent_34rem)]">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[length:88px_88px] opacity-20" />
            <motion.span
              animate={scan}
              className="absolute top-0 h-full w-32 rotate-12 bg-cyan-200/10 blur-xl"
            />
          </div>

          <motion.div
            className="relative z-10 flex max-w-4xl flex-col items-center"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.span
              className="text-[10px] font-black uppercase tracking-[0.26em] text-cyan-200"
              variants={reveal}
            >
              Meet the minds
            </motion.span>
            <motion.h1
              className="mt-5 max-w-4xl text-balance text-4xl font-black leading-[1.03] tracking-normal text-zinc-100 sm:text-6xl"
              variants={reveal}
            >
              Engineered for the Future.
              <br />
              <span className="bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Built by Humans.
              </span>
            </motion.h1>
            <motion.p
              className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base"
              variants={reveal}
            >
              We are a high-fidelity studio specializing in technology that is
              smooth, secure, and emotionally intelligent, formed for the next
              generation of industry leaders.
            </motion.p>
          </motion.div>
        </section>

        <section className="grid gap-8 py-12 lg:grid-cols-[.8fr_1.4fr] lg:items-start">
          <motion.h2
            className="text-2xl font-black tracking-normal text-zinc-100"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={reveal}
          >
            Our Mission
          </motion.h2>
          <motion.div
            className="rounded-lg border border-white/10 bg-white/[.03] p-6 text-sm leading-7 text-zinc-400 sm:p-8"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={reveal}
          >
            <p>
              Zynexis was founded on the belief that the highest-value digital
              systems are engineered with human-centered insight, airtight
              technical logic, and hard-earned craftsmanship.
            </p>
            <p className="mt-4">
              By combining aerospace-grade systems design with interactive
              narrative principles, we create environments that turn business
              needs into clean, reliable, and memorable digital realities.
            </p>
          </motion.div>
        </section>

        <motion.section
          className="grid gap-4 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger}
        >
          {stats.map(([value, label]) => (
            <StatCard
              hover={cardHover}
              key={value}
              label={label}
              value={value}
              variants={reveal}
            />
          ))}
        </motion.section>

        <section className="py-14 sm:py-16">
          <motion.div
            className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={reveal}
          >
            <h2 className="text-2xl font-black tracking-normal text-zinc-100">
              The Architects
            </h2>
            <p className="max-w-xs text-xs leading-5 text-zinc-500 sm:text-right">
              A deliberately compact team of senior builders, strategists, and
              systems thinkers.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          variants={stagger}
        >
          {architects.map(([name, role], index) => (
            <ArchitectCard
              hover={cardHover}
              index={index}
              key={name}
              name={name}
              role={role}
              variants={reveal}
            />
          ))}
          </motion.div>
        </section>

        <motion.section
          className="mx-[-1rem] bg-white/[.035] px-4 py-14 sm:mx-[-1.5rem] sm:px-6 lg:mx-[-2rem] lg:px-8"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger}
        >
          <motion.div className="mx-auto max-w-3xl text-center" variants={reveal}>
            <h2 className="text-3xl font-black tracking-normal text-zinc-100">
              Our Studio Culture
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Operating at the intersection of software, technical precision,
              and high-fidelity creative systems.
            </p>
          </motion.div>

          <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-2">
            {culture.map(([title, copy]) => (
              <CultureCard
                copy={copy}
                hover={cardHover}
                key={title}
                title={title}
                variants={reveal}
              />
            ))}
          </div>
        </motion.section>

        <CtaCard
          className="bg-gradient-to-br from-slate-900 via-[#0b1110] to-black"
          title={
            <>
              Ready to engineer your next
              <br className="hidden sm:block" /> technological milestone?
            </>
          }
          titleClassName="text-3xl font-black tracking-normal text-zinc-100"
          variants={reveal}
        >
          <PrimaryButton
            className="mt-8 inline-flex bg-cyan-100 px-8 shadow-[0_0_32px_rgba(165,243,252,.24)]"
            href="/projects"
            hover={buttonHover}
            tap={buttonTap}
          >
            View our work
          </PrimaryButton>
        </CtaCard>

    </>
  );
}

function ArchitectCard({ name, role, index, variants, hover }) {
  return (
    <motion.article
      className="glow-card glow-card--portrait overflow-hidden rounded-lg border border-white/10 bg-slate-900/80 shadow-2xl shadow-black/20"
      variants={variants}
      whileHover={hover}
    >
      <Portrait index={index} />
      <div className="p-4">
        <h3 className="text-base font-black text-zinc-100">{name}</h3>
        <p className="mt-1 text-xs text-cyan-200">{role}</p>
      </div>
    </motion.article>
  );
}

function CultureCard({ title, copy, variants, hover }) {
  return (
    <motion.article
      className="grid gap-4 rounded-lg border border-white/10 bg-black/20 p-5 sm:grid-cols-[2.5rem_1fr]"
      variants={variants}
      whileHover={hover}
    >
      <div className="grid h-10 w-10 place-items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
        +
      </div>
      <div>
        <h3 className="text-lg font-black text-zinc-100">{title}</h3>
        <p className="mt-2 text-sm leading-7 text-zinc-400">{copy}</p>
      </div>
    </motion.article>
  );
}

function Portrait({ index }) {
  const shade = [
    "from-zinc-300 via-zinc-700 to-black",
    "from-zinc-200 via-zinc-800 to-black",
    "from-zinc-300 via-slate-700 to-black",
    "from-zinc-100 via-zinc-700 to-black",
  ][index];

  return (
    <div className={`relative h-72 overflow-hidden bg-gradient-to-b ${shade}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(255,255,255,.28),transparent_6rem)]" />
      <motion.div
        animate={{ y: [0, -5, 0] }}
        className="absolute left-1/2 top-14 h-24 w-20 -translate-x-1/2 rounded-full bg-zinc-950/70 shadow-[0_0_50px_rgba(255,255,255,.18)]"
        transition={{ duration: 5 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute left-1/2 top-34 h-36 w-32 -translate-x-1/2 rounded-t-full bg-zinc-950/75" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(34,211,238,.08),transparent)] opacity-60" />
    </div>
  );
}
