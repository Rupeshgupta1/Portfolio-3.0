const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-ink lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-ink-soft font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-ink font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-accent font-semibold uppercase tracking-wider",
};

// Shared card look for the vertical timelines (Experience, Education)
const timelineStyles = {
  content: {
    background: "rgb(var(--tertiary))",
    color: "rgb(var(--ink))",
    border: "1px solid rgb(var(--line))",
    boxShadow: "0 20px 50px -20px rgb(var(--accent) / 0.25)",
  },
  arrow: { borderRight: "7px solid rgb(var(--tertiary))" },
};

export { styles, timelineStyles };
