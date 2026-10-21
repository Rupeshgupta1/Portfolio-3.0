import { useEffect, useState } from "react";
import { animate } from "framer-motion";

import { useInView } from "../../hooks/useInView";
import { useMediaQuery } from "../../hooks/useMediaQuery";

// Counts up from 0 the first time it scrolls into view.
const Counter = ({ value, suffix = "" }) => {
  const [ref, inView] = useInView();
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduced, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

export default Counter;
