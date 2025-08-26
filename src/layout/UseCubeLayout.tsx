import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';
import LogoFooter from '../assets/logo-footer.png';

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
        <div className='footer-top-container'>
          <div className="footer-nav-left">
            <div className='footer-contact-info'>
              <h3>Contact:</h3>
              <span>Email: support@usecube.com</span>
              <span>Phone: (123) 456-7890</span>
            </div>
            <img src={LogoFooter} alt="useCube logo" aria-label="useCube logo" />
          </div>
          <div className="footer-nav-right">
            <div className='footer-menu'>
              <h3>Menu: </h3>
              <a href="/tutorial">Tutorial</a>
              <a href="/rubiks-cube">Rubik's Cube</a>
              <a href="/movements">Movements</a>
            </div>
            <div className='footer-cubes'>
              <h3>Cubes: </h3>
              <a href="/tutorial">2x2 Cube</a>
              <a href="/rubiks-cube">3x3 Cube</a>
              <a href="/movements">4x4 Cube</a>
            </div>
            <div className='footer-movements'>
              <h3>Movements: </h3>
              <a href="/tutorial">Tutorial</a>
              <a href="/rubiks-cube">Rubik's Cube</a>
              <a href="/movements">Movements</a>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className='footer-bottom-container'>
          <span>useCube © 2025</span>
          <span>Design by CROVEX ♡ and Coded by Jim Huertas</span>
        </div>

      </footer>
    </div>
  );
};
