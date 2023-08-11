import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../Navbar";
import {UserContext} from "../Navbar";
import { createContext, useEffect, useState } from 'react';
import Toggle from "./Toggle";

const Layout = () => {
  const [contextValue,setContextValue] = useState(true);
  const [status,setStatus] = useState("CS \n Resume")
  const toggleContextValue = () => {
    setContextValue((prevValue)=>!prevValue);
    if (contextValue){
      setStatus("Tutoring \n Resume");
    }
    else{
      setStatus("CS \n Resume");
    }
  }
  return (
    <UserContext.Provider value = {contextValue}>
      <Navbar/>
      <Outlet />
      <br></br> 
      <Toggle label = {status} handleClick = {toggleContextValue}/>
    </UserContext.Provider>
  );
};
export default Layout;