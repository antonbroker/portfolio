export const mono = { fontFamily: "'Courier New', Courier, monospace" };

export function HR({ t }) {
  return <div style={{ height: 1, background: t.border, flexShrink: 0 }} />;
}

export function Cap({ t, children, style = {} }) {
  return (
    <span style={{
      fontSize: 10, fontWeight: 600, letterSpacing: "0.14em",
      textTransform: "uppercase", color: t.muted, ...style,
    }}>
      {children}
    </span>
  );
}

export function fade(inView, delay = 0) {
  return {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(12px)",
    transition: `opacity 0.65s ${delay}s ease, transform 0.65s ${delay}s cubic-bezier(0.16,1,0.3,1)`,
  };
}

export function Section({ id, label, t, children }) {
  return (
    <section id={id}>
      <HR t={t} />
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "72px 28px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 56 }} className="sg">
          <div style={{ paddingTop: 1 }}><Cap t={t}>{label}</Cap></div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}
