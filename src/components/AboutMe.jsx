import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faComputer, faDatabase, faTools, faLineChart, faTrophy, faUser } from "@fortawesome/free-solid-svg-icons";
import NavHeader from "./NavHeader";
import PageDecorations from "./PageDecorations";

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState('about');

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
      <PageDecorations />
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
                  I'm <strong>Vibha</strong>, a Master of Science in Computer Science student at the University of Illinois at Chicago (GPA: 4.00). 
                  Originally from Bangalore, India, now based in Chicago, IL.
                </p>
                <p>
                  Currently, I serve as a <strong>Graduate Teaching Assistant</strong> at UIC, supporting Software Engineering courses and helping students 
                  navigate complex technical concepts. Prior to graduate studies, I worked as a <strong>Software Engineer</strong> at Cimpress for over 2 years, 
                  where I developed REST microservices, optimized API performance, and worked extensively with AWS cloud infrastructure.
                </p>
                <p>
                  My passion lies in <strong>Software Engineering</strong> and <strong>HCI/UX Research</strong>. I love building robust systems that solve real problems 
                  and exploring how we can make technology more accessible and intuitive for everyone. As AI becomes increasingly integrated into our digital world, 
                  I'm curious about its applications in enhancing user experiences, and I'm always excited to explore new technologies and opportunities that come my way.
                </p>
                <p>
                  I recently completed my master's project on <em>automated visual tech support systems</em>, which combined my interests in software engineering 
                  and HCI to explore innovative ways of making technical guidance more accessible. It was a fascinating journey that reinforced my belief 
                  that great technology should be both powerful and approachable.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="tab-content">
              <h2 className="content-title">Experience</h2>
              <div className="experience-list">
                <div className="exp-item">
                  <FontAwesomeIcon icon={faGraduationCap} className="exp-icon" />
                  <div className="exp-details">
                    <h3>Graduate Teaching Assistant</h3>
                    <p className="exp-company">University of Illinois Chicago</p>
                    <p className="exp-meta">Chicago, IL | On-site • Aug 2024 - Present</p>
                    <ul className="exp-bullets">
                      <li>Grade Software Engineering assignments, projects, and exams, providing timely feedback on implementation quality, testing depth, and documentation</li>
                      <li>Facilitate coding project demos, guiding students through key technical concepts and development processes</li>
                      <li>Support students individually and in groups with coding, project requirements, and software engineering principles, including Git branching, CI checks, and code review etiquette</li>
                    </ul>
                  </div>
                </div>
                <div className="exp-item">
                  <FontAwesomeIcon icon={faComputer} className="exp-icon" />
                  <div className="exp-details">
                    <h3>Software Engineer</h3>
                    <p className="exp-company">Cimpress</p>
                    <p className="exp-meta">Bengaluru, India | Remote • Aug 2021 - Dec 2023</p>
                    <ul className="exp-bullets">
                      <li>Developed and implemented REST containerized microservices using Node.js and Express for a logistics product, optimizing shipping processes and saving up to $100K annually</li>
                      <li>Enhanced API performance by implementing caching mechanisms, reducing response time by 40% (from 900ms to 530ms) and lowering costs associated with third-party API calls</li>
                      <li>Utilized AWS services (ECS, EC2, Lambda, API Gateway, Secrets Manager) and deployed infrastructure via CloudFormation to maintain IaC</li>
                      <li>Migrated logs from Sumo Logic to New Relic, cutting logging and monitoring costs by 75% and consolidating monitoring capabilities into a single platform</li>
                      <li>Set up GitLab Runner and CI/CD pipelines and migrated services to ECS, improving deployment efficiency and reducing operational overhead</li>
                    </ul>
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
                    <p className="edu-gpa">GPA: 9.08/10</p>
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
                  <p>JavaScript/TypeScript, Java, Python, SQL, PostgreSQL</p>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faLineChart} className="skill-icon" />
                  <h3>Frontend & Backend</h3>
                  <p>React, Next.js, AngularJS, Node.js, Express, REST APIs</p>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faTools} className="skill-icon" />
                  <h3>Cloud, DevOps & Tools</h3>
                  <p>Git, AWS, Docker, CI/CD, Jira, Supabase, Postman</p>
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
