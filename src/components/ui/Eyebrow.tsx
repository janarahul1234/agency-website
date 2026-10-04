import type { ReactNode } from "react";

/** Small uppercase section label with a lime dot, e.g. "• Services". */
export default function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`eyebrow flex items-center gap-2 ${className}`}>
      <span aria-hidden className="size-1.5 rounded-full bg-acid" />
      {children}
    </p>
  );
}
