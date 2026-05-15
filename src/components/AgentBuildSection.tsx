interface AgentCapability {
  title: string;
  description: string;
  tag: string;
}

const AGENT_PLATFORMS = ["GitHub Copilot", "Claude", "OpenAI Codex"];

const AGENT_CAPABILITIES: AgentCapability[] = [
  {
    tag: "Design Layer",
    title: "Agent Architecture",
    description:
      "Build structured agent systems with planning, memory, and tool-use loops, then optimize each flow for GitHub Copilot coding tasks, Claude reasoning depth, and OpenAI Codex execution reliability.",
  },
  {
    tag: "Execution Layer",
    title: "Enterprise Integration",
    description:
      "Connect Copilot-, Claude-, and Codex-powered agents to GitHub, Slack, Jira, and internal APIs so teams can automate engineering, operations, and support workflows end-to-end.",
  },
  {
    tag: "Control Layer",
    title: "Reliability & Governance",
    description:
      "Apply evals, observability, fallback routing, and role-based access across Copilot, Claude, and OpenAI Codex to keep agent outputs measurable, auditable, and enterprise-safe.",
  },
];

export default function AgentBuildSection() {
  return (
    <section id="agent-build" className="agent-build">
      <div className="container">
        <div className="sec-cont">
          <div className="sec-head-wrp agent-build-head">
            <div className="sec-title-card">
              <h2 className="txt24 medium h100">Build AI Agents</h2>
            </div>
            <div className="agent-build-head-copy">
              <div className="txt18 agent-build-subtitle sz14-mob">
                We design and ship production AI agents on top of GitHub Copilot, Claude, and OpenAI Codex - choosing the best model path for each task to accelerate execution, improve output quality, and scale delivery.
              </div>
              <div className="agent-build-platforms" aria-label="Supported platforms">
                {AGENT_PLATFORMS.map((platform) => (
                  <span key={platform} className="agent-build-platform-pill">
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="agent-build-grid">
            {AGENT_CAPABILITIES.map((capability) => (
              <article key={capability.title} className="agent-build-card">
                <div className="agent-build-card-tag">{capability.tag}</div>
                <div className="txt24 semi upper">{capability.title}</div>
                <p className="txt18 agent-build-copy">{capability.description}</p>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
