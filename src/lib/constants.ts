import ReactSVG from '@/assets/tech-icons/react.svg';
import AwsSVG from '@/assets/tech-icons/aws.svg';
import NextSVG from '@/assets/tech-icons/nextjs.svg';
import TypescriptSVG from '@/assets/tech-icons/typescript.svg';
import TailwindSVG from '@/assets/tech-icons/tailwind.svg';
import StorybookSVG from '@/assets/tech-icons/storybook.svg';
import ViteSVG from '@/assets/tech-icons/vite.svg';
import BootstrapSVG from '@/assets/tech-icons/bootstrap.svg';
import BrowserstackSVG from '@/assets/tech-icons/browserstack.svg';
import CloudflareSVG from '@/assets/tech-icons/cloudflare.svg';
import CssSVG from '@/assets/tech-icons/css.svg';
import GitSVG from '@/assets/tech-icons/git.svg';
import HtmlSVG from '@/assets/tech-icons/html.svg';
import JavaScriptSVG from '@/assets/tech-icons/javascript.svg';
import JenkinsSVG from '@/assets/tech-icons/jenkins.svg';
import JestSVG from '@/assets/tech-icons/jest.svg';
import JquerySVG from '@/assets/tech-icons/jquery.svg';
import MaterialUiSVG from '@/assets/tech-icons/material-ui.svg';
import NodejsSVG from '@/assets/tech-icons/node.svg';
import MongodbSVG from '@/assets/tech-icons/mongodb.svg';
import PlaywrightSVG from '@/assets/tech-icons/playwright.svg';
import ReduxSVG from '@/assets/tech-icons/redux.svg';
import SassSVG from '@/assets/tech-icons/sass.svg';
import NpmSVG from '@/assets/tech-icons/npm.svg';
import PostmanSVG from '@/assets/tech-icons/postman.svg';
import SeleniumSVG from '@/assets/tech-icons/selenium.svg';

import TixImage1 from '@/assets/projects/tix1.webp';
import TixImage2 from '@/assets/projects/tix2.webp';
import JJImage1 from '@/assets/projects/jjit1.png';

export type Technology = {
  title: string;
  svg: string;
};

export const technologiesMap: Record<string, Technology> = {
  React: { title: 'React', svg: ReactSVG },
  AWS: { title: 'AWS', svg: AwsSVG },
  Next: { title: 'Next.js', svg: NextSVG },
  Typescript: { title: 'Typescript', svg: TypescriptSVG },
  Tailwind: { title: 'Tailwind', svg: TailwindSVG },
  Storybook: { title: 'Storybook', svg: StorybookSVG },
  Vite: { title: 'Vite', svg: ViteSVG },
  Bootstrap: { title: 'Bootstrap', svg: BootstrapSVG },
  Browserstack: { title: 'Browserstack', svg: BrowserstackSVG },
  Cloudflare: { title: 'Cloudflare', svg: CloudflareSVG },
  Css: { title: 'CSS3', svg: CssSVG },
  Git: { title: 'Git', svg: GitSVG },
  Html: { title: 'HTML', svg: HtmlSVG },
  JavaScript: { title: 'JavaScript', svg: JavaScriptSVG },
  Jenkins: { title: 'Jenkins', svg: JenkinsSVG },
  Jest: { title: 'Jest', svg: JestSVG },
  Jquery: { title: 'jQuery', svg: JquerySVG },
  MaterialUi: { title: 'Material UI', svg: MaterialUiSVG },
  Nodejs: { title: 'Node.js', svg: NodejsSVG },
  Mongodb: { title: 'MongoDB', svg: MongodbSVG },
  Playwright: { title: 'Playwright', svg: PlaywrightSVG },
  Redux: { title: 'Redux', svg: ReduxSVG },
  Sass: { title: 'Sass', svg: SassSVG },
  Npm: { title: 'npm', svg: NpmSVG },
  Postman: { title: 'Postman', svg: PostmanSVG },
  Selenium: { title: 'Selenium', svg: SeleniumSVG },
};

export const technologySvgsArray = [
  { title: 'React', svg: ReactSVG },
  { title: 'AWS', svg: AwsSVG },
  { title: 'Next.js', svg: NextSVG },
  { title: 'Typescript', svg: TypescriptSVG },
  { title: 'Tailwind', svg: TailwindSVG },
  { title: 'Storybook', svg: StorybookSVG },
  { title: 'Vite', svg: ViteSVG },
  { title: 'Bootstrap', svg: BootstrapSVG },
  { title: 'Browserstack', svg: BrowserstackSVG },
  { title: 'Cloudflare', svg: CloudflareSVG },
  { title: 'CSS3', svg: CssSVG },
  { title: 'Git', svg: GitSVG },
  { title: 'HTML', svg: HtmlSVG },
  { title: 'JavaScript', svg: JavaScriptSVG },
  { title: 'Jenkins', svg: JenkinsSVG },
  { title: 'Jest', svg: JestSVG },
  { title: 'jQuery', svg: JquerySVG },
  { title: 'Material UI', svg: MaterialUiSVG },
  { title: 'Node.js', svg: NodejsSVG },
  { title: 'MongoDB', svg: MongodbSVG },
  { title: 'Playwright', svg: PlaywrightSVG },
  { title: 'Redux', svg: ReduxSVG },
  { title: 'Sass', svg: SassSVG },
  { title: 'npm', svg: NpmSVG },
  { title: 'Postman', svg: PostmanSVG },
  { title: 'Selenium', svg: SeleniumSVG },
];

export const workProjectsArray = [
  {
    id: 'tix',
    title: 'Tix.nl',
    website: 'https://www.tix.nl',
    desc: 'First Software Tester in the biggest flight search engine company in the Netherlands. I was responsible for creating and executing test strategies and cases including test automation.',
    technologies: [
      technologiesMap.Storybook,
      technologiesMap.Browserstack,
      technologiesMap.Selenium,
      technologiesMap.Html,
      technologiesMap.Css,
      technologiesMap.JavaScript,
      technologiesMap.Git,
    ],
    imagesUrl: [TixImage1, TixImage2],
  },
  {
    id: 'project1',
    title: 'Project Alpha',
    website: 'https://www.justjoin.it',
    desc: 'Led development of an enterprise resource planning system with focus on inventory management and supply chain optimization. Implemented real-time tracking and reporting features.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'Docker', 'AWS', 'TypeScript'],
    imagesUrl: [JJImage1, JJImage1],
  },
  {
    id: 'project2',
    title: 'Analytics Dashboard',
    website: 'https://www.justjoin.it',
    desc: 'Built a data visualization platform for analyzing customer behavior patterns. Created interactive charts and graphs to display key metrics and trends.',
    technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL', 'Elasticsearch', 'Kibana'],
    imagesUrl: [TixImage1, TixImage2],
  },
  {
    id: 'project3',
    title: 'E-commerce Platform',
    website: 'https://www.tix.nl',
    desc: 'Developed a scalable online marketplace connecting buyers and sellers. Implemented secure payment processing and real-time inventory management.',
    technologies: ['Next.js', 'Stripe', 'Firebase', 'Material UI', 'Redux', 'Jest'],
    imagesUrl: [TixImage1, TixImage2],
  },
];

export const personalProjectsArray = [
  {
    id: 'personal1',
    title: 'Portfolio Website',
    website: 'https://www.tix.nl',
    desc: 'A modern portfolio website built with React and Three.js featuring 3D animations and interactive elements. Implemented responsive design and dark mode.',
    technologies: ['React', 'Three.js', 'TailwindCSS', 'Framer Motion', 'TypeScript', 'Vite'],
    imagesUrl: [TixImage1, TixImage2],
  },
  {
    id: 'personal2',
    title: 'Weather App',
    website: 'https://www.tix.nl',
    desc: 'Real-time weather application with location-based forecasts. Features include hourly predictions, animated weather icons, and saved location tracking.',
    technologies: ['React Native', 'OpenWeather API', 'Redux', 'Styled Components', 'Jest'],
    imagesUrl: [TixImage1, TixImage2],
  },
  {
    id: 'personal3',
    title: 'Task Manager',
    website: 'https://www.tix.nl',
    desc: 'Full-stack task management application with drag-and-drop interface, collaborative features, and real-time updates using WebSocket.',
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Socket.io', 'TailwindCSS', 'TypeScript'],
    imagesUrl: [TixImage1, TixImage2],
  },
  {
    id: 'personal4',
    title: 'Recipe Finder',
    website: 'https://www.tix.nl',
    desc: 'Web application for discovering and sharing recipes. Features include ingredient-based search, user ratings, and personalized recipe recommendations.',
    technologies: ['Vue.js', 'Firebase', 'Vuex', 'TailwindCSS', 'Jest', 'Cypress'],
    imagesUrl: [TixImage1, TixImage2],
  },
];

export const allProjectsArray = [...workProjectsArray, ...personalProjectsArray];
