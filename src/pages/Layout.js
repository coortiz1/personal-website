import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../Navbar";
import {UserContext} from "../Navbar";
import { createContext, useEffect, useState } from 'react';

const Layout = () => {
  const [contextValue,setContextValue] = useState(true);
  const toggleContextValue = () => {
    setContextValue((prevValue)=>!prevValue);
  }
  return (
    <UserContext.Provider value = {contextValue}>
      <Navbar/>
      <Outlet />
      <button onClick={toggleContextValue}>Toggle Context Value</button>
    </UserContext.Provider>
  );
};
export default Layout;