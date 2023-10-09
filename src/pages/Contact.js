import ExamplePdf from './Curtis_Chen.pdf';
import React from "react";
import {UserContext} from "../Navbar";
import "./contact.css";
function Contact(){
    const value = React.useContext(UserContext);
    function BasicInfo(){
        return(
            <>
                <h1>UCLA 25' Computer Science Major</h1>
                <p>Open for opportunities!</p>
                <ul>
                    <li>Email: curtischen1234@gmail.com</li>
                    <li>Phone Number: 1-626-321-0852</li>
                </ul>
                <a href="https://www.linkedin.com/in/curtis-chen1/" target="_blank" class = "linkPadding">
                    <input type="button" value="Linkedin" class = "linkBox"/>
                </a>
                <a href="https://github.com/curtischen03" target="_blank" class = "linkPadding">
                    <input type="button" value="Github" class = "linkBox"/>
                </a>
                <a
                    href={ExamplePdf}
                    download="Curtis_Chen_Resume"
                    target="_blank"
                    rel="noreferrer"
                >
                    <input type="button" value="Resume Download" class = "linkBox"/>
                </a>
            </>
        );
    }
    if (value){
        return (
            <div className = "contactBackground">
                <br></br>
                <div className = "contactBox">
                    <h1>Reach out to me for project ideas or if you just want to chat!</h1>

                    <div className = "innerContactBox" >
                        <BasicInfo />
                        <br></br>
                        <br></br>                    
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>





        

            </div>
        );
    }
    else{
        return(
            <div className = "contactBackground">
                <br></br>
                <div className = "contactBox">
                    <h1>Reach out to me for private tutoring!</h1> 

                    <div className = "innerContactBox">
                        <BasicInfo />
                        <br></br>
                        <br></br>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        );
    }
}
export default Contact;