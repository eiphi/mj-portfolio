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
    desc: 'Part of the core frontend team building Ortto app. Led development of key features including reporting dashboards, widgets, playbooks, and push notifications among others.',
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
    desc: "As part of the founding development team of Poland's largest tech job board, I played a key role in building functionalities that drive company growth and led to multiple startup award nominations.",
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
    desc: 'First Software Tester in the biggest flight search engine company in the Netherlands. I was responsible for creating and executing test strategies and cases including test automation.',
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
    desc: 'Worked independently as a freelance web developer, managing the entire project lifecycle from client acquisition through development and maintenance.',
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
    desc: 'A personal project built with React, Redux Toolkit, ShadcnUI and Tailwind CSS. Search and compare the best gaming deals across various digital stores. Integrates with CheapShark and AnyGameDeals APIs.',
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
    desc: 'A companion app for Basketball GM online game built with React and Redux. Features include importing Basketball GM savegames, comparing players, and storing data in local storage. Uses react-router, react-thunk, styled components, and Semantic UI.',
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
    desc: 'This website built with React, Vite, Tailwind CSS and Framer Motion. Features animations and interactive elements and is fully responsive.',
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
      'Part of the core frontend team building Ortto app. Led development of key features including reporting dashboards, widgets, playbooks, and push notifications. \n\nWorked with React & Redux, Google Charts, and Pure JS among others. Mentored team members and contributed to feature planning.',
  },
  {
    id: 'justjoinit',
    company: 'Just Join IT',
    position: 'Frontend Developer',
    dates: 'Jan 2018 - Oct 2019',
    url: 'https://justjoin.it',
    description:
      "As part of the founding development team of Poland's largest tech job board, I played a key role in building functionalities that drive company growth and led to multiple startup award nominations.\n\nResponsible for the transition from AngularJS to React while developing new features, designing layouts, and creating marketing landing pages. Took on leadership responsibilities including onboarding new developers and providing technical support to team members.",
  },
  {
    id: 'freelance',
    company: 'Freelance',
    position: 'Freelance Web Developer',
    dates: 'Jan 2015 - Jan 2018',
    url: 'https://eiphi.site',
    description:
      'Worked independently as a freelance web developer, managing the entire project lifecycle from client acquisition through development and maintenance.\n\nCollaborated with individual and corporate clients to build and maintain responsive websites, transforming designs into user-friendly applications using technologies like HTML, CSS, JavaScript, jQuery, WordPress, PrestaShop, and Joomla.',
  },
  {
    id: 'tix',
    company: 'Tix.nl',
    position: 'Software Tester',
    dates: 'Jul 2013 - Dec 2014',
    url: 'https://tix.nl',
    description:
      'First Software Tester at the largest flight search engine company in the Netherlands, responsible for creating and executing test strategies including test automation.\n\nWorked closely with development team to maintain software quality while building automated tests using Ruby, Selenium and other tools.',
  },
];
