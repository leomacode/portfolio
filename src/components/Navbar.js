import "./nav.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { setTheme } from "../utils/themes";

function Navbar() {
  const [dataVisible, setDataVisible] = useState(false);
  const location = useLocation();
  const [togClass, setTogClass] = useState("");
  let theme = localStorage.getItem("theme");

  const handleClick = () => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
      setTogClass("light");
    } else {
      setTheme("theme-dark");
      setTogClass("dark");
    }
  };

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

  //set the theme icon according to the default theme
  useEffect(() => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTogClass("dark");
    } else if (localStorage.getItem("theme") === "theme-light") {
      setTogClass("light");
    }
  }, [theme]);

  return (
    <header className="header">
      <div className="navbar flex container">
        <div className="header__logo">
          <a href="/" className="link header__logo-link">
            LM.
          </a>
        </div>

        <nav className="header__nav flex">
          <ul className="nav__list flex" data-visible={dataVisible}>
            <li className="nav__list-item">
              <a className="link link--nav" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav__list-item">
              <a className="link link--nav" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav__list-item">
              <a className="link link--nav" href="#contact">
                Contact
              </a>
            </li>
          </ul>

          <div className="switch btn__icon" onClick={() => handleClick()}>
            {togClass === "light" ? (
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
