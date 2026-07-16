/* Content for the four AI Beaver pillar pages.
   Each pillar is presented "team-first": Sales → Operations → Back office,
   all tied to the customer-onboarding journey. Copy is realistic placeholder
   text — edit freely. */

export interface TeamBlock {
  team: "Sales" | "Operations" | "Back office";
  headline: string;
  body: string;
  bullets: string[];
  metric: { value: string; label: string };
}

export interface Pillar {
  key: "workflows" | "agents" | "integrations" | "insights";
  name: string;
  num: string;
  heading: string;
  sub: string;
  teams: TeamBlock[];
}

export const PILLARS: Pillar[] = [
  {
    key: "workflows",
    name: "Workflows",
    num: "01",
    heading: "Onboarding that runs itself",
    sub: "Multi-step flows carry a new customer from signed deal to fully live — no manual handoffs between Sales, Operations, and the Back office.",
    teams: [
      {
        team: "Sales",
        headline: "Kick off onboarding the moment a deal closes",
        body: "When a deal is marked won, AI Beaver spins up the onboarding flow automatically — no forms to fill, no ticket to file.",
        bullets: [
          "Auto-create the onboarding project from the closed CRM opportunity",
          "Send the branded welcome sequence and schedule the kickoff call",
          "Notify the assigned Operations owner with full deal context",
        ],
        metric: { value: "-90%", label: "handoff delay" },
      },
      {
        team: "Operations",
        headline: "Orchestrate provisioning across every system",
        body: "A single flow provisions accounts, assigns resources, and tracks each step to completion across your tools.",
        bullets: [
          "Provision accounts, licenses, and environments in sequence",
          "Branch the flow by plan, region, or product automatically",
          "Escalate blocked steps before they slip past SLA",
        ],
        metric: { value: "3x", label: "faster setup" },
      },
      {
        team: "Back office",
        headline: "Trigger contracts, invoices, and records automatically",
        body: "Every downstream document and ledger entry fires from the same flow, so finance and compliance are never the bottleneck.",
        bullets: [
          "Generate the contract and route it for e-signature",
          "Raise the first invoice and sync it to the ERP",
          "Write a complete, timestamped record for audit",
        ],
        metric: { value: "100%", label: "audit trail" },
      },
    ],
  },
  {
    key: "agents",
    name: "Agents",
    num: "02",
    heading: "Agents that do the busywork",
    sub: "Context-aware AI agents handle the repetitive, judgment-light work of onboarding so your teams stay on the high-value moments.",
    teams: [
      {
        team: "Sales",
        headline: "Draft outreach and answer new-customer questions",
        body: "Agents write the first-week touchpoints and reply to routine questions in your voice, with deal context in hand.",
        bullets: [
          "Draft personalized welcome and check-in emails for review",
          "Answer common onboarding questions from your knowledge base",
          "Summarize account history before every handoff call",
        ],
        metric: { value: "6 hrs", label: "saved / rep / week" },
      },
      {
        team: "Operations",
        headline: "Resolve setup blockers and chase missing info",
        body: "Agents monitor each onboarding, unblock what they can, and politely pursue the details they can't.",
        bullets: [
          "Detect stalled steps and attempt an automated fix first",
          "Chase customers for missing data with follow-ups",
          "Hand off to a human with a clean summary when needed",
        ],
        metric: { value: "72%", label: "auto-resolved" },
      },
      {
        team: "Back office",
        headline: "Reconcile data and flag exceptions",
        body: "Agents cross-check the numbers and surface only the exceptions that need a human decision.",
        bullets: [
          "Match orders, invoices, and payments across systems",
          "Flag mismatches and duplicates with a suggested fix",
          "Prepare the exception queue for a one-click review",
        ],
        metric: { value: "-80%", label: "manual checks" },
      },
    ],
  },
  {
    key: "integrations",
    name: "Integrations",
    num: "03",
    heading: "Connected to your whole stack",
    sub: "AI Beaver plugs into the tools each team already lives in, so onboarding data flows end to end without copy-paste.",
    teams: [
      {
        team: "Sales",
        headline: "Native to your CRM",
        body: "Two-way sync with your CRM keeps every onboarding tied to the account and visible to the deal owner.",
        bullets: [
          "Salesforce & HubSpot two-way sync",
          "Trigger flows from stage changes and closed-won",
          "Write onboarding status back onto the account",
        ],
        metric: { value: "2-way", label: "CRM sync" },
      },
      {
        team: "Operations",
        headline: "Wired into your delivery tools",
        body: "Connect ticketing, provisioning, and comms so Operations runs onboarding from one orchestrated place.",
        bullets: [
          "Jira, Linear, and ServiceNow for tasks and tickets",
          "Slack and email for automated notifications",
          "Provisioning APIs and webhooks for custom systems",
        ],
        metric: { value: "40+", label: "connectors" },
      },
      {
        team: "Back office",
        headline: "In sync with finance and compliance",
        body: "Push clean, structured records straight into the systems finance and legal depend on.",
        bullets: [
          "NetSuite, QuickBooks, and Xero for invoicing",
          "DocuSign for contracts and signatures",
          "SOC 2-aligned logging for every action",
        ],
        metric: { value: "0", label: "copy-paste steps" },
      },
    ],
  },
  {
    key: "insights",
    name: "Insights",
    num: "04",
    heading: "See every onboarding in real time",
    sub: "Live dashboards give each team the exact view it needs — from activation velocity to compliance exceptions.",
    teams: [
      {
        team: "Sales",
        headline: "From closed-won to activated",
        body: "See how fast new customers reach first value, and which accounts need a nudge to get there.",
        bullets: [
          "Time-to-activation by rep, segment, and product",
          "At-risk onboardings surfaced early for outreach",
          "Expansion signals the moment a customer is live",
        ],
        metric: { value: "+18%", label: "faster activation" },
      },
      {
        team: "Operations",
        headline: "Find the bottleneck before it bites",
        body: "Spot where onboardings stall, how long each step takes, and where SLAs are at risk — in real time.",
        bullets: [
          "Step-level cycle times and stage funnel",
          "SLA breach alerts before the deadline",
          "Workload balancing across the team",
        ],
        metric: { value: "real-time", label: "bottleneck view" },
      },
      {
        team: "Back office",
        headline: "Compliance and exceptions at a glance",
        body: "Track every document, ledger entry, and exception with a report that's always audit-ready.",
        bullets: [
          "Exception rate and resolution time trends",
          "Complete, exportable audit trail",
          "Revenue-recognition readiness by account",
        ],
        metric: { value: "audit-ready", label: "any time" },
      },
    ],
  },
];
