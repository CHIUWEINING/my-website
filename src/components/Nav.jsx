import { NavLink } from 'react-router-dom';
import { profile } from '../data';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <span className="nav-logo">{profile.contact.github.split('/').pop()}.github.io</span>
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
          <NavLink to="/publications" className={({ isActive }) => isActive ? 'active' : ''}>
            Publications
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
