import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import ThemeToggle from "./ui/ThemeToggle";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
      if (window.scrollY <= 100) setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy: highlight the section crossing the middle of the viewport.
  useEffect(() => {
    const sections = new Map(
      navLinks
        .map((nav) => [document.getElementById(nav.id)?.parentElement, nav.id])
        .filter(([el]) => el)
    );

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(sections.get(entry.target));
        }),
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((_, el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center py-4 transition-all duration-300 ${
        scrolled
          ? "border-b border-line/60 bg-primary/80 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className='mx-auto flex w-full max-w-7xl items-center justify-between'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='h-9 w-9 object-contain' />
          <p className='flex cursor-pointer text-[18px] font-bold text-ink'>
            Rupesh Gupta &nbsp;
            <span className='hidden text-accent sm:block'>| MERN Stack Developer</span>
          </p>
        </Link>

        {/* Desktop nav */}
        <div className='hidden items-center gap-8 sm:flex'>
          <ul className='flex list-none flex-row gap-8'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`relative cursor-pointer text-[16px] font-medium transition-colors duration-200 ${
                  active === nav.id ? "text-ink" : "text-secondary hover:text-ink"
                }`}
              >
                <a href={`#${nav.id}`} onClick={() => setActive(nav.id)}>
                  {nav.title}
                </a>
                {active === nav.id && (
                  <motion.span
                    layoutId='nav-underline'
                    className='brand-gradient absolute -bottom-1 left-0 h-0.5 w-full rounded-full'
                  />
                )}
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile nav */}
        <div className='flex flex-1 items-center justify-end gap-3 sm:hidden'>
          <ThemeToggle />
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='h-[28px] w-[28px] cursor-pointer object-contain invert dark:invert-0'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl border border-line bg-tertiary p-6 shadow-lg`}
          >
            <ul className='flex flex-1 list-none flex-col items-start justify-end gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer text-[16px] font-medium ${
                    active === nav.id ? "text-accent" : "text-secondary"
                  }`}
                  onClick={() => {
                    setActive(nav.id);
                    setToggle(false);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
