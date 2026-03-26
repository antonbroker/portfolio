import { useState, useEffect } from "react";
import { Cap } from "./atoms";
import "../styles/hero.css";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const id = setTimeout(() => setMounted(true), 60); return () => clearTimeout(id); }, []);
  const m = mounted ? "mounted" : "";

  return (
    <section id="home" className="hero">
      <div className="hero__container">
        <div className={`hero-strip ${m}`}>
          <Cap>Full-Stack Developer</Cap>
          <Cap>Tel Aviv, Israel</Cap>
          <Cap>Open to work</Cap>
        </div>

        <div className="hero-name-row">
          <h1 className={`hero__name ${m}`}>
            Anton<br />Iosifov
          </h1>
        </div>

        <div className={`hero-bottom ${m}`}>
          <p className="hero__desc">
            Full-Stack Developer with a strong backend focus and production experience in startup environments.
            I build scalable systems, design clean architectures, and turn complex requirements into reliable digital products.
            <br /><br />
            Driven by impact, ownership, and continuous growth.
          </p>
          <div className="hero__buttons">
            <a href="#projects" className="hero__btn-primary">View Projects</a>
            <a href="/Anton_Iosifov_CV.pdf" target="_blank" rel="noopener noreferrer" className="hero__btn-secondary">View CV</a>
          </div>
        </div>
      </div>
    </section>
  );
}
