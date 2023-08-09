import React from "react";
import {UserContext} from "../Navbar";
import "./work.css";
import Education from "../education"
function Work() {
    const value = React.useContext(UserContext);
    if (value){
        return (
            <div className = "workBackground">
                <br></br>
                <br></br>
                <div className = "workBox">
                    <h1>Projects</h1>
                    <div className = "innerWorkBox">                   
                        <ol>
                            <li>
                                <strong>Personal Fitness Web App</strong>
                                <p>ADAPT (Aiding Dietician and Personal Trainer)</p>
                                
                                <img src = "trainer.jpg" className = "workImage"/>    
                                <img src = "food.jpg" className = "workImage"/>                        
                                <ul type = "a" >
                                    <li>personal health web app that allows users to select customized workout plans and food recipes</li>
                                    <li>group project built with React.js, CSS, HTML, and Firebase</li>
                                    <li>allows users to make an account and upload their personal information to the server</li>
                                    <li>search through database of workouts and recipes and sorts them based on user preference and personal information</li>
                                </ul>
                            </li>
                            <br></br>
                            <li>
                                <strong>Battleship Project</strong>
                                <p>Made with C++</p>
                                <img src = "battleship.png" className = "workImage"/>
                                <img src = "battleshipCode.png" className = "workImage"/>
                                <ul>
                                    <li>Focuses on the usage of various data structures (linked lists, 2d arrays, stacks, classes, etc.) with the implementation of several programming techniques (recursion, etc.) to create a fully functional battleship game</li>
                                    <li>Player can play against another person or AI (3 modes: easy, classic, hard)</li>
                                    <li>Hard AI difficulty was created with the hunt + parity algorithm along with testing all possible ship configurations at a square to see its chances of containing a ship</li>
                                    <li>Tested knowledge of inheritance, polymorphism, recursion, and data structures</li>
                                </ul>
                            </li>
                            <br></br>
                            
                        </ol>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className = "workBox">
                    <h1>Work Experience</h1>
                    
                    <div className = "innerWorkBox">
                        <ol>
                            <li>
                                <strong>Monterey Park Hospital - Purchasing Department Assistant</strong>
                                <p>July 2015 - July 2017</p>
                                <ul>
                                    <li>Communicated with doctors and staff about inventory related questions</li>
                                    <li>Translated for Cantonese speakers</li>
                                    <li>Answered phone calls and assisted with scheduling complex issues that required appointments</li>
                                    <li>Performed software updates and routine maintenance on computers, printers, and copy machines (average 20 machines a week)</li>
                                </ul>
                            </li>
                            <br></br>
                            <li>
                                <strong>Escalante Math Program - Teacher Assistant</strong>
                                <p>July 2015 - September 2015</p>
                                <ul>
                                    <li>Coached 3 struggling students in precalculus and raised their test scores from C minus to A minus</li>
                                    <li>Instructed precalculus classes (average 22 students per class) as substitute for teacher</li>
                                </ul>
                            </li>
                            <br></br>
                            <li>
                                <strong>UCLA Upsilon Pi Epsilon - Tutor</strong>
                                <p>September 2022 - Current</p>
                                <ul>
                                    <li>Coach UCLA students in data structures and algorithms, differential equations, and physics</li>
                                    <li>Helped students go through their homework in various subjects</li>
                                    <li>Helped students go through their past graded homework and tests and explain their mistakes</li>
                                </ul>
                            </li>
                            <br></br>
                            <li>
                                <strong>Gabrielino Tutoring Association - Advisor</strong>
                                <p>September 2020 - June 2021</p>
                                <ul>
                                    <li>Coached students one on one and raised two student's test scores from C minus to B</li>
                                    <li>Gave younger students advice on what classes to choose for future and personalize teaching plans based on their interests</li>
                                </ul>
                            </li>
                            <br></br>
                        </ol>
                    </div>
                </div>
                <br></br>
                <br></br>
                <Education/>
            </div>
        );
    }
    else{
        return(
            <div className = "workBackground">
                <br></br>

                <div className = "workBox">
                    <h1>Teaching Experience</h1>
                    <img src = "teaching1.webp" className = "workImage2"/>
                    <img src = "teaching2.webp" className = "workImage2"/>
                    <br></br>
                    <br></br>
                    <div className = "innerWorkBox">
                        <ol>
                            <li>
                                <strong>Escalante Math Program - Teacher Assistant</strong>
                                <p>July 2015 - September 2015</p>
                                <ul>
                                    <li>Coached 3 struggling students in precalculus and raised their test scores from C minus to A minus</li>
                                    <li>Instructed precalculus classes (average 22 students per class) as substitute for teacher</li>
                                </ul>
                            </li>
                            <br></br>
                            <li>
                                <strong>UCLA Upsilon Pi Epsilon - Tutor</strong>
                                <p>September 2022 - June 2022</p>
                                <ul>
                                    <li>Coach UCLA students in data structures and algorithms, differential equations, and physics</li>
                                    <li>Helped students go through their homework in various subjects</li>
                                    <li>Helped students go through their past graded homework and tests and explain their mistakes</li>
                                </ul>
                            </li>
                            <br></br>
                            <li>
                                <strong>Gabrielino Tutoring Association - Advisor</strong>
                                <p>September 2020 - June 2021</p>
                                <ul>
                                    <li>Coached students one on one and raised two student's test scores from C minus to B</li>
                                    <li>Gave younger students advice on what classes to choose for future and personalize teaching plans based on their interests</li>
                                </ul>
                            </li>
                            <br></br>
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
export default Work;