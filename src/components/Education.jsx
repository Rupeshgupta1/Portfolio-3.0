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

// Drop logo files in src/assets/education/ named bseh / vce / mdu (png, jpg, webp or svg).
// Until a file exists, a text badge is shown instead.
const logoFiles = import.meta.glob("../assets/education/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
});

const logoLabels = { bseh: "BSEH", vce: "VCE", mdu: "MDU" };

const getLogo = (key) =>
  Object.entries(logoFiles).find(
    ([path]) => path.split("/").pop().split(".")[0] === key
  )?.[1];

const Logo = ({ name }) => {
  const src = getLogo(name);

  return src ? (
    <img
      src={src}
      alt={logoLabels[name]}
      loading='lazy'
      className='w-full h-full object-contain p-1.5'
    />
  ) : (
    <span className='text-accent font-bold text-[12px]'>{logoLabels[name]}</span>
  );
};

const EducationCard = ({ item }) => {
  const [mainLogo, ...extraLogos] = item.logos;

  return (
    <VerticalTimelineElement
      contentStyle={timelineStyles.content}
      contentArrowStyle={timelineStyles.arrow}
      date={item.period}
      iconStyle={{ background: "#ffffff" }}
      icon={
        <div className='flex justify-center items-center w-full h-full overflow-hidden rounded-full'>
          <Logo name={mainLogo} />
        </div>
      }
    >
      <h3 className='text-ink text-[24px] font-bold'>{item.title}</h3>
      <p
        className='text-secondary text-[16px] font-semibold'
        style={{ margin: 0 }}
      >
        {item.institution}
      </p>

      {item.affiliation && (
        <div className='mt-4 flex items-center gap-3'>
          {extraLogos.map((name) => (
            <div
              key={name}
              className='w-11 h-11 shrink-0 rounded-full bg-white ring-1 ring-slate-200 flex justify-center items-center overflow-hidden'
            >
              <Logo name={name} />
            </div>
          ))}
          <p className='text-ink-soft text-[14px]' style={{ margin: 0 }}>
            {item.affiliation}
          </p>
        </div>
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
          {education.map((item) => (
            <EducationCard key={item.title} item={item} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
