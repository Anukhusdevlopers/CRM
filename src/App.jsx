import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./Layout/UserLayout/UserLayout";
import "remixicon/fonts/remixicon.css";
import OrganisationLayout from "./Layout/Organisation/OrganisationLayout";
import LandingPage from "./Pages/home/LandingPage";
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
import Employees from "./Pages/organisation/Employees";
import Revenue from "./Pages/organisation/Revenue";
import LeadPanel from "./Pages/organisation/LeadPanel";
import Messages from "./Pages/organisation/Messages";
import ChatPage from "./Pages/organisation/Messages"; // NEW FILE for individual chat
import Campaigns from "./Pages/organisation/Campaigns";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Pages */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="blog" element={<Blog />} />
          <Route path="company" element={<Company />} />
        </Route>

        {/* Organisation Pages */}
        <Route path="/organisation" element={<OrganisationLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="employees" element={<Employees />} />
          <Route path="revenue" element={<Revenue />} />
          <Route path="lead-panel" element={<LeadPanel />} />
          <Route path="messages" element={<Messages />} />
          <Route path="messages/:chatId" element={<ChatPage />} /> {/* Dynamic Route */}
          <Route path="campaigns" element={<Campaigns />} />
        </Route>

        {/* Auth Pages */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />}>
            <Route path="organisation" element={<OrganisationLogin />} />
            <Route path="employee" element={<EmployeeLogin />} />
          </Route>
          <Route path="signup" element={<Signup />}>
            <Route path="organisation" element={<OrganisationSignup />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
