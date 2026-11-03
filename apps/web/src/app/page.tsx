import { MapPreview } from "@/components/map-preview";

const capabilities = [
  {
    number: "01",
    title: "Find fishable water",
    description:
      "Explore places with the access and fishing rules made clear—not guessed.",
  },
  {
    number: "02",
    title: "Plan around the day",
    description:
      "Bring together time, conditions, target species, and the gear you have.",
  },
  {
    number: "03",
    title: "Adapt when it is slow",
    description:
      "Get contextual fishing advice informed by your trip and what you have tried.",
  },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="WaterScout home">
          <span className="brand-mark" aria-hidden="true">
            W
          </span>
          <span>WaterScout</span>
        </a>
        <span className="topbar-note">
          Early foundation · no verified waters yet
        </span>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">A clearer way to plan a fishing trip</p>
          <h1>Find water worth fishing—and know how to reach it.</h1>
          <p className="hero-description">
            WaterScout is being built to bring fishing spots, legal access,
            current rules, conditions, and an AI fishing guide into one
            evidence-backed trip plan.
          </p>
          <div className="status-pill">
            <span className="status-dot" />
            Foundation build — no real spot or regulation data loaded
          </div>
        </div>

        <div className="map-card" aria-label="Map development preview">
          <MapPreview />
          <div className="map-caption">
            <span>Map renderer connected</span>
            <span>Demo tiles · no fishing spots</span>
          </div>
        </div>
      </section>

      <section className="capabilities" aria-label="Product direction">
        {capabilities.map((capability) => (
          <article className="capability-card" key={capability.number}>
            <span className="capability-number">{capability.number}</span>
            <h2>{capability.title}</h2>
            <p>{capability.description}</p>
          </article>
        ))}
      </section>

      <footer className="trust-note">
        <span className="trust-icon" aria-hidden="true">
          ✓
        </span>
        <p>
          WaterScout will show its sources—and say “unknown” when access or
          regulations cannot be verified. This development build is not for
          fishing or navigation decisions.
        </p>
      </footer>
    </main>
  );
}
