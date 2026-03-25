import "../styles/atoms.css";

export function HR() {
  return <div className="hr" />;
}

export function Cap({ children, style, className = "" }) {
  return (
    <span className={`cap ${className}`} style={style}>
      {children}
    </span>
  );
}

export function Section({ id, label, children }) {
  return (
    <section id={id}>
      <HR />
      <div className="section-inner">
        <div className="sg">
          <div className="section-label"><Cap>{label}</Cap></div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}
