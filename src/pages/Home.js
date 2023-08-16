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
                            I am an upcoming junior majoring in computer science at UCLA. 
                            I love keeping up to date on industry trends. In my free time,
                            I enjoy playing basketball and drawing. 
                            </p>
                            <p>
                            My technical expertise includes proficiency in Python and C/C++. I also have experience 
                            with web development technologies such as React.js, Firebase, HTML, and CSS. I am currently 
                            looking for internship opportunities. Aside from looking for internships, I am also a private tutor. 
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