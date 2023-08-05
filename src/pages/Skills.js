import React from "react";
import {UserContext} from "../Navbar";
function Skills() {
    const value = React.useContext(UserContext);
    if (value){
        return (
            <>
                <h1>My Skills</h1>
                <p>I am a programmer currently exploring every tech stack possible!!</p>
                <ol>
                    <li>Git</li>
                    <li>C/C++</li>
                    <li>Python</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Reactjs</li>
                    <li>Firebase</li>
                    <li>Shell Scripting</li>
                </ol>

                <h3>Language Skills</h3>
                <ol>
                    <li>
                        <h5>English</h5>
                        <p>Native speaking, reading, and writing proficiency</p>
                    </li>
                    <li>
                        <h5>Cantonese</h5>
                        <p>Native speaking proficiency</p>
                    </li>
                    <li>
                        <h5>Mandarin</h5>
                        <p>Limited speaking proficiency</p>
                    </li>

                </ol>
                <h2>Currently Learning...</h2>
                <ol>
                    <li>Machine Learning</li>
                    <li>Computer Graphics</li>
                </ol>

            </>
        );
    }
    else{
        return (
            <>
                <h3>Experienced Topics</h3>

                <h3>Credentials</h3>
                <ul>
                    <li>SAT 1600 20/24 Essay (August 2019)</li>
                    <li>ACT 35 10/12 Essay (December 2018)</li>
                    <li>
                        <h5>AP Scores</h5>
                        <ol>
                            <li>AP Calculus AB (5)</li>
                            <li>AP Calculus BC (5)</li>
                            <li>AP Chemistry (5)</li>
                            <li>AP Computer Science A (4)</li>
                            <li>AP English Language and Composition (5)</li>
                            <li>AP English Literature and Composition (4)</li>
                            <li>AP Physics 1 (5)</li>
                            <li>AP Physics C Electricity & Magnetism (5)</li>
                            <li>AP Physics Mechanics (5)</li>
                            <li>AP Stats (5)</li>
                            <li>AP US Government (4)</li>
                            <li>AP US History (5)</li>
                            <li>AP World History (4)</li>
                        </ol>
                    </li>

                </ul>
            
            </>
        );
    }
}
export default Skills;
