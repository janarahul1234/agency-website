import Link from "next/link";

/** Studio mark — a spinning acid asterisk + wordmark. */
export default function Logo({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <Link
      href="#home"
      className={`group inline-flex items-center gap-2 ${className}`}
      aria-label="Wavelength — home"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className="size-5 text-acid transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-90"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      >
        <path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9" />
      </svg>
      <span
        className={`text-sm font-semibold tracking-tight ${dark ? "text-black" : "text-mist"}`}
      >
        Wavelength<sup className="text-acid">&reg;</sup>
      </span>
    </Link>
  );
}
