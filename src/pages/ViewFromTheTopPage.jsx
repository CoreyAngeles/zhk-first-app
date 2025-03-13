import React from "react";
import { PanZoomProvider, PanZoom, useSafeGestures } from "react-pan-and-zoom";
import styles from "./ViewFromTheTopPage.module.scss";
import Interface from "../components/UI/Interface";
import mainImageURL from "/MainBackground.jpg";
import secondImageURL from "/FloorMain.jpg";

const ViewFromTheTopPage = ({
  clickedStatus,
  setClickedStatus,
  isFullscreen,
  setIsFullscreen,
  pathStatus,
}) => {
  useSafeGestures();
  return (
    <>
      <div className={styles["panzoom-main-wrapper"]}>
        <img
          className={styles["image-background"]}
          src={mainImageURL}
          alt="Дом"
        />
        <PanZoomProvider
          minZoom={0.9}
          maxZoom={1.4}
          initialZoom={0.9}
          initialPan={{ x: 438, y: 43 }}
          // onChange={(pan) => {
          //   console.log(pan);
          // }}
          centreOnMount={true}
        >
          <PanZoom contentClassName={styles["panzoom-wrapper"]}>
            <div className={styles["main-page__wrapper"]}>
              <img
                src={secondImageURL}
                alt="house"
                className={styles["main-page__image"]}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
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

export default ViewFromTheTopPage;
