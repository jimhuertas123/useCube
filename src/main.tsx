import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import UseCubeApp from './UseCubeApp.tsx';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { RubiksCube } from './components/rubiks-cube/RubiksCube.tsx';
import { MovementsPage } from './components/movementsPage/MovementsPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UseCubeApp />} />
        <Route path="/about" element={<MovementsPage />} />
        <Route path="/rubiks-cube/:cubeType" element={<RubiksCube />} />
        <Route path="/rubiks-cube" element={<Navigate to="/rubiks-cube/3x3" />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
