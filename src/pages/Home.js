import "./home.css";
function Home() {
    function Intro(){
        return (
            <div className = "lightBlue">
                <br></br>
                <div className = "box1">
                    <h1>Hi, I'm Curtis!</h1>
                    <img className = "image" src = "/pic2.jpg"/>
                    <div className = "box2"> 
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
                <br></br>
                <br></br>
                <div className = "box1">
                    <h1>Education</h1>
                    <img className = "image" src = "/ucla.jpg"/>
                    <div className = "box2">
                        <h2>UCLA</h2>
                        <h3>B.S. in Computer Science </h3>
                        <h4>September 2021 - June 2025</h4>
                        <h4>GPA: 3.917</h4>
                    </div>
 

                </div>  

            </div>
        );
    }
    return (
        <Intro/>
    );
}
export default Home;