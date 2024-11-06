import ProjectCard from '@/components/project-card';
import SectionHeading from '@/components/section-heading';
import { allProjectsArray, workProjectsArray, personalProjectsArray } from '@/lib/constants';
import { forwardRef, useState, useEffect } from 'react';

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
    <div
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
                className="rounded-md inline-flex p-2 w-24 md:w-40 items-center justify-center text-center transition-transform active:scale-[0.98] text-sm md:text-lg font-medium aria-selected:bg-violet-500"
                onClick={() => setProjectCategories(label)}
              >
                {label}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 pb-8 lg:pb-16 min-h-[500px]">
          {selectedProjects.map((project, index) => {
            return (
              <ProjectCard
                key={`${project.id}-${index}`}
                project={project}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default WorkSection;
