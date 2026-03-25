import { useState } from "react";
import { useScrollY } from "../hooks/useScrollY";
import "../styles/navbar.css";

export function Navbar({ dark, setDark, active }) {
  const y = useScrollY();
  const [open, setOpen] = useState(false);
  const scrolled = y > 40;
  const links = ["home", "about", "stack", "projects", "experience", "contact"];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#home" className="navbar__logo">
          Anton Iosifov
        </a>
        <div className="navbar__links desk">
          {links.map(l => (
            <a key={l} href={`#${l}`} className={`navbar__link ${active === l ? "active" : ""}`}>{l}</a>
          ))}
          <button type="button" onClick={() => setDark(d => !d)} className="navbar__theme-btn">
            {dark ? "LIGHT" : "DARK"}
          </button>
        </div>
        <button type="button" onClick={() => setOpen(o => !o)} className="navbar__mob-btn mob">
          {open ? "\u2715" : "\u2261"}
        </button>
      </div>
      {open && (
        <div className="navbar__mobile-menu">
          {links.map(l => (
            <a key={l} href={`#${l}`} onClick={() => setOpen(false)} className={`navbar__mob-link ${active === l ? "active" : ""}`}>{l}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
