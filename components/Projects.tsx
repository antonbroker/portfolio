"use client";

import { useRef, useState } from "react";
import { additionalProjects, projects, type Project } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const detailsId = `project-details-${project.index}`;

  return (
    <article className={`project-card accent-${project.accent} ${open ? "is-open" : ""}`}>
      <div className="project-card-main">
        <div className="project-index">{project.index}</div>

        <div className="project-media">
          {project.cover ? (
            <img
              src={project.cover}
              alt={project.coverAlt || `${project.title} project cover`}
              width="1600"
              height="900"
              loading={project.index === "01" ? "eager" : "lazy"}
              decoding="async"
            />
          ) : (
            <div className="project-media-fallback" aria-hidden="true">
              <span>{project.shortTitle}</span>
              <i />
              <i />
              <i />
            </div>
          )}
          <span className="project-type">{project.type}</span>
        </div>

        <div className="project-copy">
          <div className="project-meta">
            <span>{project.year}</span>
            <span>{project.status}</span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul className="project-stack" aria-label={`${project.title} technologies`}>
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="project-actions">
            {project.live ? (
              <a href={project.live} target="_blank" rel="noreferrer">
                Live project <span aria-hidden="true">↗</span>
              </a>
            ) : null}
            {project.github ? (
              <a href={project.github} target="_blank" rel="noreferrer">
                Source <span aria-hidden="true">↗</span>
              </a>
            ) : null}
            <button
              type="button"
              aria-expanded={open}
              aria-controls={detailsId}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? "Close case notes" : "Open case notes"}
              <span aria-hidden="true">{open ? "−" : "+"}</span>
            </button>
          </div>
        </div>
      </div>

      <div id={detailsId} className="project-details" hidden={!open}>
        <div>
          <p className="detail-label">What I delivered</p>
          <ul className="project-highlights">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        {open && project.gallery?.length ? (
          <div className="project-gallery" aria-label={`${project.title} gallery`}>
            {project.gallery.map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                width="1200"
                height="750"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export function Projects() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);

  const goToProject = (index: number) => {
    const nextIndex = Math.max(0, Math.min(projects.length - 1, index));
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.scrollTo({
      left: carousel.clientWidth * nextIndex,
      behavior: "smooth",
    });
    setActiveProject(nextIndex);
  };

  const handleCarouselScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel || carousel.clientWidth === 0) return;
    const nextIndex = Math.round(carousel.scrollLeft / carousel.clientWidth);
    setActiveProject(Math.max(0, Math.min(projects.length - 1, nextIndex)));
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="shell">
        <SectionHeading
          number="03"
          eyebrow="Selected work"
          title="Products, platforms, and systems that ship."
          description="Commercial client work, independent products, and focused engineering projects — described by outcome first, implementation second."
        />

        <div className="projects-carousel-controls" aria-label="Project carousel controls">
          <p>
            <span>{String(activeProject + 1).padStart(2, "0")}</span>
            <i>/</i>
            {String(projects.length).padStart(2, "0")}
          </p>
          <div>
            <button
              type="button"
              aria-label="Show previous project"
              disabled={activeProject === 0}
              onClick={() => goToProject(activeProject - 1)}
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Show next project"
              disabled={activeProject === projects.length - 1}
              onClick={() => goToProject(activeProject + 1)}
            >
              →
            </button>
          </div>
        </div>

        <div
          className="projects-list"
          ref={carouselRef}
          onScroll={handleCarouselScroll}
          aria-label="Selected projects carousel"
        >
          {projects.map((project) => (
            <ProjectCard key={project.index} project={project} />
          ))}
        </div>

        <div className="additional-work">
          <div className="additional-work-heading">
            <p>Additional work</p>
            <h3>More systems, shipped.</h3>
          </div>
          <div>
            {additionalProjects.map((project) => (
              <a key={project.title} href={project.href} target="_blank" rel="noreferrer">
                <span>{project.year}</span>
                <div>
                  <strong>{project.title}</strong>
                  <small>{project.type}</small>
                </div>
                <p>{project.description}</p>
                <i aria-hidden="true">↗</i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
