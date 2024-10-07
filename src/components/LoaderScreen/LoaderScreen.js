import React from "react";
import desktopImage from "../../assets/img/loadingdesk.png";
import mobileImage from "../../assets/img/loadingmob.png";

const LoaderScreen = () => {
  return (
    <div className="loader-screen">
      <img
        src={desktopImage}
        alt="Loading..."
        className="loader-image desktop"
      />
      <img src={mobileImage} alt="Loading..." className="loader-image mobile" />
    </div>
  );
};

export default LoaderScreen;
