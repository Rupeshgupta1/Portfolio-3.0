import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { socials } from "../../constants";
import { useInView } from "../../hooks/useInView";

// Cell size lives in CSS variables (index.css) so the graph grows on wider screens.
const CELL = "var(--gh-cell)";
const GAP = "var(--gh-gap)";
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const CACHE_KEY = "gh-contributions";

const GithubIcon = () => (
  <svg viewBox='0 0 24 24' fill='currentColor' className='h-6 w-6' aria-hidden='true'>
    <path d='M12 .5a11.5 11.5 0 00-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 015.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0012 .5z' />
  </svg>
);

// Split the flat day list into GitHub-style week columns (Sun..Sat) and find month label positions.
const buildWeeks = (days) => {
  const offset = new Date(`${days[0].date}T00:00:00`).getDay();
  const cells = [...Array(offset).fill(null), ...days];
  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

  const labels = [];
  let prevMonth = -1;
  let lastLabelWeek = -3;
  weeks.forEach((week, w) => {
    const first = week.find(Boolean);
    const month = new Date(`${first.date}T00:00:00`).getMonth();
    if (month !== prevMonth) {
      if (w - lastLabelWeek >= 3) {
        labels.push({ w, name: MONTHS[month] });
        lastLabelWeek = w;
      }
      prevMonth = month;
    }
  });
  return { weeks, labels };
};

const readCache = () => {
  try {
    const cached = JSON.parse(sessionStorage.getItem(CACHE_KEY));
    return cached?.contributions?.length ? cached : null;
  } catch {
    return null;
  }
};

// Live contribution graph for the GitHub account, styled like github.com.
const GithubActivity = () => {
  const [ref, inView] = useInView("200px");
  const scrollRef = useRef(null);
  const [data, setData] = useState(readCache);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!inView || data) return;
    const controller = new AbortController();

    fetch(`https://github-contributions-api.jogruber.de/v4/${socials.githubUser}?y=last`, {
      signal: controller.signal,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((json) => {
        setData(json);
        try {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify(json));
        } catch {
          /* storage can be blocked */
        }
      })
      .catch((err) => err?.name !== "AbortError" && setFailed(true));

    return () => controller.abort();
  }, [inView, data]);

  // Most recent weeks are on the right: start scrolled there on small screens.
  useEffect(() => {
    if (data && scrollRef.current) scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
  }, [data]);

  const total = data && Object.values(data.total)[0];
  const graph = data?.contributions?.length ? buildWeeks(data.contributions) : null;

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className='mt-16 rounded-2xl border border-line bg-tertiary p-5 shadow-card sm:p-6'
      >
        <div className='flex flex-wrap items-center justify-between gap-4'>
          <a
            href={socials.github}
            target='_blank'
            rel='noopener noreferrer'
            className='group flex items-center gap-3 text-ink'
          >
            <GithubIcon />
            <span>
              <span className='block text-[18px] font-bold leading-tight group-hover:text-accent'>
                @{socials.githubUser}
              </span>
              <span className='block text-sm text-secondary'>
                {total != null ? `${total} contributions in the last year` : "GitHub contributions"}
              </span>
            </span>
          </a>

          <a
            href={socials.github}
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-full border border-line px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent'
          >
            View profile →
          </a>
        </div>

        {failed && !graph ? (
          <p className='mt-6 text-sm text-secondary'>
            Live activity could not be loaded right now. See it directly on GitHub.
          </p>
        ) : (
          <div ref={scrollRef} className='mt-6 overflow-x-auto pb-2'>
            <div className='mx-auto flex w-max gap-2'>
              <div className='grid grid-rows-7 pt-5 text-[10px] sm:text-[11px] leading-none text-secondary' style={{ rowGap: GAP }}>
                {["", "Mon", "", "Wed", "", "Fri", ""].map((day, i) => (
                  <span key={i} className='flex items-center' style={{ height: CELL }}>
                    {day}
                  </span>
                ))}
              </div>

              <div role='img' aria-label={total != null ? `${total} GitHub contributions in the last year` : "GitHub contribution graph"}>
                <div className='relative h-5 text-[10px] text-secondary'>
                  {graph?.labels.map(({ w, name }) => (
                    <span key={w} className='absolute' style={{ left: `calc(${w} * (${CELL} + ${GAP}))` }}>
                      {name}
                    </span>
                  ))}
                </div>

                <div className='flex' style={{ gap: GAP }}>
                  {(graph?.weeks ?? Array.from({ length: 53 }, () => Array(7).fill(null))).map((week, w) => (
                    <div key={w} className='grid grid-rows-7' style={{ rowGap: GAP }}>
                      {Array.from({ length: 7 }, (_, d) => {
                        const day = week[d];
                        if (!day && graph) return <span key={d} style={{ width: CELL, height: CELL }} />;
                        return (
                          <span
                            key={d}
                            title={day ? `${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}` : undefined}
                            className={`gh-cell ${graph ? "" : "animate-pulse"}`}
                            style={{
                              width: CELL,
                              height: CELL,
                              background: `var(--gh-${day?.level ?? 0})`,
                              "--c": Math.min(w, 53),
                            }}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className='mt-3 flex items-center justify-end gap-1.5 text-[11px] text-secondary'>
          Less
          {[0, 1, 2, 3, 4].map((level) => (
            <span key={level} className='gh-cell' style={{ width: CELL, height: CELL, background: `var(--gh-${level})` }} />
          ))}
          More
        </div>
      </motion.div>
    </div>
  );
};

export default GithubActivity;
