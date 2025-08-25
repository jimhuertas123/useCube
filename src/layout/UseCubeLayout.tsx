import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';

export const UseCubeLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navItems = [
    { path: '/', label: 'Tutorial' },
    { path: '/rubiks-cube', label: "Rubik's Cube" },
    { path: '/movements', label: 'Movements' },
  ];

  return (
    <div className="min-h-screen">
      <header className="header-container">
        <div className="header-nav-left">
          <img src={Logo} alt="useCube logo" aria-label="useCube logo" />
          <span className="header-icon">UseCube</span>
        </div>
        <div className="header-nav-right">
          <nav className="header-nav-links">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Link to={'/rubiks-cube'}>
            <button disabled={!location.pathname.startsWith('/rubiks-cube') ? false : true} type="button" className="header-play-button">
              PLAY
            </button>
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className="footer-container">
        <div className="footer-divider" />
        <div className="footer-nav-left">
          <span>useCube © 2025</span>
        </div>
        <div className="footer-nav-right">
          Design by CROVEX ♡ and Coded by Jim Huertas
        </div>
      </footer>
    </div>
  );
};
