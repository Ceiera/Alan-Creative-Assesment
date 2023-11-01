import './navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Point Of Sales
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <li className='nav-link'><Link style={{ color: 'black', textDecoration: 'none' }} to={`/`}>Dashboard</Link></li>
              <li className='nav-link'><Link style={{ color: 'black', textDecoration: 'none' }} to={`/menu`}>Menu</Link></li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
