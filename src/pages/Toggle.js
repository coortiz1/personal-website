import React from "react";
import "./toggle.css";
  
const Toggle = ({ label,handleClick }) => {

  return (
    <div className="container">
      <p>{label}</p>
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" 
               name={label} id={label} onClick = {handleClick}/>
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
        <br></br>
      </div>
    </div>
  );
};
  
export default Toggle;