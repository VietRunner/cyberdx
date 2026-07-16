import { useEffect, useState, type ReactNode } from "react";
import { ChevronRight, Menu, X, ArrowUpRight, Check, ArrowLeft } from "lucide-react";
import { PILLARS, type Pillar } from "../utils/beaverContent";

/* NOTE: This page renders inside the CyberDX app, which loads a global Webflow
   stylesheet. That reset is *unlayered* and beats Tailwind's layered utilities
   on bare <nav>/<section>/<a> elements — so this page uses <div> for containers
   and <button> for anything needing a background, and pins dark text inline. */

const HERO_VIDEO = "/0_Technology_Data_Visualization_3840x2160.mov";

type PillarKey = Pillar["key"];

const NAV_PILLARS = PILLARS.map((p) => ({ key: p.key, label: p.name, num: p.num }));

const RESOURCES = [
  { label: "Docs", badge: undefined as string | undefined },
  { label: "Blog", badge: undefined },
  { label: "Careers", badge: "24" },
  { label: "Book a Call", badge: undefined },
];

const INTEGRATIONS = [
  "Slack",
  "Notion",
  "HubSpot",
  "Google",
  "Salesforce",
  "Zapier",
  "Airtable",
  "Linear",
];

interface Partner {
  node: ReactNode;
  link?: string;
}

const PARTNERS: Partner[] = [
  {
    node: (
      <span className="text-lg font-medium tracking-tight">
        Slack<span className="text-[#f97316]"> /</span>
      </span>
    ),
    link: "Case study",
  },
  {
    node: <span className="text-xl font-bold uppercase tracking-widest">Notion</span>,
    link: "Read more",
  },
  {
    node: (
      <span className="text-lg font-medium">
        <span className="text-white/40">_</span>zapier
      </span>
    ),
    link: "Case study",
  },
  { node: <span className="text-sm">(hubspot)</span> },
  {
    node: <span className="text-xs uppercase tracking-[0.3em] font-medium">Salesforce</span>,
  },
  { node: <span className="text-base font-medium tracking-tight">airtable</span> },
  { node: <span className="text-lg italic font-light">Linear</span> },
  { node: <span className="text-sm font-medium">Intercom</span>, link: "Read more" },
  { node: <span className="text-sm">Google Workspace</span> },
  {
    node: (
      <span className="text-xs leading-tight text-center">
        <span className="block text-[10px] tracking-wider">automation</span>
        <span className="block text-[10px] tracking-wider">cloud</span>
      </span>
    ),
  },
];

/* Reusable dark-text primary button (dark text pinned inline — see note above) */
function PrimaryButton({
  children,
  className = "",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ color: "#0e0e0e" }}
      className={`group flex items-center gap-1.5 bg-white font-medium hover:bg-white/90 transition-colors ${className}`}
    >
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Announcement bar                                                  */
/* ------------------------------------------------------------------ */

function AnnouncementBar() {
  return (
    <div className="relative z-10 flex items-center justify-center py-2 px-4 bg-black/10 border-b border-white/[0.06] font-mono">
      <a
        href="#"
        className="flex items-center gap-1 text-[11px] text-white/70 uppercase tracking-wider hover:text-white/90 transition-colors"
      >
        Introducing AI Beaver — automation by CyberDX
        <ChevronRight className="w-3 h-3" />
      </a>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Navbar                                                            */
/* ------------------------------------------------------------------ */

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      title="AI Beaver home"
      className="flex items-center gap-2 cursor-pointer"
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="text-white text-sm font-semibold tracking-tight uppercase">AI Beaver</span>
      <span className="text-white/30 text-[11px] tracking-wider">/ CyberDX</span>
    </button>
  );
}

function PillarMenu({
  onSelectPillar,
  activePillar,
  className = "",
}: {
  onSelectPillar: (k: PillarKey) => void;
  activePillar: PillarKey | null;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {NAV_PILLARS.map((p) => {
        const active = activePillar === p.key;
        return (
          <button
            key={p.key}
            type="button"
            onClick={() => onSelectPillar(p.key)}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-[11px] uppercase tracking-wider text-white/80 transition-colors ${
              active ? "bg-[#f97316]" : "bg-[#f97316]/60 hover:bg-[#f97316]/80"
            }`}
          >
            {p.label}
            <span className="text-white/40 text-[10px]">{p.num}</span>
          </button>
        );
      })}
    </div>
  );
}

function Navbar({
  onMenuToggle,
  menuOpen,
  onHome,
  onSelectPillar,
  activePillar,
  onContact,
}: {
  onMenuToggle: () => void;
  menuOpen: boolean;
  onHome: () => void;
  onSelectPillar: (k: PillarKey) => void;
  activePillar: PillarKey | null;
  onContact?: () => void;
}) {
  return (
    <div className="flex items-start justify-between px-5 md:px-8 py-3 font-mono">
      <div className="flex flex-col items-start gap-3">
        <Logo onClick={onHome} />
        <PillarMenu
          onSelectPillar={onSelectPillar}
          activePillar={activePillar}
          className="hidden lg:flex"
        />
      </div>

      {/* Right: links + CTAs */}
      <div className="hidden md:flex items-center gap-5 pt-1">
        {RESOURCES.map((r) => (
          <a
            key={r.label}
            href="#"
            onClick={(e) => {
              if (r.label === "Book a Call") {
                e.preventDefault();
                onContact?.();
              }
            }}
            className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-white/60 hover:text-white transition-colors"
          >
            {r.label}
            {r.badge && (
              <span className="text-[10px] text-white/40 bg-white/[0.06] px-1.5 py-0.5 rounded-sm">
                {r.badge}
              </span>
            )}
          </a>
        ))}
        <PrimaryButton onClick={onContact} className="text-[11px] uppercase tracking-wider px-3 py-1.5">
          Start Building
          <ChevronRight className="w-3 h-3 opacity-60" />
        </PrimaryButton>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={onMenuToggle}
        aria-label="Toggle menu"
        className="md:hidden relative z-[110] flex items-center justify-center w-9 h-9 text-white"
      >
        <Menu
          className={`w-5 h-5 absolute transition-all duration-300 ease-out ${
            menuOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
          }`}
        />
        <X
          className={`w-5 h-5 absolute transition-all duration-300 ease-out ${
            menuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
          }`}
        />
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile menu                                                       */
/* ------------------------------------------------------------------ */

function MobileMenu({
  open,
  onClose,
  onSelectPillar,
  onContact,
}: {
  open: boolean;
  onClose: () => void;
  onSelectPillar: (k: PillarKey) => void;
  onContact?: () => void;
}) {
  const item = (delay: number): React.CSSProperties => ({
    transitionDelay: open ? `${delay}ms` : "0ms",
    transform: open ? "translateX(0)" : "translateX(20px)",
    opacity: open ? 1 : 0,
  });

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[105] bg-black/60 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
      <div
        className={`fixed top-0 right-0 z-[106] h-full w-[85%] max-w-[320px] bg-[#141414] border-l border-white/[0.06] shadow-2xl mobile-menu-panel flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-20 pb-8 px-6">
          <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-3 px-1">Products</div>
          {NAV_PILLARS.map((p, i) => (
            <button
              key={p.key}
              type="button"
              onClick={() => {
                onSelectPillar(p.key);
                onClose();
              }}
              className="mobile-menu-item w-full flex items-center justify-between px-3 py-3 text-sm text-white/80 hover:text-white hover:bg-white/[0.04] rounded"
              style={item(80 + i * 50)}
            >
              {p.label}
              <span className="text-[10px] text-white/30 font-mono">{p.num}</span>
            </button>
          ))}

          <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-3 mt-6 px-1">Resources</div>
          {RESOURCES.map((r, i) => (
            <a
              key={r.label}
              href="#"
              onClick={(e) => {
                if (r.label === "Book a Call") {
                  e.preventDefault();
                  onClose();
                  onContact?.();
                }
              }}
              className="mobile-menu-item flex items-center gap-2 px-3 py-3 text-sm text-white/60 hover:text-white hover:bg-white/[0.04] rounded"
              style={item(280 + i * 50)}
            >
              {r.label}
              {r.badge && (
                <span className="text-[10px] text-white/40 bg-white/[0.06] px-1.5 py-0.5 rounded-sm">
                  {r.badge}
                </span>
              )}
            </a>
          ))}
        </div>

        <div
          className="mobile-menu-item mt-auto px-6 pb-8 flex flex-col gap-3"
          style={{
            transitionDelay: open ? "500ms" : "0ms",
            transform: open ? "translateY(0)" : "translateY(16px)",
            opacity: open ? 1 : 0,
          }}
        >
          <PrimaryButton
            onClick={() => {
              onClose();
              onContact?.();
            }}
            className="justify-center py-3 text-[11px] uppercase tracking-wider rounded w-full"
          >
            Start Building
            <ChevronRight className="w-3 h-3 opacity-60" />
          </PrimaryButton>
        </div>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Landing (home) content                                            */
/* ------------------------------------------------------------------ */

function Hero({ onContact }: { onContact?: () => void }) {
  return (
    <div className="relative min-h-[85vh] sm:min-h-[78vh] flex flex-col justify-end px-5 md:px-8 pt-24 sm:pt-20 pb-6 sm:pb-8">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "72% center", opacity: 1, filter: "none", transform: "none" }}
        src={HERO_VIDEO}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8">
        <div className="relative flex flex-col items-start gap-3 sm:gap-4 max-w-lg p-5 -m-5 bg-[#0e0e0e]/55 border border-white/[0.04] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
          <h1 className="flex flex-col gap-1.5">
            <span className="text-white/30 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium">
              The AI Automation Platform
            </span>
            <span
              className="text-shimmer text-white/90 text-[26px] sm:text-[32px] md:text-[36px] font-normal leading-[1.15]"
              data-text="Automate Your Workflows"
            >
              Automate Your Workflows
            </span>
          </h1>

          <p className="text-white/45 text-[13px] sm:text-[15px] leading-[1.7] max-w-md">
            Design, deploy, and continuously improve automations across the everyday tools
            your business runs on — one integrated platform for agents, workflows, and
            insights.
          </p>

          <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-medium mt-1">
            <button
              type="button"
              onClick={onContact}
              style={{ color: "#0e0e0e" }}
              className="group flex items-center gap-1.5 bg-white px-3 sm:px-3.5 py-2 hover:bg-white/90 transition-colors font-medium"
            >
              Start Building
              <ChevronRight className="w-3 h-3 opacity-60 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              type="button"
              onClick={onContact}
              className="flex items-center px-3 sm:px-3.5 py-2 text-white/90 bg-[#f97316]/20 border border-[#f97316]/25 hover:bg-[#f97316]/30 transition-colors"
            >
              Book a Call
            </button>
          </div>

          <div className="text-white/46 text-xs sm:text-sm font-mono mt-1">
            <span className="text-[#f97316]">$</span>{" "}
            <span className="cursor-blink text-white/45">npx create-beaver</span>
          </div>
        </div>

        <div className="relative text-sm pb-3 pr-4 pt-3 shrink-0 lg:translate-y-2">
          <div className="absolute -inset-x-8 -inset-y-5 -z-10 bg-[radial-gradient(at_82%_50%,rgba(249,115,22,0.10)_0px,rgba(249,115,22,0.04)_28%,rgba(255,255,255,0.02)_48%,rgba(255,255,255,0)_72%)]" />
          <div className="text-white/50 text-[11px] sm:text-xs mb-2">Integrates with</div>
          <div className="flex flex-wrap items-center gap-x-2 sm:gap-x-2.5 gap-y-1.5">
            {INTEGRATIONS.map((name, i) => (
              <span key={name} className="flex items-center gap-x-2 sm:gap-x-2.5">
                {i > 0 && <span className="text-white/25">/</span>}
                <span className="text-white/60 whitespace-nowrap text-[12px] sm:text-[13px]">{name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Partners() {
  return (
    <div className="bg-[#0e0e0e] px-5 md:px-8">
      <div className="partner-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border border-[#f97316]/20">
        {PARTNERS.map((p, i) => {
          const inner = (
            <>
              {p.link && (
                <span className="absolute top-0 right-0 flex items-center gap-1 px-1.5 sm:px-2 py-1 sm:py-1.5 text-[9px] sm:text-[10px] uppercase tracking-wider text-[#ffb86b] bg-[#f97316]/10 border-l border-b border-[#f97316]/20 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                  {p.link}
                  <ArrowUpRight className="w-2.5 h-2.5 opacity-50" />
                </span>
              )}
              <span className="text-white/60 text-center">{p.node}</span>
            </>
          );
          const cls =
            "relative flex items-center justify-center h-[80px] sm:h-[100px] p-3 sm:p-4 group transition-colors border-[#f97316]/10 hover:bg-[#f97316]/[0.06]";
          return p.link ? (
            <a key={i} href="#" className={cls}>
              {inner}
            </a>
          ) : (
            <div key={i} className={cls}>
              {inner}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Pillar page (team-first: Sales → Operations → Back office)        */
/* ------------------------------------------------------------------ */

function PillarPage({
  pillar,
  onSelectPillar,
  onHome,
  onContact,
}: {
  pillar: Pillar;
  onSelectPillar: (k: PillarKey) => void;
  onHome: () => void;
  onContact?: () => void;
}) {
  const others = PILLARS.filter((p) => p.key !== pillar.key);
  return (
      <div className="bg-[#0e0e0e]">
      {/* Hero */}
      <div className="relative px-5 md:px-8 pt-28 sm:pt-32 pb-16 border-b border-[#f97316]/20 overflow-hidden">
        <div className="absolute -top-24 right-0 w-[540px] h-[420px] -z-0 bg-[radial-gradient(at_70%_30%,rgba(249,115,22,0.14),transparent_60%)]" />
        <div className="relative max-w-3xl">
          <button
            type="button"
            onClick={onHome}
            className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-white/40 hover:text-white/80 transition-colors mb-6"
          >
            <ArrowLeft className="w-3 h-3" /> AI Beaver
          </button>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#ffb86b] mb-4">
            {pillar.num} / {pillar.name}
          </div>
          <h1
            className="text-shimmer text-white/90 text-[32px] sm:text-[44px] md:text-[52px] font-normal leading-[1.08]"
            data-text={pillar.heading}
          >
            {pillar.heading}
          </h1>
          <p className="mt-5 text-white/60 text-[15px] sm:text-[17px] leading-[1.7] max-w-xl">
            {pillar.sub}
          </p>
          <div className="mt-7 flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-medium">
            <PrimaryButton onClick={onContact} className="px-3.5 py-2">
              Start Building
              <ChevronRight className="w-3 h-3 opacity-60 group-hover:translate-x-0.5 transition-transform" />
            </PrimaryButton>
            <button
              type="button"
              onClick={onContact}
              className="flex items-center px-3.5 py-2 text-white/90 bg-[#f97316]/20 border border-[#f97316]/25 hover:bg-[#f97316]/30 transition-colors"
            >
              Book a Call
            </button>
          </div>
          <div className="mt-7 font-mono text-[11px] text-white/40">
            Scenario: <span className="text-[#f97316]">Customer Onboarding</span> · Sales →
            Operations → Back office
          </div>
        </div>
      </div>

      {/* Team blocks */}
      {pillar.teams.map((t, i) => (
        <div key={t.team} className="px-5 md:px-8 py-14 sm:py-20 border-b border-[#f97316]/15">
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 max-w-6xl">
            <div className="md:col-span-4">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#ffb86b] mb-3">
                {String(i + 1).padStart(2, "0")} · For {t.team}
              </div>
              <h2 className="text-white/90 text-2xl sm:text-[28px] font-normal leading-tight">
                {t.headline}
              </h2>
              <div className="mt-6 flex flex-col">
                <span className="text-[#f97316] text-3xl sm:text-4xl font-medium">{t.metric.value}</span>
                <span className="text-white/40 text-[11px] uppercase tracking-wider mt-1">
                  {t.metric.label}
                </span>
              </div>
            </div>
            <div className="md:col-span-8 border-l border-[#f97316]/20 pl-0 md:pl-8">
              <p className="text-white/60 text-[15px] leading-[1.7] max-w-xl">{t.body}</p>
              <ul className="mt-6 space-y-3">
                {t.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-white/70 text-sm sm:text-[15px] leading-[1.6]">
                    <Check className="w-4 h-4 text-[#f97316] mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}

      {/* Explore other pillars */}
      <div className="px-5 md:px-8 py-14 sm:py-20">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#ffb86b] mb-6">
          Explore the platform
        </div>
        <div className="grid sm:grid-cols-3 gap-px bg-[#f97316]/20 border border-[#f97316]/20 max-w-5xl">
          {others.map((o) => (
            <button
              key={o.key}
              type="button"
              onClick={() => onSelectPillar(o.key)}
              className="group flex flex-col items-start gap-2 bg-[#0e0e0e] hover:bg-[#f97316]/[0.06] transition-colors p-6 text-left"
            >
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#ffb86b]">
                {o.num}
              </span>
              <span className="text-white/90 text-lg flex items-center gap-1">
                {o.name}
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-60 transition-opacity" />
              </span>
              <span className="text-white/45 text-[13px] leading-[1.6]">{o.heading}</span>
            </button>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start gap-4 max-w-xl">
          <h3 className="text-white/90 text-2xl sm:text-3xl font-normal leading-tight">
            Automate onboarding end to end.
          </h3>
          <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-medium">
            <PrimaryButton onClick={onContact} className="px-3.5 py-2">
              Start Building
              <ChevronRight className="w-3 h-3 opacity-60 group-hover:translate-x-0.5 transition-transform" />
            </PrimaryButton>
            <button
              type="button"
              onClick={onContact}
              className="flex items-center px-3.5 py-2 text-white/90 bg-[#f97316]/20 border border-[#f97316]/25 hover:bg-[#f97316]/30 transition-colors"
            >
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page shell                                                        */
/* ------------------------------------------------------------------ */

interface BeaverLandingProps {
  onSwitch?: () => void;
  onContact?: () => void;
}

export default function BeaverLanding({ onSwitch, onContact }: BeaverLandingProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePillar, setActivePillar] = useState<PillarKey | null>(() => {
    if (typeof window === "undefined") return null;
    const q = new URLSearchParams(window.location.search).get("pillar");
    return PILLARS.some((p) => p.key === q) ? (q as PillarKey) : null;
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

  // Scroll to top when switching pages.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [activePillar]);

  const pillar = activePillar ? PILLARS.find((p) => p.key === activePillar) ?? null : null;

  return (
    <div className="beaver-root min-h-screen bg-[#0e0e0e]">
      <div
        className={`fixed top-0 left-0 right-0 z-[100] transition-transform duration-300 ${
          scrolled ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <AnnouncementBar />
      </div>

      <div
        className={`fixed left-0 right-0 z-[99] transition-all duration-300 ${
          scrolled ? "top-0" : "top-[33px]"
        }`}
      >
        <Navbar
          onMenuToggle={() => setMenuOpen((v) => !v)}
          menuOpen={menuOpen}
          onHome={() => setActivePillar(null)}
          onSelectPillar={setActivePillar}
          activePillar={activePillar}
          onContact={onContact}
        />
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} onSelectPillar={setActivePillar} onContact={onContact} />

      <div>
        {pillar ? (
          <PillarPage
            pillar={pillar}
            onSelectPillar={setActivePillar}
            onHome={() => setActivePillar(null)}
            onContact={onContact}
          />
        ) : (
          <>
            <Hero onContact={onContact} />
            <Partners />
          </>
        )}
      </div>

      {/* keep a reference to the switch handler for the app-level launcher */}
      {onSwitch ? null : null}
    </div>
  );
}
