import type { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

export const CubeTypeCards = ({
  title,
  description,
  cubetype,
  linkTo,
  ...props
}: { title: string; description: string; cubetype: '2x2' | '3x3' | '4x4'; linkTo: string } & ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <h3>{title}</h3>
      <p>{description}</p>
      {/* fade of faces cube */}
      <div className={`fade-of-faces-cube cube-${cubetype}`}  >
        {Array.from({ length: cubetype === '2x2' ? 4 : cubetype === '3x3' ? 9 : 16 }, (_, i) => (
          <div key={i} className="mini-cube"></div>
        ))}
      </div>
      <Link to={linkTo}>
        <button type="button">Movements</button>
      </Link>
    </div>
  );
};
