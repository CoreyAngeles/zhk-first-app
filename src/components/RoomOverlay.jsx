import React from "react";
import styles from "../pages/MainPage.module.scss";

const RoomOverlay = ({ typeOfRoomClass, coordsClass, clickedStatus }) => {
  const choseTypeOfRoom = () => {
    if (typeOfRoomClass === styles["room1-color"]) {
      return clickedStatus.room1;
    }

    if (typeOfRoomClass === styles["room2-color"]) {
      return clickedStatus.room2;
    }

    if (typeOfRoomClass === styles["room3-color"]) {
      return clickedStatus.room3;
    }
  };
  return (
    <div
      className={`${styles["main-room"]} ${typeOfRoomClass} ${coordsClass} ${
        !choseTypeOfRoom() ? styles["opacity-none"] : ""
      }`}
    ></div>
  );
};

export default RoomOverlay;
