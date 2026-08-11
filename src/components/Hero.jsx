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
          <Cap>Full-Stack Software Engineer</Cap>
          <Cap>Israel · Remote</Cap>
          <Cap>Open to work</Cap>
        </div>

        <div className="hero-name-row">
          <h1 className={`hero__name ${m}`}>
            Anton<br />Iosifov
          </h1>
        </div>

        <div className={`hero-bottom ${m}`}>
          <p className="hero__desc">
            I build production-ready web, mobile, cloud, and AI-enabled products across frontend, backend, data, integrations, and deployment.
            <br /><br />
            From requirements and architecture to testing and production support, I take ownership of the complete engineering lifecycle.
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
