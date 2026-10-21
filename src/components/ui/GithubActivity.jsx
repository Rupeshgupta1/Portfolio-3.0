import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { socials } from "../../constants";
import { useInView } from "../../hooks/useInView";

const LEVELS = ["bg-line", "bg-accent/25", "bg-accent/50", "bg-accent/75", "bg-accent"];

// Contribution heatmap. Hidden silently if the public API is unreachable.
const GithubActivity = () => {
  const [ref, inView] = useInView("200px");
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!inView) return;
    const controller = new AbortController();

    fetch(`https://github-contributions-api.jogruber.de/v4/${socials.githubUser}?y=last`, {
      signal: controller.signal,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then(setData)
      .catch(() => {});

    return () => controller.abort();
  }, [inView]);

  const days = data?.contributions;
  const total = data && Object.values(data.total)[0];
  // Pad so the first column starts on the right weekday (rows are Sun..Sat)
  const offset = days?.length ? new Date(days[0].date).getDay() : 0;

  return (
    <div ref={ref}>
      {days && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='mt-16 rounded-2xl border border-line bg-tertiary/70 p-6 backdrop-blur'
        >
          <div className='flex flex-wrap items-baseline justify-between gap-2'>
            <h3 className='text-[20px] font-bold text-ink'>Open-source activity</h3>
            <a
              href={socials.github}
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm font-medium text-accent hover:underline'
            >
              {total} contributions in the last year →
            </a>
          </div>

          <div className='mt-4 overflow-x-auto pb-2'>
            <div
              role='img'
              aria-label={`${total} GitHub contributions in the last year`}
              className='grid w-max grid-flow-col grid-rows-7 gap-[3px]'
            >
              {Array.from({ length: offset }, (_, i) => (
                <span key={`pad-${i}`} className='h-3 w-3' />
              ))}
              {days.map(({ date, count, level }) => (
                <span
                  key={date}
                  title={`${count} on ${date}`}
                  className={`h-3 w-3 rounded-[3px] ${LEVELS[level]}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default GithubActivity;
