import { HeroThreads } from "./HeroThreads";

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <HeroThreads />

      <div className="hero-content shell">
        <div className="hero-copy">
          <p className="hero-role">Anton Iosifov · Full-Stack Software Engineer</p>
          <h1 id="hero-title">
            Building software
            <span>from first idea</span>
            <em>to production.</em>
          </h1>
          <p className="hero-summary">
            I engineer reliable web, mobile, cloud, and AI-enabled systems across frontend,
            backend, data, integrations, testing, and deployment.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore selected work <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-ghost" href="#contact">
              Contact me <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-rail" aria-label="Profile highlights">
          <div>
            <span>Based in</span>
            <strong>Israel · Remote worldwide</strong>
          </div>
          <div>
            <span>Current focus</span>
            <strong>Full-stack · Mobile · Applied AI</strong>
          </div>
          <div>
            <span>Foundation</span>
            <strong>B.Sc. Computer Science · HIT</strong>
          </div>
        </div>
      </div>

      <div className="hero-marquee" aria-hidden="true">
        <div>
          <span>Systems thinking</span><i>✦</i><span>Production ownership</span><i>✦</i>
          <span>Clear engineering</span><i>✦</i><span>Systems thinking</span><i>✦</i>
          <span>Production ownership</span><i>✦</i><span>Clear engineering</span><i>✦</i>
        </div>
      </div>
    </section>
  );
}
