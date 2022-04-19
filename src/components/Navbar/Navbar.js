import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Rockets</NavLink>
      </li>
      <li>
        <NavLink to="missions">Missions</NavLink>
      </li>
      <li>
        <NavLink to="profile">Profile</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
