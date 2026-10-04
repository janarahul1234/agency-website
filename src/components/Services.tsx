import Image from "next/image";
import { SERVICES } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import ArrowBadge from "@/components/ui/ArrowBadge";

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container-x">
        {/* section head */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow className="mb-6">Services</Eyebrow>
            <h2 className="headline text-[clamp(2.1rem,5vw,3.75rem)]">
              We Deliver{" "}
              <span className="text-muted">&mdash;</span>{" "}
              <span className="font-editorial font-normal text-acid">
                Comprehensive
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-5">
            <p className="text-base text-muted lg:text-right">
              Solutions to help businesses
              <br className="hidden lg:block" /> grow and thrive.
            </p>
          </Reveal>
        </div>

        {/* service rows */}
        <div className="mt-20 space-y-20 md:space-y-28">
          {SERVICES.map((service, i) => (
            <Reveal key={service.index} y={40}>
              <article className="group grid items-center gap-8 border-t border-line pt-10 lg:grid-cols-12 lg:gap-10">
                {/* title */}
                <div className="lg:col-span-4">
                  <p className="eyebrow mb-4">
                    0{i + 1} &nbsp;/&nbsp; {service.index}
                  </p>
                  <h3 className="headline text-[clamp(2rem,4.5vw,3.25rem)] transition-colors duration-500 group-hover:text-acid">
                    {service.title}
                  </h3>
                  <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
                    {service.lines[0]}
                    <br />
                    {service.lines[1]}
                  </p>
                </div>

                {/* image card */}
                <div className="lg:col-span-5">
                  <div className="relative overflow-hidden rounded-xl border border-line bg-panel">
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={service.image}
                        alt={`${service.title} work sample`}
                        fill
                        loading="lazy"
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        className="img-dark object-cover"
                      />
                    </div>
                    <span className="absolute left-4 top-4 rounded-full border border-line bg-black/50 px-2.5 py-1 text-[10px] tracking-widest backdrop-blur-sm">
                      {service.number}
                    </span>
                    <ArrowBadge
                      href="#work"
                      size="sm"
                      className="absolute bottom-4 right-4 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                    />
                  </div>
                </div>

                {/* deliverables */}
                <ul className="space-y-3 lg:col-span-3">
                  <li className="eyebrow mb-4">Deliverables</li>
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-3 border-b border-line/60 pb-3 text-sm text-mist/85 transition-colors duration-300 last:border-0 hover:text-acid"
                    >
                      <span
                        aria-hidden
                        className="size-1 rounded-full bg-acid/70"
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
