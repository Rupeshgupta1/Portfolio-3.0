import { useInView } from "../hooks/useInView";

// Renders children only once the wrapper is near the viewport.
// Used to delay heavy 3D canvases until the user scrolls close to them.
const LazyMount = ({ children, className = "", rootMargin = "300px" }) => {
  const [ref, inView] = useInView(rootMargin);

  return (
    <div ref={ref} className={className}>
      {inView ? children : null}
    </div>
  );
};

export default LazyMount;
