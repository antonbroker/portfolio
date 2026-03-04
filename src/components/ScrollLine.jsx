import { useState, useEffect } from "react";
import { useScrollY } from "../hooks/useScrollY";

export function ScrollLine({ t }) {
  const y = useScrollY();
  const [h, setH] = useState(1);
  useEffect(() => {
    const u = () => setH(document.documentElement.scrollHeight - window.innerHeight);
    u();
    window.addEventListener("resize", u);
    return () => window.removeEventListener("resize", u);
  }, []);
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 1, zIndex: 999 }}>
      <div style={{ height: "100%", background: t.text, width: `${(y / h) * 100}%`, transition: "width 0.1s linear" }} />
    </div>
  );
}
