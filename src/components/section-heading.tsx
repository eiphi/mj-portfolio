import React from 'react';

type Props = {
  children: React.ReactNode;
};

function SectionHeading({ children }: Props) {
  return <h1 className="text-5xl lg:text-7xl font-extrabold mb-10">{children}</h1>;
}

export default SectionHeading;
