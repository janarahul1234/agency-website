import { STATS, STAT_DESCRIPTORS } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";

export default function Stats() {
  return (
    <section className="glow relative py-24 md:py-32">
      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow className="mb-6">About</Eyebrow>
            <h2 className="headline text-[clamp(1.9rem,4.2vw,3.1rem)]">
              Smart, fast, and{" "}
              <span className="font-editorial font-normal text-acid">
                Creative
              </span>
              <br />
              <span className="text-muted">&mdash;</span> We deliver purposeful
              <br />
              digital experiences.
            </h2>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7">
            <p className="max-w-md text-sm leading-relaxed text-muted lg:mt-14">
              We combine strategy, design and engineering into one continuous
              motion — so ideas don&apos;t wait for hand-offs, and every pixel
              earns its place.
            </p>
          </Reveal>
        </div>

        {/* stat cards */}
        <div className="mt-16 grid gap-4 md:grid-cols-3 md:gap-6">
          {STATS.map((stat, i) => (
            <Reveal key={stat.value} delay={i * 0.12}>
              <div className="group relative overflow-hidden rounded-xl border border-line bg-panel p-8 transition-colors duration-500 hover:border-acid/30">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-acid/0 blur-2xl transition-all duration-700 group-hover:bg-acid/10"
                />
                <p className="eyebrow mb-10">{stat.note}</p>
                <p className="headline text-6xl font-semibold tracking-tight md:text-7xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm text-muted">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* descriptors */}
        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-col divide-y divide-[rgba(255,255,255,0.08)] border-y border-line text-sm md:flex-row md:items-center md:justify-between md:divide-y-0">
            {STAT_DESCRIPTORS.map((d, i) => (
              <p
                key={d}
                className={`py-4 font-medium tracking-tight md:py-6 ${
                  i === STAT_DESCRIPTORS.length - 1 ? "text-acid" : "text-mist"
                }`}
              >
                <span className="mr-2 text-muted">/</span>
                {d}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
