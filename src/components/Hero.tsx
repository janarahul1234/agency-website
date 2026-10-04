"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HERO_CARDS } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";
import ArrowBadge from "@/components/ui/ArrowBadge";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const collageY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      id="home"
      ref={ref}
      className="glow relative overflow-hidden pt-28 md:pt-36"
    >
      {/* faint top glow orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[12%] size-[34rem] rounded-full bg-[radial-gradient(circle,rgba(163,217,40,0.14),transparent_60%)] blur-2xl"
      />

      <div className="container-x relative">
        {/* ------------------------------ copy ------------------------------ */}
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow mb-8 flex items-center gap-2"
          >
            <span aria-hidden className="size-1.5 rounded-full bg-acid" />
            Independent Creative Studio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="headline text-[clamp(2.9rem,8.5vw,6.75rem)]"
          >
            We Build
            <br />
            <span className="font-editorial font-normal text-acid">
              &mdash; Brands
            </span>{" "}
            that
            <br />
            Stand Out
          </motion.h1>

          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22, ease }}
              className="max-w-sm text-sm leading-relaxed text-muted md:text-base"
            >
              Crafting purposeful brands, digital products and experiences that
              help ambitious businesses move forward.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
              className="flex items-center gap-6"
            >
              <MagneticButton href="#contact">Let&apos;s Talk</MagneticButton>
              <a
                href="#work"
                className="group text-sm text-muted underline-offset-4 transition-colors duration-300 hover:text-mist hover:underline"
              >
                View Our Work
              </a>
            </motion.div>
          </div>
        </div>

        {/* floating metric badge */}
        <motion.div
          style={{ y: badgeY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="absolute right-4 top-24 z-10 md:right-[8%] md:top-40"
        >
          <div className="flex size-24 flex-col items-center justify-center rounded-full border border-line bg-panel/80 text-center backdrop-blur-md md:size-28">
            <span className="headline text-2xl font-semibold text-acid md:text-3xl">
              12+
            </span>
            <span className="mt-1 px-3 text-[9px] uppercase tracking-widest text-muted">
              Years of creating
            </span>
          </div>
        </motion.div>

        {/* ---------------------------- collage ----------------------------- */}
        <motion.div
          style={{ y: collageY }}
          className="relative mt-16 grid grid-cols-2 gap-3 pb-10 sm:gap-4 md:pb-16 lg:grid-cols-12"
        >
          {HERO_CARDS.map((card, i) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.35 + i * 0.12,
                ease,
              }}
              className={card.className}
            >
              <figure
                className={`group relative h-full overflow-hidden rounded-xl border border-line bg-panel ${card.rotate ?? ""} transition-[transform,border-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:z-10 hover:-translate-y-2 hover:rotate-0 hover:border-white/20`}
              >
              <div className={`${card.ratio} relative w-full overflow-hidden`}>
                <Image
                  src={card.image}
                  alt={`${card.title} — ${card.tag}`}
                  fill
                  loading={i < 2 ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 50vw, 45vw"
                  className="img-dark object-cover"
                />
              </div>

              {/* number */}
              <span className="absolute left-3 top-3 rounded-full border border-line bg-black/50 px-2.5 py-1 text-[10px] tracking-widest text-mist/80 backdrop-blur-sm transition-colors duration-500 group-hover:border-acid/50 group-hover:text-acid">
                {card.number}
              </span>

              {/* caption */}
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 pt-12 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div>
                  <p className="eyebrow mb-1">{card.tag}</p>
                  <p className="text-sm font-medium">{card.title}</p>
                </div>
                <ArrowBadge href="#work" size="sm" />
                </figcaption>
              </figure>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
