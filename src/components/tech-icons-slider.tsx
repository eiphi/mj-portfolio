import { technologySvgsArray } from '@/lib/constants';
import { motion } from 'framer-motion';

const TechIconsSlider = () => (
  <div className="relative overflow-hidden mx-auto hidden md:block">
    <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-zinc-900 before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-zinc-900 after:to-transparent after:filter after:blur-3"></div>

    <motion.div
      className="flex"
      animate={{
        x: ['0%', '-100%'],
        transition: {
          ease: 'linear',
          duration: 15,
          repeat: Infinity,
        },
      }}
    >
      {[...technologySvgsArray, ...technologySvgsArray].map((slide, index) => (
        <div
          key={index}
          className="flex-shrink-0 p-1 xl:p-2"
          style={{ width: `${100 / technologySvgsArray.length}%` }}
        >
          <img
            src={slide.svg}
            alt={slide.title}
            className="size-24"
          />
        </div>
      ))}
    </motion.div>
  </div>
);

export default TechIconsSlider;
