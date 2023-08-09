import React, { useState } from "react";
import "./NavbarStyle.css";
import { NavbarItems } from "./NavbarItems";
import {Link} from 'react-router-dom';

const Navbar = () => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };

  return (
    <nav className="navbar-main">
      <h1 className="navbar-logo">eX</h1>
      <div className="navbar-icon">
        <i
          onClick={handleClick}
          className={state ? "fas fa-times" : "fas fa-bars"}
        ></i>
      </div>

      <ul className={state ? "navbar-items active" : "navbar-items"}>
        {NavbarItems.map((item, ind) => {
          return (
            <li key={ind} className="navbar-links">
              <Link to={item.url}>{item.titile}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
