import { useState, lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from "./components";
import PageLoader from "./components/PageLoader";

const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      {loading && <PageLoader onComplete={() => setLoading(false)} />}
      <div className={`relative z-0 bg-primary transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <Suspense fallback={null}>
            <StarsCanvas />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
