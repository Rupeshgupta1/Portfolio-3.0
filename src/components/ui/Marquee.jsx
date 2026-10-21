import { technologies } from "../../constants";

// Infinite strip of tech chips. The list is doubled so -50% loops seamlessly.
const Marquee = () => (
  <div
    aria-hidden='true'
    className='group relative overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]'
  >
    <div className='flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused] motion-reduce:animate-none'>
      {[...technologies, ...technologies].map((tech, i) => (
        <div
          key={`${tech.name}-${i}`}
          className='flex items-center gap-2 rounded-full border border-line bg-tertiary/70 px-4 py-2 text-sm font-medium text-ink-soft'
        >
          <img src={tech.icon} alt='' className='h-5 w-5 object-contain' loading='lazy' />
          {tech.name}
        </div>
      ))}
    </div>
  </div>
);

export default Marquee;
