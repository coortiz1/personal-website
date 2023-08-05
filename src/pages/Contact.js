import React from "react";
import {UserContext} from "../Navbar";
function Contact(){
    const value = React.useContext(UserContext);
    function BasicInfo(){
        return(
            <>
                <h3>UCLA 25' Computer Science Major</h3>
                <p>Open for opportunities!</p>
                <ul>
                    <li>Email: curtischen1234@gmail.com</li>
                    <li>Phone Number: 1-626-321-0852</li>
                </ul>
                <a target = "_blank" href = "https://www.linkedin.com/in/curtis-chen1/">Linkedin</a>
            </>
        );
    }
    if (value){
        return (
            <>
                <h1>Reach out to me for project ideas or if you just want to chat!</h1>
                <BasicInfo />
                <br></br>
            </>
        );
    }
    else{
        return(
            <>
                <h1>Reach out to me for private tutoring!</h1>
                
                <BasicInfo />
                <br></br>
            </>
        );
    }
}
export default Contact;