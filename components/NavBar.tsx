import {
  BellIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

import { useCallback, useEffect, useState } from "react";

import NavItem from "@/components/NavItem";
import MobileMenu from "@/components/MobileMenu";
import AccountMenu from "@/components/AccountMenu";

const TOP_OFFSET = 66;

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);

      setShowBackground(window.scrollY >= TOP_OFFSET);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="nav-bar__section">
      <div
        className={`nav-bar__container ${
          showBackground ? "nav-bar__background" : ""
        }`}
      >
        <img
          src="/images/logo.png"
          alt="Netflix Logo"
          className="nav-bar__logo"
        />

        <div className="nav-bar__items">
          <NavItem label="Home" />
          <NavItem label="Series" />
          <NavItem label="Movies" />
          <NavItem label="New & Popular" />
          <NavItem label="My Favorites" />
          <NavItem label="Browse by Languages" />
        </div>

        <div onClick={toggleMobileMenu} className="nav-bar__mob-menu">
          <p className="nav-bar__mob-head">Browse</p>
          <ChevronDownIcon
            className={`nav-bar__mob-list ${
              showMobileMenu ? "drop-invert" : "drop-normal"
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>

        <div className="nav-bar__tail">
          <div className="nav-bar__tool">
            <MagnifyingGlassIcon className="nav-bar__tool-icon" />
          </div>
          <div className="nav-bar__tool">
            <BellIcon className="nav-bar__tool-icon" />
          </div>

          <div onClick={toggleAccountMenu} className="nav-bar__acc-menu">
            <div className="nav-bar__acc-logo">
              <img src="/images/default-blue.png" alt="Profile Logo" />
            </div>
            <ChevronDownIcon
              className={`nav-bar__acc-list ${
                showAccountMenu ? "drop-invert" : "drop-normal"
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
