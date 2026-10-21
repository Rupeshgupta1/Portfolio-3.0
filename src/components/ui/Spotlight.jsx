import { useEffect, useRef } from "react";

// A soft glow plus a brighter grid that follow the cursor (fine pointers only).
const Spotlight = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame;
    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        ref.current?.style.setProperty("--mx", `${e.clientX}px`);
        ref.current?.style.setProperty("--my", `${e.clientY}px`);
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div ref={ref} className='absolute inset-0'>
      <div className='spotlight-glow absolute inset-0' />
      <div className='bg-grid-glow absolute inset-0' />
    </div>
  );
};

export default Spotlight;
