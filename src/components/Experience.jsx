import { useInView } from "../hooks/useInView";
import { Section, Cap } from "./atoms";
import { EXPERIENCE, EDUCATION } from "../data/cvData";
import "../styles/experience.css";

export function Experience() {
  const [ref, iv] = useInView(0.1);
  return (
    <Section id="experience" label="Experience">
      <div ref={ref} className={`fade ${iv ? "visible" : ""}`}>
        {EXPERIENCE.map((e, i) => (
          <div key={i}>
            <div className="exp-header">
              <div>
                <div className="exp-role">{e.role}</div>
                <div className="exp-company">{e.company} · {e.type}</div>
              </div>
              <span className="exp-period">{e.period}</span>
            </div>
            <ul className="bullet-list">
              {e.bullets.map((b, j) => (
                <li key={j} className="bullet-item">
                  <span className="bullet-dash">—</span>
                  <span className="bullet-text">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="edu-section">
          <Cap className="edu-label">Education</Cap>
          {EDUCATION.map((e, i) => (
            <div key={i} className={`edu-entry ${i < EDUCATION.length - 1 ? "edu-entry--separated" : ""}`}>
              <div>
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-school">{e.school}</div>
                <div className="edu-note">{e.note}</div>
              </div>
              <span className="exp-period">{e.period}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
