export function Footer({ t }) {
  return (
    <footer style={{ borderTop: `1px solid ${t.border}` }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "18px 28px", display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 10, color: t.muted, fontFamily: "'Courier New', Courier, monospace" }}>Anton Iosifov · {new Date().getFullYear()}</span>
        <span style={{ fontSize: 10, color: t.muted, fontFamily: "'Courier New', Courier, monospace" }}>Full-Stack Developer</span>
      </div>
    </footer>
  );
}
