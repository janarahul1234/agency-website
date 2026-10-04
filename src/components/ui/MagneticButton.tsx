"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import Link from "next/link";

type RefLike = HTMLElement | null;

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "acid" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "submit" | "button";
};

/**
 * Pill CTA with a subtle magnetic pull toward the cursor.
 * `acid` = lime background / black text, `ghost` = transparent + thin border.
 */
export default function MagneticButton({
  children,
  href,
  variant = "acid",
  className = "",
  onClick,
  type = "button",
}: Props) {
  const ref = useRef<RefLike>(null);
  const setRef = (node: RefLike) => {
    ref.current = node;
  };

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transition = "transform 120ms ease-out";
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.28}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 500ms cubic-bezier(0.16,1,0.3,1)";
    el.style.transform = "translate(0,0)";
  };

  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 " +
    (variant === "acid"
      ? "bg-acid text-black hover:bg-[#e6ff5e]"
      : "border border-line text-mist hover:border-white/30 hover:bg-white/5") +
    " " +
    className;

  const inner = (
    <>
      {children}
      <span
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        &#8599;
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        ref={setRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onClick={onClick}
        className={base}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={type}
      ref={setRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      className={base}
    >
      {inner}
    </button>
  );
}
