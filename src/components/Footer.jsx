import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { socials } from "../constants";

const COLORS = ["#2563eb", "#7c3aed", "#06b6d4", "#f59e0b", "#22c55e", "#ec4899"];
const PARTICLES = 28;

// Easter egg: click the heart for a small confetti burst.
const Confetti = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLES }, (_, i) => {
        const angle = (i / PARTICLES) * Math.PI * 2 + Math.random() * 0.4;
        const distance = 60 + Math.random() * 80;
        return {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance - 30,
          rotate: Math.random() * 540 - 270,
          color: COLORS[i % COLORS.length],
        };
      }),
    []
  );

  return (
    <span aria-hidden='true' className='pointer-events-none absolute left-1/2 top-1/2'>
      {particles.map((p, i) => (
        <motion.span
          key={i}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{ x: p.x, y: p.y + 60, opacity: 0, scale: 0.6, rotate: p.rotate }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          style={{ background: p.color }}
          className='absolute h-2 w-1.5 rounded-sm'
        />
      ))}
    </span>
  );
};

const Footer = () => {
  const [burst, setBurst] = useState(0);

  return (
    <footer className='relative border-t border-line bg-primary/70 backdrop-blur'>
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row sm:px-16'>
        <p className='flex items-center gap-1.5 text-sm text-secondary'>
          Designed &amp; built with
          <button
            type='button'
            onClick={() => setBurst((b) => b + 1)}
            aria-label='Celebrate'
            className='relative text-red-500 transition-transform hover:scale-125 active:scale-90'
          >
            ♥
            {burst > 0 && <Confetti key={burst} />}
          </button>
          by Rupesh Gupta · © {new Date().getFullYear()}
        </p>

        <div className='flex items-center gap-6 text-sm font-medium'>
          <a href={socials.github} target='_blank' rel='noopener noreferrer' className='text-secondary transition-colors hover:text-accent'>
            GitHub
          </a>
          <a href={socials.linkedin} target='_blank' rel='noopener noreferrer' className='text-secondary transition-colors hover:text-accent'>
            LinkedIn
          </a>
          <a href={socials.cv} download='Rupesh_Gupta_CV.pdf' className='text-secondary transition-colors hover:text-accent'>
            Resume
          </a>
          <button
            type='button'
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className='flex items-center gap-1 rounded-full border border-line px-3 py-1.5 text-ink transition-colors hover:border-accent hover:text-accent'
          >
            Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
