import { Technology } from '@/lib/constants';

const TechIcon = ({ tech }: { tech: Technology }) => {
  return (
    <div className="group/tech-icon relative">
      <img
        src={tech.svg}
        alt={tech.title}
        className="w-6 h-6 hover:scale-150 transition-transform duration-300"
      />
      <p className="absolute -top-8 transform left-1/2 -translate-x-1/2 opacity-0 group-hover/tech-icon:opacity-100 transition-opacity duration-300 bg-zinc-900 rounded-md p-1 text-sm">
        {tech.title}
      </p>
    </div>
  );
};

export default TechIcon;
