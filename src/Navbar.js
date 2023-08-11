import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
export const UserContext = React.createContext();
function Navbar() {
    
    
    return (

        <nav className = "navbar">
            <ul>
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/skills">Skills</Link>
                </li>
                <li>
                    <Link to = "/experience">Experience</Link>
                </li>
                <li>
                    <Link to = "/contact-info">Contact Info</Link>
                </li>
            </ul>
        </nav> 
    )


}
export default Navbar;