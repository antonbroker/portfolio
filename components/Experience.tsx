import { education, experience } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section section-paper experience-section">
      <div className="shell">
        <SectionHeading
          number="04"
          eyebrow="Experience"
          title="Ownership from brief to production support."
          description="Commercial freelance delivery, startup product work, and focused full-stack training built on a computer-science foundation."
        />

        <div className="timeline section-content">
          {experience.map((item) => (
            <Reveal className="timeline-item" key={`${item.company}-${item.period}`}>
              <div className="timeline-period">{item.period}</div>
              <div className="timeline-role">
                <h3>{item.role}</h3>
                <p>{item.company}</p>
                <span>{item.meta}</span>
              </div>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="education-block section-content">
          <div className="education-title">
            <span>05</span>
            <h2>Education & certification</h2>
          </div>
          <div>
            {education.map((item) => (
              <Reveal className="education-item" key={item.title}>
                <span>{item.period}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.institution}</p>
                  <small>{item.detail}</small>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
