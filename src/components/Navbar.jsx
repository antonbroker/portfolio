import { useState } from "react";
import { useScrollY } from "../hooks/useScrollY";

export function Navbar({ dark, setDark, active, t }) {
  const y = useScrollY();
  const [open, setOpen] = useState(false);
  const scrolled = y > 40;
  const links = ["home", "about", "stack", "projects", "experience", "contact"];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 300,
      background: scrolled ? (dark ? "rgba(10,10,10,0.95)" : "rgba(246,246,244,0.95)") : "transparent",
      borderBottom: scrolled ? `1px solid ${t.border}` : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      transition: "background 0.3s, border-color 0.3s",
    }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 28px", height: 52, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#home" style={{ textDecoration: "none", color: t.text, fontSize: 10, fontWeight: 600, letterSpacing: "0.13em", textTransform: "uppercase" }}>
          Anton Iosifov
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 0 }} className="desk">
          {links.map(l => (
            <a key={l} href={`#${l}`} style={{ height: 52, padding: "0 13px", display: "flex", alignItems: "center", fontSize: 10, fontWeight: 600, letterSpacing: "0.13em", textTransform: "uppercase", textDecoration: "none", color: active === l ? t.text : t.muted, borderBottom: `1px solid ${active === l ? t.text : "transparent"}`, marginBottom: -1, transition: "color 0.2s, border-color 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.color = t.text; }}
              onMouseLeave={e => { e.currentTarget.style.color = active === l ? t.text : t.muted; }}
            >{l}</a>
          ))}
          <button type="button" onClick={() => setDark(d => !d)} style={{ marginLeft: 40, padding: "5px 10px", border: `1px solid ${t.border}`, background: "transparent", cursor: "pointer", color: t.muted, fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = t.text; e.currentTarget.style.color = t.text; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.color = t.muted; }}
          >{dark ? "LIGHT" : "DARK"}</button>
        </div>
        <button type="button" onClick={() => setOpen(o => !o)} className="mob" style={{ background: "none", border: "none", cursor: "pointer", color: t.text, fontSize: 20 }}>
          {open ? "\u2715" : "\u2261"}
        </button>
      </div>
      {open && (
        <div style={{ background: dark ? "rgba(10,10,10,0.98)" : "rgba(246,246,244,0.98)", backdropFilter: "blur(12px)", borderTop: `1px solid ${t.border}` }}>
          {links.map(l => (
            <a key={l} href={`#${l}`} onClick={() => setOpen(false)} style={{ display: "block", padding: "13px 28px", fontSize: 10, fontWeight: 600, letterSpacing: "0.13em", textTransform: "uppercase", textDecoration: "none", color: active === l ? t.text : t.muted, borderLeft: `2px solid ${active === l ? t.text : "transparent"}` }}>{l}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
