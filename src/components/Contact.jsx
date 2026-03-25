import { useInView } from "../hooks/useInView";
import { Section } from "./atoms";
import "../styles/contact.css";

const links = [
  { label: "Email",    href: "mailto:iosifov.a.14@gmail.com",         sub: "iosifov.a.14@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/anton-iosifov",  sub: "in/anton-iosifov"       },
  { label: "GitHub",   href: "https://github.com/antonbroker",         sub: "antonbroker"            },
  { label: "WhatsApp", href: "https://wa.me/972534223948",             sub: "+972 534 223 948"       },
];

export function Contact() {
  const [ref, iv] = useInView(0.2);
  return (
    <Section id="contact" label="Contact">
      <div ref={ref} className={`fade ${iv ? "visible" : ""}`}>
        <h2 className="contact__heading">
          Let's build<br /><em>something.</em>
        </h2>
        <div className="cg">
          {links.map(({ label, href, sub }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="contact-link">
              <div className="contact-link__label">{label}</div>
              <div className="contact-link__sub">{sub}</div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
