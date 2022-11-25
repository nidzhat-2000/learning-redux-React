import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Header() {
  const site = useSelector(state => state.site);
  const { dark, language } = site;

  // console.log(site);
  // console.log(dark);
  // console.log(language);

  return (
    <div>
      Header
      <nav>
        <NavLink to="/" className="active">
          Home page
        </NavLink>{' '}
        <br />
        <NavLink to="/about" className="active">
          About
        </NavLink>{' '}
        <br />
        <NavLink to="/profile" className="active">
          Profile
        </NavLink>
      </nav>
      <div>
        Dark mode = {dark ? 'on' : 'off'} <br />
        Language = {language}
      </div>
    </div>
  );
}

export default Header;
