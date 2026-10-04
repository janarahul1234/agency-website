import Logo from "@/components/ui/Logo";
import Reveal from "@/components/ui/Reveal";

const COLUMNS = [
  {
    title: "Browse",
    links: ["Home", "About Us", "Services", "Journal", "Contact Page", "Careers"],
  },
  {
    title: "Explore",
    links: [
      "Branding",
      "Product Design",
      "Web Development",
      "UI/UX Design",
      "Design Systems",
      "Art Direction",
    ],
  },
];

const SOCIALS = ["X", "IG", "BE", "LI"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink pt-20 md:pt-28">
      <div className="container-x">
        {/* big contact headline */}
        <Reveal>
          <div className="flex flex-col gap-8 border-b border-line pb-14 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="headline max-w-2xl text-[clamp(2.4rem,6vw,4.75rem)]">
              Get In Touch
              <br />
              <span className="font-editorial font-normal text-muted">
                For Project
              </span>
              <span className="text-acid">.</span>
            </h2>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+6402456485"
                className="group flex items-center gap-3 text-mist transition-colors hover:text-acid"
              >
                <span className="eyebrow !text-muted w-14">Phone</span>
                +64 (024) 564 8585
                <span aria-hidden className="opacity-0 transition-opacity group-hover:opacity-100">
                  &#8599;
                </span>
              </a>
              <a
                href="mailto:hello@wavelength.studio"
                className="group flex items-center gap-3 text-mist transition-colors hover:text-acid"
              >
                <span className="eyebrow !text-muted w-14">Email</span>
                hello@wavelength.studio
                <span aria-hidden className="opacity-0 transition-opacity group-hover:opacity-100">
                  &#8599;
                </span>
              </a>
              <p className="flex items-center gap-3 text-muted">
                <span className="eyebrow !text-muted w-14">Socials</span>
                <span className="flex gap-2">
                  {SOCIALS.map((s) => (
                    <a
                      key={s}
                      href="#contact"
                      aria-label={`Wavelength on ${s}`}
                      className="flex size-8 items-center justify-center rounded-full border border-line text-[10px] font-semibold tracking-wide text-mist/80 transition-all duration-300 hover:border-acid hover:text-acid"
                    >
                      {s}
                    </a>
                  ))}
                </span>
              </p>
            </div>
          </div>
        </Reveal>

        {/* columns */}
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-5 max-w-[16rem] text-sm leading-relaxed text-muted">
              An independent creative studio building brands, products and
              digital experiences with intent.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="eyebrow mb-6">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-sm text-mist/75 transition-colors duration-300 hover:text-acid"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <p className="eyebrow mb-6">Studio</p>
            <address className="space-y-3 text-sm not-italic text-mist/75">
              <p>
                12 Harbour Lane
                <br />
                Auckland 1010, New Zealand
              </p>
              <p className="text-muted">Mon – Fri, 9:00 – 18:00 NZST</p>
            </address>
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-line py-7 text-xs text-muted md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Wavelength Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#home" className="transition-colors hover:text-mist">
              Privacy Policy
            </a>
            <a href="#home" className="transition-colors hover:text-mist">
              Terms of Service
            </a>
            {/* decorative lime mark */}
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="size-4 text-acid"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.2"
              strokeLinecap="round"
            >
              <path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9" />
            </svg>
          </div>
        </div>
      </div>

      {/* oversized ghost wordmark */}
      <p
        aria-hidden
        className="text-outline headline pointer-events-none select-none whitespace-nowrap text-center text-[22vw] leading-[0.75] opacity-25"
      >
        WAVELENGTH
      </p>
    </footer>
  );
}
