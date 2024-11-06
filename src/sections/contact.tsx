import SectionHeading from '@/components/section-heading';
import { scrollToSection } from '@/lib/utils';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { forwardRef } from 'react';

const ContactSection = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <section
      id="contact"
      ref={ref}
    >
      <div className="w-full flex flex-col gap-4 items-center lg:px-20 px-14 pt-12">
        <SectionHeading>Contact</SectionHeading>
        <div className="flex w-full gap-4">
          <div className="flex w-full lg:w-1/2 flex-col gap-8 items-center justify-center">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-medium">Let's get in touch!</h3>
              <p className="text-zinc-400 pb-4">Feel free to reach out through any of these channels:</p>
              <div className="flex items-center gap-3">
                <div className="bg-violet-500 p-2 rounded-lg">
                  <Mail />
                </div>
                <div className="flex flex-col">
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:jazdzewski.maciej@gmail.com"
                    className="text-zinc-400 hover:text-violet-500 transition-colors"
                  >
                    jazdzewski.maciej@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-violet-500 p-2 rounded-lg">
                  <Linkedin />
                </div>
                <div className="flex flex-col">
                  <p className="font-medium">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/maciej-jazdzewski/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-violet-500 transition-colors"
                  >
                    linkedin.com/in/maciej-jazdzewski/
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-violet-500 p-2 rounded-lg">
                  <Github />
                </div>
                <div className="flex flex-col">
                  <p className="font-medium">GitHub</p>
                  <a
                    href="https://github.com/eiphi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-violet-500 transition-colors"
                  >
                    github.com/eiphi
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex max-h-[400px] w-1/2 items-center justify-center">
            <img
              src="/src/assets/maciek.webp"
              alt="Maciek Jazdzewski"
              className="h-full w-auto scale-x-[-1] -mb-28"
            />
          </div>
        </div>
      </div>

      <div className="flex w-full mt-12 bg-orange-700 hover:bg-orange-700/40 transition-colors cursor-pointer">
        <a
          className="w-full p-6 flex justify-center text-zinc-400 hover:text-orange-400 transition-colors "
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          <ArrowUp className="size-8" />
        </a>
      </div>
    </section>
  );
});

export default ContactSection;
