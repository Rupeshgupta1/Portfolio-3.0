import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Pulls its child slightly toward the cursor.
const Magnetic = ({ children, strength = 0.3 }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 16 });
  const springY = useSpring(y, { stiffness: 220, damping: 16 });

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className='w-fit'
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
