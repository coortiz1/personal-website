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
                                <strong><a target = "_blank" href = "https://curtischen03.github.io/ADAPT/">Personal Fitness Web App</a></strong>
                                <p>ADAPT (Aiding Dietician and Personal Trainer)</p>
                                
                                <div className = "workImageBox1">
                                    <img src = "https://i.imgur.com/SI4qWqF.jpg" className = "workImage"/>    
                                    <img src = "https://i.imgur.com/4n24GVv.jpg" className = "workImage"/>
                                </div>                        
                                <ul type = "a" >
                                    <li>personal health web app that allows users to select customized workout plans and food recipes</li>
                                    <li>group project built with React.js, CSS, HTML, and Firebase</li>
                                    <li>allows users to make an account and upload their personal information to the server</li>
                                    <li>search through database of workouts and recipes and sorts them based on user preference and personal information</li>
                                </ul>
                            </li>
                            <br></br>
                            <li>
                                <strong><a target = "_blank" href = "https://github.com/curtischen03/movie_review_sentiment">ML Movie Review Sentiment</a></strong>
                                <p>Made with Python and Tensorflow</p>
                                
                                <div className = "workImageBox1">
                                    <img src = "https://i.imgur.com/SUTyBNl.png" className = "workImage"/>    
                                    <img src = "https://i.imgur.com/6hOpIXr.jpg" className = "workImage"/>
                                </div>                        
                                <ul type = "a" >
                                    <li>uses machine learning neural networks to determine the sentiment of a movie, which is either positive (1) or negative (0)</li>
                                    <li>combines Keras dataset about Imdb movie reviews with Kaggle dataset about Rotten Tomatoes movie reviews</li>
                                    <li>processed Kaggle dataset extensively with Pandas in order to use it with the Keras dataset </li>
                                    <li>neural network had 2 hidden layers and reached an 82 percent accuracy rate in determining sentiment</li>
                                </ul>
                            </li>
                            <br></br>
                            <li>
                                <strong><a target = "_blank" href = "https://github.com/curtischen03/comment-toxicity">ML Online Comment Toxicity</a></strong>
                                <p>Made with Python and Tensorflow</p>
                                
                                <div className = "workImageBox1">
                                    <img src = "https://i.imgur.com/RJ6m5St.jpg" className = "workImage"/>    
                                    <img src = "https://i.imgur.com/xNYtGcV.png" className = "workImage"/>
                                </div>                        
                                <ul type = "a" >
                                    <li>Uses neural networks to determine the toxicity of an online comment, which is put into these categories: toxic, severly toxic, 
obscene, threat, insult, and identity hate, and a 1 indicates that it is part of that category</li>
                                    <li>Processed Kaggle dataset with Pandas and used a vectorizer to convert the text into encodings of numbers  </li>
                                    <li>Neural network had 4 hidden layers and reached an 71 percent accuracy rate in determining the categories of toxic and severely 
toxic</li>
                                </ul>
                            </li>
                            <br></br>
                            <li>
                            <strong><a target = "_blank" href = "https://github.com/curtischen03/battleship">Battleship Project</a></strong>
                                <p>Made with C++</p>
                                <div className = "workImageBox1">
                                    <img src = "https://i.imgur.com/2pTTLos.png" className = "workImage"/>
                                    <img src = "https://i.imgur.com/DNYOcqC.png" className = "workImage"/>
                                </div>
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
                                <p>July 2019 - July 2021</p>
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
                                <p>July 2019 - July 2021</p>
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
                    <div className = "workImageBox2">
                        <img src = "https://i.imgur.com/qWeTGQL.jpg" className = "workImage2"/>
                        <img src = "https://i.imgur.com/0JIlUJ7.jpg" className = "workImage2"/>
                    </div>
                    <br></br>
                    <br></br>
                    <div className = "innerWorkBox">
                        <ol>
                            <li>
                                <strong>Escalante Math Program - Teacher Assistant</strong>
                                <p>July 2019 - July 2021</p>
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
                <br></br>
            </div>

        );
    }
}
export default Work;