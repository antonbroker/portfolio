import { useInView } from "../hooks/useInView";
import { Section, fade } from "./atoms";

export function About({ t }) {
  const [ref, iv] = useInView();
  return (
    <Section id="about" label="About" t={t}>
      <div ref={ref} style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start",
        ...fade(iv),
      }} className="ai">
        <div>
          <div style={{
            aspectRatio: "3/4", background: t.surface,
            border: `1px solid ${t.border}`, marginBottom: 20,
            display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
          }}>
            <img
              src="/img/1758025908213.jpg"
              alt="Anton Iosifov"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              onError={e => { e.currentTarget.style.display = "none"; }}
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: t.border }}>
            {[
              ["B.Sc.  Computer Science", "HIT · GPA 88"],
              ["Stack",    "Full-Stack"],
              ["Languages",     "EN  ·  HE  ·  RU"],
              ["Status",   "Open to work"],
            ].map(([k, v]) => (
              <div key={k} style={{ background: t.bg, padding: "14px 16px" }}>
                <div style={{ fontSize: 10, color: t.muted, letterSpacing: "0.1em",
                  textTransform: "uppercase", marginBottom: 4 }}>{k}</div>
                <div style={{ fontSize: 12, color: t.text, fontFamily: "'Courier New', Courier, monospace" }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 style={{
            fontFamily: "'Times New Roman', Georgia, serif",
            fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 400, lineHeight: 1.15,
            letterSpacing: "-0.02em", color: t.text, margin: "0 0 28px",
          }}>
            Writing code<br /><em>that ships.</em>
          </h2>
          {[
            "Full-Stack Developer with a Computer Science degree from HIT and hands-on startup experience. I've worked in a real production environment — contributing to a Laravel-based SaaS product, building data pipelines, and working within an Agile team.",
            "My personal projects go deeper: Node.js/Express backends with clean layered architecture, React frontends with TypeScript, MongoDB with aggregation pipelines, and OpenAI API integration for real features — not demos.",
            "I care about code quality, clear architecture, and actually shipping things. Fluent in English, Hebrew, and Russian.",
          ].map((p, i) => (
            <p key={i} style={{ fontSize: 14, lineHeight: 1.8, color: t.muted, margin: "0 0 16px" }}>{p}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
