import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import UseCubeApp from './UseCubeApp.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RubiksCube } from './components/rubiks-cube/RubiksCube.tsx';
import { AboutUs } from './components/about-us/AboutUs.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UseCubeApp />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cube" element={<RubiksCube />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
