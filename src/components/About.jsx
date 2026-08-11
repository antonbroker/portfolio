import { useInView } from "../hooks/useInView";
import { Section } from "./atoms";
import "../styles/about.css";

export function About() {
  const [ref, iv] = useInView();
  return (
    <Section id="about" label="About">
      <div ref={ref} className={`ai fade ${iv ? "visible" : ""}`}>
        <div className="about__left">
          <div className="about__img-wrapper">
            <img
              src="/img/1758025908213.jpg"
              alt="Anton Iosifov"
              className="about__img"
              onError={e => { e.currentTarget.style.display = "none"; }}
            />
          </div>
          <div className="about__info-grid">
            {[
              ["B.Sc. Computer Science", "HIT · Grade 90"],
              ["Focus", "Full-Stack Engineering"],
              ["Languages", "English · Hebrew · Russian"],
              ["Availability", "Israel · Remote"],
            ].map(([k, v]) => (
              <div key={k} className="about__info-cell">
                <div className="about__info-key">{k}</div>
                <div className="about__info-val">{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="about__heading">
            Thinking in systems.<br /><em>Building in code.</em>
          </h2>
          {[
            "I'm a Full-Stack Software Engineer based in Israel, building reliable, production-ready software across frontend, backend, data, integrations, and deployment.",
            "My experience spans a product startup, commercial freelance development, and independent products. I work across the delivery lifecycle — from requirements and system design through implementation, testing, deployment, and production support.",
            "I use AI-assisted engineering and agentic workflows to accelerate research, implementation, and testing while maintaining ownership of architecture, validation, and code quality.",
          ].map((p, i) => (
            <p key={i} className="about__text">{p}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
