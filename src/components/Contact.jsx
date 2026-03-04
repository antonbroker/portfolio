import { useInView } from "../hooks/useInView";
import { Section, fade } from "./atoms";

const links = [
  { label: "Email",    href: "mailto:iosifov.a.14@gmail.com",         sub: "iosifov.a.14@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/anton-iosifov",  sub: "in/anton-iosifov"       },
  { label: "GitHub",   href: "https://github.com/antonbroker",         sub: "antonbroker"            },
  { label: "WhatsApp", href: "https://wa.me/972534223948",             sub: "+972 534 223 948"       },
];

export function Contact({ t }) {
  const [ref, iv] = useInView(0.2);
  return (
    <Section id="contact" label="Contact" t={t}>
      <div ref={ref} style={{ ...fade(iv) }}>
        <h2 style={{
          fontFamily: "'Times New Roman', Georgia, serif",
          fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 400, lineHeight: 1.05,
          letterSpacing: "-0.02em", color: t.text, margin: "0 0 48px",
        }}>
          Let's build<br /><em>something.</em>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: t.border }} className="cg">
          {links.map(({ label, href, sub }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
              display: "block", padding: "22px 24px",
              background: t.bg, textDecoration: "none", transition: "background 0.15s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = t.surface; }}
              onMouseLeave={e => { e.currentTarget.style.background = t.bg; }}
            >
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.13em", textTransform: "uppercase", color: t.text, marginBottom: 5 }}>{label}</div>
              <div style={{ fontSize: 11, color: t.muted, fontFamily: "'Courier New', Courier, monospace" }}>{sub}</div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
