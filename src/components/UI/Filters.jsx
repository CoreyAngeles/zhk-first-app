import React from "react";
import "./Filters.scss";

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
    <div className="filters__wrapper">
      <h3 className="filters__tittle">Фильтры</h3>
      <div className="filters__buttons-wrapper">
        <button
          className={`filters__btn filters__first-btn ${
            clickedStatus.room1 ? "first-btn-active" : ""
          }`}
          onClick={firstButtonToggle}
        >
          1 Комната
        </button>
        <button
          className={`filters__btn filters__second-btn ${
            clickedStatus.room2 ? "second-btn-active" : ""
          }`}
          onClick={secondButtonToggle}
        >
          2 Комнаты
        </button>
        <button
          className={`filters__btn filters__last-btn ${
            clickedStatus.room3 ? "third-btn-active" : ""
          }`}
          onClick={thirdButtonToggle}
        >
          3 Комнаты
        </button>
      </div>
      <button
        disabled={checkShowAllButtonForDisabled(clickedStatus)}
        className="filters__btn filters__showAll-btn showAllBtn"
        onClick={showAllButtonAction}
      >
        Показать Все
      </button>
    </div>
  );
};

export default Filters;
