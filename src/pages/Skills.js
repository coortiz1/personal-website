import React from "react";
import {UserContext} from "../Navbar";
import "./skills.css";
import Education from "../education"
function Skills() {
    const value = React.useContext(UserContext);
    if (value){
        return (
            <div className = "skillBackground">
                <br></br>
                <div className = "skillBox">
                    <h1>My Skills</h1>
                    <div className = "skillImageBox">
                        <img className = "skillImage1" src = "./code.jpg"/>
                        <br></br>
                        <br></br>
                        <img className = "skillImage1" src = "./coding2.jpg"/>
                        <br></br>
                        <br></br>
                        <img className = "skillImage1" src = "./coding3.jpg"/>
                    </div>
                    <div className = "innerSkillBox">
                        <h3>Coding Skills</h3>

                        <p>I am a programmer currently exploring every tech stack possible!!</p>
                        <ol>
                            <li><strong>Git</strong></li>
                            <li><strong>C/C++</strong></li>
                            <li><strong>Python</strong></li>
                            <li><strong>HTML</strong></li>
                            <li><strong>CSS</strong></li>
                            <li><strong>Reactjs</strong></li>
                            <li><strong>Firebase</strong></li>
                            <li><strong>Shell Scripting</strong></li>
                        </ol>
                    </div>
                    <br></br>
                    <div className = "skillImageBox">
                        <img className = "skillImage2" src = "speaking.jpg"/>
                        <br></br>
                        <br></br>
                        <img className = "skillImage2" src = "speaking2.jpg"/>
                    </div>
                    <div className = "innerSkillBox">
                        <h3>Language Skills</h3>
                        <ol>
                            <li>
                                <strong>English</strong>
                                <p>Native speaking, reading, and writing proficiency</p>
                            </li>
                            <li>
                                <strong>Cantonese</strong>
                                <p>Native speaking proficiency</p>
                            </li>
                            <li>
                                <strong>Mandarin</strong>
                                <p>Limited speaking proficiency</p>
                            </li>
                    
                        </ol>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className = "skillBox">
                    <h1>Currently Learning...</h1>
                    <div className = "innerSkillBox">
                        <ol>
                            <li><strong>Machine Learning</strong></li>
                            <li><strong>Computer Graphics</strong></li>
                        </ol>
                    </div>
                </div>
                <br></br>
                <br></br>
                <Education/>
                <br></br>
            </div>
        );
    }
    else{
        return (
            <div className = "skillBackground">
                <br></br>
                <div className = "skillBox">
                    <h1>Experienced Topics</h1>
                    <div className = "innerSkillBox">
                        <ol>
                            <li><strong>a</strong></li>
                            <li><strong>b</strong></li>
                            <li><strong>c</strong></li>
                        </ol>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className = "skillBox">
                    
                    <h1>Credentials</h1>
                    <div className = "innerSkillBox">
                        <ol>
                            <li><strong>Gabrielino 2021 Valedictorian</strong></li>
                            <li><strong>SAT 1600 20/24 Essay (August 2019)</strong></li>
                            <li><strong>ACT 35 10/12 Essay (December 2018)</strong></li>                        
                        </ol>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className = "skillBox">
                    <h1>AP Scores</h1>
                    <div className = "innerSkillBox">
                        <ol>
                            <li><strong>AP Calculus AB (5)</strong></li>
                            <li><strong>AP Calculus BC (5)</strong></li>
                            <li><strong>AP Chemistry (5)</strong></li>
                            <li><strong>AP Computer Science A (4)</strong></li>
                            <li><strong>AP English Language and Composition (5)</strong></li>
                            <li><strong>AP English Literature and Composition (4)</strong></li>
                            <li><strong>AP Physics 1 (5)</strong></li>
                            <li><strong>AP Physics C Electricity & Magnetism (5)</strong></li>
                            <li><strong>AP Physics Mechanics (5)</strong></li>
                            <li><strong>AP Stats (5)</strong></li>
                            <li><strong>AP US Government (4)</strong></li>
                            <li><strong>AP US History (5)</strong></li>
                            <li><strong>AP World History (4)</strong></li>
                        </ol>
                    </div>

                </div> 
                <br></br> 
                <br></br> 
                <Education/>         
                <br></br>
            </div>
        );
    }
}
export default Skills;
