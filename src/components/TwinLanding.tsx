/* -----------------------------------------------------------------------
 * AI Twin landing — React, dx/ design system.
 *
 * Positioning: digital-twin for manufacturing, backed by a real MES stack
 * (Frappe + OpenMES + ERPNext). Capability sections anchor on real product
 * screenshots from /public/openmes/.
 *
 * Aesthetic: Apple product page. Dark DxRoot with a few `tone="contrast"`
 * light bands so screenshots sit on their native surface.
 * ---------------------------------------------------------------------- */

import { useEffect, useState, type ReactNode } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  Menu,
  X,
  CheckCircle2,
} from "lucide-react";
import {
  DxRoot,
  Section,
  Container,
  Display,
  Title,
  Head,
  Lead,
  Body,
  Eyebrow,
  Reveal,
  Button,
  StatCard,
  ProductBadge,
  Hairline,
} from "@/components/dx";

/* ------------------------------------------------------------------ */
/*  Shared                                                             */
/* ------------------------------------------------------------------ */

const NAV_LINKS = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#architecture", label: "Architecture" },
  { href: "#integrations", label: "Integrations" },
  { href: "#deploy", label: "Deployment" },
];

function PulseDot({ color = "#4ade80", size = 7 }: { color?: string; size?: number }) {
  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: 999,
        background: color,
        boxShadow: `0 0 10px ${color}`,
        animation: "dxLivePulse 1.6s ease-in-out infinite",
        display: "inline-block",
      }}
    />
  );
}

/** Light-surface frame to display a product screenshot inside a dark page. */
function Screenshot({
  src,
  alt,
  caption,
  className,
  aspect = "16/10",
  tall = false,
}: {
  src: string;
  alt: string;
  caption?: ReactNode;
  className?: string;
  aspect?: string;
  tall?: boolean;
}) {
  return (
    <figure className={className}>
      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio: tall ? "9/16" : aspect,
          background: "#f7f6f3",
          borderRadius: "var(--dx-radius-lg)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow:
            "0 30px 80px -24px rgba(139,92,246,0.4), 0 1px 0 rgba(255,255,255,0.08) inset",
        }}
      >
        {/* dark window chrome bar */}
        <div
          className="flex items-center gap-1.5 px-4"
          style={{
            height: 28,
            background: "rgba(0,0,0,0.6)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            position: "absolute",
            inset: "0 0 auto 0",
            zIndex: 2,
          }}
        >
          <span style={dot("#ff5f57")} />
          <span style={dot("#febc2e")} />
          <span style={dot("#28c840")} />
          <span
            style={{
              marginLeft: "auto",
              color: "rgba(255,255,255,0.4)",
              fontFamily: "var(--dx-font-mono)",
              fontSize: 10,
              letterSpacing: "0.1em",
            }}
          >
            platform.cyberdx.io
          </span>
        </div>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top left",
            paddingTop: 28,
          }}
        />
      </div>
      {caption ? (
        <figcaption
          className="mt-4 flex items-center gap-2"
          style={{
            color: "var(--dx-muted)",
            fontFamily: "var(--dx-font-mono)",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          <PulseDot color="#8b5cf6" size={6} />
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function dot(bg: string) {
  return {
    width: 10,
    height: 10,
    borderRadius: 999,
    background: bg,
    display: "inline-block",
  } as const;
}

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */

function TwinNav({ onSwitch, onContact }: TwinLandingProps) {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50"
        style={{
          background: solid ? "rgba(0,0,0,0.72)" : "transparent",
          backdropFilter: solid ? "blur(18px) saturate(1.4)" : "none",
          WebkitBackdropFilter: solid ? "blur(18px) saturate(1.4)" : "none",
          borderBottom: solid
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
          transition: "background 240ms ease, border-color 240ms ease",
        }}
      >
        <Container>
          <div className="flex items-center justify-between" style={{ height: 64 }}>
            <a href="#top" className="inline-flex items-center gap-2.5" style={{ color: "var(--dx-ink)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 5L19 19M19 5L5 19" stroke="var(--dx-accent)" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
              <span style={{ fontWeight: 600, letterSpacing: "0.22em", fontSize: 12 }}>CYBERDX</span>
              <span
                className="hidden sm:inline"
                style={{
                  color: "var(--dx-muted)",
                  fontFamily: "var(--dx-font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                }}
              >
                / AI TWIN
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  style={{
                    color: "var(--dx-ink-2)",
                    fontSize: 14,
                    fontWeight: 500,
                    letterSpacing: "-0.005em",
                  }}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              {onSwitch ? (
                <button
                  onClick={onSwitch}
                  className="hidden sm:inline-flex items-center gap-2"
                  style={{
                    color: "var(--dx-ink-2)",
                    fontFamily: "var(--dx-font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    padding: "8px 12px",
                    cursor: "pointer",
                    background: "transparent",
                    border: 0,
                  }}
                >
                  Switch AI
                </button>
              ) : null}
              <Button size="sm" variant="primary" onClick={() => onContact?.()} trailing={<ArrowUpRight size={14} />}>
                Request demo
              </Button>
              <button
                className="md:hidden inline-flex items-center justify-center"
                aria-label="Menu"
                onClick={() => setOpen(true)}
                style={{ width: 36, height: 36, color: "var(--dx-ink)", background: "transparent", border: 0, cursor: "pointer" }}
              >
                <Menu size={18} />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {open ? (
        <div className="fixed inset-0 z-[60] md:hidden" style={{ background: "rgba(0,0,0,0.9)", backdropFilter: "blur(10px)" }}>
          <Container>
            <div className="flex items-center justify-between" style={{ height: 64 }}>
              <span style={{ color: "var(--dx-ink)", fontWeight: 600, letterSpacing: "0.22em", fontSize: 12 }}>CYBERDX</span>
              <button onClick={() => setOpen(false)} aria-label="Close" style={{ color: "var(--dx-ink)", background: "transparent", border: 0, cursor: "pointer" }}>
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-col gap-6 py-10">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{ color: "var(--dx-ink)", fontSize: 28, fontWeight: 500, letterSpacing: "-0.02em" }}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </Container>
        </div>
      ) : null}
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

function Hero({ onContact }: { onContact?: () => void }) {
  return (
    <Section pad="roomy" className="relative" style={{ paddingTop: 160 }}>
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 20%, rgba(139,92,246,0.2), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at 50% 20%, #000 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 20%, #000 20%, transparent 70%)",
          opacity: 0.55,
        }}
      />

      <Container>
        <div className="relative text-center max-w-4xl mx-auto">
          <Reveal>
            <ProductBadge index="03" category="Industrial Intelligence" className="mx-auto" />
          </Reveal>

          <Reveal delay={0.08}>
            <Display align="center" className="mt-6">
              The nervous system
              <br />
              for{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #d6c3ff 0%, #8b5cf6 55%, #5a1fc0 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                manufacturing.
              </span>
            </Display>
          </Reveal>

          <Reveal delay={0.16}>
            <Lead align="center" className="mt-7 mx-auto max-w-2xl">
              AI Twin unifies real-time execution, quality, maintenance, and
              cost in a single operational model — connected to the ERP, MES,
              and shop-floor systems you already run.
            </Lead>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <Button size="lg" variant="primary" onClick={() => onContact?.()} trailing={<ArrowRight size={16} />}>
                Request deployment
              </Button>
              <Button size="lg" variant="ghost" leading={<Play size={14} fill="currentColor" />}>
                Watch 90s overview
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <ul
              className="mt-16 pt-7 flex flex-wrap justify-center gap-x-12 gap-y-6 max-w-2xl mx-auto"
              style={{ borderTop: "1px solid var(--dx-hairline)" }}
            >
              {[
                { v: "148", u: "+", l: "Active streams" },
                { v: "<300", u: "ms", l: "Edge response" },
                { v: "24/7", l: "Autonomous ops" },
              ].map((it) => (
                <li
                  key={it.l}
                  className="flex items-center gap-2.5"
                  style={{ color: "var(--dx-muted)", fontSize: 13 }}
                >
                  <span
                    data-tabular
                    style={{
                      color: "var(--dx-ink)",
                      fontWeight: 600,
                      fontSize: 18,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {it.v}
                    {it.u ? <span style={{ color: "var(--dx-accent)" }}>{it.u}</span> : null}
                  </span>
                  {it.l}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Real product screenshot as hero visual */}
        <Reveal delay={0.4}>
          <div className="relative mt-20 mx-auto" style={{ maxWidth: 1120 }}>
            <div
              aria-hidden
              className="absolute inset-x-0 -top-16 bottom-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 55% at 50% 40%, rgba(139,92,246,0.45), transparent 70%)",
                filter: "blur(60px)",
              }}
            />
            <Screenshot
              src="/openmes/01-dashboard-kpi.png"
              alt="AI Twin admin dashboard — real-time OEE, work orders, open issues"
              caption="Live · Admin dashboard · 24 Sept 2026 03:42"
              className="relative"
              aspect="16/10"
            />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Industries                                                         */
/* ------------------------------------------------------------------ */

const INDUSTRIES = [
  "Precision machining",
  "Heavy equipment",
  "Energy & oil-gas",
  "Logistics & ops",
  "Smart factories",
  "Industrial IoT",
];

function Industries() {
  return (
    <Section pad="tight" tone="surface">
      <Container>
        <Reveal>
          <div className="text-center">
            <Eyebrow>Built by CyberDX with intelligence for</Eyebrow>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <ul className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {INDUSTRIES.map((n) => (
              <li
                key={n}
                className="flex items-center justify-center text-center"
                style={{
                  padding: "16px 14px",
                  background: "var(--dx-bg)",
                  border: "1px solid var(--dx-hairline)",
                  borderRadius: 12,
                  color: "var(--dx-ink)",
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: "-0.005em",
                }}
              >
                {n}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Capability showcase — real screenshots                             */
/* ------------------------------------------------------------------ */

interface Capability {
  index: string;
  category: string;
  headline: string;
  lead: string;
  bullets: string[];
  screenshot: string;
  screenshotAlt: string;
  caption: string;
  side: "left" | "right";
}

const CAPABILITIES: Capability[] = [
  {
    index: "01",
    category: "Mission control",
    headline: "Every order, every line — on one screen.",
    lead:
      "Admin dashboard aggregates work orders, OEE per line, open issues, inbound QC pass-rate, and blocking exceptions in real time — so supervisors catch problems before they cascade.",
    bullets: [
      "Live KPI tiles: WOs, in-progress, pending, blocked",
      "OEE gauges per production line",
      "Inbound QC pass-rate (30-day rolling)",
      "Role-based views: Division, Shop, Operator",
    ],
    screenshot: "/openmes/01-dashboard-kpi.png",
    screenshotAlt: "Admin dashboard with real-time KPIs and OEE gauges",
    caption: "Dashboard · live KPIs",
    side: "right",
  },
  {
    index: "02",
    category: "Plan & schedule",
    headline: "From work order to Gantt in one platform.",
    lead:
      "Create, prioritize, and schedule work orders against shop capacity. The planner shows load across lines and days with drag-to-reschedule, so you resolve conflicts before they hit the floor.",
    bullets: [
      "Full WO lifecycle: create → route → execute → close",
      "Visual Gantt with capacity-aware scheduling",
      "Multi-level BOM and routing with drawings attached",
      "Import plans from Excel / Oracle ERP",
    ],
    screenshot: "/openmes/04-planning-gantt.png",
    screenshotAlt: "Production planner with capacity-aware Gantt view",
    caption: "Scheduler · Gantt",
    side: "left",
  },
  {
    index: "03",
    category: "Shop-floor execution",
    headline: "Monitor every shift, every station — live.",
    lead:
      "Shift Monitor shows station state, classified stops, speed loss, and scrap in real time. Operators classify stops as they happen; supervisors see throughput against target without chasing updates.",
    bullets: [
      "Live station state + current batch",
      "Classified stops: speed loss, changeover, scrap",
      "Actual vs. target throughput per minute",
      "Andon alerts auto-routed to supervisor",
    ],
    screenshot: "/openmes/11-shift-monitor.png",
    screenshotAlt: "Shift monitor with live station throughput and stop classification",
    caption: "Shift monitor · live",
    side: "right",
  },
  {
    index: "04",
    category: "Quality & maintenance",
    headline: "Inspection and maintenance, built into the flow.",
    lead:
      "Quality checkpoints trigger automatically by event or stage. Maintenance plans track every piece of equipment and inspection date. Both are tied to the work order, so audit trails are complete by default.",
    bullets: [
      "Trigger inspections by event or stage",
      "Equipment registry with calibration dates",
      "Preventive maintenance scheduler",
      "Checklist library per service group",
    ],
    screenshot: "/openmes/09-maintenance.png",
    screenshotAlt: "Maintenance plans with equipment calibration dates",
    caption: "Maintenance · PM schedule",
    side: "left",
  },
  {
    index: "05",
    category: "Cost reporting",
    headline: "Cost that follows every work order.",
    lead:
      "Per-WO cost rollup covers labor, materials, equipment, and overhead. Drill into any work order to see planned vs. actual. Export as PDF or Excel for finance review.",
    bullets: [
      "Per-WO cost breakdown (labor · materials · equipment)",
      "Planned vs. actual variance analysis",
      "Multi-dimensional cost reports",
      "PDF / Excel export for finance",
    ],
    screenshot: "/openmes/12-cost-report.png",
    screenshotAlt: "Per-work-order cost report with planned vs actual breakdown",
    caption: "Analytics · cost report",
    side: "right",
  },
];

function CapabilityShowcase() {
  return (
    <Section id="capabilities" pad="normal">
      <Container size="md">
        <div className="text-center">
          <Reveal>
            <Eyebrow align="center">Platform capabilities</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <Title align="center" className="mt-4">
              Everything you need to run a shop floor,
              <br />
              in one operational model.
            </Title>
          </Reveal>
          <Reveal delay={0.16}>
            <Lead align="center" className="mt-5 mx-auto max-w-xl">
              AI Twin ships with the capabilities a modern plant actually needs —
              and connects to the systems you already own instead of replacing them.
            </Lead>
          </Reveal>
        </div>
      </Container>

      {CAPABILITIES.map((cap, i) => (
        <div key={cap.index} className="mt-24 lg:mt-32">
          <Container>
            <div
              className="grid grid-cols-1 lg:grid-cols-5 items-center"
              style={{ gap: "clamp(32px, 5vw, 72px)" }}
            >
              <div className={cap.side === "right" ? "lg:col-span-2 lg:order-1" : "lg:col-span-2 lg:order-2"}>
                <Reveal>
                  <ProductBadge index={cap.index} category={cap.category} />
                  <Title className="mt-5">{cap.headline}</Title>
                  <Lead className="mt-5 max-w-xl">{cap.lead}</Lead>
                  <ul className="mt-7 space-y-3">
                    {cap.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3"
                        style={{ color: "var(--dx-ink-2)", fontSize: 15, lineHeight: 1.55 }}
                      >
                        <CheckCircle2
                          size={18}
                          style={{ color: "var(--dx-accent)", flex: "none", marginTop: 2 }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
              <div className={cap.side === "right" ? "lg:col-span-3 lg:order-2" : "lg:col-span-3 lg:order-1"}>
                <Reveal delay={0.08}>
                  <Screenshot
                    src={cap.screenshot}
                    alt={cap.screenshotAlt}
                    caption={cap.caption}
                    aspect="16/10"
                  />
                </Reveal>
              </div>
            </div>
          </Container>
          {i < CAPABILITIES.length - 1 ? (
            <div
              aria-hidden
              className="mx-auto mt-20"
              style={{
                height: 1,
                width: "min(70%, 720px)",
                background:
                  "linear-gradient(90deg, transparent, var(--dx-hairline), transparent)",
              }}
            />
          ) : null}
        </div>
      ))}
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Field mobile                                                       */
/* ------------------------------------------------------------------ */

function FieldMobile() {
  return (
    <Section pad="normal" tone="surface">
      <Container>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-center"
          style={{ gap: "clamp(32px, 6vw, 88px)" }}
        >
          <Reveal>
            <Eyebrow>Operators · tablet · phone</Eyebrow>
            <Title className="mt-4">
              Field-first for teams on the floor.
            </Title>
            <Lead className="mt-5 max-w-xl">
              The same work orders, checklists, and material pulls — now in a
              UI designed for gloves, bright shop lighting, and spotty wireless.
              Operators pick their area, scan a lot, and record progress in two
              taps.
            </Lead>
            <ul className="mt-7 space-y-3">
              {[
                "Area / shop pick before every action",
                "Lot scan and material consumption on-device",
                "Checklist and inspection capture with photos",
                "Offline queue with sync when back online",
              ].map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3"
                  style={{ color: "var(--dx-ink-2)", fontSize: 15, lineHeight: 1.55 }}
                >
                  <CheckCircle2 size={18} style={{ color: "var(--dx-accent)", flex: "none", marginTop: 2 }} />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-center justify-center">
              <div
                className="relative"
                style={{
                  width: "min(320px, 70%)",
                  aspectRatio: "9/19",
                  borderRadius: 36,
                  background: "#0a0618",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: 10,
                  boxShadow:
                    "0 40px 100px -24px rgba(139,92,246,0.45), 0 1px 0 rgba(255,255,255,0.08) inset",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 14,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 80,
                    height: 20,
                    background: "#000",
                    borderRadius: 999,
                    zIndex: 2,
                  }}
                />
                <div
                  className="relative overflow-hidden"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 28,
                    background: "#fff",
                  }}
                >
                  <img
                    src="/openmes/13-operators-mobile.png"
                    alt="Operator mobile UI — area pick"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Architecture                                                       */
/* ------------------------------------------------------------------ */

const ARCH_LAYERS: Array<{
  name: string;
  kind: string;
  desc: string;
  tags: string[];
}> = [
  {
    name: "Frappe · vsp_pms",
    kind: "Business layer",
    desc: "Approval workflows, request intake, acceptance records, certificates, cost rules — the processes your ops team runs every day.",
    tags: ["Workflows", "Approvals", "Documents", "Certificates"],
  },
  {
    name: "OpenMES",
    kind: "Execution layer",
    desc: "Real-time shop-floor execution: work orders, routing, stations, shift monitors, Andon, maintenance, and the OEE loop.",
    tags: ["Work orders", "OEE", "Andon", "Quality"],
  },
  {
    name: "ERPNext / Oracle",
    kind: "System of record",
    desc: "Materials, warehouse, financial transactions. AI Twin exchanges events — it does not duplicate the data your ERP already owns.",
    tags: ["Materials", "Warehouse", "Cost", "Finance"],
  },
];

function Architecture() {
  return (
    <Section id="architecture" pad="normal">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <Eyebrow align="center">Architecture</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <Title align="center" className="mt-4">
              One platform, three layers,
              <br />
              no shared database.
            </Title>
          </Reveal>
          <Reveal delay={0.16}>
            <Lead align="center" className="mt-5 mx-auto">
              Each layer owns its data. They exchange events over APIs with
              logging, retry, and reconciliation — so you can upgrade any
              component without breaking the others.
            </Lead>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          {ARCH_LAYERS.map((layer, i) => (
            <Reveal key={layer.name} delay={i * 0.06}>
              <div
                className="relative h-full p-7 flex flex-col"
                style={{
                  background: "var(--dx-surface)",
                  border: "1px solid var(--dx-hairline)",
                  borderRadius: "var(--dx-radius-lg)",
                }}
              >
                <div
                  aria-hidden
                  className="absolute top-0 left-7 right-7"
                  style={{
                    height: 1,
                    background:
                      "linear-gradient(90deg, transparent, var(--dx-accent), transparent)",
                    opacity: 0.5,
                  }}
                />
                <Eyebrow>
                  <span style={{ color: "var(--dx-accent)" }}>
                    0{i + 1}
                  </span>
                  <span style={{ color: "var(--dx-muted)", marginInline: 8 }}>
                    /
                  </span>
                  {layer.kind}
                </Eyebrow>
                <Head className="mt-5" style={{ fontFamily: "var(--dx-font-mono)", letterSpacing: "-0.015em" }}>
                  {layer.name}
                </Head>
                <Body className="mt-3">{layer.desc}</Body>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {layer.tags.map((t) => (
                    <li
                      key={t}
                      style={{
                        padding: "4px 10px",
                        border: "1px solid var(--dx-hairline)",
                        borderRadius: 999,
                        color: "var(--dx-ink-2)",
                        fontSize: 11,
                        fontFamily: "var(--dx-font-mono)",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Integrations                                                       */
/* ------------------------------------------------------------------ */

const INTEGRATIONS: Array<{
  group: string;
  items: Array<{ name: string; desc: string }>;
}> = [
  {
    group: "ERP · financial",
    items: [
      { name: "Oracle ERP", desc: "One-way sync of plans, materials, cost." },
      { name: "ERPNext", desc: "Shared BOM, routing, inventory, projected stock." },
    ],
  },
  {
    group: "People · identity",
    items: [
      { name: "TCNS / HRIS", desc: "Org tree, headcount, labor rates." },
      { name: "Keycloak SSO", desc: "OIDC / OAuth2 + MFA, group claims." },
    ],
  },
  {
    group: "Shop floor",
    items: [
      { name: "PLC / IoT", desc: "MQTT ingest, OPC UA, Modbus adapters." },
      { name: "Scanners · scales", desc: "Lot scan, weigh-in via web APIs." },
    ],
  },
  {
    group: "Reach",
    items: [
      { name: "My VSP portal", desc: "Dashboards via API / deep link / webview." },
      { name: "Webhook / API", desc: "Push KPIs and events to any downstream system." },
    ],
  },
];

function Integrations() {
  return (
    <Section id="integrations" pad="normal" tone="surface">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <Eyebrow align="center">Integrations</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <Title align="center" className="mt-4">
              Connects to the systems you already run.
            </Title>
          </Reveal>
          <Reveal delay={0.16}>
            <Lead align="center" className="mt-5 mx-auto">
              Every integration is an API or event-driven adapter with sync
              logs, retry, and reconciliation. No shared databases, no silent
              failures.
            </Lead>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
          {INTEGRATIONS.map((grp, i) => (
            <Reveal key={grp.group} delay={i * 0.05}>
              <div
                className="h-full p-7"
                style={{
                  background: "var(--dx-bg)",
                  border: "1px solid var(--dx-hairline)",
                  borderRadius: "var(--dx-radius-lg)",
                }}
              >
                <Eyebrow>{grp.group}</Eyebrow>
                <ul className="mt-5 space-y-4">
                  {grp.items.map((it) => (
                    <li
                      key={it.name}
                      className="flex items-start justify-between gap-6 pb-4"
                      style={{ borderBottom: "1px solid var(--dx-hairline)" }}
                    >
                      <div>
                        <div style={{ color: "var(--dx-ink)", fontWeight: 600, fontSize: 15 }}>
                          {it.name}
                        </div>
                        <div style={{ color: "var(--dx-muted)", fontSize: 13, marginTop: 2 }}>
                          {it.desc}
                        </div>
                      </div>
                      <span
                        style={{
                          background: "rgba(139,92,246,0.14)",
                          color: "var(--dx-accent)",
                          fontFamily: "var(--dx-font-mono)",
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "0.14em",
                          padding: "4px 8px",
                          borderRadius: 4,
                          flex: "none",
                          alignSelf: "flex-start",
                        }}
                      >
                        READY
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-10 text-center">
            <Body tone="faint">
              Also: webhook outbound, inbound REST, JDBC bridges, SFTP batch,
              and custom adapters on request.
            </Body>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Stats                                                              */
/* ------------------------------------------------------------------ */

function Stats() {
  return (
    <Section pad="normal">
      <Container>
        <Reveal>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-12"
            style={{ borderTop: "1px solid var(--dx-hairline)" }}
          >
            <StatCard value="98.7" unit="%" label="Traceable steps" caption="End-to-end audit coverage" />
            <StatCard value="−90" unit="%" label="Response latency" caption="vs. manual incident flow" />
            <StatCard value="24/7" label="Autonomous ops" caption="with human oversight" />
            <StatCard value="12" unit="+" label="Integrated systems" caption="ERPNext · OpenMES · IoT" />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Deployment                                                         */
/* ------------------------------------------------------------------ */

function Deployment() {
  const steps: Array<{ n: string; title: string; body: string; dur: string }> = [
    {
      n: "01",
      title: "Discovery",
      body: "Walk your shop floor, map existing systems, identify the first value stream.",
      dur: "2 weeks",
    },
    {
      n: "02",
      title: "Pilot deployment",
      body: "Stand up AI Twin on one line with real data. Train operators and supervisors.",
      dur: "4–6 weeks",
    },
    {
      n: "03",
      title: "Integrations",
      body: "Wire ERP, HRIS, SSO, and IoT adapters. Validate reconciliation and sync logs.",
      dur: "4 weeks",
    },
    {
      n: "04",
      title: "Rollout",
      body: "Scale to additional lines, divisions, and shifts. Localize UI (VI / EN / RU).",
      dur: "ongoing",
    },
  ];
  return (
    <Section id="deploy" pad="normal">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <Eyebrow align="center">Deployment</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <Title align="center" className="mt-4">
              From signal to production
              <br />
              in weeks, not quarters.
            </Title>
          </Reveal>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <div
                className="h-full p-6 relative"
                style={{
                  background: "var(--dx-surface)",
                  border: "1px solid var(--dx-hairline)",
                  borderRadius: "var(--dx-radius-lg)",
                }}
              >
                <div
                  style={{
                    color: "var(--dx-accent)",
                    fontFamily: "var(--dx-font-mono)",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                  }}
                >
                  {s.n}
                </div>
                <Head className="mt-4">{s.title}</Head>
                <Body className="mt-3">{s.body}</Body>
                <div
                  className="mt-5 pt-4 flex items-center justify-between"
                  style={{ borderTop: "1px solid var(--dx-hairline)" }}
                >
                  <span
                    style={{
                      color: "var(--dx-muted)",
                      fontFamily: "var(--dx-font-mono)",
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Duration
                  </span>
                  <span
                    style={{
                      color: "var(--dx-ink)",
                      fontFamily: "var(--dx-font-mono)",
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {s.dur}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Close CTA                                                          */
/* ------------------------------------------------------------------ */

function CloseCTA({ onContact }: { onContact?: () => void }) {
  return (
    <Section pad="roomy">
      <Container size="md">
        <Reveal>
          <div
            className="relative overflow-hidden text-center"
            style={{
              background: "linear-gradient(145deg, #15082b 0%, #1f0d3f 50%, #0a0618 100%)",
              border: "1px solid rgba(139,92,246,0.22)",
              borderRadius: "var(--dx-radius-xl)",
              padding: "clamp(48px, 7vw, 96px) clamp(32px, 5vw, 72px)",
            }}
          >
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(139,92,246,0.35), transparent 65%)",
              }}
            />
            <div className="relative">
              <Eyebrow tone="accent" align="center" className="mx-auto">
                Ready when you are
              </Eyebrow>
              <Display align="center" tone="ink" className="mt-5" style={{ color: "#fff" }}>
                Turn your facility into
                <br />
                an autonomous entity.
              </Display>
              <Lead align="center" className="mt-5 mx-auto max-w-xl" style={{ color: "rgba(255,255,255,0.68)" }}>
                We'll scope a deployment against your actual plant, systems,
                and backlog — not a sales deck.
              </Lead>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Button size="lg" variant="primary" onClick={() => onContact?.()} trailing={<ArrowRight size={16} />}>
                  Request a deployment
                </Button>
                <Button size="lg" variant="ghost" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}>
                  Download brief
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

function TwinFooter() {
  const groups: Array<{ title: string; links: string[] }> = [
    { title: "Platform", links: ["Mission control", "Plan & schedule", "Shift monitor", "Cost reporting"] },
    { title: "Industries", links: ["Precision machining", "Heavy equipment", "Energy", "Logistics"] },
    { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
  ];
  return (
    <footer style={{ background: "var(--dx-bg)" }}>
      <Container>
        <Hairline />
        <div className="py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <a href="#top" className="inline-flex items-center gap-2.5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 5L19 19M19 5L5 19" stroke="var(--dx-accent)" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
              <span style={{ color: "var(--dx-ink)", fontWeight: 600, letterSpacing: "0.22em", fontSize: 12 }}>CYBERDX</span>
            </a>
            <Body className="mt-4 max-w-sm">
              AI Twin is CyberDX's industrial intelligence platform — turning
              facilities into connected, autonomous environments.
            </Body>
          </div>
          {groups.map((g) => (
            <div key={g.title}>
              <Eyebrow>{g.title}</Eyebrow>
              <ul className="mt-5 space-y-3">
                {g.links.map((l) => (
                  <li key={l}>
                    <a href="#" style={{ color: "var(--dx-ink-2)", fontSize: 14, letterSpacing: "-0.005em" }}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Hairline />
        <div
          className="py-8 flex flex-wrap items-center justify-between gap-4"
          style={{ color: "var(--dx-muted)", fontSize: 12 }}
        >
          <span>© {new Date().getFullYear()} CyberDX. All rights reserved.</span>
          <span style={{ fontFamily: "var(--dx-font-mono)", letterSpacing: "0.1em" }}>v4.0 · AI TWIN</span>
        </div>
      </Container>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Public entrypoint                                                  */
/* ------------------------------------------------------------------ */

interface TwinLandingProps {
  onSwitch?: () => void;
  onContact?: () => void;
}

export default function TwinLanding({ onSwitch, onContact }: TwinLandingProps) {
  return (
    <DxRoot theme="dark" accent="twin" id="top">
      <style>{`@keyframes dxLivePulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.55; transform: scale(1.15); } }`}</style>
      <TwinNav onSwitch={onSwitch} onContact={onContact} />
      <Hero onContact={onContact} />
      <Industries />
      <CapabilityShowcase />
      <FieldMobile />
      <Architecture />
      <Integrations />
      <Stats />
      <Deployment />
      <CloseCTA onContact={onContact} />
      <TwinFooter />
    </DxRoot>
  );
}
