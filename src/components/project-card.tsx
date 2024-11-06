import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import TechIcon from './tech-icon';
import { Project } from '@/lib/constants';


const ProjectCard = ({ project }: { project: Project }) => {
  const { id, title, desc, website, technologies, imageUrl } = project;
  return (
    <Card
      onClick={() => {
        window.open(website, '_blank');
      }}
      className="group max-w-[400px] cursor-pointer md:hover:scale-125 z-2 hover:z-10 transition duration-300 hover:shadow-xl hover:shadow-zinc-800"
    >
      <img
        src={imageUrl}
        alt={title}
        className="rounded-t-[11px] object-top object-cover aspect-video"
      />
      <CardHeader>
        <CardTitle className="text-3xl text-zinc-50 font-bold underline decoration-4 decoration-orange-500">
          {title}
        </CardTitle>
        <CardDescription>
          <p className="pt-2 text-sm text-zinc-200">{desc}</p>
          <div className="flex gap-2 pt-4">
            {technologies.map((tech, index) => {
              return (
                <TechIcon
                  tech={tech}
                  key={`${id}-${tech.title}-${index}`}
                />
              );
            })}
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ProjectCard;
