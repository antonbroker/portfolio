import { useState, useEffect } from "react";
import { T } from "./tokens";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Stack } from "./components/Stack";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollLine } from "./components/ScrollLine";

export default function App() {
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState("home");
  const t = dark ? T.dark : T.light;

  useEffect(() => {
    const ids = ["home", "about", "stack", "projects", "experience", "contact"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-52px 0px 0px 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <ScrollLine t={t} />
      <div style={{ background: t.bg, color: t.text, minHeight: "100vh" }}>
        <Navbar dark={dark} setDark={setDark} active={active} t={t} />
        <Hero t={t} />
        <About t={t} />
        <Stack t={t} />
        <Projects t={t} />
        <Experience t={t} />
        <Contact t={t} />
        <Footer t={t} />
      </div>
    </>
  );
}
