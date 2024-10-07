import React, { useState, useEffect } from "react";
import Group3 from "../../assets/img/Group 3.png";
import Group2 from "../../assets/img/Group 2.png";
import Group1 from "../../assets/img/Group 1.png";
import Group3Small from "../../assets/img/Group 3 small.png";
import Group2Small from "../../assets/img/Group 2 small.png";
import Group1Small from "../../assets/img/Group 1 small.png";
import FormModalParticipant from "../modals/FormModalParticipant";
import FormModalDirector from "../modals/FormModalDirector";
import FormModalOrganizer from "../modals/FormModalOrganizer";

const Forms = () => {
  const [modalType, setModalType] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 480);

  const openModal = (type) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="block forms-block" id="form">
      <div className="text-section1">
        <div className="text-blocks1">
          <div className="white-box1">
            <p>
              “ПлехВесна. Музы искусства” - это новый проект, с помощью которого
              ты сможешь реализовать свой потенциал не только в рамках
              университета, но и за его пределами.
            </p>
          </div>
          <div className="season-inspiration">
            <p>
              Это <strong>твой</strong> сезон вдохновения!
            </p>
          </div>
          <div className="white-box1 short-text1">
            <p>
              В рамках проекта ты сможешь стать участником творческого
              направления, режиссером и даже организатором!
            </p>
          </div>
        </div>
      </div>

      <div className="forms-buttons">
        <div className="modal-windows">
          <img
            src={isSmallScreen ? Group3Small : Group3}
            alt="Окно 1"
            onClick={() => openModal("participant")}
          />
          <img
            src={isSmallScreen ? Group2Small : Group2}
            alt="Окно 2"
            onClick={() => openModal("director")}
          />
          <img
            src={isSmallScreen ? Group1Small : Group1}
            alt="Окно 3"
            onClick={() => openModal("organizer")}
          />
        </div>
      </div>

      {modalType === "participant" && (
        <div className="modal">
          <FormModalParticipant closeModal={closeModal} />
        </div>
      )}
      {modalType === "director" && (
        <div className="modal">
          <FormModalDirector closeModal={closeModal} />
        </div>
      )}
      {modalType === "organizer" && (
        <div className="modal">
          <FormModalOrganizer closeModal={closeModal} />
        </div>
      )}
    </div>
  );
};

export default Forms;
