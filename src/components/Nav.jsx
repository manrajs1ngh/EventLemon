import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo_svg.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    if (isMenuOpen) {
      // Start the closing transition
      setIsMenuOpen(false);
    } else {
      // Open immediately
      setIsMenuOpen(true);
    }
  }
  function menuClose() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <nav>
        <Link to="/">
          <img className="nav__logo" src={Logo} alt="logo" />
        </Link>

        {/* Hamburger Menu Button (visible on mobile) */}
        <button className="btn__menu" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="menu__backdrop">
            {/* Close Button */}
            <button className="btn__menu btn__menu--close" onClick={menuClose}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <ul className="menu__links">
              <li className="menu__list">
                <Link to="/" className="menu__link" onClick={menuClose}>
                  Home
                </Link>
              </li>
              <li className="menu__list">
                <Link
                  to="/get-listed"
                  className="menu__link"
                  onClick={menuClose}
                >
                  Get Listed
                </Link>
              </li>
              <li className="menu__list">
                <Link to="/vendors" className="menu__link" onClick={menuClose}>
                  Find a Vendor
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Desktop Navigation */}
        <ul className="nav__list desktop">
          <li className="nav__listItem">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__listItem">
            <Link to="/get-listed" className="nav__link">
              Get Listed
            </Link>
          </li>
          <li className="nav__listItem">
            <Link to="/vendors" className="nav__link nav__link--primary">
              Find a Vendor
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
