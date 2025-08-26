import "@houstonp/rubiks-cube";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";

interface CubeContextType {
  moves: string;
  setMoves: React.Dispatch<React.SetStateAction<string>>;
  delay: number;
  hasExternalMoves: boolean;
}
export const ThreeDRubiksCubeContext = React.createContext<CubeContextType | undefined>(undefined);

const conflictMoves = ["B'", "D'", "L'", "B", "D", "L"];



const ThreeDRubiksCubeComponent = ({ delay = 600, moves: externalMoves = "", children }: { delay?: number; moves?: string; children: React.ReactNode }) => {
  const [internalMoves, setInternalMoves] = useState(externalMoves);
  const hasButtons = React.Children.toArray(children).some(
    child => React.isValidElement(child) && (child.type as any).displayName === 'ThreeDRubiksCubeButtons'
  );

  useEffect(() => {
    if (!hasButtons) {
      setInternalMoves(externalMoves);
    }

    if (hasButtons && externalMoves !== "") {
      console.warn("ThreeDRubiksCube: 'moves' prop is ignored when Buttons are used.");
    }

    if (externalMoves === '' && !hasButtons) {
      setInternalMoves('');
    }

  }, [externalMoves, hasButtons]);

  return (
    <ThreeDRubiksCubeContext.Provider value={{ moves: hasButtons ? internalMoves : externalMoves, setMoves: hasButtons ? setInternalMoves : () => { }, delay, hasExternalMoves: hasButtons }}>
      <div className="three-d-rubiks-cube-parent">{children}</div>
    </ThreeDRubiksCubeContext.Provider>
  );
};

const Cube = ({ className = '' }: { className?: string }) => {
  const context = React.useContext(ThreeDRubiksCubeContext);
  if (!context) throw new Error("ThreeDRubiksCube compound components must be used within ThreeDRubiksCube");
  const { moves, delay, hasExternalMoves } = context;

  const cubeRef = useRef<any>(null);
  const lastMovesRef = useRef<string>("");

  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  const animateMoves = (list: string[]) => {
    let i = 0;
    const cube = cubeRef.current;
    if (!cube) return;

    const step = () => {
      if (i < list.length) {
        let movement = list[i];
        console.log(movement);

        //library issues with the movements
        if (conflictMoves.includes(movement)) {
          movement = movement.endsWith("'") ? movement.slice(0, -1) : movement + "'";
        }

        cube.dispatchEvent(
          new CustomEvent("rotate", { detail: { action: movement } })
        );
        i++;
        setTimeout(step, delay);
      }
    };
    step();
  };

  useEffect(() => {
    const cube = cubeRef.current;
    if (!cube) return;
    const trimmedMoves = moves.trim().replace(/\s+/g, " ");
    const moveList = trimmedMoves ? trimmedMoves.split(" ") : [];

    if (!hasExternalMoves) cube.dispatchEvent(new CustomEvent("reset"));

    if (moveList.length > 0 && !hasExternalMoves) {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
      debounceTimer.current = setTimeout(() => {
        animateMoves(moveList);
        lastMovesRef.current = trimmedMoves;
      }, delay);
    } else {
      lastMovesRef.current = trimmedMoves;
    }

    if (hasExternalMoves) {
      if (moveList.length === 0) {
        cube.dispatchEvent(new CustomEvent("reset"));
        return;
      }

      let lastMovement = moveList[moveList.length - 1];
      if (conflictMoves.includes(lastMovement)) {
        lastMovement = lastMovement.endsWith("'") ? lastMovement.slice(0, -1) : lastMovement + "'";
      }
      cube.dispatchEvent(
        new CustomEvent("rotate", { detail: { action: lastMovement } })
      );
    }

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [moves]);

  return (
    <ErrorBoundary fallback={<div>Error occurred</div>} >
      <rubiks-cube className={`three-d-rubiks-cube ${className}`} ref={cubeRef}></rubiks-cube>
    </ErrorBoundary>
  );
};



const Buttons = () => {
  const context = React.useContext(ThreeDRubiksCubeContext);
  if (!context) throw new Error("ThreeDRubiksCube compound components must be used within ThreeDRubiksCube");
  const { setMoves } = context;

  const handleMove = (move: string) => {
    setMoves((prev) => prev + " " + move);
  };
  const handleReset = () => {
    setMoves("");
  };

  return (
    <div className="cube-buttons-container">
      <button onClick={handleMove.bind(null, "U")}>U</button>
      <button onClick={handleMove.bind(null, "U'")}>U'</button>
      <button onClick={handleMove.bind(null, "R")}>R</button>
      <button onClick={handleMove.bind(null, "R'")}>R'</button>
      <button onClick={handleMove.bind(null, "F")}>F</button>
      <button onClick={handleMove.bind(null, "F'")}>F'</button>
      <button onClick={handleMove.bind(null, "D")}>D</button>
      <button onClick={handleMove.bind(null, "D'")}>D'</button>
      <button onClick={handleMove.bind(null, "B")}>B</button>
      <button onClick={handleMove.bind(null, "B'")}>B'</button>
      <button onClick={handleMove.bind(null, "L")}>L</button>
      <button onClick={handleMove.bind(null, "L'")}>L'</button>
      <button onClick={handleMove.bind(null, "u")}>u</button>
      <button onClick={handleMove.bind(null, "u'")}>u'</button>
      <button onClick={handleMove.bind(null, "r")}>r</button>
      <button onClick={handleMove.bind(null, "r'")}>r'</button>
      <button onClick={handleMove.bind(null, "f")}>f</button>
      <button onClick={handleMove.bind(null, "f'")}>f'</button>
      <button onClick={handleMove.bind(null, "l")}>l</button>
      <button onClick={handleMove.bind(null, "l'")}>l'</button>
      <button onClick={handleMove.bind(null, "b")}>b</button>
      <button onClick={handleMove.bind(null, "b'")}>b'</button>
      <button onClick={handleMove.bind(null, "d")}>d</button>
      <button onClick={handleMove.bind(null, "d'")}>d'</button>
      <button onClick={handleMove.bind(null, "x")}>x</button>
      <button onClick={handleMove.bind(null, "x'")}>x'</button>
      <button onClick={handleMove.bind(null, "y")}>y</button>
      <button onClick={handleMove.bind(null, "y'")}>y'</button>
      <button onClick={handleMove.bind(null, "z")}>z</button>
      <button onClick={handleMove.bind(null, "z'")}>z'</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
Buttons.displayName = 'ThreeDRubiksCubeButtons';

export const ThreeDRubiksCube = Object.assign(ThreeDRubiksCubeComponent, {
  Cube,
  Buttons,
});