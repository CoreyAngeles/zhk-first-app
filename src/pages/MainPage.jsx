import React from "react";
import { PanZoomProvider, PanZoom, useSafeGestures } from "react-pan-and-zoom";
import mainImageURL from "/ZhkMain.jpg";

const MainPage = () => {
  useSafeGestures();
  return (
    <div className="panzoom-main-wrapper">
      <PanZoomProvider
        minZoom={1.2}
        maxZoom={1.4}
        initialZoom={1.2}
        centreOnMout={true}
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
          </div>
        </PanZoom>
      </PanZoomProvider>
    </div>
  );
};

export default MainPage;
