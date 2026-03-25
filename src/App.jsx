import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Stack } from "./components/Stack";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollLine } from "./components/ScrollLine";
import "./styles/app.css";

export default function App() {
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  useEffect(() => {
    const ids = ["home", "about", "stack", "projects", "experience", "contact"];
    const handleScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
      if (atBottom) { setActive(ids[ids.length - 1]); return; }
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) current = id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ScrollLine />
      <div className="grid-overlay" />
      <div className="app-wrapper">
        <Navbar dark={dark} setDark={setDark} active={active} />
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
