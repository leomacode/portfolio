import "./navbar.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { changeTheme, setUpTheme } from "../utils/themes";

function Navbar() {
  const [dataVisible, setDataVisible] = useState(false);
  const location = useLocation();
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  //initially set up the theme
  useEffect(() => {
    setUpTheme(theme);
  });

  //close the nav menu when somewhere out of the menu is clicked
  useEffect(() => {
    function closeMenu(e) {
      const nav = e.target.closest(".navigation");
      if (!nav && dataVisible) {
        setDataVisible(false);
      }
    }
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [dataVisible]);

  //close nav menu when route is changed
  useEffect(() => {
    setDataVisible(false);
  }, [location]);

  //changer the theme when click the button
  const handleClick = () => {
    changeTheme();
    setTheme(theme === "theme-light" ? "theme-dark" : "theme-light");
  };

  return (
    <header className="header">
      <div className="navbar flex container">
        <div className="header__logo">
          <HashLink to="#intro" className="header__logo-link">
            LM.
          </HashLink>
        </div>

        <nav className="header__nav flex">
          <ul className="nav__list flex" data-visible={dataVisible}>
            <li className="nav__list-item">
              <HashLink className="nav__link" to="#projects">
                Projects
              </HashLink>
            </li>
            <li className="nav__list-item">
              <HashLink className="nav__link" to="#skills">
                Skills
              </HashLink>
            </li>
            <li className="nav__list-item">
              <HashLink className="nav__link" to="#contact">
                Contact
              </HashLink>
            </li>
          </ul>

          <div className="switch btn__icon" onClick={handleClick}>
            {theme === "theme-light" ? (
              <FaMoon className="moon" />
            ) : (
              <FaSun className="soon" />
            )}
          </div>

          <div
            onClick={() =>
              dataVisible ? setDataVisible(false) : setDataVisible(true)
            }
            className="toggle btn__icon"
          >
            {dataVisible ? (
              <FaTimes className="times" />
            ) : (
              <FaBars className="bars" />
            )}
          </div>

          <div
            className="overlay"
            data-visible={dataVisible}
            data-testid="overlay"
          ></div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
