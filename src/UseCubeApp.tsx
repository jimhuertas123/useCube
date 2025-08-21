import { UseCubeLayout } from './layout/UseCubeLayout';
import './UseCubeApp.css';
import CubeImg from './assets/kubik.png';
import CubeImg2 from './assets/kubik2.png';
import { CubeTypeCards } from './components/tutorial/CubeTypeCards';

export default function UseCubeApp() {
  return (
    <UseCubeLayout>
      <div className="main-use-cube-app">
        <div className="main-text-content">
          <h2>RUBIK'S CUBE IS THE MOST POPULAR PUZZLE IN THE WORLD</h2>
          <p>
            The Rubik's Cube has 43,252,003,274,489,856,000 possible
            configurations and we'll help you solve them all!
          </p>
        </div>
        <img
          className="main-rubiks-cube-image"
          src={CubeImg}
          alt="Rubik's Cube"
          aria-label="Rubik's Cube"
        />
      </div>

      {/* <div className="curve">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" fill="red"></path>
        </svg>
      </div> */}

      <div className="cube-types-container">
        <img src={CubeImg2} alt="Rubik's Cube 2" />
        <h3 className="cube-types-title">Main types of rubik's cube</h3>
        <p className="cube-types-description">
          With our cube assembly app, you will learn how to assemble a variety
          of patterns, as well as how to simply assemble it!
        </p>
        <div className="cube-type-cards-container">
          <CubeTypeCards
            className="cube-type-card"
            title="2x2 CUBE"
            description="Learn how to solve the 2x2 cube with our step-by-step guide."
          />
          <CubeTypeCards
            className="cube-type-card"
            title="3x3 CUBE"
            description="Master the classic 3x3 Rubik's Cube with our comprehensive tutorials."
          />
          <CubeTypeCards
            className="cube-type-card"
            title="4x4 CUBE"
            description="Explore the challenges of the 4x4 cube and become a pro solver."
          />
        </div>
      </div>
    </UseCubeLayout>
  );
}
