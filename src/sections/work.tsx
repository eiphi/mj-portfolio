import ProjectCard from '@/components/project-card';
import SectionHeading from '@/components/section-heading';
import { allProjectsArray, workProjectsArray, personalProjectsArray } from '@/lib/constants';
import { forwardRef, useState } from 'react';

const projectCategoriesArray = ['All', 'Commercial', 'Personal'];

const WorkSection = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const [projectCategories, setProjectCategories] = useState(projectCategoriesArray[0]);

  const selectedProjects =
    projectCategories === 'All'
      ? allProjectsArray
      : projectCategories === 'Commercial'
      ? workProjectsArray
      : personalProjectsArray;

  return (
    <section
      ref={ref}
      id="work"
    >
      <div className="h-full w-full flex flex-col gap-4 items-center lg:px-20 px-14 pt-12">
        <SectionHeading>Work</SectionHeading>

        <div className="rounded-[8px] p-[2px] bg-zinc-700 flex">
          {projectCategoriesArray.map((label, index) => {
            return (
              <button
                key={index}
                aria-selected={projectCategories === label}
                className="rounded-md inline-flex p-2 w-32 md:w-40 items-center justify-center text-center transition-transform active:scale-[0.98] text-md md:text-lg font-medium aria-selected:bg-violet-500"
                onClick={() => setProjectCategories(label)}
              >
                {label}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
          {selectedProjects.map((project, index) => {
            return (
              <ProjectCard
                key={`${project.id}-${index}`}
                project={project}
                // TODO DATA AND FIX ERROR
              />
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default WorkSection;
