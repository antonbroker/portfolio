import { useInView } from "../hooks/useInView";
import { Section } from "./atoms";
import { STACK } from "../data/cvData";
import { mono } from "./atoms";

export function Stack({ t }) {
  const [ref, iv] = useInView(0.05);
  const cats = [...new Set(STACK.map(s => s.cat))];
  return (
    <Section id="stack" label="Stack" t={t}>
      <div ref={ref}>
        <p style={{ fontSize: 14, color: t.muted, margin: "0 0 36px", lineHeight: 1.7 }}>
          Technologies I've used in production and personal projects.
        </p>
        {cats.map((cat, ci) => (
          <div key={cat} style={{ marginBottom: ci < cats.length - 1 ? 24 : 0 }}>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: t.muted, paddingBottom: 8, borderBottom: `1px solid ${t.border}`, marginBottom: 12 }}>
              {cat}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {STACK.filter(s => s.cat === cat).map((s, i) => (
                <span key={s.name} style={{
                  padding: "5px 12px", border: `1px solid ${t.border}`,
                  fontSize: 12, color: t.muted, ...mono,
                  opacity: iv ? 1 : 0,
                  transform: iv ? "translateY(0)" : "translateY(6px)",
                  transition: `opacity 0.4s ${(ci * 4 + i) * 35}ms, transform 0.4s ${(ci * 4 + i) * 35}ms, border-color 0.2s, color 0.2s`,
                  cursor: "default",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = t.borderH; e.currentTarget.style.color = t.text; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.color = t.muted; }}
                >{s.name}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
