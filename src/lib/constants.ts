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

import TixImage from '@/assets/projects/tix.webp';
import JJImage from '@/assets/projects/jjit.webp';
import DealsImage from '@/assets/projects/deals.webp';
import BBGMImage from '@/assets/projects/6man.webp';
import FreelanceImage from '@/assets/projects/freelance.webp';
import OrttoImage from '@/assets/projects/ortto.webp';
import PortfolioImage from '@/assets/projects/portfolio.webp';

export type Technology = {
  title: string;
  svg: string;
};

export type Project = {
  id: string;
  title: string;
  desc: string;
  website: string;
  technologies: Technology[];
  imageUrl: string;
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

export const heroAnimationSequenceItems = [
  'React',
  'JavaScript',
  'Redux',
  'TypeScript',
  'Next.js',
  'TailwindCSS',
  'Node.js',
  'Vitest',
  'Storybook',
  'Git',
  'Playwright',
  'HTML5',
  'Figma',
  'Vite',
  'AngularJS',
  'Webpack',
  'CSS3',
  'Wordpress',
];

export const workProjectsArray = [
  {
    id: 'ortto',
    title: 'Ortto',
    website: 'https://ortto.com',
    desc: 'Part of the core frontend team building the Ortto app— a robust and scalable marketing automation software. Led the development of key features, including reporting dashboards, widgets, playbooks, push notifications, and more.',
    technologies: [
      technologiesMap.React,
      technologiesMap.Redux,
      technologiesMap.Storybook,
      technologiesMap.Cloudflare,
      technologiesMap.Css,
      technologiesMap.JavaScript,
      technologiesMap.Git,
      technologiesMap.Jenkins,
    ],
    imageUrl: OrttoImage,
  },

  {
    id: 'jjit',
    title: 'Just Join IT',
    website: 'https://justjoin.it',
    desc: "Founding member of the development team for Poland's largest and fastest-growing tech job board. Built core functionalities that propelled the company's growth and contributed to multiple nominations for startup awards.",
    technologies: [
      technologiesMap.React,
      technologiesMap.AWS,
      technologiesMap.Bootstrap,
      technologiesMap.Html,
      technologiesMap.Css,
      technologiesMap.JavaScript,
      technologiesMap.Git,
    ],
    imageUrl: JJImage,
  },
  {
    id: 'tix',
    title: 'Tix.nl',
    website: 'https://www.tix.nl',
    desc: 'First Software Tester at the largest flight search engine company in the Netherlands, responsible for creating and executing comprehensive test strategies and cases, including test automation.',
    technologies: [
      technologiesMap.Storybook,
      technologiesMap.Browserstack,
      technologiesMap.Selenium,
      technologiesMap.Html,
      technologiesMap.Css,
      technologiesMap.JavaScript,
      technologiesMap.Git,
      technologiesMap.MaterialUi,
    ],
    imageUrl: TixImage,
  },
  {
    id: 'freelance',
    title: 'Freelance',
    website: 'https://eiphi.site',
    desc: 'Operated as an independent freelance web developer, overseeing the full project lifecycle—from client acquisition to development and ongoing maintenance.',
    technologies: [
      technologiesMap.React,
      technologiesMap.Html,
      technologiesMap.Css,
      technologiesMap.JavaScript,
      technologiesMap.Jquery,
      technologiesMap.MaterialUi,
      technologiesMap.Playwright,
      technologiesMap.Bootstrap,
    ],
    imageUrl: FreelanceImage,
  },
];

export const personalProjectsArray = [
  {
    id: 'games',
    title: 'Game deals',
    website: 'https://deals.eiphi.site',
    desc: 'A personal project developed with React, Redux Toolkit, ShadcnUI, and Tailwind CSS that allows users to search and compare top gaming deals across multiple digital stores. Integrated with CheapShark and AnyGameDeals APIs for real-time pricing.',
    technologies: [
      technologiesMap.React,
      technologiesMap.Redux,
      technologiesMap.Typescript,
      technologiesMap.Vite,
      technologiesMap.Tailwind,
      technologiesMap.Postman,
    ],
    imageUrl: DealsImage,
  },
  {
    id: 'bbgm',
    title: 'BBGM 6-man',
    website: 'https://bbgm6man.eiphi.site',
    desc: 'A companion app for the Basketball GM online game, built with React and Redux. Key features include importing Basketball GM save games, player comparison and local data storage. Utilizes react-router, react-thunk, styled-components and Semantic UI for enhanced functionality and styling.',
    technologies: [
      technologiesMap.React,
      technologiesMap.Redux,
      technologiesMap.Typescript,
      technologiesMap.Git,
      technologiesMap.Css,
    ],
    imageUrl: BBGMImage,
  },
  {
    id: 'portfolio',
    title: 'MJ Portfolio',
    website: 'https://www.eiphi.site',
    desc: 'This website - built with React, Vite, Tailwind CSS and Framer Motion, featuring animations, interactive elements and full responsiveness across various devices.',
    technologies: [
      technologiesMap.React,
      technologiesMap.Css,
      technologiesMap.Typescript,
      technologiesMap.Tailwind,
    ],
    imageUrl: PortfolioImage,
  },
];

export const allProjectsArray = [...workProjectsArray, ...personalProjectsArray];

export const experienceDataArray = [
  {
    id: 'ortto',
    company: 'Ortto',
    position: 'Senior Frontend Developer',
    dates: 'Oct 2019 - Jul 2023',
    url: 'https://ortto.com',
    description:
      'Core member of the frontend team building the Ortto app — a robust and scalable marketing automation software, where I led the development of major features such as reporting dashboards, widgets, playbooks and push notifications.\n\nExtensively used React & Redux and Pure JS among others. Mentored team members and actively contributed to feature planning and strategy.',
  },
  {
    id: 'justjoinit',
    company: 'Just Join IT',
    position: 'Frontend Developer',
    dates: 'Jan 2018 - Oct 2019',
    url: 'https://justjoin.it',
    description:
      "As a founding member of the development team for Poland's largest tech job board, I played a key role in building growth-driving functionalities that contributed to multiple startup award nominations.\n\nLed the transition from AngularJS to React, while developing new features, designing layouts and creating marketing landing pages. Took on leadership responsibilities by onboarding new developers and providing ongoing technical support to the team.",
  },
  {
    id: 'freelance',
    company: 'Freelance',
    position: 'Freelance Web Developer',
    dates: 'Jan 2015 - Jan 2018',
    url: 'https://eiphi.site',
    description:
      'Worked independently as a freelance web developer, managing the entire project lifecycle from client acquisition through development and maintenance.\n\nCollaborated with individual and corporate clients to build and maintain responsive websites, transforming designs into user-friendly applications using technologies such as HTML, CSS, JavaScript, jQuery, WordPress, PrestaShop and Joomla.',
  },
  {
    id: 'tix',
    company: 'Tix.nl',
    position: 'Software Tester',
    dates: 'Jul 2013 - Dec 2014',
    url: 'https://tix.nl',
    description:
      'As the first Software Tester at the largest flight search engine company in the Netherlands, I led the creation and execution of comprehensive test strategies, including test automation frameworks.\n\nCollaborated closely with the development team to ensure high software quality standards while designing and implementing automated tests using Ruby, Selenium and driving continuous improvement in product reliability.',
  },
];
