import type { ComponentProps } from 'react';
import '../../assets/components/cubeTypeCards.css';

export const CubeTypeCards = ({
  title,
  description,
  ...props
}: { title: string; description: string } & ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <h3>{title}</h3>
      <p>{description}</p>
      {/* fade of faces cube */}
      <div className="fade-of-faces-cube"></div>
      <button type="button">Tutorial</button>
    </div>
  );
};
