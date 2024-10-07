import React from "react";
import SingleImage from "../../assets/img/PHOTO1.png";

const About = () => {
  return (
    <div className="block about-block" id="about">
      <div className="left-section">
        <h2>О проекте</h2>
        <div className="text-block white-box">
          <p>
            “ПлехВесна. Музы искусства” - это проект, который проводится для
            раскрытия творческого потенциала студентов РЭУ им. Г.В. Плеханова.
          </p>
        </div>
        <div className="text-block white-box short-text">
          <p>
            Ты талантливый музыкант, танцор, актер, дизайнер или крутой
            медийщик? Скорее подавай заявку!
          </p>
        </div>
      </div>
      <div className="image-grid">
        <img src={SingleImage} alt="Изображение" />
      </div>
    </div>
  );
};

export default About;
