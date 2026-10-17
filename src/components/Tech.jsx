import React, { lazy, Suspense } from "react";

import LazyMount from "./LazyMount";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const BallCanvas = lazy(() => import("./canvas/Ball"));

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <LazyMount
          key={technology.name}
          className='w-28 h-28 rounded-full bg-white/80 ring-1 ring-slate-200 shadow-card'
        >
          <Suspense fallback={null}>
            <BallCanvas icon={technology.icon} />
          </Suspense>
        </LazyMount>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
