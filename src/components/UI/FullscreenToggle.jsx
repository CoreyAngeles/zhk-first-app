import { FaExpand, FaCompress } from "react-icons/fa";
import styles from "./FullscreenToggle.module.scss";

const FullscreenToggle = ({ isFullscreen, setIsFullscreen }) => {
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      enterFullscreen();
    } else {
      exitFullscreen();
    }
  };

  const enterFullscreen = () => {
    const element = document.documentElement;

    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      // Firefox
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      // Chrome, Safari и Opera
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      // IE/Edge
      element.msRequestFullscreen();
    }

    setIsFullscreen(true);
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      // Chrome, Safari и Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      // IE/Edge
      document.msExitFullscreen();
    }

    setIsFullscreen(false);
  };

  return (
    <div className={styles["fullscreen-btn-wrapper"]}>
      <button onClick={toggleFullscreen} className={styles["fullscreen-btn"]}>
        {isFullscreen ? <FaCompress /> : <FaExpand />}
      </button>
    </div>
  );
};

export default FullscreenToggle;
