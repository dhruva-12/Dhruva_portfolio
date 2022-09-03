import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {/* Hi Everyone, I am <span className="purple">Dhruva Shah </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />
            Software Engineer who loves to transform ideas into reality using
            code.
            <br />
            Motivated designer,analyst and developer with experience creating
            custom websites with ReactJs, JavaScript, HTML5, CSS3 ,SharePoint.
            I love analyzing and playing with data
            <br />
            Apart from coding, some other activities that I love to do! */}

            I am a Computer Science Grad Student at Lakehead University. 
            I enjoy problem-solving and coding. Always strive to bring 100% to the work I do.
            I have worked on technologies like Python, Django, Flask, MySQL, PostgreSQL, MongoDB, HTML5, CSS, SharePoint,Power BI
            and Java, C++ during my bachelor's. I have 19 months of professional work experience which helped me strengthen my experience in Python, Django and React.
            I am passionate about developing complex applications that solve real-world problems impacting millions of users.
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking 
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Short Stories
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
