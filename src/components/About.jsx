import { useInView } from "../hooks/useInView";
import { Section } from "./atoms";
import "../styles/about.css";

export function About() {
  const [ref, iv] = useInView();
  return (
    <Section id="about" label="About">
      <div ref={ref} className={`ai fade ${iv ? "visible" : ""}`}>
        <div>
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
              ["B.Sc.  Computer Science", "HIT · GPA 88"],
              ["Stack", "Full-Stack"],
              ["Languages", "EN  ·  HE  ·  RU"],
              ["Status", "Open to work"],
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
            Writing code<br /><em>that ships.</em>
          </h2>
          {[
            "Full-Stack Developer with a Computer Science degree from HIT and hands-on startup experience. I've worked in a real production environment — contributing to a Laravel-based SaaS product, building data pipelines, and working within an Agile team.",
            "My personal projects go deeper: Node.js/Express backends with clean layered architecture, React frontends with TypeScript, MongoDB with aggregation pipelines, and OpenAI API integration for real features — not demos.",
            "I care about code quality, clear architecture, and actually shipping things. Fluent in English, Hebrew, and Russian.",
          ].map((p, i) => (
            <p key={i} className="about__text">{p}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
