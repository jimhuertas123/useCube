import { useNavigate, useParams } from 'react-router-dom';
import { UseCubeLayout } from '../../layout/UseCubeLayout';
import './movementsPage.css'
import { useEffect, useState } from 'react';
import Notation3x3 from '../../assets/movements/3x3-moves.webp'
import Notation4x4 from '../../assets/movements/4x4-moves.png'
import Notation2x2 from '../../assets/movements/2x2-moves.png'


export const MovementsPage = () => {
  const { cubeType } = useParams();
  const navigate = useNavigate();
  const [selectedCube, setSelectedCube] = useState(cubeType);
  const [notationMode, setNotationMode] = useState<'2d' | '3d'>('2d');

  const handleCubeChange = (newCubeType: string) => {
    setSelectedCube(newCubeType);
    navigate(`/movements/${newCubeType}`);
  };

  useEffect(() => {
    console.count('render');
  });

  return (
    <UseCubeLayout>
      <div className='movements-page-container'>
        <h1>Movements</h1>
        <p>REMEMBER (Important): Before start learning the notation (moves) you
          have to define your Front, Up and Down faces, to apply the movements
          (by default your Front face is: Green, Up face is: White, Down face is: Yellow)
        </p>
        <div className='movements-page-extra-notations'>
          <ul>
            <li><strong>X</strong>2 - Means X movement 2 times (for example: R2)</li>
            <li><strong>X'</strong> - Means X movement counterclockwise (for example: R')</li>
            <li><strong>X</strong>w - Means X movement grabbing to capes of the cube (only for +4x4 cubes, for example: Rw)</li>
          </ul>
        </div>
        <select name="cube" id="cube-select" value={selectedCube} onChange={(e) => handleCubeChange(e.target.value)}>
          <option value="2x2">2x2 Cube</option>
          <option value="3x3">3x3 Cube</option>
          <option value="4x4">4x4 Cube</option>
        </select>
        {cubeType === '3x3' && (
          <div className="notation-mode-switch-container">
            <label className="notation-switch">
              <input
                type="checkbox"
                checked={notationMode === '3d'}
                onChange={e => setNotationMode(e.target.checked ? '3d' : '2d')}
              />
              <span className="slider">
                <span className={`switch-label${notationMode === '2d' ? ' active' : ''}`}>2D</span>
                <span className={`switch-label${notationMode === '3d' ? ' active' : ''}`}>3D</span>
              </span>
            </label>
          </div>
        )}
      </div>

      {

      }

      {cubeType === '3x3' && (
        <div className='movements-page-content'>
          <img src={notationMode === '2d' ? Notation3x3 : Notation3x3} alt="3x3 Cube Notation" />
          <ul>
            <li><strong>R</strong> - Right face clockwise</li>
            <li><strong>R'</strong> - Right face counterclockwise</li>
            <li><strong>L</strong> - Left face clockwise</li>
            <li><strong>L'</strong> - Left face counterclockwise</li>
            <li><strong>U</strong> - Up face clockwise</li>
            <li><strong>U'</strong> - Up face counterclockwise</li>
            <li><strong>D</strong> - Down face clockwise</li>
            <li><strong>D'</strong> - Down face counterclockwise</li>
            <li><strong>F</strong> - Front face clockwise</li>
            <li><strong>F'</strong> - Front face counterclockwise</li>
            <li><strong>B</strong> - Back face clockwise</li>
            <li><strong>B'</strong> - Back face counterclockwise</li>
          </ul>
        </div>
      )}

      {cubeType === '2x2' &&
        <div className='movements-page-content'>
          <img src={Notation2x2} alt="2x2 Cube Notations" />
          <ul>
            <li><strong>R</strong> - Right face clockwise</li>
            <li><strong>R'</strong> - Right face counterclockwise</li>
            <li><strong>L</strong> - Left face clockwise</li>
            <li><strong>L'</strong> - Left face counterclockwise</li>
            <li><strong>U</strong> - Up face clockwise</li>
            <li><strong>U'</strong> - Up face counterclockwise</li>
            <li><strong>D</strong> - Down face clockwise</li>
            <li><strong>D'</strong> - Down face counterclockwise</li>
            <li><strong>F</strong> - Front face clockwise</li>
            <li><strong>F'</strong> - Front face counterclockwise</li>
            <li><strong>B</strong> - Back face clockwise</li>
            <li><strong>B'</strong> - Back face counterclockwise</li>
          </ul>
        </div>
      }

      {cubeType === '4x4' &&
        <div className='movements-page-content'>
          {/* <h2>4x4 Cube Notation</h2> */}
          <img src={Notation4x4} alt="4x4 Cube Notation" />
          <ul>
            <li><strong>R</strong> - Right face clockwise</li>
            <li><strong>R'</strong> - Right face counterclockwise</li>
            <li><strong>L</strong> - Left face clockwise</li>
            <li><strong>L'</strong> - Left face counterclockwise</li>
            <li><strong>U</strong> - Up face clockwise</li>
            <li><strong>U'</strong> - Up face counterclockwise</li>
            <li><strong>D</strong> - Down face clockwise</li>
            <li><strong>D'</strong> - Down face counterclockwise</li>
            <li><strong>F</strong> - Front face clockwise</li>
            <li><strong>F'</strong> - Front face counterclockwise</li>
            <li><strong>B</strong> - Back face clockwise</li>
            <li><strong>B'</strong> - Back face counterclockwise</li>
            {/* extras for 4x4 like Rw Lw Uw Dw Fw Bw */}
            <li><strong>Rw</strong> - Right 2 layers clockwise</li>
            <li><strong>R'w</strong> - Right 2 layers counterclockwise</li>
            <li><strong>Lw</strong> - Left 2 layers clockwise</li>
            <li><strong>L'w</strong> - Left 2 layers counterclockwise</li>
            <li><strong>Uw</strong> - Up 2 layers clockwise</li>
            <li><strong>U'w</strong> - Up 2 layers counterclockwise</li>
            <li><strong>Dw</strong> - Down 2 layers clockwise</li>
            <li><strong>D'w</strong> - Down 2 layers counterclockwise</li>
            <li><strong>Fw</strong> - Front 2 layers clockwise</li>
            <li><strong>F'w</strong> - Front 2 layers counterclockwise</li>
            <li><strong>Bw</strong> - Back 2 layers clockwise</li>
            <li><strong>B'w</strong> - Back 2 layers counterclockwise</li>

          </ul>
        </div>
      }
    </UseCubeLayout>
  );
};
