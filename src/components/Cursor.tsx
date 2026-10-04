"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const subscribeFine = (cb: () => void) => {
  const mq = window.matchMedia("(pointer: fine)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const getFine = () => window.matchMedia("(pointer: fine)").matches;
const getFineServer = () => false;

/**
 * Desktop-only circular cursor. Expands into a lime "View Project" disc
 * when hovering elements marked with [data-cursor].
 */
export default function Cursor() {
  const enabled = useSyncExternalStore(subscribeFine, getFine, getFineServer);
  const [label, setLabel] = useState<string | null>(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.6 });

  useEffect(() => {
    if (!enabled) return;

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = (e.target as HTMLElement)?.closest?.("[data-cursor]");
      setLabel(target ? target.getAttribute("data-cursor") || "View" : null);
    };

    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ left: sx, top: sy }}
      className="pointer-events-none fixed z-[95] -translate-x-1/2 -translate-y-1/2"
    >
      <motion.div
        animate={
          label
            ? { width: 96, height: 96, backgroundColor: "#d7ff25" }
            : { width: 14, height: 14, backgroundColor: "rgba(244,244,239,0.9)" }
        }
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
      >
        {label && (
          <span className="text-[10px] font-semibold uppercase tracking-wider text-black">
            {label}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
