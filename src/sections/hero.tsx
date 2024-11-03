import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowUp, FileText, Github } from 'lucide-react';
import { forwardRef } from 'react';
import { TypeAnimation } from 'react-type-animation';

const heroAnimationSequenceItems = [
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

const HeroSection = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const animationSequenceArray = heroAnimationSequenceItems.flatMap((item, index) => [
    item,
    index === 0 ? 2300 : 1300,
  ]);

  const zincHex = '#18181b';
  const orange700Hex = '#c2410c';

  return (
    <section
      id="home"
      ref={ref}
    >
      <div
        className="flex lg:h-svh lg:w-svh lg:p-20 p-14"
        style={{
          backgroundImage: `linear-gradient(90deg, ${zincHex} 25%, ${orange700Hex} 25%, ${orange700Hex} 60%, ${zincHex} 60%)`,
        }}
      >
        <div className="flex flex-col lg:flex-row lg:h-full w-full gap-10 lg:gap-0">
          <div className="relative flex flex-col gap-6 lg:w-full lg:w-1/2 lg:h-full">
            <h1 className="text-5xl lg:text-7xl font-extrabold">
              Maciek
              <br />
              Jazdzewski
            </h1>
            <div className="gap-2 whitespace-nowrap">
              <h2 className="text-3xl lg:text-5xl font-medium">Frontend Developer </h2>
              <div className="inline-flex">
                <h2 className="text-3xl lg:text-5xl font-medium">loving&nbsp;</h2>
                <TypeAnimation
                  className="text-3xl lg:text-5xl font-medium bg-violet-600"
                  preRenderFirstString={true}
                  sequence={animationSequenceArray}
                  speed={50}
                  repeat={Infinity}
                />
              </div>
            </div>

            <div className=" mt-auto lg:w-[250px] w-full">
              <h4 className="uppercase text-xl font-medium ">About me</h4>
              <p className="text-sm my-2">
                Hi! I am Maciek. I am a frontend developer with over 10 years of experience. I have
                a passion for creating user-friendly and efficient web applications. I am a team
                player and I am always looking for new challenges.
              </p>
              <p className="text-sm">
                I am open to work at the moment.{' '}
                <a
                  href="/#contact"
                  className="text-violet-500 hover:text-violet-300 animate-color duration-300"
                >
                  Contact me
                </a>
              </p>
            </div>
            {/* <div className="hidden lg:flex justify-end absolute bottom-0 right-0 rounded-full overflow-hidden border-4 border-violet-600 w-[200px] h-[200px]">
              <img
                src="/src/assets/portrait.jpg"
                alt="Maciek Jazdzewski"
                width="100%"
                height="auto"
              />
            </div> */}
          </div>

          <div className="lg:w-full lg:w-1/2 lg:h-full">
            <div className="flex flex-col justify-end items-end w-full h-full">
              <div className="flex flex-col items-end lg:w-[90%]">
                <img
                  className="shadow-xl rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                  src="/src/assets/800x450.jpg"
                  alt="Maciek Jazdzewski"
                  width="100%"
                  height="auto"
                />
                <div className="flex items-center justify-end lg:w-4/5 lg:px-5 py-10 gap-5">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xl font-medium">Tradr</h4>
                    <p className="text-sm">
                      Worked on a project lorem ipsum dolor sit amet. Worked on a project lorem
                      ipsum dolor sit amet. Worked on a project lorem ipsum dolor sit adsad sa
                      dsadmet. Worked on a project lorem ipsum dolor sit amet. Worked on a project
                      lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div className="flex flex-col gap-5">
                    <ArrowUp className="hover:text-orange-400 hover:scale-125 transition-all duration-200 cursor-pointer" />
                    <ArrowDown className="hover:text-orange-400 hover:scale-125 transition-all duration-200 cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="flex gap-5 mt-10">
                <Button variant="secondary">
                  <Github />
                  Github
                </Button>
                <Button variant="default">
                  <FileText />
                  See my resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
