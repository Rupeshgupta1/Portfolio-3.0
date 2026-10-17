import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

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

  return (
    <div className='w-16 h-16 rounded-full bg-white ring-1 ring-slate-200 shadow-md flex items-center justify-center overflow-hidden'>
      {src ? (
        <img
          src={src}
          alt={logoLabels[name]}
          loading='lazy'
          className='w-full h-full object-contain p-2'
        />
      ) : (
        <span className='text-accent font-bold text-sm'>{logoLabels[name]}</span>
      )}
    </div>
  );
};

const EducationCard = ({ index, title, institution, affiliation, period, logos }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className='bg-tertiary border border-slate-200 shadow-card hover:shadow-[0_30px_60px_-20px_rgba(37,99,235,0.4)] transition-shadow duration-300 rounded-2xl p-6 flex flex-col'
  >
    <div className='flex items-center gap-3'>
      {logos.map((name) => (
        <Logo key={name} name={name} />
      ))}
    </div>

    <span className='mt-5 w-fit text-xs font-semibold text-accent bg-accent/10 rounded-full px-3 py-1'>
      {period}
    </span>

    <h3 className='mt-3 text-ink text-[22px] font-bold'>{title}</h3>
    <p className='mt-1 text-ink-soft text-[15px] font-medium'>{institution}</p>
    {affiliation && (
      <p className='mt-1 text-secondary text-[14px]'>{affiliation}</p>
    )}
  </motion.div>
);

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My academic journey</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Education.</h2>
      </motion.div>

      <div className='mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3'>
        {education.map((item, index) => (
          <EducationCard key={item.title} index={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
