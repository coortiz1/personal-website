import ExamplePdf from './pages/Curtis_Chen.pdf';
import "./education.css";
export default function Education(){
    return (
        <div className = "educationBox">
            <h1>Education</h1>
            <img className = "educationImage" src = "https://i.imgur.com/vvZF9zG.jpg"/>
            <div className = "innerEducationBox">
                <h2>UCLA</h2>
                <h3>B.S. in Computer Science </h3>
                <h4>September 2021 - June 2025</h4>
                <h4>GPA: 3.917</h4>
            </div>
            <br></br>
            <a
                href={ExamplePdf}
                download="Curtis_Chen_Resume"
                target="_blank"
                rel="noreferrer"
            >
                <input type="button" value="Resume Download" class = "linkBox"/>
            </a>
        </div> 
    );
}