import { lazy, Suspense } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { roles, socials } from "../constants";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useTypewriter } from "../hooks/useTypewriter";
import Magnetic from "./ui/Magnetic";
import rupeshPhoto from "../assets/rupesh.webp";
import githubIcon from "../assets/github.png";

const ComputersCanvas = lazy(() => import("./canvas/Computers"));

const buttonBase =
  "flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200";

const links = [
  {
    label: "GitHub",
    href: socials.github,
    className: `${buttonBase} bg-accent text-white shadow-lg shadow-accent/30 hover:bg-accent-dark`,
    icon: <img src={githubIcon} alt='' className='h-4 w-4 object-contain invert' />,
  },
  {
    label: "LinkedIn",
    href: socials.linkedin,
    className: `${buttonBase} border border-accent text-ink hover:bg-accent/10`,
    icon: (
      <svg className='h-4 w-4 fill-current' viewBox='0 0 24 24'>
        <path d='M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.982V9h3.055v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.774 1.774 0 01-1.772-1.77 1.773 1.773 0 113.546 0 1.774 1.774 0 01-1.774 1.77zm1.522 13.019H3.812V9h3.047v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
      </svg>
    ),
  },
  {
    label: "Download CV",
    href: socials.cv,
    download: "Rupesh_Gupta_CV.pdf",
    className: `${buttonBase} border border-ink/20 text-ink hover:bg-ink/5`,
    icon: (
      <svg className='h-4 w-4 fill-none stroke-current' viewBox='0 0 24 24' strokeWidth={2}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3' />
      </svg>
    ),
  },
];

const OpenToWork = () => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className='mb-4 flex w-fit items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5'
  >
    <span className='relative flex h-2.5 w-2.5'>
      <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75' />
      <span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500' />
    </span>
    <p className='text-sm font-medium text-green-700 dark:text-green-400'>Open to Work</p>
  </motion.div>
);

const Typewriter = () => {
  const text = useTypewriter(roles);

  return (
    <span className='block min-h-[1.4em]' aria-label={roles.join(", ")}>
      <span aria-hidden='true' className='font-semibold text-ink'>
        {text}
      </span>
      <span aria-hidden='true' className='ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-blink bg-accent motion-reduce:animate-none' />
    </span>
  );
};

// Text block shared by the desktop and mobile layouts.
const HeroCopy = () => (
  <>
    <OpenToWork />

    <h1 className={`${styles.heroHeadText} text-ink`}>
      Hi I am{" "}
      <motion.span
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        className='gradient-text inline-block'
      >
        Rupesh
      </motion.span>
    </h1>

    <p className={`${styles.heroSubText} mt-2 text-ink-soft`}>
      <Typewriter />
      Building modern and scalable web applications
    </p>

    <div className='mt-6 flex flex-wrap gap-3'>
      {links.map(({ label, icon, ...props }) => (
        <Magnetic key={label}>
          <a {...props} {...(props.download ? {} : { target: "_blank", rel: "noopener noreferrer" })}>
            {icon}
            {label}
          </a>
        </Magnetic>
      ))}
    </div>
  </>
);

const DotLine = ({ className = "h-40" }) => (
  <div className='mt-5 flex flex-col items-center justify-center'>
    <div className='h-5 w-5 rounded-full bg-accent' />
    <div className={`accent-gradient w-1 ${className}`} />
  </div>
);

const ScrollHint = () => (
  <a
    href='#about'
    aria-label='Scroll to content'
    className='absolute bottom-8 left-6 z-10 hidden flex-col items-center gap-2 sm:left-16 text-secondary transition-colors hover:text-accent sm:flex'
  >
    <span className='text-xs font-medium uppercase tracking-widest'>Scroll</span>
    <span className='flex h-10 w-6 justify-center rounded-full border-2 border-current pt-2'>
      <span className='h-2 w-1 animate-scroll-dot rounded-full bg-current motion-reduce:animate-none' />
    </span>
  </a>
);

const Hero = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <section className='relative mx-auto min-h-screen w-full overflow-hidden'>
      {/* Desktop layout (lg+) */}
      <div className='pointer-events-none absolute inset-0 top-[80px] z-10 mx-auto hidden max-w-7xl flex-row items-start gap-5 px-6 lg:flex'>
        <DotLine className='h-80' />

        {/* Text is capped at 55% so the 3D model fits on the right */}
        <div className='pointer-events-auto mt-5 flex max-w-[55%] flex-col'>
          <HeroCopy />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='pointer-events-auto ml-auto mt-5 h-[200px] w-[200px] flex-shrink-0 overflow-hidden rounded-full border-4 border-accent shadow-2xl shadow-accent/40 xl:h-[240px] xl:w-[240px]'
        >
          <img src={rupeshPhoto} alt='Rupesh Gupta' className='h-full w-full object-cover' />
        </motion.div>
      </div>

      {/* 3D model: desktop only, behind the text and photo */}
      {isDesktop && (
        <div className='absolute inset-0 z-0'>
          <Suspense fallback={null}>
            <ComputersCanvas />
          </Suspense>
        </div>
      )}

      {/* Mobile layout (< lg) */}
      <div className='relative z-10 flex min-h-screen flex-col px-6 pb-20 pt-[90px] lg:hidden'>
        <div className='flex flex-row items-start gap-5'>
          <DotLine />
          <div className='flex-1'>
            <HeroCopy />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mt-8 flex flex-1 items-center justify-center'
        >
          <div className='h-72 w-72 overflow-hidden rounded-full border-4 border-accent shadow-2xl shadow-accent/40'>
            <img src={rupeshPhoto} alt='Rupesh Gupta' className='h-full w-full object-cover' />
          </div>
        </motion.div>
      </div>

      <ScrollHint />
    </section>
  );
};

export default Hero;
