import { useState } from 'react';
import { UseCubeLayout } from '../../layout/UseCubeLayout';
import './rubicksCube.css'
import { useNavigate, useParams } from 'react-router-dom';
export const RubiksCube = () => {

  const { cubeType } = useParams();
  const navigate = useNavigate();
  const [selectedCube, setSelectedCube] = useState(cubeType);

  const handleCubeChange = (newCubeType: string) => {
    setSelectedCube(newCubeType);
    navigate(`/rubiks-cube/${newCubeType}`);
  };

  return (
    <UseCubeLayout>
      <div className='rubiks-cube-selector-container'>
        <select name="cube" id="cube-select" value={selectedCube} onChange={(e) => handleCubeChange(e.target.value)}>
          <option value="2x2">2x2 Cube</option>
          <option value="3x3">3x3 Cube</option>
          <option value="4x4">4x4 Cube</option>
        </select>
        <div className="rubiks-cube">
          <div className="cube-face front"></div>
          <div className="cube-face back"></div>
          <div className="cube-face left"></div>
          <div className="cube-face right"></div>
          <div className="cube-face top"></div>
          <div className="cube-face bottom"></div>
        </div>
      </div>
    </UseCubeLayout>
  );
};
