import React from 'react';
import { InView } from 'react-intersection-observer';

interface InViewWrapperProps {
  onChange: (sectionId: string) => void;
  children: React.ReactNode;
  threshold?: number;
}

export const InViewWrapper: React.FC<InViewWrapperProps> = ({
  onChange,
  children,
  threshold = 0.5
}) => {
  const handleChange = (status: boolean, entry: any) => {
    const targetID = entry?.target?.id;
    status && targetID && onChange(targetID);
  };

  return (
    <InView
      onChange={handleChange}
      threshold={threshold}
    >
      {({ ref }) => React.cloneElement(children as React.ReactElement, { ref })}
    </InView>
  );
};
