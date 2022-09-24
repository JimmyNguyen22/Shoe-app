import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function HomeTemplate() {
  return (
    <>
      <Outlet></Outlet>
      <div className="position-fixed bottom-0 w-100 start-0 bg-dark p-3">
        <div className="d-flex justify-content-between">
          <NavLink to="" className="text-white">
            <i className="fa fa-home"></i>
            Home
          </NavLink>
          <NavLink to="" className="text-white">
            <i className="fa fa-home"></i>
            Home
          </NavLink>
          <NavLink to="" className="text-white">
            <i className="fa fa-home"></i>
            Home
          </NavLink>
        </div>
      </div>
    </>
  );
}
