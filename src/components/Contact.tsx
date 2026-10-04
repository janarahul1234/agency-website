"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const PROJECT_TYPES = [
  "Branding",
  "UI/UX Design",
  "Web Development",
  "Full Project",
  "Something else",
];

const BUDGETS = ["< $10k", "$10k – $25k", "$25k – $50k", "$50k +"];

const field =
  "w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-sm text-black outline-none transition-colors duration-300 placeholder:text-black/35 focus:border-black/60";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-acid">
      {/* subtle vertical texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),transparent_35%,rgba(0,0,0,0.06))]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-white/20 blur-3xl"
      />

      <div className="container-x relative grid gap-14 py-20 md:py-28 lg:grid-cols-12 lg:gap-10">
        {/* left: pitch */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col justify-between lg:col-span-6"
        >
          <div>
            <p className="eyebrow !text-black/55 mb-6 flex items-center gap-2">
              <span aria-hidden className="size-1.5 rounded-full bg-black" />
              Contact
            </p>
            <h2 className="headline max-w-xl text-[clamp(2.3rem,5.5vw,4.25rem)] !text-black">
              Have a Project in Mind?
              <br />
              <span className="font-editorial font-normal">&mdash; Let&apos;s Talk.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-black/70 md:text-base">
              Tell us what you&apos;re building and we&apos;ll help turn the
              idea into something meaningful. We reply to every brief within
              two working days.
            </p>
          </div>

          <a
            href="mailto:hello@wavelength.studio"
            className="mt-12 inline-flex w-fit items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-acid transition-transform duration-300 hover:-translate-y-0.5"
          >
            hello@wavelength.studio
            <span aria-hidden>&#8599;</span>
          </a>
        </motion.div>

        {/* right: floating white form card */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="lg:col-span-6 lg:pl-10"
        >
          <div className="relative rounded-2xl bg-white p-6 text-black shadow-[0_40px_80px_-30px_rgba(0,0,0,0.45)] md:p-8">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease }}
                  className="flex min-h-[26rem] flex-col items-center justify-center text-center"
                >
                  <span className="flex size-14 items-center justify-center rounded-full bg-acid text-xl">
                    &#10003;
                  </span>
                  <h3 className="headline mt-6 text-2xl font-semibold">
                    Brief received.
                  </h3>
                  <p className="mt-3 max-w-xs text-sm text-black/60">
                    Thanks for reaching out — we&apos;ll be in touch within two
                    working days.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-8 text-xs uppercase tracking-widest text-black/50 underline underline-offset-4 hover:text-black"
                  >
                    Send another brief
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  className="space-y-4"
                >
                  <p className="text-sm font-semibold tracking-tight">
                    Schedule a Free Consultation
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-xs text-black/60">
                        Full Name
                      </label>
                      <input id="name" name="name" required placeholder="Jane Doe" className={field} />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-xs text-black/60">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="jane@company.com"
                        className={field}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="mb-1.5 block text-xs text-black/60">
                      Company Name
                    </label>
                    <input id="company" name="company" placeholder="Acme Inc." className={field} />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="type" className="mb-1.5 block text-xs text-black/60">
                        Project Type
                      </label>
                      <select id="type" name="type" defaultValue="" required className={field}>
                        <option value="" disabled>
                          Select
                        </option>
                        {PROJECT_TYPES.map((t) => (
                          <option key={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="mb-1.5 block text-xs text-black/60">
                        Budget
                      </label>
                      <select id="budget" name="budget" defaultValue="" required className={field}>
                        <option value="" disabled>
                          Select
                        </option>
                        {BUDGETS.map((b) => (
                          <option key={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-xs text-black/60">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us about your project..."
                      className={`${field} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-acid hover:text-black sm:w-auto"
                  >
                    Submit Brief
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      &#8599;
                    </span>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
