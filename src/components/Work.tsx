import Image from "next/image";
import { PROJECTS } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import MagneticButton from "@/components/ui/MagneticButton";

/* asymmetric 12-col composition — index-aligned with PROJECTS */
const LAYOUT = [
  { span: "sm:col-span-2 lg:col-span-7", ratio: "aspect-[16/10]" },
  { span: "sm:col-span-1 lg:col-span-5", ratio: "aspect-[4/5]" },
  { span: "sm:col-span-1 lg:col-span-5", ratio: "aspect-[4/3]" },
  { span: "sm:col-span-1 lg:col-span-3", ratio: "aspect-[3/4]" },
  { span: "sm:col-span-2 lg:col-span-4", ratio: "aspect-[4/3]" },
  { span: "sm:col-span-2 lg:col-span-8", ratio: "aspect-[16/9]" },
];

export default function Work() {
  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="container-x">
        {/* head */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <Eyebrow className="mb-6">Extra Portfolio</Eyebrow>
            <h2 className="headline max-w-xl text-[clamp(2.1rem,5vw,3.75rem)]">
              See Our All Latest
              <br />
              <span className="font-editorial font-normal text-acid">
                Creative
              </span>{" "}
              Work
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <MagneticButton href="#contact" variant="acid">
              View All Work &rarr;
            </MagneticButton>
          </Reveal>
        </div>

        {/* masonry-style grid */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {PROJECTS.map((project, i) => (
            <Reveal
              key={project.number}
              delay={(i % 3) * 0.1}
              className={LAYOUT[i].span}
            >
              <a
                href="#contact"
                data-cursor="View Project"
                aria-label={`View project: ${project.title}`}
                className="group relative block overflow-hidden rounded-xl border border-line bg-panel transition-[transform,border-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-white/20"
              >
                <div className={`${LAYOUT[i].ratio} relative w-full overflow-hidden`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 58vw"
                    className="img-dark object-cover"
                  />
                </div>

                {/* darkening overlay on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/45"
                />

                {/* number */}
                <span className="absolute left-4 top-4 rounded-full border border-line bg-black/50 px-2.5 py-1 text-[10px] tracking-widest text-mist/80 backdrop-blur-sm transition-colors duration-500 group-hover:border-acid/60 group-hover:text-acid">
                  {project.number}
                </span>

                {/* info — always visible below image on mobile, slides in on hover for md+ */}
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-5 pt-16 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:translate-y-3 md:opacity-90 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  <div>
                    <p className="eyebrow mb-1.5">
                      {project.category} &nbsp;/&nbsp; {project.year}
                    </p>
                    <h3 className="text-lg font-medium tracking-tight md:text-xl">
                      {project.title}
                    </h3>
                  </div>
                  <span
                    aria-hidden
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-acid text-black opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:rotate-0 -rotate-45 scale-75 group-hover:scale-100"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-4"
                    >
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}

          {/* lime filler tile completes the last row */}
          <Reveal delay={0.1} className="hidden sm:col-span-1 lg:col-span-4 lg:block">
            <a
              href="#contact"
              className="group flex h-full min-h-[14rem] flex-col justify-between rounded-xl bg-acid p-6 text-black transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5"
            >
              <p className="eyebrow !text-black/60">Start a project</p>
              <p className="headline text-2xl font-semibold">
                Your brand could be next on this wall.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                Bring it on
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
