import { useInView } from "../hooks/useInView";
import { Section, Cap, fade } from "./atoms";
import { EXPERIENCE, EDUCATION } from "../data/cvData";

export function Experience({ t }) {
  const [ref, iv] = useInView(0.1);
  return (
    <Section id="experience" label="Experience" t={t}>
      <div ref={ref} style={{ ...fade(iv) }}>
        {EXPERIENCE.map((e, i) => (
          <div key={i}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "baseline", marginBottom: 16, gap: 16, flexWrap: "wrap" }}>
              <div>
                <div style={{ fontSize: "clamp(15px, 1.8vw, 18px)", fontWeight: 600, color: t.text, marginBottom: 3 }}>{e.role}</div>
                <div style={{ fontSize: 12, color: t.muted, letterSpacing: "0.04em" }}>{e.company} · {e.type}</div>
              </div>
              <span style={{ fontSize: 11, color: t.muted, fontFamily: "'Courier New', Courier, monospace", whiteSpace: "nowrap" }}>{e.period}</span>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {e.bullets.map((b, j) => (
                <li key={j} style={{ display: "flex", gap: 10, marginBottom: 7 }}>
                  <span style={{ color: t.muted, flexShrink: 0, fontSize: 12, marginTop: 3 }}>—</span>
                  <span style={{ fontSize: 14, color: t.muted, lineHeight: 1.75 }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div style={{ marginTop: 56, paddingTop: 48, borderTop: `1px solid ${t.border}` }}>
          <Cap t={t} style={{ display: "block", marginBottom: 28 }}>Education</Cap>
          {EDUCATION.map((e, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "1fr auto", alignItems: "baseline", gap: 16,
              marginBottom: i < EDUCATION.length - 1 ? 24 : 0,
              paddingBottom: i < EDUCATION.length - 1 ? 24 : 0,
              borderBottom: i < EDUCATION.length - 1 ? `1px solid ${t.border}` : "none",
            }}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, color: t.text, marginBottom: 3 }}>{e.degree}</div>
                <div style={{ fontSize: 12, color: t.muted }}>{e.school}</div>
                <div style={{ fontSize: 11, color: t.muted, fontFamily: "'Courier New', Courier, monospace", marginTop: 4 }}>{e.note}</div>
              </div>
              <span style={{ fontSize: 11, color: t.muted, fontFamily: "'Courier New', Courier, monospace", whiteSpace: "nowrap" }}>{e.period}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
