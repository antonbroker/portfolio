import { useInView } from "../hooks/useInView";
import { Section } from "./atoms";
import { STACK } from "../data/cvData";
import "../styles/stack.css";

export function Stack() {
  const [ref, iv] = useInView(0.05);
  const cats = [...new Set(STACK.map(s => s.cat))];
  return (
    <Section id="stack" label="Stack">
      <div ref={ref}>
        <p className="stack__intro">
          Technologies I've used in production and personal projects.
        </p>
        {cats.map((cat, ci) => (
          <div key={cat} className="stack__category">
            <div className="stack__cat-label">{cat}</div>
            <div className="stack__tags">
              {STACK.filter(s => s.cat === cat).map((s, i) => (
                <span
                  key={s.name}
                  className={`stack-tag ${iv ? "visible" : ""}`}
                  style={{ transitionDelay: `${(ci * 4 + i) * 35}ms` }}
                >{s.name}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
