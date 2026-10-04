import Link from "next/link";

/** Circular lime arrow badge used on cards and images. */
export default function ArrowBadge({
  href = "#work",
  size = "md",
  label = "View project",
  className = "",
}: {
  href?: string;
  size?: "sm" | "md";
  label?: string;
  className?: string;
}) {
  const dims = size === "sm" ? "size-9" : "size-12";
  return (
    <Link
      href={href}
      aria-label={label}
      className={`group/badge inline-flex ${dims} items-center justify-center rounded-full bg-acid text-black shadow-[0_0_24px_rgba(215,255,37,0.25)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-110 ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-transform duration-500 group-hover/badge:rotate-45 ${size === "sm" ? "size-4" : "size-5"}`}
        aria-hidden
      >
        <path d="M7 17 17 7M9 7h8v8" />
      </svg>
    </Link>
  );
}
