import React from "react";
import Notfound from "../assets/images/404.png";

const NotFound = () => {
  return (
    <img
      src={Notfound}
      style={{ width: "40%", margin: "20px 0 0 30%" }}
      alt="notfound"
    />
  );
};

export default NotFound;
