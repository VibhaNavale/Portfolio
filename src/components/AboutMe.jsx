import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Parallax } from "react-parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faComputer, faMobilePhone, faDatabase, faTools, faLineChart } from "@fortawesome/free-solid-svg-icons";
import NavHeader from "./NavHeader";
import ColorSplash from "../assets/images/ColorSplash.jpg";

export default function AboutMe() {

  const cardItems = [{
    title: "'Best outgoing student' recognition in academics",
    subtitle: "August 2021",
    text: "Awarded a certificate for being the top scorer of the class and 2nd highest scorer in the department.",
    link: "https://drive.google.com/file/d/1w-QTk9ZyAZXRJSDfqXYiVzYCKyfK42Gi/view?usp=sharing"
  },
  {
    title: "Recognition of major project being VTU sponsored for financial assist",
    subtitle: "August 2021",
    text: `Our major project ('Design and Implementation of Eye Pupil Movement-based PIN Authentication System') was selected amongst
      many other groups for financial assist from VTU.`,
    link: "https://drive.google.com/file/d/1PIqGH1q9LyzVNoIqdt3unk2LrBn0pdZk/view?usp=sharing"
  },
  {
    title: "Best major project award in an inter-department presentation at PROP",
    subtitle: `PROP: Project Open-house Panorama \n July 2021`,
    text: `Our major project ('Design and Implementation of Eye Pupil Movement-based PIN Authentication System') was awarded as the best project
      amongst various groups in college under the AI/ML track (Please note: The certificate mentions IOT track, whereas our project was judged under the AI/ML track given the topic).`,
    link: "https://drive.google.com/file/d/1Vo1NPBtC88dg00NSRSJAgU3gMNyKmGZN/view?usp=sharing"
  },
  {
    title: "Microsoft Technology Associate certificate in 'Introduction to Programming using Javascript'",
    subtitle: "August 2019",
    text: "Went through a course on Javascript and scored 85/100 in the MTA exam.",
    link: "https://drive.google.com/file/d/1zs02Zqb-nbS9nT8BwlIL_JlE2mY_dpIF/view?usp=sharing"
  },
  {
    title: "Cross-Platform Mobile Application Development program",
    subtitle: "July 2019",
    text: "Completed a 30-hour Cross-Platform Mobile Application Development program conducted by ATS Learning Solutions.",
    link: "https://drive.google.com/file/d/1vNIndzh9-vRCuASMInMUycFeHt98yWta/view?usp=sharing"
  }
  ]

  return (
    <div>
      <NavHeader />
      <Parallax className="parallax-image" bgImage={ColorSplash} bgImageStyle={{height: '110%', width: '100%'}} strength={800}>
        <div style={{ height: "500px" }}>
          <div className="parallax-text">Hi there! Hope you are having a fantastic day :) <br/>
          This page has a brief summary about me and my journey. Let's  dive in!</div>
        </div>
      </Parallax>
      <div className="text-center">
        <div className="aboutme bg-light">
          <u><h3 className="aboutme-heading">A little bit about who I am and what I do</h3></u>
          <div>I am Vibha, an MS in Computer Science student at the University of Illinois at Chicago. <br/>
            I am originally from Bangalore, India, but currently reside in Chicago, IL. <br/>
            Prior to starting my graduate studies, I worked as a Software Engineer at Cimpress for over 2 years and have a Bachelor's degree in Information Science and Engineering. <br/>
            I have worked on various tools and technologies such as React, Node.js, GraphQl, etc., and am constantly learning and exploring new technologies.<br/>
          </div>
        </div>
        <div className="aboutme aboutme-ex-ed-container">
          <div className="div1">
            <u><h3 className="aboutme-heading">Experience</h3></u>
            <div>
              <FontAwesomeIcon icon={faComputer} />
              <span> Software Engineer</span><br/>
              <span className="text-muted">
                Cimpress<br/>
                Bangalore, India<br/>
                Working since: August 2021</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faMobilePhone} />
              <span> Android App Developer Intern</span><br/>
              <span className="text-muted">
                NS Jain Constructions<br/>
                Mangalore, India<br/>
                Duration: June 2020 - July 2020</span>
            </div>
          </div>
          <div className="div2">
            <u><h3 className="aboutme-heading">Education</h3></u>
            <div>
              <FontAwesomeIcon icon={faGraduationCap} />
              <span> Master of Science in Computer Science</span><br/>
              <span className="text-muted">
                University of Illinois at Chicago, IL</span>
                Program Duration: Jan 2024 - Expected Dec 2025<br/>
            </div>
            <div>
              <FontAwesomeIcon icon={faGraduationCap} />
              <span> B.E. Information Science and Engineering</span><br/>
              <span className="text-muted">
                RNS Institute of Technology, Bangalore, India</span>
                Program Duration: 2017 - 2021<br/>
                GPA: 9.08/10<br/>
                Affiliated to: Visvesvaraya Technological University (VTU)<br/>
            </div>
            <div>
              <FontAwesomeIcon icon={faGraduationCap} />
              <span> 11th and 12th grade </span><br/>
              <span className="text-muted">
                Vidya Jyothi PU College, Kolar, India
                Program Duration: 2015 - 2017<br/>
              </span>
            </div>
            <div>
              <FontAwesomeIcon icon={faGraduationCap} />
              <span> X</span><br/>
              <span className="text-muted">
                R.L. Jalappa Central School, Kolar, India</span>
                Graduated in: 2015<br/>
                GPA: 10/10<br/>
                Board: CBSE<br/>
            </div>
          </div>
        </div>
        <div className="aboutme bg-light">
          <u><h3 className="aboutme-heading">Skills</h3></u>
          <Container>
            <Row>
              <Col><FontAwesomeIcon icon={faDatabase} color="#E55958" size="2x" />
                <p className="aboutme-skills-subheading">Languages and Databases</p>
                <p>TS/JS, PostgreSQL, GraphQL, HTML, CSS, Java, Basic  C++, C#, & Python</p>
              </Col>
              <Col><FontAwesomeIcon className="fa-icon" icon={faTools} color="#037D49" size="2x" />
                <p className="aboutme-skills-subheading">Tools and Technologies</p>
                <p>Git, AWS, Jira, Cortex, Miro </p>
              </Col>
              <Col><FontAwesomeIcon icon={faLineChart} color="#894EA4" size="2x" />
                <p className="aboutme-skills-subheading">Frameworks and Libraries</p>
                <p>React, Node.js, Angular, Jest, Mocha</p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="aboutme aboutme-achievements-container">
          <u><h3 className="aboutme-heading">Achievements and Certifications</h3></u>
          {
            cardItems.map((item) => {
              return(
                <Card style={{ maxWidth: '25em', display: "inline-flex", minHeight: "23em", margin: "5px" }}>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{item.subtitle}</Card.Subtitle>
                    <Card.Text>{item.text}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Link href={item.link} target="_blank" rel="noreferrer noopener">View Certificate</Card.Link>
                  </Card.Footer>
                </Card>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
