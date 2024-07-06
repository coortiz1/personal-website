import "./home.css";
import Education from "../education" 
function Home() {
    function Intro(){
        return (
            <div className = "homeBackground">
                <br></br>
                <div className = "homeBox">
                    <h1>Hi, I'm Curtis!</h1>
                    <div className = "basicBox">
                        <img className = "homeImage" src = "https://i.imgur.com/7sWsRN4.jpg"/>
                        <div className = "innerHomeBox"> 
                            <p>
                            I am a problem solver with a passion for computer science. 
                            I am an upcoming senior majoring in computer science at UCLA. 
                            I enjoy keeping up to date on industry trends. In my free time,
                            I play basketball and draw. 
                            </p>
                            <p>
                            My technical expertise includes front end and back end web development as well as machine learning. 
                            In terms of web development, I am experienced with React.js, JS, HTML, CSS, Django, and Firebase. 
                            For machine learning, I am experienced with tools such as Tensorflow, Numpy, Pandas, and SKLearn. 
                            I am experienced with programming languages such as Python, C/C++, and Java.
                            Aside from a CS student, I am also a private tutor. 
                            </p>
                        </div>
                    </div>


                </div>
                <br></br>
                <br></br>
                <Education/>
                <br></br>
            </div>
            
        );
    }
    return (
        <Intro/>
    );
}
export default Home;