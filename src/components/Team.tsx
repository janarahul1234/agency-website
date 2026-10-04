"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TEAM } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";

const ease = [0.16, 1, 0.3, 1] as const;

/** Decorative organic lime blob behind each portrait. */
function Flower({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden
      className={`absolute inset-0 m-auto size-[135%] max-w-none ${className}`}
    >
      <g fill="#c6f521" opacity="0.9">
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse
            key={i}
            cx="100"
            cy="52"
            rx="26"
            ry="46"
            transform={`rotate(${i * 45} 100 100)`}
          />
        ))}
      </g>
    </svg>
  );
}

export default function Team() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-7"
          >
            <Eyebrow className="mb-6">Leadership</Eyebrow>
            <h2 className="headline text-[clamp(2.1rem,5vw,3.75rem)]">
              Meet the
              <br />
              <span className="font-editorial font-normal text-acid">
                &mdash; Leadership
              </span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="max-w-sm text-sm leading-relaxed text-muted lg:col-span-5 lg:justify-self-end"
          >
            A small senior team — the people you meet are the people who do the
            work. Strategists, designers and engineers who ship together.
          </motion.p>
        </div>

        <div className="mt-16 space-y-4 md:space-y-6">
          {TEAM.map((member, i) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease }}
              className="group grid items-center gap-6 rounded-xl border border-line bg-panel/60 p-6 transition-colors duration-500 hover:border-white/20 md:grid-cols-12 md:p-8"
            >
              <div className="md:col-span-2">
                <p className="eyebrow">0{i + 1}</p>
              </div>
              <div className="md:col-span-6">
                <h3 className="headline text-2xl font-semibold md:text-3xl">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-acid">{member.role}</p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
                  {member.bio}
                </p>
              </div>
              <div className="relative justify-self-start md:col-span-4 md:justify-self-end">
                <div className="relative size-28 md:size-32">
                  <Flower className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-45" />
                  <motion.div
                    initial={{ clipPath: "inset(100% 0 0 0)" }}
                    whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.9, delay: 0.2 + i * 0.1, ease }}
                    className="absolute inset-5 overflow-hidden rounded-full ring-1 ring-black/20 md:inset-6"
                  >
                    <Image
                      src={member.image}
                      alt={`Portrait of ${member.name}`}
                      fill
                      loading="lazy"
                      sizes="128px"
                      className="img-dark object-cover grayscale-[0.6] group-hover:grayscale-0"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
