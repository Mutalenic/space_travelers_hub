import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../img/logo.png';

const Navbar = () => (
  <header>
    <div className="left">
      <img className="logo" alt="logo" src={logo} />
      <h1>Space Travelers&#39; Hub</h1>
    </div>
    <nav>
      <ul className="nav">
        <li>
          <NavLink to="/">Rockets</NavLink>
        </li>
        <li>
          <NavLink to="missions">Missions</NavLink>
        </li>
        <li>
          <NavLink to="dragons">Dragons</NavLink>
        </li>
        <li>
          <NavLink to="profile">Profile</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
