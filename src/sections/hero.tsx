import { forwardRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, ArrowUp, ChevronDown, FileText, Github } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { heroAnimationSequenceItems, Project, workProjectsArray } from '@/lib/constants';
import { cn, scrollToSection } from '@/lib/utils';

const HeroSection = forwardRef<HTMLDivElement, { isActiveSection: boolean }>(
  ({ isActiveSection }, ref) => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(0);
    const selectedProject = workProjectsArray[selectedProjectIndex];
    const animationSequenceArray = heroAnimationSequenceItems.flatMap((item, index) => [
      item,
      index === 0 ? 3000 : 1500,
    ]);

    const zinc900Hex = '#18181b';
    const orange700Hex = '#c2410c';

    const handleProjectChange = (value: number) => {
      const newIndex = selectedProjectIndex + value;
      if (newIndex < 0) {
        setSelectedProjectIndex(workProjectsArray.length - 1);
      } else if (newIndex >= workProjectsArray.length) {
        setSelectedProjectIndex(0);
      } else {
        setSelectedProjectIndex(newIndex);
      }
    };

    return (
      <section
        id="home"
        ref={ref}
      >
        <div
          className="flex lg:h-svh lg:w-svh lg:p-24 p-14"
          style={{
            backgroundImage: `linear-gradient(90deg, ${zinc900Hex} 25%, ${orange700Hex} 25%, ${orange700Hex} 60%, ${zinc900Hex} 60%)`,
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

              <div className="mt-auto self-center lg:self-start w-full lg:w-[250px] w-full">
                <h4 className="uppercase text-xl font-medium ">About me</h4>
                <p className="text-sm my-2">
                  Hi! I am Maciek. I am a frontend developer with over 10 years of experience in the IT industry. I
                  have a passion for creating user-friendly and efficient web applications. I am a
                  team player and I am always looking for new challenges.
                </p>
                <p className="text-sm">
                  I am open to job offers at the moment.
                  <br />
                  <a
                    href="/#contact"
                    className="text-lg text-violet-500 hover:text-violet-300 animate-color duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('contact');
                    }}
                  >
                    Contact me
                  </a>
                </p>
              </div>
            </div>

            <div className="lg:w-full lg:w-1/2 lg:h-full">
              <div className="flex flex-col justify-end items-end w-full h-full">
                <div className="flex flex-col items-end lg:w-[90%]">
                  <a
                    href={selectedProject?.website}
                    target="_blank"
                  >
                    <img
                      className="self-center w-3/4 md:w-1/2 lg:w-full shadow-xl rounded-xl hover:scale-110 transition-all duration-300 cursor-pointer"
                      src={selectedProject?.imageUrl}
                      alt={selectedProject?.title}
                      height="auto"
                    />
                  </a>
                  <div className="flex items-center justify-end self-center lg:self-end w-4/5 lg:px-5 py-10 gap-5">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-2xl font-medium underline decoration-4 decoration-violet-500">
                        {selectedProject?.title}
                      </h4>
                      <p className="text-sm">{selectedProject?.desc}</p>
                    </div>
                    <div className="flex flex-col gap-5">
                      <ArrowUp
                        className="hover:text-orange-400 hover:scale-125 transition-all duration-200 cursor-pointer"
                        onClick={() => handleProjectChange(-1)}
                      />
                      <ArrowDown
                        className="hover:text-orange-400 hover:scale-125 transition-all duration-200 cursor-pointer"
                        onClick={() => handleProjectChange(1)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 mt-10">
                  <a
                    href="https://github.com/eiphi"
                    target="_blank"
                  >
                    <Button variant="secondary">
                      <Github />
                      Github
                    </Button>
                  </a>
                  <a
                    href="/src/assets/MACIEJ_JAZDZEWSKI_RESUME.pdf"
                    target="_blank"
                  >
                    <Button variant="default">
                      <FileText />
                      See my resume
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ChevronDown
          className={cn(
            'hidden lg:block absolute size-10 text-white animate-bounce bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-600',
            isActiveSection
              ? 'opacity-100 transition duration-600'
              : 'opacity-0 transition duration-600'
          )}
          onClick={() => scrollToSection('skills')}
        />
      </section>
    );
  }
);

export default HeroSection;
