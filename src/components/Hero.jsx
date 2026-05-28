import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import rupeshPhoto from "../assets/rupesh.png"; // apni image file ka naam sahi karo

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* Left content: text + buttons */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        {/* Decorative vertical line */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        {/* Name, tagline & buttons */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi I am <span className='text-[#915EFF]'>Rupesh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            MERN Stack &amp; Frontend Developer
            <br className='sm:block hidden' />
            Building modern and scalable web applications
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-wrap gap-4 mt-8'>
            <a
              href='https://github.com/Rupeshgupta1'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 bg-[#915EFF] hover:bg-[#7d3ef5] text-white px-5 py-3 rounded-xl font-medium transition-all duration-200'
            >
              <img
                src='/src/assets/github.png'
                alt='github'
                className='w-5 h-5 object-contain invert'
              />
              GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/rupesh-gupta-8a3abb275/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 border border-[#915EFF] hover:bg-[#915EFF]/20 text-white px-5 py-3 rounded-xl font-medium transition-all duration-200'
            >
              <svg className='w-5 h-5 fill-white' viewBox='0 0 24 24'>
                <path d='M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.982V9h3.055v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.774 1.774 0 01-1.772-1.77 1.773 1.773 0 113.546 0 1.774 1.774 0 01-1.774 1.77zm1.522 13.019H3.812V9h3.047v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
              </svg>
              LinkedIn
            </a>
            <a
              href='/Rupesh_Gupta_CV.pdf'
              download='Rupesh_Gupta_CV.pdf'
              className='flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white px-5 py-3 rounded-xl font-medium transition-all duration-200'
            >
              <svg className='w-5 h-5 stroke-white fill-none' viewBox='0 0 24 24' strokeWidth={2}>
                <path strokeLinecap='round' strokeLinejoin='round' d='M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3' />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 PHOTO – thoda aur left + thoda aur upar (right values aur badhayi, top values aur ghatayi) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute 
        right-32 md:right-44 lg:right-56 
        top-[60px] md:top-[100px] lg:top-[140px] 
        w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 
        rounded-full overflow-hidden border-4 border-[#915EFF] shadow-2xl shadow-[#915EFF]/40 z-20"
      >
        <img
          src={rupeshPhoto}
          alt="Rupesh Gupta"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* 3D Computer Model (behind everything) */}
      <div className="absolute inset-0 pointer-events-none">
        <ComputersCanvas />
      </div>

      {/* Scroll down indicator */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;