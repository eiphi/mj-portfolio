import AnimatedBackground from '@/components/motion/animated-background';
import SectionHeading from '@/components/section-heading';
import { forwardRef, useState } from 'react';

const projectCategoriesArray = ['All', 'Commercial', 'Personal'];

const WorkSection = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const [projectCategories, setProjectCategories] = useState('All');

  return (
    <section
      id="work"
      ref={ref}
    >
      <div className="w-full flex flex-col gap-4 items-center lg:px-20 px-14 pt-12">
        <SectionHeading>Work</SectionHeading>

        <div className="rounded-[8px] p-[2px] bg-zinc-700">
          <AnimatedBackground
            defaultValue="All"
            className="rounded-[7px] bg-violet-500"
            transition={{
              ease: 'easeInOut',
              duration: 0.3,
            }}
          >
            {projectCategoriesArray.map((label, index) => {
              return (
                <button
                  key={index}
                  data-id={label}
                  type="button"
                  className="inline-flex p-2 w-40 items-center justify-center text-center transition-transform active:scale-[0.98] text-lg font-medium"
                >
                  {label}
                </button>
              );
            })}
          </AnimatedBackground>
        </div>
        
      </div>
    </section>
  );
});

export default WorkSection;
