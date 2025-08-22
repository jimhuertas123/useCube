import { UseCubeLayout } from './layout/UseCubeLayout';
import './UseCubeApp.css';
import CubeImg from './assets/kubik.png';
import CubeImg2 from './assets/kubik2.png';
import { CubeTypeCards } from './components/tutorial/CubeTypeCards';
import CubeCorners from './assets/cube-corners.png';
import CubeEdges from './assets/cube-edges.png';
import CubeCenters from './assets/cube-centers.png';


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

      <div className="cube-types-container">
        <img src={CubeImg2} alt="Rubik's Cube 2" />
        <h3 className="cube-types-title">Main types of rubik's cube</h3>
        <p className="cube-types-description">
          With this cube assembly app, you will learn the movements and parts of a Rubik's Cube, as well as how to scramble it!
        </p>
        <div className="cube-type-cards-container">
          <CubeTypeCards
            linkTo='/rubiks-cube/2x2'
            className="cube-type-card"
            cubetype='2x2'
            title="2x2 CUBE"
            description="Learn the movements and parts of a 2x2 cube, as well as how to scramble it!"
          />
          <CubeTypeCards
            linkTo='/rubiks-cube/3x3'
            className="cube-type-card"
            cubetype='3x3'
            title="3x3 CUBE"
            description="Learn the movements and parts of a 3x3 cube, as well as how to scramble it!"
          />
          <CubeTypeCards
            linkTo='/rubiks-cube/4x4'
            className="cube-type-card"
            cubetype='4x4'
            title="4x4 CUBE"
            description="Learn the movements and parts of a 4x4 cube, as well as how to scramble it!"
          />
        </div>
      </div>

      <div className='device-cube-container' >
        <h3 className="device-cube-title">RUBIK'S CUBE STRUCTURE</h3>
        <p className="device-cube-description">
          Knowing the structure of the cube is your serious tool during assembly, which allows you to perform the correct movements and not make mistakes at all stages of assembly.
        </p>
        <div className='device-cube-parts-container'>
          <div className='device-cube-parts-corner'>
            <div className='device-cube-parts-content'>
              <h3>Corners</h3>
              <p>Consists of two colors that cannot be separated from each other</p>
            </div>
            <img src={CubeCorners} alt="Cube Corners" />
          </div>
          <div className='device-cube-parts-edge'>
            <div className='device-cube-parts-content'>
              <h3>Edges</h3>
              <p>Consists of three colors that cannot be separated from each other</p>
            </div>
            <img src={CubeEdges} alt="Cube Edges" />
          </div>
          <div className='device-cube-parts-center'>
            <div className='device-cube-parts-content'>
              <h3>Centers</h3>
              <p>Determine the color of the side, never change their position relative to other centers</p>
            </div>
            <img src={CubeCenters} alt="Cube Centers" />
          </div>
        </div>
      </div>
    </UseCubeLayout>
  );
}
