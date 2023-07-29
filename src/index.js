import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

import "./index.css";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout />}>
          <Route index element = {<Home />}/>
          <Route path = "skills" element = {<Skills />}/>
          <Route path = "experience" element = {<Work />}/>
          <Route path = "contact-info" element = {<Contact />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />,document.getElementById("root"));

