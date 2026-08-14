import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const facts = [
  ["Education", "B.Sc. Computer Science · HIT · Grade 90"],
  ["Languages", "Russian · Hebrew · English"],
  ["Work modes", "On-site · Hybrid · Remote"],
  ["Location", "Rishon LeZion · Israel"],
];

export function About() {
  return (
    <section id="about" className="section section-paper">
      <div className="shell">
        <SectionHeading
          number="01"
          eyebrow="About"
          title="Thinking in systems. Building in code."
        />

        <Reveal className="about-layout section-content">
          <div className="about-portrait">
            <div className="about-image-frame">
              <Image
                src="/img/1758025908213.webp"
                alt="Portrait of Anton Iosifov"
                fill
                sizes="(max-width: 760px) 100vw, 38vw"
              />
            </div>
            <span className="portrait-caption">Anton Iosifov · Israel · 2026</span>
          </div>

          <div className="about-copy">
            <p className="about-lead">
              I’m a Full-Stack Software Engineer based in Israel, building reliable,
              production-ready software across frontend, backend, data, integrations, and
              deployment.
            </p>
            <p>
              My experience spans a product startup, commercial freelance development, and
              independent product development.
            </p>
            <p>
              At Platforma365, I worked across the stack on internal SaaS products, developing
              JavaScript frontend features, REST APIs, Laravel backend services, and MySQL-based
              data-processing workflows.
            </p>
            <p>
              Today, I build client and independent products ranging from multilingual business
              platforms and a custom real-estate CRM to Ceru, a six-language expense-sharing
              mobile app, and AI-enabled workflows for real businesses.
            </p>
            <p>
              I work across the software delivery lifecycle: requirements analysis, system
              design, UI and frontend development, backend architecture, APIs, databases,
              authentication, AI integrations, automated testing, analytics, deployment, and
              production monitoring.
            </p>
            <p>
              I use AI-assisted engineering and agentic workflows to accelerate research,
              implementation, testing, and delivery while maintaining ownership of architecture,
              validation, security, and code quality.
            </p>

            <dl className="about-facts">
              {facts.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
