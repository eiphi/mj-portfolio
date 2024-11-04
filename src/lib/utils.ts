import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToSection = (sectionId: string) => {
  const targetDiv = document.getElementById(sectionId);
  targetDiv && targetDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.history.pushState({}, '', `#${sectionId}`);
};
