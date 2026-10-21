import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { MotionConfig } from "framer-motion";

import { About, Contact, Education, Experience, Footer, Hero, Navbar, Tech, Works } from "./components";
import LazyMount from "./components/LazyMount";
import Marquee from "./components/ui/Marquee";
import ScrollProgress from "./components/ui/ScrollProgress";
import Spotlight from "./components/ui/Spotlight";

const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const App = () => (
  <BrowserRouter>
    <MotionConfig reducedMotion='user'>
      <div className='relative z-0 bg-primary'>
        <ScrollProgress />

        {/* Decorative background: grid, cursor spotlight and soft floating glows */}
        <div aria-hidden='true' className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
          <div className='bg-grid absolute inset-0' />
          <Spotlight />
          <div className='absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-float will-change-transform motion-reduce:animate-none' />
          <div className='absolute top-1/2 -left-32 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl animate-float [animation-delay:-4s] will-change-transform motion-reduce:animate-none dark:bg-violet-500/20' />
          <div className='absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl animate-float [animation-delay:-7s] will-change-transform motion-reduce:animate-none dark:bg-cyan-400/15' />
        </div>

        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Marquee />
        <About />
        <Experience />
        <Education />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <LazyMount className='pointer-events-none absolute inset-0 -z-10'>
            <Suspense fallback={null}>
              <StarsCanvas />
            </Suspense>
          </LazyMount>
        </div>
        <Footer />
      </div>
    </MotionConfig>
  </BrowserRouter>
);

export default App;
