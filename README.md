

# UseCube

A modern Rubik's Cube web app for speedcubers and puzzle enthusiasts. Built with React, TypeScript, and Vite, UseCube offers interactive 2D/3D cube visualization, scramble generation, responsive layouts, advanced input validation, and smooth animations.

## Features

- **2D & 3D Cube Visualization:** Switch between classic 2D and immersive 3D views for any cube type (2x2, 3x3, 4x4).
- **Scramble Generator:** Instantly generate valid scrambles for your selected cube.
- **Step-by-Step Animation:** Watch cube moves animate in real time, or use buttons to practice algorithms.
- **Responsive Design:** Works beautifully on desktop and mobile.
- **Advanced Input Validation:** Ensures only valid Rubik's Cube notation is accepted.
- **Compound Component Pattern:** Clean, maintainable React architecture for cube and controls.
- **Modern UI:** Stylish, intuitive interface with curved borders, gradients, and smooth transitions.

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- Yarn or npm

### Installation
```bash
git clone https://github.com/jimhuertas123/useCube.git
cd useCube
yarn install # or npm install
```

### Development
```bash
yarn dev # or npm run dev
```
App runs at `http://localhost:5173` by default.

### Build
```bash
yarn build # or npm run build
```
Static files will be output to `/dist`.

## Usage

- Select your cube type and scramble mode.
- Use the toggle to switch between 2D and 3D views (3x3 only for 3D).
- Enter a scramble manually or generate one.
- Use the movement buttons to practice algorithms step-by-step.
- Reset or undo moves as needed.

## Tech Stack

- **React** (with hooks and context)
- **TypeScript**
- **Vite** (fast build and HMR)
- **CSS Grid & Flexbox** (responsive layouts)
- **Custom Web Components** (for 3D cube)

## Project Structure

- `/src/components` — Main UI components (cube, buttons, layout)
- `/src/hooks` — Custom React hooks (scramble generator, etc.)
- `/src/layout` — App layout and navigation
- `/public` — Static assets (icons, images)

## Credits

- Developed by [jimhuertas123](https://github.com/jimhuertas123)
- Took inpiration from: [CROVEX ♡](https://www.figma.com/community/file/1219679529682100950)

## License

MIT
