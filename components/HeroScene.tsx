const frames = [
  { src: "/img/hero/scene-stage1-chaos.webp", className: "is-chaos" },
  { src: "/img/hero/scene-stage2-converging.webp", className: "is-converging" },
  { src: "/img/hero/scene-stage3-opening.webp", className: "is-opening" },
] as const;

export function HeroScene() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <div className="hero-scene-frame">
        {frames.map((frame, index) => (
          <img
            key={frame.src}
            className={`hero-scene-layer ${frame.className}`}
            src={frame.src}
            alt=""
            width="1264"
            height="843"
            loading="eager"
            decoding="async"
            fetchPriority={index === 0 ? "high" : "auto"}
          />
        ))}
        <span className="hero-scene-glow" />
      </div>
    </div>
  );
}
