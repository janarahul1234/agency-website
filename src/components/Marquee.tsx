/* Oversized editorial transition — two opposing marquee rows. */

const ROW = ["Strategic Design", "Visual Design", "Brand Systems", "Digital Craft"];

function Track({ reverse = false }: { reverse?: boolean }) {
  const items = [...ROW, ...ROW];
  return (
    <div
      className={`flex w-max ${reverse ? "marquee-track-slow" : "marquee-track"}`}
    >
      {items.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="headline flex items-center gap-6 whitespace-nowrap px-6 text-[clamp(2.5rem,7vw,6rem)] md:px-10"
        >
          {word}
          <span
            aria-hidden
            className="inline-block size-3 rotate-45 rounded-[2px] bg-acid md:size-4"
          />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section aria-hidden className="relative overflow-hidden border-y border-line py-10 md:py-14">
      <div className="space-y-3">
        <Track />
        <div className="text-outline opacity-70">
          <Track reverse />
        </div>
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent md:w-48" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent md:w-48" />
    </section>
  );
}
