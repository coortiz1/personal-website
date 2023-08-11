import "./education.css";
export default function Education(){
    return (
        <div className = "educationBox">
            <h1>Education</h1>
            <img className = "educationImage" src = "/ucla.jpg"/>
            <div className = "innerEducationBox">
                <h2>UCLA</h2>
                <h3>B.S. in Computer Science </h3>
                <h4>September 2021 - June 2025</h4>
                <h4>GPA: 3.917</h4>
            </div>
        </div> 
    );
}