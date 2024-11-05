import { Technology } from '@/lib/constants';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const TechIcon = ({ tech }: { tech: Technology }) => {
  return (
    <HoverCard
      openDelay={300}
      closeDelay={100}
    >
      <HoverCardTrigger>
        <img
          src={tech.svg}
          alt={tech.title}
          className="w-6 h-6 hover:scale-150 transition-transform duration-300"
        />
      </HoverCardTrigger>
      <HoverCardContent side="top" sideOffset={8}>
        {tech.title}
      </HoverCardContent>
    </HoverCard>
  );
};

export default TechIcon;
