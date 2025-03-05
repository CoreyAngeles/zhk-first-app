import React from "react";
import Filters from "./Filters";
import FullscreenToggle from "./FullscreenToggle";
import PathStatus from "./PathStatus";

const Interface = ({
  clickedStatus,
  setClickedStatus,
  isFullscreen,
  setIsFullscreen,
  pathStatus,
}) => {
  return (
    <>
      <Filters
        clickedStatus={clickedStatus}
        setClickedStatus={setClickedStatus}
      />
      <FullscreenToggle
        isFullscreen={isFullscreen}
        setIsFullscreen={setIsFullscreen}
      />
      <PathStatus pathStatus={pathStatus} />
    </>
  );
};

export default Interface;
