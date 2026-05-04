import "./Header.css";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setMenuOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container header__container">
        <a href="#hero" className="logo" onClick={closeMenu}>
          <span className="logo__letters">ET</span>
          <span className="logo__text">
            EURO
            <br />
            TRANSFER
          </span>
        </a>

        <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>
          <a href="#hero" onClick={closeMenu}>
            {t("nav.home")}
          </a>
          <a href="#services" onClick={closeMenu}>
            {t("nav.services")}
          </a>
          <a href="#routes" onClick={closeMenu}>
            {t("nav.routes")}
          </a>
          <a href="#map" onClick={closeMenu}>
            {t("nav.map")}
          </a>
          <a href="#contacts" onClick={closeMenu}>
            {t("nav.contacts")}
          </a>
        </nav>

        <div className="header__right">
          <div className="lang">
            <button onClick={() => changeLanguage("et")}>EE</button>
            <button onClick={() => changeLanguage("ru")}>RU</button>
            <button onClick={() => changeLanguage("en")}>EN</button>
          </div>

          <a href="tel:+37258141777" className="header__phone">
            <FaPhoneAlt />
            <span>+372 5814 1777</span>
          </a>

          <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
