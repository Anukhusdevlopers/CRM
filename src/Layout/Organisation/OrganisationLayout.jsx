import React from "react";
import { Outlet } from "react-router-dom";
import OrganisationSideBar from "./sidebar/sidebar";

export default function OrganisationLayout() {
  return (
    <div style={{ display: "flex" }}>
      <OrganisationSideBar />
      <div style={{paddingLeft: '280px'}} >
        <Outlet />
      </div>
    </div>
  );
}
