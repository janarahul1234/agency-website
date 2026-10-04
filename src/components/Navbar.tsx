"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/data";
import Logo from "@/components/ui/Logo";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-ink/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="container-x flex h-16 items-center justify-between md:h-[4.5rem]"
      >
        <Logo />

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="group relative text-xs font-medium tracking-wide text-muted transition-colors duration-300 hover:text-mist"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-acid transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-2 rounded-full border border-line px-3 py-1.5 text-[10px] uppercase tracking-widest text-muted md:inline-flex">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-acid opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-acid" />
            </span>
            Available
          </span>
          <MagneticButton
            href="#contact"
            className="hidden !px-5 !py-2 !text-xs md:inline-flex"
          >
            Let&apos;s Talk
          </MagneticButton>

          {/* mobile menu toggle */}
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="relative z-[70] flex size-10 flex-col items-center justify-center gap-1.5 rounded-full border border-line lg:hidden"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
              className="block h-px w-4 bg-mist"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -2.5 } : { rotate: 0, y: 0 }}
              className="block h-px w-4 bg-mist"
            />
          </button>
        </div>
      </nav>

      {/* full-screen mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 92% 6%)" }}
            animate={{ clipPath: "circle(140% at 92% 6%)" }}
            exit={{ clipPath: "circle(0% at 92% 6%)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] flex flex-col justify-between bg-ink-2 px-6 py-24 lg:hidden"
          >
            <ul className="space-y-2">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.5 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="headline block py-2 text-4xl font-semibold text-mist active:text-acid"
                  >
                    <span className="mr-3 align-middle text-xs text-muted">
                      0{i + 1}
                    </span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-between"
            >
              <p className="eyebrow">hello@wavelength.studio</p>
              <MagneticButton href="#contact" onClick={() => setOpen(false)}>
                Let&apos;s Talk
              </MagneticButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
