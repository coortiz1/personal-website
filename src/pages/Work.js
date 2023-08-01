import React from "react";
import {UserContext} from "../Navbar";

function Work() {
    const value = React.useContext(UserContext);
    function BasicInfo(){
        return(
            <>
                <h1>Education</h1>
                <h1>UCLA</h1>
                <h3>B.S. in Computer Science </h3>
                <h5>September 2021 - June 2025</h5>
                <h5>GPA: 3.917</h5>
            </>
        );

    }
    if (value){
        return (
            <>
                <BasicInfo />

                <h3>Projects</h3>
                <ol>
                    <li>
                        <p>Personal Fitness Web App</p>
                        <p>ADAPT (Aiding Dietician and Personal Trainer)</p>
                    </li>
                    <ul>
                        <li>personal health web app that allows users to select customized workout plans and food recipes</li>
                        <li>group project built with React.js, CSS, HTML, and Firebase</li>
                        <li>allows users to make an account and upload their personal information to the server</li>
                        <li>search through database of workouts and recipes and sorts them based on user preference and personal information</li>
                    </ul>
                    <li>Battleship Project</li>
                    <ul>
                        <li>Focuses on the usage of various data structures (linked lists, 2d arrays, stacks, classes, etc.) with the implementation of several programming techniques (recursion, etc.) to create a fully functional battleship game</li>
                        <li>Player can play against another person or AI (3 modes: easy, classic, hard)</li>
                        <li>Hard AI difficulty was created with the hunt + parity algorithm along with testing all possible ship configurations at a square to see its chances of containing a ship</li>
                        <li>Tested knowledge of inheritance, polymorphism, recursion, and data structures</li>
                    </ul>
                    <li>Project 3</li>
                </ol>
                <h2>Work Experience</h2>
                <ol>
                    <li>
                        <h4>Monterey Park Hospital - Purchasing Department Assistant</h4>
                        <h5>July 2015 - July 2017</h5>
                        <ul>
                            <li>Communicated with doctors and staff about inventory related questions</li>
                            <li>Translated for Cantonese speakers</li>
                            <li>Answered phone calls and assisted with scheduling complex issues that required appointments</li>
                            <li>Performed software updates and routine maintenance on computers, printers, and copy machines (average 20 machines a week)</li>
                        </ul>
                    </li>
                    <li>
                        <h4>Escalante Math Program - Teacher Assistant</h4>
                        <h5>July 2015 - September 2015</h5>
                        <ul>
                            <li>Coached 3 struggling students in precalculus and raised their test scores from C minus to A minus</li>
                            <li>Instructed precalculus classes (average 22 students per class) as substitute for teacher</li>
                        </ul>
                    </li>
                    <li>
                        <h4>UCLA Upsilon Pi Epsilon - Tutor</h4>
                        <h5>September 2022 - June 2022</h5>
                        <ul>
                            <li>Coach UCLA students in data structures and algorithms, differential equations, and physics</li>
                            <li>Helped students go through their homework in various subjects</li>
                            <li>Helped students go through their past graded homework and tests and explain their mistakes</li>
                        </ul>
                    </li>
                    <li>
                        <h4>Gabrielino Tutoring Association - Advisor</h4>
                        <h5>September 2020 - June 2021</h5>
                        <ul>
                            <li>Coached students one on one and raised two student's test scores from C minus to B</li>
                            <li>Gave younger students advice on what classes to choose for future and personalize teaching plans based on their interests</li>
                        </ul>
                    </li>
                </ol>
        </>
        )
    }
    else{
        return(
            <>
                <BasicInfo/>
                <h3>Teaching Experience</h3>
                <ol>
                    <li>
                        <h4>Escalante Math Program - Teacher Assistant</h4>
                        <h5>July 2015 - September 2015</h5>
                        <ul>
                            <li>Coached 3 struggling students in precalculus and raised their test scores from C minus to A minus</li>
                            <li>Instructed precalculus classes (average 22 students per class) as substitute for teacher</li>
                        </ul>
                    </li>
                    <li>
                        <h4>UCLA Upsilon Pi Epsilon - Tutor</h4>
                        <h5>September 2022 - June 2022</h5>
                        <ul>
                            <li>Coach UCLA students in data structures and algorithms, differential equations, and physics</li>
                            <li>Helped students go through their homework in various subjects</li>
                            <li>Helped students go through their past graded homework and tests and explain their mistakes</li>
                        </ul>
                    </li>
                    <li>
                        <h4>Gabrielino Tutoring Association - Advisor</h4>
                        <h5>September 2020 - June 2021</h5>
                        <ul>
                            <li>Coached students one on one and raised two student's test scores from C minus to B</li>
                            <li>Gave younger students advice on what classes to choose for future and personalize teaching plans based on their interests</li>
                        </ul>
                    </li>
                </ol>
            </>

        );
    }
}
export default Work;