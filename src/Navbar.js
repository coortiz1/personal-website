import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
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