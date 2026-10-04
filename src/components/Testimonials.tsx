"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Testimonials() {
  const [offset, setOffset] = useState(0);
  const visible = TESTIMONIALS.map(
    (_, i) => TESTIMONIALS[(i + offset) % TESTIMONIALS.length],
  );

  const move = (dir: 1 | -1) =>
    setOffset((o) => (o + dir + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <Eyebrow className="mb-6 justify-center">Testimonials</Eyebrow>
          <h2 className="headline mx-auto max-w-2xl text-center text-[clamp(2rem,4.6vw,3.4rem)]">
            Trusted by Brands, Backed
            <br />
            by{" "}
            <span className="font-editorial font-normal text-acid">Stories</span>
          </h2>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={offset}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.05 },
              },
              exit: {
                opacity: 0,
                transition: { staggerChildren: 0.05, staggerDirection: -1 },
              },
            }}
            className="mt-16 grid gap-4 md:grid-cols-3 md:gap-6"
          >
            {visible.map((t, i) => (
              <motion.figure
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
                  exit: { opacity: 0, y: -16, transition: { duration: 0.35 } },
                }}
                key={`${t.name}-${i}`}
                className="flex flex-col justify-between rounded-xl border border-line bg-panel p-7 transition-colors duration-500 hover:border-white/20"
              >
                <div>
                  <span aria-hidden className="font-editorial text-4xl text-acid">
                    &ldquo;
                  </span>
                  <blockquote className="mt-3 text-sm leading-relaxed text-mist/85">
                    {t.quote}
                  </blockquote>
                </div>
                <figcaption className="mt-8 flex items-center gap-3 border-t border-line pt-6">
                  <span
                    aria-hidden
                    className="flex size-10 items-center justify-center rounded-full bg-panel-2 text-xs font-semibold tracking-wide text-acid ring-1 ring-line"
                  >
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-medium">{t.name}</span>
                    <span className="block text-xs text-muted">{t.role}</span>
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* circular controls */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Previous testimonials"
              onClick={() => move(-1)}
              className="flex size-10 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:border-acid/50 hover:text-acid"
            >
              &larr;
            </button>
            <button
              type="button"
              aria-label="Next testimonials"
              onClick={() => move(1)}
              className="flex size-10 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:border-acid/50 hover:text-acid"
            >
              &rarr;
            </button>
            <span className="ml-3 h-px w-24 bg-gradient-to-r from-acid/70 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
