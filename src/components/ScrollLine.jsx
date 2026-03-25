import { useState, useEffect } from "react";
import { useScrollY } from "../hooks/useScrollY";
import "../styles/scrollline.css";

export function ScrollLine() {
  const y = useScrollY();
  const [h, setH] = useState(1);
  useEffect(() => {
    const u = () => setH(document.documentElement.scrollHeight - window.innerHeight);
    u();
    window.addEventListener("resize", u);
    return () => window.removeEventListener("resize", u);
  }, []);
  return (
    <div className="scroll-line">
      <div className="scroll-line__bar" style={{ width: `${(y / h) * 100}%` }} />
    </div>
  );
}
