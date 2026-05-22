"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";

const navItems = [
  { label: "Services", href: "/" },
  { label: "projects", href: "/projects" },
  { label: "Team", href: "/teem" },
];

const footerGroups = [
  ["Explore", ["Services", "/"], ["Projects", "/projects"]],
  ["Legal", ["Terms", "#"]],
  
];

const pageClassByPath = {
  "/": "services-page bg-[#050607]",
  "/projects": "projects-page bg-[#06090d]",
  "/teem": "teem-page bg-[#050809]",
};

export default function SiteLayout({ children }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const pageClass = pageClassByPath[pathname] || pageClassByPath["/"];
  const buttonHover = reduceMotion ? undefined : { y: -3, scale: 1.02 };
  const buttonTap = reduceMotion ? undefined : { scale: 0.98 };

  const reveal = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.2, 0.8, 0.2, 1] },
    },
  };

  return (
    <main className={`${pageClass} min-h-screen overflow-hidden text-white`}>
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <motion.header
          animate="show"
          className="flex items-center justify-between border-b border-cyan-300/20 pb-4 text-[11px]"
          initial="hidden"
          variants={reveal}
        >
          <Link className="font-black tracking-[0.24em] text-cyan-300" href="/">
            ZYNEXIS
          </Link>
          <nav className="hidden items-center gap-6 text-zinc-300 md:flex">
            {navItems.map((item) => (
              <NavLink item={item} key={item.label} pathname={pathname} />
            ))}
          </nav>
          <motion.a
            className="rounded-full bg-cyan-300 px-4 py-2 font-bold text-slate-950 shadow-[0_0_28px_rgba(34,211,238,.2)]"
            href="#contact"
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            Start a Project
          </motion.a>
        </motion.header>

        {children}

        <motion.footer
          className="border-t border-white/10 py-10"
          initial="hidden"
          variants={reveal}
          viewport={{ once: true, margin: "-80px" }}
          whileInView="show"
        >
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <h2 className="text-lg font-black tracking-[0.24em] text-cyan-300">ZYNEXIS</h2>
              <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-400">
                Building intelligent digital systems with clarity, craft, and technical rigor.
              </p>
            </div>
            {footerGroups.map(([title, ...links]) => (
              <FooterGroup key={title} links={links} title={title} />
            ))}
          </div>
          <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-zinc-500 sm:flex-row">
            <p>© 2026 ZYNEXIS DIGITAL. ALL RIGHTS RESERVED.</p>
            <p className="text-cyan-300">Online Support</p>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}

function NavLink({ item, pathname }) {
  const isActive = item.href === "/" ? pathname === "/" : item.href !== "#" && pathname === item.href;

  return (
    <Link
      className={`transition hover:text-cyan-200 ${
        isActive ? "text-cyan-200 hover:text-cyan-100" : ""
      }`}
      href={item.href}
    >
      {item.label}
    </Link>
  );
}

function FooterGroup({ title, links }) {
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-[0.18em] text-zinc-500">{title}</h3>
      <div className="mt-4 grid gap-3 text-sm text-zinc-300">
        {links.map(([label, href]) => (
          <Link className="transition hover:text-cyan-200" href={href} key={label}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
