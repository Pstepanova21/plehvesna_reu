import React, { useState } from "react";
import burgerIcon from "../../assets/img/Union.png";
import titleImage1 from "../../assets/img/плехвесна.png";
import titleImage2 from "../../assets/img/Line 2.png";
import titleImage3 from "../../assets/img/музы искусства.png";
import vkIcon from "../../assets/img/Frame 8.png";
import telegramIcon from "../../assets/img/Frame 9.png";
import infoIcon from "../../assets/img/Frame 10.png";
import closeIcon from "../../assets/img/close.png";
import homeIcon from "../../assets/img/главная.png";
import aboutIcon from "../../assets/img/о проекте.png";
import lineIcon from "../../assets/img/Line 5.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const goToForm = () => {
    const formSection = document.getElementById("form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const goToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="burger-menu" onClick={toggleMenu}>
        <img src={burgerIcon} alt="Меню" className="burger-icon" />
      </div>
      <div className="header-title">
        <img
          src={titleImage1}
          alt="Заголовок 1"
          className="header-title-image1"
        />
        <img
          src={titleImage2}
          alt="Заголовок 2"
          className="header-title-image2"
        />
        <img
          src={titleImage3}
          alt="Заголовок 3"
          className="header-title-image3"
        />
      </div>
      <div className="social-icons">
        <a
          href="https://vk.com/plehvesna_reu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={vkIcon} alt="VK" className="social-icon" />
        </a>
        <a
          href="https://t.me/plehvesna_reu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={telegramIcon} alt="Telegram" className="social-icon" />
        </a>
        <a onClick={goToAbout}>
          <img src={infoIcon} alt="Информация" className="social-icon" />
        </a>
      </div>

      {isMenuOpen && (
        <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
          <img
            src={closeIcon}
            alt="Закрыть"
            className="close-icon close-button"
            onClick={toggleMenu}
          />
          <div className="menu-items">
            <div className="menu-item" onClick={goToForm}>
              <img src={homeIcon} alt="Главная" />
            </div>
            <img src={lineIcon} alt="Линия" className="menu-line" />
            <div className="menu-item" onClick={goToAbout}>
              <img src={aboutIcon} alt="О проекте" />
            </div>
            <img src={lineIcon} alt="Линия" className="menu-line" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
