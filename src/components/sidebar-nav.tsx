import { scrollToSection } from '@/lib/utils';
import { Circle } from 'lucide-react';

export const menuOptions = [
  {
    id: 'home',
    href: '/',
  },
  {
    id: 'skills',
    href: '/#skills',
  },
  {
    id: 'work',
    href: '/#work',
  },
  {
    id: 'experience',
    href: '/#experience',
  },
  {
    id: 'contact',
    href: '/#contact',
  },
];

const SidebarNav = ({ activeSection }: { activeSection: string }) => {
  console.log('activeSection', activeSection);
  return (
    <nav className="flex flex-col fixed left-2 top-[50%] translate-y-[-50%]">
      {menuOptions.map((option) => (
        <a
          href={option.href}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(option.id);
          }}
          className={`flex items-center gap-2 group p-2 hover:text-orange-200 transition-all duration-150 ${
            activeSection === option.id ? 'text-orange-500' : 'text-gray-500'
          }`}
        >
          <Circle
            size={14}
            className="transition-all duration-100 group-hover:scale-125"
            fill="currentColor"
          />
          <span className="transition-all duration-300 group-hover:opacity-100 opacity-0 text-sm">
            {option.id}
          </span>
        </a>
      ))}
    </nav>
  );
};

export default SidebarNav;
