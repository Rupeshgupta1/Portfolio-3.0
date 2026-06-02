import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      // Active section detection
      const sections = navLinks.map((nav) => document.getElementById(nav.id));
      const scrollPos = window.scrollY + 200;

      sections.forEach((section) => {
        if (!section) return;
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${scrolled ? "bg-primary shadow-lg shadow-black/20" : "bg-transparent"}`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => { setActive(""); window.scrollTo(0, 0); }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Rupesh Gupta &nbsp;
            <span className='sm:block hidden text-[#915EFF]'>| MERN Stack Developer</span>
          </p>
        </Link>

        {/* Desktop Nav */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`relative text-[18px] font-medium cursor-pointer transition-colors duration-200 ${
                active === nav.id ? "text-white" : "text-secondary hover:text-white"
              }`}
              onClick={() => setActive(nav.id)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
              {/* Active underline indicator */}
              {active === nav.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#915EFF] rounded-full" />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Nav */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-100 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl border border-[#915EFF]/30`}>
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.id ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => { setActive(nav.id); setToggle(false); }}
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
