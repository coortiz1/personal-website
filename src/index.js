import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import CSSkills from "./pages/CSSkills";
import CSWork from "./pages/CSWork";
import CSContact from "./pages/CSContact";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout />}>
          <Route index element = {<Home />}/>
          <Route path = "cs-skills" element = {<CSSkills />}/>
          <Route path = "teaching-skills" element = {<CSSkills />}/>
          <Route path = "cs-experience" element = {<CSWork />}/>
          <Route path = "teaching-experience" element = {<CSWork />}/>
          <Route path = "cs-contact-info" element = {<CSContact />}/>
          <Route path = "teaching-contact-info" element = {<CSContact />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />,document.getElementById("root"));

