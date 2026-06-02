import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import rupeshPhoto from "../assets/rupesh.png";
import githubIcon from "../assets/github.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX}
        flex flex-row items-start gap-5 z-10`}
      >
        {/* Violet Dot + Line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col xl:flex-row items-start justify-between gap-6">
          
          {/* Left Content */}
          <div className="flex-1 min-w-0 max-w-[650px]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-1.5 w-fit mb-4"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>

              <p className="text-green-400 text-sm font-medium">
                Open to Work
              </p>
            </motion.div>

            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi I am{" "}
              <span className="text-[#915EFF]">
                Rupesh
              </span>
            </h1>

            <p
              className={`${styles.heroSubText} mt-2 text-white-100`}
            >
              MERN Stack & Frontend Developer
              <br className="sm:block hidden" />
              Building modern and scalable web applications
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href="https://github.com/Rupeshgupta1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#915EFF] hover:bg-[#7d3ef5] text-white px-4 py-2.5 rounded-xl font-medium transition-all duration-200 text-sm"
              >
                <img
                  src={githubIcon}
                  alt="github"
                  className="w-4 h-4 object-contain invert"
                />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/rupesh-gupta-8a3abb275/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-[#915EFF] hover:bg-[#915EFF]/20 text-white px-4 py-2.5 rounded-xl font-medium transition-all duration-200 text-sm"
              >
                <svg
                  className="w-4 h-4 fill-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.982V9h3.055v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.774 1.774 0 01-1.772-1.77 1.773 1.773 0 113.546 0 1.774 1.774 0 01-1.774 1.77zm1.522 13.019H3.812V9h3.047v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>

                LinkedIn
              </a>

              <a
                href="/Rupesh_Gupta_CV.pdf"
                download="Rupesh_Gupta_CV.pdf"
                className="flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white px-4 py-2.5 rounded-xl font-medium transition-all duration-200 text-sm"
              >
                <svg
                  className="w-4 h-4 stroke-white fill-none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                  />
                </svg>

                Download CV
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="
              hidden lg:block
              flex-shrink-0
              w-[120px] h-[120px]
              md:w-[160px] md:h-[160px]
              lg:w-[200px] lg:h-[200px]
              xl:w-[240px] xl:h-[240px]
              rounded-full
              overflow-hidden
              border-4 border-[#915EFF]
              shadow-2xl shadow-[#915EFF]/40
              mt-2
            "
          >
            <img
              src={rupeshPhoto}
              alt="Rupesh Gupta"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* 3D Model */}
      <div className="absolute inset-0 pointer-events-none hidden xl:block">
        <ComputersCanvas />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;