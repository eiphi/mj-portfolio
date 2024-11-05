import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogImage,
  DialogContainer,
} from '@/components/motion/dialog';
import { XIcon } from 'lucide-react';

export function ImageDialog({
  thumbUrl,
  fullImgUrl,
  alt,
}: {
  thumbUrl: string;
  fullImgUrl: string;
  alt: string;
}) {
  return (
    <Dialog
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
    >
      <DialogTrigger>
        <div className="hover:cursor-zoom-in hover:scale-110 hover:shadow-xl hover:shadow-zinc-700 transition duration-300">
          <DialogImage
            src={thumbUrl}
            alt={alt}
            className="max-w-xs rounded-[4px]"
          />
        </div>
      </DialogTrigger>
      <DialogContainer>
        <DialogContent className="relative">
          <DialogImage
            src={fullImgUrl}
            alt={alt}
            className="h-auto w-full max-w-[90vw] rounded-[4px] object-cover lg:h-[90vh]"
          />
        </DialogContent>
        <DialogClose
          className="fixed right-6 top-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </DialogClose>
      </DialogContainer>
    </Dialog>
  );
}
