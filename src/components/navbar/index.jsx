import React, { useState } from "react";
import "./styles.scss";
import { FaBars, FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";

// Dummy data
const data = [
  {
    label: "Home",
    to: "/",
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
    label: "Resume",
    to: "/resume",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar_container">
          <Link to={"/"} className="navbar_container_logo">
            <FaReact size={30} />
          </Link>
        </div>
        <ul className={`navbar_container_menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar_container_menu_item">
              <Link className="navbar_container_menu_item_link" to={item.to}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav_icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars si size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
