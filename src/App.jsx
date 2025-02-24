import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Filters from "./components/UI/Filters";
import MainPage from "./pages/MainPage";
import ViewFromTheTopPage from "./pages/ViewFromTheTopPage";

function App() {
  const [clickedStatus, setClickedStatus] = useState({
    room1: false,
    room2: false,
    room3: false,
  });
  return (
    <>
      <div className="main-screen">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              exact
              element={<MainPage clickedStatus={clickedStatus} />}
            />
            <Route
              path="/viewFromTheTopPage"
              element={<ViewFromTheTopPage />}
            />
          </Routes>
        </BrowserRouter>
        <Filters
          clickedStatus={clickedStatus}
          setClickedStatus={setClickedStatus}
        />
      </div>
    </>
  );
}

export default App;
