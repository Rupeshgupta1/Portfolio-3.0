import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Tilt from "react-parallax-tilt";
import { AnimatePresence, motion } from "framer-motion";

import { styles } from "../styles";
import { github, web } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import GithubActivity from "./ui/GithubActivity";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

const IconLink = ({ href, label, icon }) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    title={label}
    aria-label={label}
    onClick={(e) => e.stopPropagation()}
    className='black-gradient flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-200 hover:scale-110'
  >
    <img src={icon} alt='' className='h-1/2 w-1/2 object-contain' />
  </a>
);

const hasLive = (link) => link && link !== "#";

const ProjectCard = ({ project, index, onOpen }) => {
  const { name, description, tags, image, source_code_link, live_link } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className='w-full sm:w-[360px]'
    >
      <Tilt
        tiltMaxAngleX={6}
        tiltMaxAngleY={6}
        glareEnable
        glareMaxOpacity={0.12}
        glareBorderRadius='16px'
        scale={1.02}
        className='group h-full cursor-pointer rounded-2xl border border-line bg-tertiary p-5 shadow-card transition-shadow duration-300 hover:shadow-card-hover'
        onClick={() => onOpen(project)}
      >
        <div className='relative h-[230px] w-full overflow-hidden rounded-2xl'>
          <img
            src={image}
            alt={`${name} preview`}
            loading='lazy'
            decoding='async'
            className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
          />

          <span className='absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur'>
            {project.category}
          </span>

          <div className='absolute inset-0 m-3 flex justify-end gap-2'>
            <IconLink href={source_code_link} label='View source code' icon={github} />
            {hasLive(live_link) && <IconLink href={live_link} label='View live demo' icon={web} />}
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-[22px] font-bold text-ink'>{name}</h3>
          <p className='mt-2 line-clamp-4 text-[14px] text-secondary'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

        <button
          type='button'
          onClick={(e) => {
            e.stopPropagation();
            onOpen(project);
          }}
          className='mt-5 text-sm font-semibold text-accent transition-all group-hover:translate-x-1'
        >
          View details →
        </button>
      </Tilt>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  const { name, description, tags, image, source_code_link, live_link, category } = project;

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    const previousOverflow = document.body.style.overflow;
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm'
    >
      <motion.div
        role='dialog'
        aria-modal='true'
        aria-label={name}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ type: "spring", damping: 26, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className='relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-line bg-tertiary shadow-2xl'
      >
        <button
          type='button'
          onClick={onClose}
          aria-label='Close'
          className='absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur transition-transform hover:scale-110'
        >
          ✕
        </button>

        <img src={image} alt={`${name} preview`} className='h-64 w-full object-cover sm:h-80' />

        <div className='p-6 sm:p-8'>
          <p className={styles.sectionSubText}>{category}</p>
          <h3 className='mt-1 text-[26px] font-bold text-ink sm:text-[30px]'>{name}</h3>
          <p className='mt-4 text-[15px] leading-7 text-ink-soft'>{description}</p>

          <div className='mt-5 flex flex-wrap gap-3'>
            {tags.map((tag) => (
              <span key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </span>
            ))}
          </div>

          <div className='mt-7 flex flex-wrap gap-3'>
            <a
              href={source_code_link}
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-xl border border-accent px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-accent/10'
            >
              View code
            </a>
            {hasLive(live_link) && (
              <a
                href={live_link}
                target='_blank'
                rel='noopener noreferrer'
                className='rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-colors hover:bg-accent-dark'
              >
                Live demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
};

const Works = () => {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary'
      >
        Real-world projects that show my skills and experience. Open a card for
        the full story, or use the icons for the{" "}
        <span className='font-semibold text-accent'>source code and live demo</span>.
      </motion.p>

      <div role='tablist' aria-label='Filter projects' className='mt-8 flex flex-wrap gap-2'>
        {categories.map((category) => {
          const isActive = filter === category;
          return (
            <button
              key={category}
              type='button'
              role='tab'
              aria-selected={isActive}
              onClick={() => setFilter(category)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                isActive ? "text-white" : "text-secondary hover:text-ink"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId='project-filter'
                  className='brand-gradient absolute inset-0 rounded-full'
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className='relative'>{category}</span>
            </button>
          );
        })}
      </div>

      <div className='mt-10 flex flex-wrap gap-7'>
        {visible.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} onOpen={setSelected} />
        ))}
      </div>

      <GithubActivity />

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Works, "projects");
