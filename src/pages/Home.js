import "./home.css";
function Home() {
    function Intro(){
        return (
            <>
                <div className = "box">
                    <h1>Hi, I'm Curtis!</h1>
                    <p>
                    I am a problem solver with a passion for computer science. 
                    I am an upcoming junior majoring in computer science at UCLA. 
                    I love keeping up to date on industry trends and last but not least,
                    I enjoy playing basketball and drawing in my free time. 
                    </p>
                    <p>
                    My technical expertise includes proficiency in Python and C/C++. I also have experience 
                    with web development technologies such as React.js, Firebase, HTML, and CSS. I am currently 
                    looking for internship opportunities. Aside from looking for internships, I am also a private tutor. 
                    </p>

                </div>
                <img src = "/pic.jpg"/>
                <h1>Education</h1>
                <h1>UCLA</h1>
                <h3>B.S. in Computer Science </h3>
                <h5>September 2021 - June 2025</h5>
                <h5>GPA: 3.917</h5>            
            </>
        );
    }
    return (
        <Intro/>
    );
}
export default Home;