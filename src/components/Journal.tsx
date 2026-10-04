import Image from "next/image";
import { ARTICLES } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Journal() {
  return (
    <section id="insights" className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <Eyebrow className="mb-6">Journal</Eyebrow>
            <h2 className="headline text-[clamp(2.1rem,5vw,3.75rem)]">
              Journal Insight
              <br />
              of{" "}
              <span className="font-editorial font-normal text-acid">
                &mdash; Profolio
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <MagneticButton href="#insights">Explore Journal</MagneticButton>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3 md:gap-6">
          {ARTICLES.map((article, i) => (
            <Reveal key={article.title} delay={i * 0.12} y={36}>
              <a
                href="#insights"
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-panel transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20"
              >
                <div className="relative m-3 overflow-hidden rounded-lg">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={article.image}
                      alt=""
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 32vw"
                      className="img-dark object-cover"
                    />
                  </div>
                  <span className="absolute left-3 top-3 rounded-full bg-acid px-2.5 py-1 text-[9px] font-semibold uppercase tracking-widest text-black">
                    {article.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 pt-3">
                  <h3 className="text-lg font-medium leading-snug tracking-tight transition-colors duration-300 group-hover:text-acid md:text-xl">
                    {article.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
                    {article.summary}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-line pt-4 text-xs text-muted">
                    <span>
                      {article.date} &nbsp;/&nbsp; {article.read}
                    </span>
                    <span
                      aria-hidden
                      className="flex size-8 items-center justify-center rounded-full border border-line transition-all duration-300 group-hover:border-acid group-hover:bg-acid group-hover:text-black"
                    >
                      &rarr;
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
