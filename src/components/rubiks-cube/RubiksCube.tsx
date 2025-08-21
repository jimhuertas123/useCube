import { UseCubeLayout } from '../../layout/UseCubeLayout';

export const RubiksCube = () => {
  return (
    <UseCubeLayout>
      <div className="rubiks-cube">
        <div className="cube-face front"></div>
        <div className="cube-face back"></div>
        <div className="cube-face left"></div>
        <div className="cube-face right"></div>
        <div className="cube-face top"></div>
        <div className="cube-face bottom"></div>
      </div>
    </UseCubeLayout>
  );
};
