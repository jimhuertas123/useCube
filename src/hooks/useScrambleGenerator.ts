import { useState, useCallback, useEffect } from 'react';

declare global {
  type CubeType = '2x2' | '3x3' | '4x4';
}
function movePatternsPerCube(cubeType: CubeType) {
  switch (cubeType) {
    case '2x2':
      return /^([RLUDFB])([2']?)$|^2[RLUDFB]w?$/;
    case '3x3':
      return /^([RLUDFB])([2']?)$|^2[RLUDFB]w?$/;
    case '4x4':
      return /^([RLUDFB]w?|[MES])([2']?)$|^2[RLUDFB]w?$/;

  }
};

export const useScrambleGenerator = ({ cubeType }: { cubeType?: CubeType }) => {

  const [scramble, setScramble] = useState<string>('');
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState('');

  const validateMove = useCallback((move: string): boolean => {
    const movePattern = movePatternsPerCube(cubeType ?? '3x3');
    return movePattern.test(move.trim());
  }, [cubeType]);

  useEffect(() => {
    setScramble('');
    console.log(cubeType);

  }, [cubeType])

  const handleScrambleChange = useCallback((input: string) => {
    if (input.endsWith(' ')) { //trying to avoid rerender when press spaces [still not working]
      return;
    }

    setScramble(input);

    if (!input.trim()) {
      setError('');
      setIsValid(true);
      return;
    }

    const moves = input.trim().split(/\s+/);
    const invalidMoves = moves.filter(move => !validateMove(move));

    if (invalidMoves.length > 0) {
      setError(`Invalid moves: ${invalidMoves.join(', ')}`);
      setIsValid(false);
    } else {
      setError('');
      setIsValid(true);
    }
  }, [validateMove, scramble]);

  return {
    scramble,
    isValid,
    error,
    handleScrambleChange,
    validateMove
  };
};

export default useScrambleGenerator;
