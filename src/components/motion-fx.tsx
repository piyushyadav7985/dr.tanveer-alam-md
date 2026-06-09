import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  type Variants,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type MouseEvent,
  type CSSProperties,
} from "react";

// ───────────── Reveal — fade + rise on enter ─────────────
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: any;
}) {
  const MotionTag = (motion as any)[As] || motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

// ───────────── Stagger container ─────────────
export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ───────────── Animated counter ─────────────
export function Counter({
  to,
  suffix = "",
  prefix = "",
  duration = 1800,
  className,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      // easeOutExpo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

// ───────────── Magnetic button wrapper ─────────────
export function Magnetic({
  children,
  strength = 0.35,
  className,
  style,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy, ...style }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ───────────── Particle field ─────────────
export function Particles({
  count = 22,
  className,
}: {
  count?: number;
  className?: string;
}) {
  const particles = Array.from({ length: count }, (_, i) => i);
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
    >
      {particles.map((i) => {
        const size = 2 + ((i * 37) % 5);
        const left = (i * 53) % 100;
        const top = (i * 89) % 100;
        const dur = 9 + ((i * 13) % 11);
        const delay = (i * 0.4) % 6;
        const tone = i % 3 === 0 ? "var(--color-gold)" : "var(--color-primary)";
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.55, 0],
              y: [0, -60, -120],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
            }}
            transition={{
              duration: dur,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              borderRadius: 9999,
              background: tone,
              filter: "blur(0.5px)",
              boxShadow: `0 0 10px ${tone}`,
            }}
          />
        );
      })}
    </div>
  );
}

// ───────────── Gradient glow blob ─────────────
export function GradientGlow({
  className,
  from = "var(--color-primary)",
  to = "var(--color-gold)",
}: {
  className?: string;
  from?: string;
  to?: string;
}) {
  return (
    <motion.div
      aria-hidden
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.55, 0.8, 0.55],
        rotate: [0, 30, 0],
      }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      className={`pointer-events-none absolute rounded-full blur-3xl ${className ?? ""}`}
      style={{
        background: `radial-gradient(circle at 30% 30%, color-mix(in oklab, ${from} 60%, transparent), transparent 65%), radial-gradient(circle at 70% 70%, color-mix(in oklab, ${to} 55%, transparent), transparent 65%)`,
      }}
    />
  );
}

// ───────────── Parallax wrapper ─────────────
export function Parallax({
  children,
  offset = 80,
  className,
}: {
  children: ReactNode;
  offset?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
