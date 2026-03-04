import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { HR, Cap } from "./atoms";
import { PROJECTS } from "../data/cvData";

export function Projects({ t }) {
  const [expanded, setExpanded] = useState(null);
  return (
    <section id="projects">
      <HR t={t} />
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "72px 28px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 56, marginBottom: 48 }} className="sg">
          <div style={{ paddingTop: 1 }}><Cap t={t}>Projects</Cap></div>
          <p style={{ fontSize: 14, color: t.muted, margin: 0, lineHeight: 1.7 }}>
            Two personal projects built end-to-end — architecture, implementation, deployment.
          </p>
        </div>
      </div>
      <HR t={t} />
      {PROJECTS.map(p => (
        <ProjectRow key={p.index} p={p} t={t} open={expanded === p.index} toggle={() => setExpanded(expanded === p.index ? null : p.index)} />
      ))}
    </section>
  );
}

function ProjectRow({ p, t, open, toggle }) {
  const [ref, iv] = useInView(0.1);
  const [hov, setHov] = useState(false);
  return (
    <div ref={ref} style={{ borderBottom: `1px solid ${t.border}`, opacity: iv ? 1 : 0, transition: "opacity 0.5s" }}>
      <div onClick={toggle} style={{
        maxWidth: 1400, margin: "0 auto", padding: "0 28px",
        display: "grid", gridTemplateColumns: "44px 1fr 100px 24px",
        gap: 24, alignItems: "center", height: 68,
        cursor: "pointer",
        background: hov ? t.surface : "transparent",
        transition: "background 0.15s",
      }} className="pr" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
        <span style={{ fontSize: 11, color: t.muted, fontFamily: "'Courier New', Courier, monospace" }}>{p.index}</span>
        <span style={{ fontSize: "clamp(14px, 1.6vw, 17px)", fontWeight: 500, color: t.text }}>{p.title}</span>
        <span style={{ fontSize: 10, color: t.muted, textAlign: "right", letterSpacing: "0.08em" }} className="h-sm">{p.year}</span>
        <span style={{ fontSize: 16, color: t.muted, lineHeight: 1, display: "inline-block", transform: open ? "rotate(45deg)" : "rotate(0)", transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1)" }}>+</span>
      </div>
      <div style={{ maxHeight: open ? 600 : 0, overflow: "hidden", transition: "max-height 0.45s cubic-bezier(0.16,1,0.3,1)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "4px 28px 40px", display: "grid", gridTemplateColumns: "44px 1fr 260px", gap: 24 }} className="pd">
          <div />
          <div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
              {p.stack.map(s => (
                <span key={s} style={{ padding: "4px 10px", border: `1px solid ${t.border}`, fontSize: 11, color: t.muted, fontFamily: "'Courier New', Courier, monospace" }}>{s}</span>
              ))}
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
              {p.bullets.map((b, i) => (
                <li key={i} style={{ display: "flex", gap: 10, marginBottom: 7 }}>
                  <span style={{ color: t.muted, flexShrink: 0, fontSize: 12, marginTop: 3 }}>—</span>
                  <span style={{ fontSize: 14, color: t.muted, lineHeight: 1.75 }}>{b}</span>
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href={p.live} target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: t.text, textDecoration: "none", borderBottom: `1px solid ${t.borderH}`, paddingBottom: 2, transition: "opacity 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.opacity = "0.6"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
              >Live Demo</a>
              <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: t.muted, textDecoration: "none", borderBottom: `1px solid ${t.border}`, paddingBottom: 2, transition: "color 0.2s, border-color 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = t.text; e.currentTarget.style.borderColor = t.borderH; }}
                onMouseLeave={e => { e.currentTarget.style.color = t.muted; e.currentTarget.style.borderColor = t.border; }}
              >GitHub</a>
            </div>
          </div>
          <div style={{ border: `1px solid ${t.border}`, height: "fit-content" }}>
            <div style={{ padding: "14px 16px", borderBottom: `1px solid ${t.border}` }}>
              <Cap t={t} style={{ display: "block", marginBottom: 6 }}>Type</Cap>
              <span style={{ fontSize: 12, color: t.text, fontFamily: "'Courier New', Courier, monospace" }}>Personal Project</span>
            </div>
            <div style={{ padding: "14px 16px", borderBottom: `1px solid ${t.border}` }}>
              <Cap t={t} style={{ display: "block", marginBottom: 6 }}>Year</Cap>
              <span style={{ fontSize: 12, color: t.text, fontFamily: "'Courier New', Courier, monospace" }}>{p.year}</span>
            </div>
            <div style={{ padding: "14px 16px" }}>
              <Cap t={t} style={{ display: "block", marginBottom: 6 }}>Deploy</Cap>
              <span style={{ fontSize: 12, color: t.text, fontFamily: "'Courier New', Courier, monospace" }}>Render · Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
