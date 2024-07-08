import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import Logo from "./../../assets/logo.jpeg";
import "./styles.scss";

const data = [
  {
    label: "Home",
    to: "/home",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Projects",
    to: "/projects",
  },
  {
    label: "Skills",
    to: "/skills",
  },
  // {
  //   label: "Resume",
  //   to: "/resume",
  // },
  {
    label: "Contact",
    to: "/contact",
  },
];

const NavBar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__pages">
          <Link to={"/home"} className="navbar__logo">
            <FaReact size={40} />
          </Link>
        </div>
        <ul className={`navbar__menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar__menu__item">
              <Link className="navbar__menu__item__links" to={item.to}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Create Humberger for phone view */}
        <div className="navbar_icon" onClick={handleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
