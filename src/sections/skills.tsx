import { Laptop, LoaderPinwheel, Smartphone, TestTubeDiagonal } from 'lucide-react';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { AnimatedGroup } from '@/components/motion/animated-group';
import { useInView } from 'react-intersection-observer';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import SectionHeading from '@/components/section-heading';

const skillsData = [
  {
    titleUnderlined: 'Software',
    title: 'development',
    description:
      'I have been working as a developer for 9 years. I have experience in building scalable, maintainable and beautiful web applications.',
    icon: <Laptop size={32} />,
  },
  {
    titleUnderlined: 'Frontend',
    title: 'technologies',
    description:
      'Passionate about UI/UX. Over 6 years of development experience in HTML, CSS, JS, TS, React, Redux, NextJS',
    icon: <LoaderPinwheel size={32} />,
  },
  {
    titleUnderlined: 'Mobile, testing,',
    title: 'CI/CD',
    description:
      'Passionate about UI/UX. Over 6 years of development experience in HTML, CSS, JS, TS, React, Redux, NextJS',
    icon: <Smartphone size={32} />,
  },
];

const HeroSection = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const [wasGridInView, setWasGridInView] = useState(false);

  const [gridRef, inView] = useInView({
    threshold: 0.7,
  });

  useEffect(() => {
    if (!wasGridInView && inView) {
      setWasGridInView(true);
    }
  }, [inView, wasGridInView]);

  return (
    <section
      id="skills"
      ref={ref}
    >
      <div
        className="w-full flex flex-col gap-4 items-center lg:p-24 p-14"
        ref={gridRef}
      >
        <SectionHeading>My Expertise</SectionHeading>
        {wasGridInView ? (
          <AnimatedGroup
            className="grid grid-cols-1 lg:grid-cols-3 gap-5"
            preset="fade"
          >
            {skillsData.map((skill, index) => (
              <div className="border-4 border-zinc-500 p-6 xl:p-10 h-[300px] w-[300px] xl:h-[350px] xl:w-[350px]">
                <div className="flex items-center gap-2">
                  {skill.icon}
                  <div>
                    <h2
                      className={clsx(
                        'text-xl lg:text-2xl font-medium underline decoration-4 ',
                        { 'decoration-orange-500': index === 0 },
                        { 'decoration-violet-500': index === 1 },
                        { 'decoration-lime-500': index === 2 }
                      )}
                    >
                      {skill.titleUnderlined}
                    </h2>
                    <h2 className="text-xl lg:text-2xl font-medium">{skill.title}</h2>
                  </div>
                </div>
                <div className="py-6 xl:py-8 px-2 xl:px-4">
                  <p className="font-mono text-sm xl:text-base">{skill.description}</p>
                </div>
              </div>
            ))}
          </AnimatedGroup>
        ) : (
          <div className="h-[300px] xl:h-[350px]" />
        )}
        <img
          src="/src/assets/html-code.webp"
          alt="skills"
          className="-mt-10 w-[60%] opacity-20 min-w-[300px]"
        />
      </div>
    </section>
  );
});

export default HeroSection;
