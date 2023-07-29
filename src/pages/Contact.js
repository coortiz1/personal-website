import React from "react";
import {UserContext} from "../Navbar";
function Contact(){
    const value = React.useContext(UserContext);
    if (value){
        return (
            <>
                <h1>Reach out to me!</h1>
                <h3>UCLA 25' Computer Science Major</h3>
                <p>Open for opportunities</p>
                <ul>
                    <li>Email: curtischen1234@gmail.com</li>
                    <li>Phone Number: 1-626-321-0852</li>
                </ul>
            </>

        );
    }
    else{
        return(<p>This is teaching contacts</p>);
    }
}
export default Contact;