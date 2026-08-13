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
          description="I sit comfortably across the stack and stay accountable for what happens after the code ships."
        />

        <Reveal className="about-layout">
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
              I’m a Full-Stack Software Engineer building reliable, production-ready software
              across frontend, backend, data, integrations, and deployment.
            </p>
            <p>
              My background combines startup product development, commercial freelance work,
              and independent products. Today I deliver multilingual platforms, architect a
              real-estate CRM, build mobile software, and integrate AI where it creates real
              product value.
            </p>
            <p>
              I work across the complete delivery lifecycle: requirements, system design, UI,
              backend architecture, APIs, databases, authentication, automated testing,
              analytics, deployment, and production monitoring.
            </p>
            <p>
              AI-assisted engineering and agentic workflows accelerate my research,
              implementation, and validation. Architecture, testing, security, and code quality
              remain my responsibility.
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
