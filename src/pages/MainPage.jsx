import React, { useEffect } from "react";
import { PanZoomProvider, PanZoom, useSafeGestures } from "react-pan-and-zoom";
import floorsCoordsStyles from "../scss/floorsCoords.module.scss";
import overlaysCoordsStyles from "../scss/overlaysCoords.module.scss";
import styles from "./MainPage.module.scss";
import Interface from "../components/UI/Interface";
import mainImageURL from "/ZhkMain.jpg";
import FloorButton from "../components/FloorButton";
import RoomOverlay from "../components/RoomOverlay";

const MainPage = ({
  clickedStatus,
  setClickedStatus,
  isFullscreen,
  setIsFullscreen,
  pathStatus,
  setPathStatus,
}) => {
  useEffect(() => {
    setPathStatus("Главная");
  }, []);
  useSafeGestures();
  return (
    <>
      <div className={styles["panzoom-main-wrapper"]}>
        <img
          className={styles["image-background"]}
          src={mainImageURL}
          alt="city"
        />
        <PanZoomProvider
          minZoom={1.2}
          maxZoom={1.2}
          initialZoom={1.2}
          centreOnMount={true}
        >
          <PanZoom contentClassName={styles["panzoom-wrapper"]}>
            <div className={styles["main-page__wrapper"]}>
              <img
                src={mainImageURL}
                alt="house"
                className={styles["main-page__image"]}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
              <RoomOverlay
                clickedStatus={clickedStatus}
                typeOfRoomClass={styles["room1-color"]}
                coordsClass={overlaysCoordsStyles["room1-1"]}
              />
              <RoomOverlay
                clickedStatus={clickedStatus}
                typeOfRoomClass={styles["room2-color"]}
                coordsClass={overlaysCoordsStyles["room2-1"]}
              />
              <RoomOverlay
                clickedStatus={clickedStatus}
                typeOfRoomClass={styles["room3-color"]}
                coordsClass={overlaysCoordsStyles["room3-1"]}
              />
              <FloorButton
                classOfCoords={floorsCoordsStyles["floorBtn7"]}
                id={7}
                setPathStatus={setPathStatus}
              />
            </div>
          </PanZoom>
        </PanZoomProvider>
      </div>
      <Interface
        clickedStatus={clickedStatus}
        setClickedStatus={setClickedStatus}
        isFullscreen={isFullscreen}
        setIsFullscreen={setIsFullscreen}
        pathStatus={pathStatus}
      />
    </>
  );
};

export default MainPage;
