import React from "react";
import { PanZoomProvider, PanZoom, useSafeGestures } from "react-pan-and-zoom";
import "./MainPage.scss";

import mainImageURL from "/ZhkMain.jpg";
import FloorButton from "../components/FloorButton";

const MainPage = ({ clickedStatus }) => {
  useSafeGestures();
  return (
    <div className="panzoom-main-wrapper">
      <img className="image-background" src={mainImageURL} alt="city" />
      <PanZoomProvider
        minZoom={1.2}
        maxZoom={1.4}
        initialZoom={1.2}
        centreOnMount={true}
      >
        <PanZoom contentClassName="panzoom-wrapper">
          <div className="main-page__wrapper">
            <img
              src={mainImageURL}
              alt="house"
              className="main-page__image"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
            <div
              className={`main-room room1-color room1-1 ${
                !clickedStatus.room1 ? "opacity-none" : ""
              }`}
            ></div>
            <div
              className={`main-room room2-color room2-1 ${
                !clickedStatus.room2 ? "opacity-none" : ""
              }`}
            ></div>
            <div
              className={`main-room room3-color room3-1 ${
                !clickedStatus.room3 ? "opacity-none" : ""
              }`}
            ></div>
            <FloorButton classname="floorBtn7" id={7} />
          </div>
        </PanZoom>
      </PanZoomProvider>
    </div>
  );
};

export default MainPage;
