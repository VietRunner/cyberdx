/* -----------------------------------------------------------------------
 * CyberDX design-system primitives.
 *
 * Everything lives under a single <DxRoot> wrapper that pins the token
 * scope and the brand accent. Compose the primitives — do NOT style with
 * raw Tailwind at the page level; reach for `className` only to adjust
 * one-off layout.
 *
 * Aesthetic: Apple product pages (big display type, generous whitespace,
 * calm visuals). Motion: minimal / premium — fade-ups on viewport entry,
 * subtle hover elevations, no scroll gymnastics.
 * ---------------------------------------------------------------------- */

import {
  type CSSProperties,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import "./tokens.css";

/* ------------------------------------------------------------------ */
/*  Root — scopes the token system + applies brand accent              */
/* ------------------------------------------------------------------ */

export type DxTheme = "light" | "dark";
export type DxAccent = "falcon" | "beaver" | "twin" | "neutral";

const ACCENTS: Record<DxAccent, { hex: string; rgb: string; ink: string }> = {
  falcon:  { hex: "#f97316", rgb: "249, 115, 22",  ink: "#ffffff" },
  beaver:  { hex: "#fb923c", rgb: "251, 146, 60",  ink: "#1a1206" },
  twin:    { hex: "#8b5cf6", rgb: "139, 92, 246",  ink: "#ffffff" },
  neutral: { hex: "#0071e3", rgb: "0, 113, 227",   ink: "#ffffff" },
};

interface DxRootProps extends HTMLAttributes<HTMLDivElement> {
  theme?: DxTheme;
  accent?: DxAccent;
  children: ReactNode;
}

export function DxRoot({
  theme = "light",
  accent = "neutral",
  className,
  style,
  children,
  ...rest
}: DxRootProps) {
  const token = ACCENTS[accent];
  const vars: CSSProperties = {
    ["--dx-accent" as string]: token.hex,
    ["--dx-accent-rgb" as string]: token.rgb,
    ["--dx-accent-ink" as string]: token.ink,
  };
  return (
    <div
      {...rest}
      data-theme={theme}
      data-accent={accent}
      className={cn("dx-root", className)}
      style={{ ...vars, ...style }}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Layout — Container, Section                                        */
/* ------------------------------------------------------------------ */

type AlignOpt = "start" | "center";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "full";
  children: ReactNode;
}

export function Container({
  size = "lg",
  className,
  children,
  style,
  ...rest
}: ContainerProps) {
  const max =
    size === "sm" ? 720 : size === "md" ? 920 : size === "full" ? "100%" : 1200;
  return (
    <div
      {...rest}
      className={cn("w-full mx-auto", className)}
      style={{
        maxWidth: typeof max === "number" ? `${max}px` : max,
        paddingLeft: "var(--dx-gutter)",
        paddingRight: "var(--dx-gutter)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: "default" | "surface" | "contrast";
  pad?: "normal" | "tight" | "roomy";
  children: ReactNode;
}

/**
 * Standard section wrapper with vertical rhythm. Tone controls background
 * (default = page bg, surface = subtly tinted, contrast = flip theme locally).
 */
export function Section({
  tone = "default",
  pad = "normal",
  className,
  children,
  style,
  ...rest
}: SectionProps) {
  const padMap = {
    tight: "calc(var(--dx-section-y) * 0.6)",
    normal: "var(--dx-section-y)",
    roomy: "calc(var(--dx-section-y) * 1.4)",
  } as const;
  const bg =
    tone === "surface"
      ? "var(--dx-surface)"
      : tone === "contrast"
      ? "var(--dx-ink)"
      : "var(--dx-bg)";
  const localVars: CSSProperties =
    tone === "contrast"
      ? { color: "var(--dx-bg)", background: bg }
      : { background: bg };
  return (
    <section
      {...rest}
      className={cn("relative", className)}
      style={{
        paddingTop: padMap[pad],
        paddingBottom: padMap[pad],
        ...localVars,
        ...style,
      }}
    >
      {children}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Typography                                                         */
/* ------------------------------------------------------------------ */

interface TypoProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  align?: AlignOpt;
  tone?: "ink" | "muted" | "faint" | "accent";
  balance?: boolean;
  children: ReactNode;
}

function toneColor(tone: TypoProps["tone"]) {
  return tone === "muted"
    ? "var(--dx-ink-2)"
    : tone === "faint"
    ? "var(--dx-muted)"
    : tone === "accent"
    ? "var(--dx-accent)"
    : "var(--dx-ink)";
}

export function Eyebrow({
  as: Tag = "span",
  tone = "muted",
  className,
  children,
  style,
  ...rest
}: TypoProps) {
  return (
    <Tag
      {...rest}
      className={cn("inline-flex items-center uppercase", className)}
      style={{
        color: toneColor(tone),
        fontFamily: "var(--dx-font-mono)",
        fontSize: "var(--dx-text-mono)",
        letterSpacing: "var(--dx-tracking-mono)",
        fontWeight: 500,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

export function Display({
  as: Tag = "h1",
  align = "start",
  tone = "ink",
  balance = true,
  className,
  children,
  style,
  ...rest
}: TypoProps) {
  return (
    <Tag
      {...rest}
      className={cn(className)}
      style={{
        color: toneColor(tone),
        fontSize: "var(--dx-text-display)",
        letterSpacing: "var(--dx-tracking-display)",
        lineHeight: 1.02,
        fontWeight: 600,
        textAlign: align,
        textWrap: balance ? ("balance" as unknown as "normal") : undefined,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

export function Title({
  as: Tag = "h2",
  align = "start",
  tone = "ink",
  balance = true,
  className,
  children,
  style,
  ...rest
}: TypoProps) {
  return (
    <Tag
      {...rest}
      className={cn(className)}
      style={{
        color: toneColor(tone),
        fontSize: "var(--dx-text-title)",
        letterSpacing: "var(--dx-tracking-title)",
        lineHeight: 1.04,
        fontWeight: 600,
        textAlign: align,
        textWrap: balance ? ("balance" as unknown as "normal") : undefined,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

export function Head({
  as: Tag = "h3",
  align = "start",
  tone = "ink",
  className,
  children,
  style,
  ...rest
}: TypoProps) {
  return (
    <Tag
      {...rest}
      className={cn(className)}
      style={{
        color: toneColor(tone),
        fontSize: "var(--dx-text-head)",
        letterSpacing: "var(--dx-tracking-tight)",
        lineHeight: 1.12,
        fontWeight: 600,
        textAlign: align,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

export function Lead({
  as: Tag = "p",
  align = "start",
  tone = "muted",
  balance = true,
  className,
  children,
  style,
  ...rest
}: TypoProps) {
  return (
    <Tag
      {...rest}
      className={cn(className)}
      style={{
        color: toneColor(tone),
        fontSize: "var(--dx-text-lead)",
        lineHeight: 1.47,
        fontWeight: 400,
        textAlign: align,
        textWrap: balance ? ("pretty" as unknown as "normal") : undefined,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

export function Body({
  as: Tag = "p",
  align = "start",
  tone = "muted",
  className,
  children,
  style,
  ...rest
}: TypoProps) {
  return (
    <Tag
      {...rest}
      className={cn(className)}
      style={{
        color: toneColor(tone),
        fontSize: "var(--dx-text-body)",
        lineHeight: 1.5,
        textAlign: align,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/*  Motion — Reveal, useReveal, useScrollProgress                      */
/* ------------------------------------------------------------------ */

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
  distance?: number;
  as?: "div" | "span" | "li" | "section" | "article";
  children: ReactNode;
}

/**
 * Fade + rise on viewport entry. Fires once. Respects reduced-motion
 * automatically (CSS override in tokens.css flattens transition durations).
 */
export function Reveal({
  delay = 0,
  distance = 24,
  as: _as = "div",
  children,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.72,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Section-scoped scroll progress (0..1) via rAF. Useful for pinned scrolls. */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const span = rect.height - window.innerHeight;
      const p = span <= 0 ? (rect.top <= 0 ? 1 : 0) : -rect.top / span;
      setProgress(Math.max(0, Math.min(1, p)));
      frame = 0;
    };
    const sched = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", sched, { passive: true });
    window.addEventListener("resize", sched);
    return () => {
      window.removeEventListener("scroll", sched);
      window.removeEventListener("resize", sched);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  return { ref, progress };
}

/* ------------------------------------------------------------------ */
/*  Controls — Button                                                  */
/* ------------------------------------------------------------------ */

type ButtonVariant = "primary" | "ghost" | "quiet";

interface ButtonProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, "children"> {
  as?: "button" | "a";
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  leading?: ReactNode;
  trailing?: ReactNode;
  disabled?: boolean;
  children: ReactNode;
}

export const Button = forwardRef<HTMLElement, ButtonProps>(function Button(
  {
    as: _as = "button",
    href,
    type = "button",
    variant = "primary",
    size = "md",
    leading,
    trailing,
    disabled,
    className,
    style,
    children,
    ...rest
  },
  ref,
) {
  const sizeMap = {
    sm: { pad: "8px 14px", font: 13, radius: 999 },
    md: { pad: "12px 20px", font: 14.5, radius: 999 },
    lg: { pad: "16px 28px", font: 16, radius: 999 },
  } as const;
  const s = sizeMap[size];
  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: s.pad,
    fontSize: s.font,
    fontWeight: 600,
    letterSpacing: "-0.005em",
    borderRadius: s.radius,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition:
      "background var(--dx-dur-2) var(--dx-ease), color var(--dx-dur-2) var(--dx-ease), border-color var(--dx-dur-2) var(--dx-ease), transform var(--dx-dur-1) var(--dx-ease), box-shadow var(--dx-dur-2) var(--dx-ease)",
    border: "1px solid transparent",
    whiteSpace: "nowrap",
    textDecoration: "none",
  };
  const variants: Record<ButtonVariant, CSSProperties> = {
    primary: {
      background: "var(--dx-accent)",
      color: "var(--dx-accent-ink)",
      boxShadow:
        "0 10px 24px -4px rgba(var(--dx-accent-rgb), 0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
    },
    ghost: {
      background: "transparent",
      color: "var(--dx-ink)",
      borderColor: "var(--dx-hairline)",
    },
    quiet: {
      background: "transparent",
      color: "var(--dx-ink)",
    },
  };
  const content = (
    <>
      {leading}
      <span>{children}</span>
      {trailing}
    </>
  );
  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={cn("dx-btn", `dx-btn-${variant}`, className)}
        style={{ ...base, ...variants[variant], ...style }}
        {...(rest as HTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      className={cn("dx-btn", `dx-btn-${variant}`, className)}
      style={{ ...base, ...variants[variant], ...style }}
      {...(rest as HTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
});

/* ------------------------------------------------------------------ */
/*  Surfaces — StatCard, FeatureCard, MediaFrame, ProductBadge        */
/* ------------------------------------------------------------------ */

interface StatCardProps {
  value: ReactNode;
  unit?: ReactNode;
  label: ReactNode;
  caption?: ReactNode;
  align?: AlignOpt;
  className?: string;
}

/** Apple-style stat: big tabular numeral + unit chip + small label. */
export function StatCard({
  value,
  unit,
  label,
  caption,
  align = "start",
  className,
}: StatCardProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)} style={{ textAlign: align, alignItems: align === "center" ? "center" : "flex-start" }}>
      <div className="flex items-baseline gap-1.5" data-tabular>
        <span
          style={{
            color: "var(--dx-ink)",
            fontSize: "clamp(40px, 5vw, 72px)",
            letterSpacing: "var(--dx-tracking-display)",
            fontWeight: 600,
            lineHeight: 1,
          }}
        >
          {value}
        </span>
        {unit ? (
          <span
            style={{
              color: "var(--dx-accent)",
              fontSize: "clamp(18px, 2vw, 28px)",
              letterSpacing: "-0.02em",
              fontWeight: 500,
              lineHeight: 1,
            }}
          >
            {unit}
          </span>
        ) : null}
      </div>
      <span
        style={{
          color: "var(--dx-muted)",
          fontSize: "var(--dx-text-small)",
          fontWeight: 500,
          letterSpacing: "-0.005em",
        }}
      >
        {label}
      </span>
      {caption ? (
        <span
          style={{
            color: "var(--dx-faint)",
            fontSize: "var(--dx-text-caption)",
          }}
        >
          {caption}
        </span>
      ) : null}
    </div>
  );
}

interface FeatureCardProps {
  icon?: ReactNode;
  eyebrow?: ReactNode;
  title: ReactNode;
  body: ReactNode;
  footer?: ReactNode;
  className?: string;
  onClick?: () => void;
}

/** Content card with elevated hover state. Supports optional lead icon. */
export function FeatureCard({
  icon,
  eyebrow,
  title,
  body,
  footer,
  className,
  onClick,
}: FeatureCardProps) {
  const interactive = typeof onClick === "function";
  return (
    <motion.div
      whileHover={interactive ? { y: -4 } : undefined}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      className={cn(
        "group relative flex flex-col h-full",
        interactive && "cursor-pointer",
        className,
      )}
      style={{
        background: "var(--dx-surface)",
        border: "1px solid var(--dx-hairline)",
        borderRadius: "var(--dx-radius-lg)",
        padding: "var(--dx-space-10)",
      }}
    >
      {icon ? (
        <div
          className="mb-6 flex items-center justify-center"
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: "rgba(var(--dx-accent-rgb), 0.1)",
            color: "var(--dx-accent)",
          }}
        >
          {icon}
        </div>
      ) : null}
      {eyebrow ? <Eyebrow className="mb-3">{eyebrow}</Eyebrow> : null}
      <Head className="mb-3">{title}</Head>
      <Body>{body}</Body>
      {footer ? <div className="mt-6">{footer}</div> : null}
    </motion.div>
  );
}

interface MediaFrameProps extends HTMLAttributes<HTMLDivElement> {
  aspect?: string;
  tone?: "surface" | "contrast" | "transparent";
  glow?: boolean;
  children: ReactNode;
}

/** Apple-style media container — rounded corners, soft inner surface, optional accent glow. */
export function MediaFrame({
  aspect = "16/10",
  tone = "surface",
  glow = false,
  className,
  style,
  children,
  ...rest
}: MediaFrameProps) {
  const bg =
    tone === "contrast"
      ? "var(--dx-ink)"
      : tone === "transparent"
      ? "transparent"
      : "var(--dx-surface)";
  return (
    <div
      {...rest}
      className={cn("relative overflow-hidden", className)}
      style={{
        aspectRatio: aspect,
        background: bg,
        borderRadius: "var(--dx-radius-lg)",
        border: "1px solid var(--dx-hairline)",
        boxShadow: glow
          ? "0 24px 60px -16px rgba(var(--dx-accent-rgb), 0.35), 0 1px 0 rgba(255,255,255,0.04) inset"
          : "var(--dx-shadow)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

interface ProductBadgeProps {
  index: string;
  category: ReactNode;
  dot?: boolean;
  className?: string;
}

export function ProductBadge({
  index,
  category,
  dot = true,
  className,
}: ProductBadgeProps) {
  return (
    <div
      className={cn("inline-flex items-center gap-3", className)}
      style={{
        fontFamily: "var(--dx-font-mono)",
        fontSize: "var(--dx-text-mono)",
        letterSpacing: "var(--dx-tracking-mono)",
        textTransform: "uppercase",
        fontWeight: 600,
        color: "var(--dx-accent)",
      }}
    >
      {dot ? (
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: 999,
            background: "var(--dx-accent)",
            boxShadow: "0 0 10px var(--dx-accent)",
          }}
        />
      ) : null}
      <span>
        {index} <span style={{ color: "var(--dx-faint)" }}>/</span>{" "}
        <span style={{ color: "var(--dx-ink-2)" }}>{category}</span>
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Patterns — SplitSection, StatRow, FeatureGrid                      */
/* ------------------------------------------------------------------ */

interface SplitSectionProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  media: ReactNode;
  mediaSide?: "left" | "right";
  children?: ReactNode;
  className?: string;
}

/** Alternating-side section — big headline on one side, media on the other. */
export function SplitSection({
  eyebrow,
  title,
  lead,
  media,
  mediaSide = "right",
  children,
  className,
}: SplitSectionProps) {
  return (
    <Container>
      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-2 items-center",
          className,
        )}
        style={{ gap: "clamp(32px, 6vw, 96px)" }}
      >
        <Reveal
          className={cn(mediaSide === "left" ? "lg:order-2" : "lg:order-1")}
        >
          <div>
            {eyebrow ? <div className="mb-5">{eyebrow}</div> : null}
            <Title>{title}</Title>
            {lead ? <Lead className="mt-5 max-w-xl">{lead}</Lead> : null}
            {children ? <div className="mt-8">{children}</div> : null}
          </div>
        </Reveal>
        <Reveal
          delay={0.1}
          className={cn(mediaSide === "left" ? "lg:order-1" : "lg:order-2")}
        >
          {media}
        </Reveal>
      </div>
    </Container>
  );
}

interface StatRowProps {
  items: Array<{
    value: ReactNode;
    unit?: ReactNode;
    label: ReactNode;
    caption?: ReactNode;
  }>;
  align?: AlignOpt;
  className?: string;
}

export function StatRow({ items, align = "start", className }: StatRowProps) {
  return (
    <Container>
      <Reveal>
        <div
          className={cn(
            "grid gap-10",
            items.length === 2 && "grid-cols-1 md:grid-cols-2",
            items.length === 3 && "grid-cols-1 md:grid-cols-3",
            items.length === 4 && "grid-cols-2 md:grid-cols-4",
            className,
          )}
          style={{ borderTop: "1px solid var(--dx-hairline)", paddingTop: 48 }}
        >
          {items.map((it, i) => (
            <StatCard
              key={i}
              value={it.value}
              unit={it.unit}
              label={it.label}
              caption={it.caption}
              align={align}
            />
          ))}
        </div>
      </Reveal>
    </Container>
  );
}

interface FeatureGridProps {
  items: Array<{
    icon?: ReactNode;
    eyebrow?: ReactNode;
    title: ReactNode;
    body: ReactNode;
    footer?: ReactNode;
    onClick?: () => void;
  }>;
  columns?: 2 | 3;
  className?: string;
}

export function FeatureGrid({ items, columns = 3, className }: FeatureGridProps) {
  return (
    <Container>
      <div
        className={cn(
          "grid gap-5",
          columns === 2 && "grid-cols-1 md:grid-cols-2",
          columns === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          className,
        )}
      >
        {items.map((it, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <FeatureCard {...it} />
          </Reveal>
        ))}
      </div>
    </Container>
  );
}

/* ------------------------------------------------------------------ */
/*  Hairline — thin divider you can drop into any section              */
/* ------------------------------------------------------------------ */

export function Hairline({ className }: { className?: string }) {
  return (
    <div
      className={cn("w-full", className)}
      style={{ height: 1, background: "var(--dx-hairline)" }}
    />
  );
}
