import { Laptop, LoaderPinwheel, Smartphone, TestTubeDiagonal } from 'lucide-react';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { AnimatedGroup } from '@/components/motion/animated-group';
import { useInView } from 'react-intersection-observer';

const skillsData = [
  {
    titleUnderlined: 'Software',
    title: 'development',
    underlineColor: 'orange',
    description:
      'I have been working as a developer for 9 years. I have experience in building scalable, maintainable and beautiful web applications.',
    icon: <Laptop size={32} />,
  },
  {
    titleUnderlined: 'Frontend',
    title: 'technologies',
    underlineColor: 'violet',
    description:
      'Passionate about UI/UX. Over 6 years of development experience in HTML, CSS, JS, TS, React, Redux, NextJS',
    icon: <LoaderPinwheel size={32} />,
  },
  {
    titleUnderlined: 'Mobile, testing,',
    title: 'CI/CD',
    underlineColor: 'lime',
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
      <div className="w-full flex flex-col gap-4 items-center lg:p-20 p-14" ref={gridRef}>
        <h1 className="text-5xl lg:text-7xl font-extrabold mb-10">My Expertise</h1>
        {wasGridInView ? (
          <AnimatedGroup
            className="grid grid-cols-1 lg:grid-cols-3 gap-5"
            preset="fade"
          >
            {skillsData.map((skill) => (
              <div className="border-2 border-zinc-500 p-10">
                <div className="flex items-center gap-2">
                  {skill.icon}
                  <div>
                    <h2
                      className={`text-2xl lg:text-2xl font-medium underline decoration-4 decoration-${skill.underlineColor}-500 underline-offset-0`}
                    >
                      {skill.titleUnderlined}
                    </h2>
                    <h2 className="text-2xl lg:text-2xl font-medium">{skill.title}</h2>
                  </div>
                </div>
                <div className="p-8">
                  <p className="font-mono">{skill.description}</p>
                </div>
              </div>
            ))}
          </AnimatedGroup>
        ) : (
          <div className="h-[350px]" />
        )}
        <img
          src="/src/assets/html-code.webp"
          alt="skills"
          className="-mt-10 w-1/2 opacity-20"
        />
      </div>
    </section>
  );
});

export default HeroSection;
