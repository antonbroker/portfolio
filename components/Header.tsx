"use client";

import { useState } from "react";
import { navigation } from "@/data/portfolio";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Anton Iosifov — home">
        <span>AI</span>
        <sup>26</sup>
      </a>

      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="site-navigation"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav id="site-navigation" className={open ? "site-nav is-open" : "site-nav"} aria-label="Primary navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-contact" href="#contact">
        Start a conversation <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
