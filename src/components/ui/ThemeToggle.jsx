import { AnimatePresence, motion } from "framer-motion";

import { useTheme } from "../../hooks/useTheme";

const Sun = () => (
  <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' className='w-5 h-5'>
    <circle cx='12' cy='12' r='4' />
    <path d='M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4' />
  </svg>
);

const Moon = () => (
  <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-5 h-5'>
    <path d='M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z' />
  </svg>
);

const ThemeToggle = () => {
  const [theme, toggle] = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type='button'
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className='relative flex h-10 w-10 items-center justify-center rounded-full border border-line bg-tertiary/70 text-ink transition-colors hover:border-accent hover:text-accent'
    >
      <AnimatePresence mode='wait' initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.2 }}
          className='flex'
        >
          {isDark ? <Sun /> : <Moon />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
