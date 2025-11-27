import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faComputer, faMobilePhone, faDatabase, faTools, faLineChart, faTrophy, faUser } from "@fortawesome/free-solid-svg-icons";
import NavHeader from "./NavHeader";

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    const script = document.createElement("script");
    script.src = require("../assets/js/fluid-simulation.js");
    document.body.appendChild(script);
  }, []);

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
    <div className="aboutme-page">
      <NavHeader />
      <canvas className="fluid-canvas"></canvas>
      <div className="aboutme-content">
        <div className="aboutme-tabs">
          <button 
            className={`tab-button ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            <FontAwesomeIcon icon={faUser} /> About
          </button>
          <button 
            className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            <FontAwesomeIcon icon={faComputer} /> Experience
          </button>
          <button 
            className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <FontAwesomeIcon icon={faGraduationCap} /> Education
          </button>
          <button 
            className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            <FontAwesomeIcon icon={faTools} /> Skills
          </button>
          <button 
            className={`tab-button ${activeTab === 'achievements' ? 'active' : ''}`}
            onClick={() => setActiveTab('achievements')}
          >
            <FontAwesomeIcon icon={faTrophy} /> Achievements
          </button>
        </div>

        <div className="aboutme-panel">
          {activeTab === 'about' && (
            <div className="tab-content">
              <h2 className="content-title">About Me</h2>
              <div className="about-text">
                <p>
                  I'm <strong>Vibha</strong>, an MS in Computer Science student at the University of Illinois at Chicago. 
                  Originally from Bangalore, India, now based in Chicago, IL.
                </p>
                <p>
                  Prior to graduate studies, I worked as a Software Engineer at Cimpress for over 2 years. 
                  I hold a Bachelor's degree in Information Science and Engineering and have experience with 
                  React, Node.js, PostgreSQL, and other modern technologies.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="tab-content">
              <h2 className="content-title">Experience</h2>
              <div className="experience-list">
                <div className="exp-item">
                  <FontAwesomeIcon icon={faComputer} className="exp-icon" />
                  <div className="exp-details">
                    <h3>Software Engineer</h3>
                    <p className="exp-company">Cimpress</p>
                    <p className="exp-meta">Bangalore, India | Remote • Aug 2021 - Dec 2023</p>
                  </div>
                </div>
                <div className="exp-item">
                  <FontAwesomeIcon icon={faMobilePhone} className="exp-icon" />
                  <div className="exp-details">
                    <h3>Android App Developer Intern</h3>
                    <p className="exp-company">NS Jain Constructions</p>
                    <p className="exp-meta">Mangalore, India | Remote • Jun 2020 - Jul 2020</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="tab-content">
              <h2 className="content-title">Education</h2>
              <div className="education-list">
                <div className="edu-item">
                  <FontAwesomeIcon icon={faGraduationCap} className="edu-icon" />
                  <div className="edu-details">
                    <h3>Master of Science in Computer Science</h3>
                    <p className="edu-school">University of Illinois at Chicago</p>
                    <p className="edu-meta">Chicago, IL • Jan 2024 - Expected Dec 2025</p>
                    <p className="edu-gpa">GPA: 4.00/4.00</p>
                  </div>
                </div>
                <div className="edu-item">
                  <FontAwesomeIcon icon={faGraduationCap} className="edu-icon" />
                  <div className="edu-details">
                    <h3>Bachelor of Engineering in Information Science</h3>
                    <p className="edu-school">RNS Institute of Technology</p>
                    <p className="edu-meta">Bangalore, India • 2017 - 2021</p>
                    <p className="edu-gpa">GPA: 9.08/10 | VTU Affiliated</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="tab-content">
              <h2 className="content-title">Skills</h2>
              <div className="skills-grid">
                <div className="skill-item">
                  <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
                  <h3>Languages & Databases</h3>
                  <p>TS/JS, PostgreSQL, GraphQL, HTML, CSS, Java, Python</p>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faTools} className="skill-icon" />
                  <h3>Tools & Technologies</h3>
                  <p>Git, Docker, AWS, Jira, DBeaver, Supabase, Miro, Cortex</p>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faLineChart} className="skill-icon" />
                  <h3>Frameworks & Libraries</h3>
                  <p>Next.js, React, Node.js, Angular, Jest, Mocha</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="tab-content achievements-content">
              <h2 className="content-title">Achievements & Certifications</h2>
              <div className="achievements-list">
                {cardItems.map((item, index) => (
                  <div key={index} className="achievement-item">
                    <h3>{item.title}</h3>
                    <p className="achievement-date">{item.subtitle}</p>
                    <p className="achievement-desc">{item.text}</p>
                    <a href={item.link} target="_blank" rel="noreferrer noopener" className="achievement-link">
                      View Certificate →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
