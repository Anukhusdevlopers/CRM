import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./Layout/UserLayout/UserLayout";
import "remixicon/fonts/remixicon.css";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import LandingPage from "./Pages/home/LandingPage";
import OrganisationLayout from "./Layout/Organisation/OrganisationLayout";
import Pricing from "./Pages/home/pricing";
import Blog from "./Pages/home/blog";
import Company from "./Pages/home/company";
import Dashboard from "./Pages/organisation/Dashboard";
import AuthLayout from "./Layout/Auth/AuthLayout";
import Login from "./Pages/auth/Login";
import OrganisationLogin from "./Component/Auth/OrganisationLogin";
import EmployeeLogin from "./Component/Auth/EmployeeLogin";
import OrganisationSignup from "./Component/Auth/OrganisationSignup";
import Signup from "./Pages/auth/Signup";
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
            <Route path="pricing" element={<Pricing />} />
            <Route path="blog" element={<Blog />} />
            <Route path="company" element={<Company />} />
          </Route>

          {/* organisation */}
          <Route path="/organisation" element={<OrganisationLayout />}>
            <Route path="dashboard" element={<Dashboard /> } />
          </Route>

          {/* auth */}
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} >
              <Route path="organisation" element={<OrganisationLogin />} />
              <Route path="employee" element={<EmployeeLogin />} />
            </Route>
            <Route path="signup" element={<Signup  />} >
              <Route path="organisation" element={<OrganisationSignup />} />
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
