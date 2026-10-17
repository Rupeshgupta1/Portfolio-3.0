import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Education, Experience, Hero, Navbar, Tech, Works } from "./components";
import LazyMount from "./components/LazyMount";

const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const App = () => (
  <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      {/* Decorative background: grid + soft floating glows */}
      <div aria-hidden='true' className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
        <div className='bg-grid absolute inset-0' />
        <div className='absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-float will-change-transform motion-reduce:animate-none' />
        <div className='absolute top-1/2 -left-32 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl animate-float [animation-delay:-4s] will-change-transform motion-reduce:animate-none' />
        <div className='absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl animate-float [animation-delay:-7s] will-change-transform motion-reduce:animate-none' />
      </div>

      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Education />
      <Tech />
      <Works />
      <div className='relative z-0'>
        <Contact />
        <LazyMount className='absolute inset-0'>
          <Suspense fallback={null}>
            <StarsCanvas />
          </Suspense>
        </LazyMount>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
