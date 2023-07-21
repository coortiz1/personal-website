import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../Navbar";

const Layout = () => {
  return (
    <>
      <Navbar cs = {true}/>
      <Outlet />
    </>
  );
};
export default Layout;