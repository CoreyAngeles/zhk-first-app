import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import MainPage from "./pages/MainPage";
import ViewFromTheTopPage from "./pages/ViewFromTheTopPage";

function App() {
  const [clickedStatus, setClickedStatus] = useState({
    room1: false,
    room2: false,
    room3: false,
  });

  const [isFullscreen, setIsFullscreen] = useState(false);

  const [pathStatus, setPathStatus] = useState("");

  return (
    <>
      <div className={styles["main-screen"]}>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <MainPage
                clickedStatus={clickedStatus}
                setClickedStatus={setClickedStatus}
                isFullscreen={isFullscreen}
                setIsFullscreen={setIsFullscreen}
                pathStatus={pathStatus}
                setPathStatus={setPathStatus}
              />
            }
          />
          <Route
            path="/viewFromTheTopPage"
            element={
              <ViewFromTheTopPage
                clickedStatus={clickedStatus}
                setClickedStatus={setClickedStatus}
                isFullscreen={isFullscreen}
                setIsFullscreen={setIsFullscreen}
                pathStatus={pathStatus}
                setPathStatus={setPathStatus}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
