import { Laptop, LoaderPinwheel, Smartphone } from 'lucide-react';
import { forwardRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';

import { AnimatedGroup } from '@/components/motion/animated-group';
import SectionHeading from '@/components/section-heading';
import TechIconsSlider from '@/components/tech-icons-slider';

const skillsData = [
  {
    titleUnderlined: 'Software',
    title: 'development',
    description:
      'I am a real enthusiast of IT, working in the industry since 2013. Creative, innovative, experienced in planning, developing and managing robust applications.',
    icon: <Laptop size={32} />,
  },
  {
    titleUnderlined: 'Frontend',
    title: 'technologies',
    description:
      'Passionate about UI/UX. Over 8 years of development experience in HTML, CSS, JS, TS, React, Redux, NextJS among others.',
    icon: <LoaderPinwheel size={32} />,
  },
  {
    titleUnderlined: 'Mobile, testing,',
    title: 'CI/CD',
    description:
      'With a background working as a software tester, I have experience in creating and managing CI/CD pipelines, ensuring efficient and reliable software delivery.',
    icon: <Smartphone size={32} />,
  },
];

const HeroSection = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const [wasGridInView, setWasGridInView] = useState(false);

  const [gridRef, inView] = useInView({
    threshold: 0.5,
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
        className="w-full flex flex-col gap-4 items-center lg:px-24 px-14 pt-12"
        ref={gridRef}
      >
        <SectionHeading>My Expertise</SectionHeading>
        {wasGridInView ? (
          <AnimatedGroup
            className="grid grid-cols-1 lg:grid-cols-3 gap-5"
            preset="fade"
          >
            {skillsData.map((skill, index) => (
              <div
                key={`skill-${index}`}
                className="border-4 border-zinc-500 p-6 xl:p-10 h-[300px] w-[300px] xl:h-[350px] xl:w-[350px]"
              >
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
                  <p className=" text-sm xl:text-base">{skill.description}</p>
                </div>
              </div>
            ))}
          </AnimatedGroup>
        ) : (
          <div className="h-[300px] xl:h-[350px]" />
        )}

        <h3 className="z-10 hidden md:block text-4xl font-bold pt-14">Tools of the trade:</h3>
        <TechIconsSlider />
        <img
          src="/src/assets/html-code.webp"
          alt="skills"
          draggable={false}
          className="-mt-10 md:-mt-[260px] w-[60%] opacity-20 md:opacity-10 min-w-[300px]"
        />
      </div>
    </section>
  );
});

export default HeroSection;
