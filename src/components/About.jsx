import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { currentlyBuilding, services, stats } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Counter from "./ui/Counter";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.8)}
      className='w-full brand-gradient p-[1px] rounded-[20px] shadow-card transition-shadow duration-300 hover:shadow-card-hover'
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-ink text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Stats = () => (
  <motion.dl
    variants={fadeIn("up", "tween", 0.2, 0.8)}
    className='mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4'
  >
    {stats.map(({ value, suffix, label }) => (
      <div
        key={label}
        className='rounded-2xl border border-line bg-tertiary/70 p-5 backdrop-blur transition-colors hover:border-accent/50'
      >
        <dt className='sr-only'>{label}</dt>
        <dd className='gradient-text w-fit text-[34px] font-black leading-none sm:text-[40px]'>
          <Counter value={value} suffix={suffix} />
        </dd>
        <p aria-hidden='true' className='mt-2 text-[13px] font-medium text-secondary'>
          {label}
        </p>
      </div>
    ))}
  </motion.dl>
);

const CurrentlyBuilding = () => (
  <motion.div
    variants={fadeIn("up", "tween", 0.3, 0.8)}
    className='mt-6 rounded-2xl border border-line bg-tertiary/70 p-6 backdrop-blur'
  >
    <div className='flex items-center gap-2'>
      <span className='relative flex h-2.5 w-2.5'>
        <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75' />
        <span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-500' />
      </span>
      <p className='text-sm font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400'>
        Currently building
      </p>
    </div>

    <ul className='mt-4 grid gap-4 md:grid-cols-2'>
      {currentlyBuilding.map(({ name, detail }) => (
        <li key={name}>
          <p className='font-bold text-ink'>{name}</p>
          <p className='mt-1 text-[14px] text-secondary'>{detail}</p>
        </li>
      ))}
    </ul>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <Stats />
      <CurrentlyBuilding />

      <div className='mt-16 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
