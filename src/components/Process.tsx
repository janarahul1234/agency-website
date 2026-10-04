"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

export default function Process() {
  const [active, setActive] = useState(1);

  return (
    <section id="process" className="relative py-16 md:py-24">
      <div className="container-x">
        <Reveal y={48}>
          <div className="glow relative overflow-hidden rounded-2xl border border-line bg-ink-2 px-6 py-14 md:px-12 md:py-20 lg:px-16">
            <div className="relative grid gap-14 lg:grid-cols-12 lg:gap-10">
                  {/* left: heading + steps */}
              <div className="lg:col-span-6">
                <Eyebrow className="mb-6">Our Process</Eyebrow>
                <h2 className="headline text-[clamp(2rem,4.6vw,3.4rem)]">
                  Our Process design, and
                  <br />
                  <span className="font-editorial font-normal text-acid">
                    Deliver
                  </span>{" "}
                  Simplified
                </h2>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
                  We follow a simple, collaborative process that keeps you in
                  the loop at every stage — from the first conversation to the
                  final launch. No noise, no surprises, just steady momentum
                  toward work we&apos;re both proud of.
                </p>

                <ol className="mt-12 space-y-0">
                  {PROCESS_STEPS.map((step, i) => {
                    const isActive = i === active;
                    return (
                      <li key={step.number}>
                        <button
                          type="button"
                          onClick={() => setActive(i)}
                          aria-expanded={isActive}
                          className={`group flex w-full items-start gap-5 border-t border-line py-5 text-left transition-colors duration-300 last:border-b ${
                            isActive ? "text-mist" : "text-muted hover:text-mist"
                          }`}
                        >
                          <span
                            className={`mt-1 text-[10px] tracking-widest transition-colors duration-300 ${
                              isActive ? "text-acid" : "text-muted/70"
                            }`}
                          >
                            {step.number}
                          </span>
                          <span className="flex-1">
                            <span className="flex items-center gap-3">
                              <span
                                aria-hidden
                                className={`size-1.5 rounded-full transition-all duration-300 ${
                                  isActive
                                    ? "scale-125 bg-acid"
                                    : "bg-white/25 group-hover:bg-white/50"
                                }`}
                              />
                              <span className="text-lg font-medium tracking-tight md:text-xl">
                                {step.title}
                              </span>
                            </span>
                            <AnimatePresence initial={false}>
                              {isActive && (
                                <motion.p
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{
                                    duration: 0.45,
                                    ease: [0.16, 1, 0.3, 1],
                                  }}
                                  className="overflow-hidden pl-[1.125rem] text-sm leading-relaxed text-muted"
                                >
                                  <span className="block pt-3">{step.body}</span>
                                </motion.p>
                              )}
                            </AnimatePresence>
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </div>

              {/* right: editorial image */}
              <div className="relative lg:col-span-6 lg:pl-8">
                <div className="group relative overflow-hidden rounded-xl border border-line">
                  <div className="relative aspect-[4/5] max-h-[34rem] w-full md:aspect-[4/4]">
                    <Image
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1100&q=80"
                      alt="The studio team collaborating around a table"
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="img-dark object-cover grayscale-[0.9] group-hover:grayscale-[0.6]"
                    />
                  </div>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                  />
                </div>

                {/* floating lime indicator */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-4 top-8 flex items-center gap-2 rounded-full bg-acid px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-black shadow-[0_0_32px_rgba(215,255,37,0.35)] md:-left-8"
                >
                  <span aria-hidden className="size-1.5 rounded-full bg-black" />
                  Let&apos;s Work
                </motion.div>

                <p className="eyebrow absolute bottom-6 left-6 tracking-[0.25em]">
                  Wavelength Studio
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
