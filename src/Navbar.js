import React from "react";
import { Link } from "react-router-dom";

function Navbar({cs}) {
    if (cs){
        return (
            <nav>
                <ul>
                    <li>
                        <Link to = "/">Home</Link>
                    </li>
                    <li>
                        <Link to = "/cs-skills">Skills</Link>
                    </li>
                    <li>
                        <Link to = "/cs-experience">Experience</Link>
                    </li>
                    <li>
                        <Link to = "/cs-contact-info">Contact Info</Link>
                    </li>
                </ul>
            </nav>        
        )
    }

}
export default Navbar;