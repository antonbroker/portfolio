import { contactLinks } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="shell contact-shell">
        <p className="contact-kicker">05 · Contact</p>
        <h2 id="contact-title">
          Have a product to build
          <em>or a team to join?</em>
        </h2>
        <p className="contact-intro">
          I’m open to Full-Stack, React/Next.js, Node.js, and product-focused software
          engineering opportunities, as well as selected client projects.
        </p>

        <div className="contact-links">
          {contactLinks.map((link) => (
            <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              <span>{link.label}</span>
              <strong>{link.value}</strong>
              <i aria-hidden="true">↗</i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
