import { stackGroups } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Stack() {
  return (
    <section id="stack" className="section section-paper stack-section">
      <div className="shell">
        <SectionHeading
          number="02"
          eyebrow="Capabilities"
          title="A stack chosen around the problem."
          description="Strongest in TypeScript, React, Next.js, and Node.js — with practical delivery across mobile, data, cloud, and applied AI."
        />

        <div className="stack-groups">
          {stackGroups.map((group, groupIndex) => (
            <Reveal className="stack-group" key={group.label}>
              <div className="stack-group-head">
                <span>{String(groupIndex + 1).padStart(2, "0")}</span>
                <h3>{group.label}</h3>
              </div>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
