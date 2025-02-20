import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./Layout/UserLayout/UserLayout";
import "remixicon/fonts/remixicon.css";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import LandingPage from "./Pages/home/LandingPage";
import OrganisationLayout from "./Layout/Organisation/OrganisationLayout";
import MainContent from "./Pages/organisation/main-content";
const App = () => {
  // lenis
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* user pages  */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<LandingPage />} />
          </Route>

          {/* organisation */}
          <Route path="/organisation" element={<OrganisationLayout />}>
            <Route path="dashboard" element={<MainContent /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
