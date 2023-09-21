import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const closeNav = () => {
    setIsNavCollapsed(true);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body sticky-top">
      <div className="container">
        <NavLink className="navbar-brand text-white" to="/" onClick={closeNav}>
          बगलामुखी माता
        </NavLink>
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                to=""
                smooth={true}
                duration={500}
                onClick={closeNav}
              >
                होम
              </NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="about" smooth={true} duration={500} onClick={closeNav}>सक्षिप्त विवरण</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="puja" smooth={true} duration={500} onClick={closeNav}>बगलामुखी पूजा</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="gallery" smooth={true} duration={500} onClick={closeNav}>गैलरी</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="video" smooth={true} duration={500} onClick={closeNav}>वीडियो</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="news" smooth={true} duration={500} onClick={closeNav}>न्यूज़</Link>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
  );
}

export default NavBar;
