import { useEffect, useState } from 'react';
import { UseCubeLayout } from '../../layout/UseCubeLayout';
import './rubicksCube.css'
import { useNavigate, useParams } from 'react-router-dom';
import { applyScramble, DisplayCube, generateScramble, type Cube } from 'react-rubiks-cube-utils';
import { useDisplaySize } from '../../hooks/useDisplaySize';
import useScrambleGenerator from '../../hooks/useScrambleGenerator';

export const RubiksCube = () => {

  const { cubeType } = useParams() as { cubeType: CubeType };
  const navigate = useNavigate();
  const [selectedCube, setSelectedCube] = useState(cubeType);
  const [inputScrambleValue, setInputScrambleValue] = useState('');
  const [scrambledCube, setScrambledCube] = useState<Cube | null>(null);
  const [cubeDimension, setCubeDimension] = useState<'2d' | '3d'>('2d');
  const displaySmall = useDisplaySize();

  const handleCubeChange = (newCubeType: CubeType) => {
    setScrambledCube(null);
    setSelectedCube(newCubeType);
    navigate(`/rubiks-cube/${newCubeType}`);
  };

  const {
    //todo: INVOLVE THE INPUT WITH A DEBOUNCE, AND for ignore the instant rerenders ADD A userRefValue
    scramble,
    error,
    handleScrambleChange
  } = useScrambleGenerator({ cubeType: selectedCube });

  const propSizeCube = {
    '2x2': displaySmall ? 18 : 40,
    '3x3': displaySmall ? 14 : 30,
    '4x4': displaySmall ? 11 : 20
  };

  useEffect(() => {
    setInputScrambleValue(scramble);
  }, [scramble]);

  useEffect(() => {
    setScrambledCube(null);

    const newScrambledCube: Cube = applyScramble({ type: selectedCube ?? '3x3', scramble });
    setScrambledCube(newScrambledCube);
    console.log(newScrambledCube);


  }, [selectedCube, scramble]);

  const handleScrambleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputScrambleValue(e.target.value);
    handleScrambleChange((e.target.value));
  };

  const handleGenerateNewScramble = () => {
    if (selectedCube && scrambledCube) {
      const newScramble = generateScramble({ type: selectedCube });
      setInputScrambleValue(newScramble);
      handleScrambleChange(newScramble);
    }
  };

  return (
    <UseCubeLayout>
      <div className='rubiks-cube-selector-container'>
        <h1>Lets 'Scramble'</h1>
        <select
          name="cube"
          id="cube-select"
          value={selectedCube}
          onChange={(e) => handleCubeChange(e.target.value as CubeType)}
          disabled={!scrambledCube}
        >
          <option value="2x2">2x2 Cube</option>
          <option value="3x3">3x3 Cube</option>
          <option value="4x4">4x4 Cube</option>
        </select>
        <div className='scramble-input-container'>
          <input value={inputScrambleValue} onChange={handleScrambleValueChange} className='scramble-input' type="text" />
          <button onClick={handleGenerateNewScramble}>Generate Scramble</button>

          {/* <input value={inputScrambleSolution} style={{ textTransform: 'uppercase' }} onChange={handleScrambleValueChange} className='scramble-solution-input' type="text" />
          <button onClick={handleSolveCube}>Solve Cube</button> */}

          {cubeType === '3x3' ? (
            <div className="notation-mode-switch-container">
              <label className="notation-switch">
                <input
                  type="checkbox"
                  checked={cubeDimension === '3d'}
                  onChange={e => setCubeDimension(e.target.checked ? '3d' : '2d')}
                />
                <span className="slider">
                  <span className={`switch-label${cubeDimension === '2d' ? ' active' : ''}`}>2D</span>
                  <span className={`switch-label${cubeDimension === '3d' ? ' active' : ''}`}>3D</span>
                </span>
              </label>
            </div>
          )
            : <div style={{ height: '41px' }} />
          }
        </div>

        <div className="rubiks-cube-display-container">
          {!scrambledCube && !displaySmall ? (
            <div className="cube-loading-container">
              <div className="cube-loading-spinner"></div>
              <p> {error} </p>
            </div>
          ) : (
            scrambledCube && (
              <DisplayCube
                cube={scrambledCube}
                size={propSizeCube[selectedCube as keyof typeof propSizeCube]}
              />
            )
          )}
        </div>
      </div>
    </UseCubeLayout>
  );
};
