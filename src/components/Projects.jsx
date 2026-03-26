import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { HR, Cap } from "./atoms";
import { Gallery } from "./Gallery";
import { PROJECTS } from "../data/cvData";
import "../styles/projects.css";

export function Projects() {
  const [expanded, setExpanded] = useState(null);
  return (
    <section id="projects">
      <HR />
      <div className="projects__header">
        <div className="sg projects__header-grid">
          <div className="section-label"><Cap>Projects</Cap></div>
          <p className="projects__intro">
            Personal projects built end-to-end — architecture, implementation, deployment.
          </p>
        </div>
      </div>
      <HR />
      {PROJECTS.map(p => (
        <ProjectRow key={p.index} p={p} open={expanded === p.index} toggle={() => setExpanded(expanded === p.index ? null : p.index)} />
      ))}
    </section>
  );
}

function ProjectRow({ p, open, toggle }) {
  const [ref, iv] = useInView(0.1);
  return (
    <div ref={ref} className={`project-row ${iv ? "visible" : ""}`}>
      <div onClick={toggle} className="pr">
        <span className="project-row__idx">{p.index}</span>
        <span className="project-row__title">{p.title}</span>
        <span className="project-row__year h-sm">{p.year}</span>
        <span className={`project-row__toggle ${open ? "open" : ""}`}>+</span>
      </div>
      <div className={`project-row__detail ${open ? "open" : ""}`}>
        <div className="pd">
          <div />
          <div>
            {p.description && <p className="project-desc">{p.description}</p>}
            <div className="project-tags">
              {p.stack.map(s => (
                <span key={s} className="project-tag">{s}</span>
              ))}
            </div>
            <ul className="bullet-list">
              {p.bullets.map((b, i) => (
                <li key={i} className="bullet-item">
                  <span className="bullet-dash">—</span>
                  <span className="bullet-text">{b}</span>
                </li>
              ))}
            </ul>
            <div className="project-links">
              {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="project-link--primary">Live Demo</a>}
              {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className={p.live ? "project-link--secondary" : "project-link--primary"}>GitHub</a>}
            </div>
            <Gallery images={p.screenshots} />
          </div>
          <div className="project-sidebar">
            <div className="project-sidebar__block">
              <Cap className="project-sidebar__label">Type</Cap>
              <span className="project-sidebar__value">{p.type}</span>
            </div>
            <div className="project-sidebar__block">
              <Cap className="project-sidebar__label">Year</Cap>
              <span className="project-sidebar__value">{p.year}</span>
            </div>
            <div className="project-sidebar__block">
              <Cap className="project-sidebar__label">Deploy</Cap>
              <span className="project-sidebar__value">{p.deploy}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
