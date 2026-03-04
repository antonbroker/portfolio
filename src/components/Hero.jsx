import { useState, useEffect } from "react";
import { Cap } from "./atoms";

export function Hero({ t }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const id = setTimeout(() => setMounted(true), 60); return () => clearTimeout(id); }, []);

  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      justifyContent: "center", padding: "100px 28px 72px",
    }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", width: "100%" }}>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
          borderBottom: `1px solid ${t.border}`, paddingBottom: 20, marginBottom: 52,
          opacity: mounted ? 1 : 0, transition: "opacity 0.6s 0.1s",
        }} className="hero-strip">
          <Cap t={t}>Full-Stack Developer</Cap>
          <Cap t={t} style={{ textAlign: "center" }}>Tel Aviv, Israel</Cap>
          <Cap t={t} style={{ textAlign: "right" }}>Open to work</Cap>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr",
          marginBottom: 56,
        }} className="hero-name-row">
          <h1 style={{
            fontFamily: "'Times New Roman', Georgia, serif",
            fontSize: "clamp(52px, 9.5vw, 130px)",
            fontWeight: 400, lineHeight: 0.88,
            letterSpacing: "-0.03em", color: t.text,
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s 0.2s, transform 0.8s 0.2s cubic-bezier(0.16,1,0.3,1)",
          }}>
            Anton<br /><em>Iosifov</em>
          </h1>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 200px",
          gap: 40, alignItems: "start",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.7s 0.5s, transform 0.7s 0.5s cubic-bezier(0.16,1,0.3,1)",
        }} className="hero-bottom">
          <p style={{ fontSize: 14, lineHeight: 1.8, color: t.muted, margin: 0, maxWidth: 540 }}>
            Full-Stack Developer with a strong backend focus and production experience in startup environments.
            I build scalable systems, design clean architectures, and turn complex requirements into reliable digital products.
            <br /><br />
            Driven by impact, ownership, and continuous growth.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <a href="#projects" style={{
              padding: "11px 0", background: t.text, color: t.inv,
              fontSize: 10, fontWeight: 600, letterSpacing: "0.14em",
              textTransform: "uppercase", textDecoration: "none",
              textAlign: "center", transition: "opacity 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.opacity = "0.7"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
            >View Projects</a>
            <a href="/Anton_Iosifov_CV.pdf" download style={{
              padding: "11px 0",
              border: `1px solid ${t.border}`, color: t.muted,
              fontSize: 10, fontWeight: 600, letterSpacing: "0.14em",
              textTransform: "uppercase", textDecoration: "none",
              textAlign: "center", transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = t.borderH; e.currentTarget.style.color = t.text; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.color = t.muted; }}
            >Download CV</a>
          </div>
        </div>

      </div>
    </section>
  );
}
