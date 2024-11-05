import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const GradientText = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <span
      style={{
        ...style,
        background: 'linear-gradient(to right, #c3420d, #7c3aed)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {children}
    </span>
  );
};

const Loader = ({ isLoaderOpen }: { isLoaderOpen: boolean }) => {
  const [didLoaderDisappear, setDidLoaderDisappear] = useState(false);

  useEffect(() => {
    if (!isLoaderOpen && !didLoaderDisappear) {
      setTimeout(() => setDidLoaderDisappear(true), 500);
    }
  }, [isLoaderOpen]);

  return (
    <div
      className={cn(
        'fixed flex items-center justify-center top-0 left-0 w-full h-full bg-zinc-900 transition-opacity duration-1000',
        isLoaderOpen ? 'opacity-100' : 'opacity-0',
        didLoaderDisappear ? '-z-10' : 'z-50'
      )}
    >
      <div
        className={cn('text-white text-6xl font-bold ', isLoaderOpen ? 'opacity-100' : 'opacity-0')}
      >
        <div className="flex animate-bounce">
          <GradientText>M</GradientText>
          <GradientText style={{ lineHeight: '1.5' }}>j</GradientText>
        </div>
      </div>
    </div>
  );
};

export default Loader;
