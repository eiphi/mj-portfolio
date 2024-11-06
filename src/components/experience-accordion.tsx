import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/motion/accordion';
import { experienceDataArray } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { ChevronUp } from 'lucide-react';
import { useState } from 'react';

const ExperienceAccordion = () => {
  const [expanded, setExpanded] = useState(experienceDataArray[0].id);
  return (
    <Accordion
      className="flex w-full md:w-3/4 flex-col divide-y-2 divide-zinc-700"
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      expandedValue={expanded}
      onValueChange={(value) => setExpanded(value as string)}
    >
      {experienceDataArray.map((job) => (
        <AccordionItem
          key={job.id}
          value={job.id}
          className="py-3"
        >
          <AccordionTrigger className="w-full text-left text-zinc-50 group">
            <div className="flex items-center justify-between">
              <div className="flex items-center w-full">
                <p
                  className={cn(
                    'text-xl font-medium underline decoration-4 transition duration-200',
                    {
                      'decoration-orange-500': expanded === job.id,
                      'decoration-violet-500': expanded !== job.id,
                      'group-hover:decoration-orange-500': true,
                    }
                  )}
                >
                  {job.company}
                </p>
                <p className="hidden md:block pl-3 self-end text-sm text-zinc-200">
                  {job.position}
                </p>
                <p className="text-xs md:text-sm text-zinc-200 ml-auto mr-5">{job.dates}</p>
              </div>
              <ChevronUp className="h-6 w-6 transition duration-200 group-data-[expanded]:-rotate-180 text-zinc-300 group-hover:cursor-pointer group-hover:text-orange-500 group-hover:scale-110" />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <a
              className="text-zinc-600 hover:text-orange-500 transition-colors cursor-pointer text-sm"
              href={job.url}
              target="_blank"
            >
              {job.url}
            </a>
            <p className="text-zinc-400 text-lg py-2 whitespace-pre-wrap">{job.description}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ExperienceAccordion;
