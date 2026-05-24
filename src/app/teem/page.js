"use client";

import { motion } from "motion/react";
import Image from "next/image";
import img1 from "./pohoot/صورة واتساب بتاريخ 2025-10-03 في 23.49.10_184d88cf.jpg"
import img2 from "./pohoot/file.jpg"
import img3 from "./pohoot/imigggg.jpg"
import Link from "next/link";


const team = [
  {
    name: "Tarek Thrwat",
   
    img: img1,
  },
  {
    name: "sife ahmed",
   
    img: img2,
  },
  {
    name: "mohamed tohamy",
   
    img: img3,
  },
];

export default function TeamPage() {
  return (
    <div className="space-y-20 px-6 py-16">

      {/* HERO */}
      <section className="text-center">
        <p className="text-cyan-400 uppercase text-sm">
          Meet the Team
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-4 text-5xl font-bold text-white"
        >
          Built By Humans
        </motion.h1>

        <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
          We build modern digital products with clean design
          and strong engineering.
        </p>
      </section>

      {/* STATS */}
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-white/10 p-6">
          <h2 className="text-3xl font-bold text-cyan-400">
            50+
          </h2>

          <p className="mt-2 text-zinc-400">
            Successful builds
          </p>
        </div>

        <div className="rounded-xl border border-white/10 p-6">
          <h2 className="text-3xl font-bold text-cyan-400">
            100M+
          </h2>

          <p className="mt-2 text-zinc-400">
            Users per month
          </p>
        </div>

        <div className="rounded-xl border border-white/10 p-6">
          <h2 className="text-3xl font-bold text-cyan-400">
            Global
          </h2>

          <p className="mt-2 text-zinc-400">
            Remote Ready
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section>
        <h2 className="mb-8 text-3xl font-bold text-white">
          Our Team
        </h2>

        <div className="grid gap-5 md:grid-cols-3">
          {team.map((member) => (
            <motion.div
              key={member.name}
              whileHover={{ y: -5 }}
              className="rounded-xl border border-white/10 bg-zinc-900 p-5"
            >
              {/* Fake Image */}
              <div className="h-60 rounded-lg " >
                <Image
                  src={member.img}
                  alt={`${member.name} avatar`}
                  width={500}
                  height={500}
                  className="h-60 w-full rounded-lg object-cover"
                />
              </div>

              <h3 className="mt-4 text-xl font-bold text-white">
                {member.name}
              </h3>

             
            </motion.div>
          ))}
        </div>
      </section>

      {/* CULTURE */}
      <section>
        <h2 className="mb-8 text-3xl font-bold text-white">
          Our Culture
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 p-6">
            <h3 className="text-xl font-bold text-white">
              Technical Rigor
            </h3>

            <p className="mt-3 text-zinc-400">
              Clean code, accessibility, and scalability.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 p-6">
            <h3 className="text-xl font-bold text-white">
              Design Intelligence
            </h3>

            <p className="mt-3 text-zinc-400">
              Design backed by research and user experience.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl bg-zinc-900 p-10 text-center">
        <h2 className="text-4xl font-bold text-white">
          Ready to work with us?
        </h2>

        <button className="mt-6 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black">
          <Link href="/projects">View Projects </Link> 
        </button>
      </section>

    </div>

  );
}