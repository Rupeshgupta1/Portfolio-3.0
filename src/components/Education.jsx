import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles, timelineStyles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Images live in src/assets/education/ named bseh / vce / mdu (png, jpg, webp or svg).
const logoFiles = import.meta.glob("../assets/education/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
});

const logoLabels = {
  bseh: "Board of School Education Haryana",
  vce: "Vaish College of Engineering",
  mdu: "Maharshi Dayanand University",
};

const getLogo = (key) =>
  Object.entries(logoFiles).find(
    ([path]) => path.split("/").pop().split(".")[0] === key
  )?.[1];

// vce is a wide campus photo, the rest are square logos
const LogoTile = ({ name }) => {
  const src = getLogo(name);
  if (!src) return null;

  const isPhoto = name === "vce";

  return (
    <div
      className={`rounded-2xl bg-white ring-1 ring-slate-300 shadow-xl shadow-slate-900/10 overflow-hidden ${
        isPhoto
          ? "w-32 h-20 min-[1170px]:w-72 min-[1170px]:h-44"
          : "w-20 h-20 min-[1170px]:w-44 min-[1170px]:h-44"
      }`}
    >
      <img
        src={src}
        alt={logoLabels[name]}
        loading='lazy'
        className={`w-full h-full ${isPhoto ? "object-cover" : "object-contain p-2"}`}
      />
    </div>
  );
};

const CapIcon = () => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    stroke='white'
    strokeWidth='1.8'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='w-1/2 h-full mx-auto'
  >
    <path d='M2 9l10-5 10 5-10 5L2 9z' />
    <path d='M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5' />
  </svg>
);

const EducationCard = ({ item, index }) => {
  return (
    <VerticalTimelineElement
      className='min-[1170px]:min-h-[240px]'
      contentStyle={timelineStyles.content}
      contentArrowStyle={timelineStyles.arrow}
      date={
        <div
          className={`flex flex-col gap-3 ${
            index % 2 ? "items-end" : "items-start"
          }`}
        >
          <span>{item.period}</span>
          <div className='flex gap-4'>
            {item.logos.map((name) => (
              <LogoTile key={name} name={name} />
            ))}
          </div>
        </div>
      }
      iconStyle={{ background: "#2563eb" }}
      icon={<CapIcon />}
    >
      <h3 className='text-ink text-[24px] font-bold'>{item.title}</h3>
      <p
        className='text-secondary text-[16px] font-semibold'
        style={{ margin: 0 }}
      >
        {item.institution}
      </p>

      {item.affiliation && (
        <p
          className='text-ink-soft text-[14px]'
          style={{ margin: 0, marginTop: 12 }}
        >
          {item.affiliation}
        </p>
      )}
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My academic journey
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Education.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {education.map((item, index) => (
            <EducationCard key={item.title} item={item} index={index} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
