import React from "react";
import styles from "./Filters.module.scss";

const Filters = ({ clickedStatus, setClickedStatus }) => {
  const firstButtonToggle = () => {
    if (clickedStatus.room1) {
      setClickedStatus({ ...clickedStatus, room1: false });
    } else {
      setClickedStatus({ ...clickedStatus, room1: true });
    }
  };

  const secondButtonToggle = () => {
    if (clickedStatus.room2) {
      setClickedStatus({ ...clickedStatus, room2: false });
    } else {
      setClickedStatus({ ...clickedStatus, room2: true });
    }
  };

  const thirdButtonToggle = () => {
    if (clickedStatus.room3) {
      setClickedStatus({ ...clickedStatus, room3: false });
    } else {
      setClickedStatus({ ...clickedStatus, room3: true });
    }
  };

  const returnNewObjectRoomsWithTrueValues = (objectWithRoomValues) => {
    const copyObj = { ...objectWithRoomValues };
    for (let key in copyObj) {
      copyObj[key] = true;
    }
    return copyObj;
  };

  const showAllButtonAction = () => {
    const nevObj = returnNewObjectRoomsWithTrueValues(clickedStatus);
    setClickedStatus(nevObj);
  };

  const checkShowAllButtonForDisabled = (obj) => {
    let values = [];
    for (let key in obj) {
      values.push(obj[key]);
    }
    if (values.includes(false)) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className={styles["filters__wrapper"]}>
      <h3 className={styles["filters__tittle"]}>Фильтры</h3>
      <div className={styles["filters__buttons-wrapper"]}>
        <button
          className={`${styles["filters__btn"]} ${
            styles["filters__first-btn"]
          } ${clickedStatus.room1 ? styles["first-btn-active"] : ""}`}
          onClick={firstButtonToggle}
        >
          1 Комната
        </button>
        <button
          className={`${styles["filters__btn"]} ${
            styles["filters__second-btn"]
          } ${clickedStatus.room2 ? styles["second-btn-active"] : ""}`}
          onClick={secondButtonToggle}
        >
          2 Комнаты
        </button>
        <button
          className={`${styles["filters__btn"]} ${
            styles["filters__last-btn"]
          } ${clickedStatus.room3 ? styles["last-btn-active"] : ""}`}
          onClick={thirdButtonToggle}
        >
          3 Комнаты
        </button>
      </div>
      <button
        disabled={checkShowAllButtonForDisabled(clickedStatus)}
        className={`${styles["filters__btn"]} ${styles["filters__showAll-btn"]} ${styles["showAllBtn"]}`}
        onClick={showAllButtonAction}
      >
        Показать Все
      </button>
    </div>
  );
};

export default Filters;
