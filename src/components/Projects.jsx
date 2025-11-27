import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faFilePdf, faChevronLeft, faChevronRight, faCode, faBrain, faServer, faBook, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import NavHeader from "./NavHeader";
import PageDecorations from "./PageDecorations";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');


  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const cardItems = [{
      image: "TechSupport.webp",
      title: "Tech Support for Older Adults – MS Project",
      date: "Jan 2025 - May 2025",
      tags: ["uxresearch", "aiml"],
      text: "Led a mixed-methods research study on older adults' preferences for video-based tech support vs. traditional methods, and developed an automated system that generates image-based step-by-step guides by using a foundational action model and extracting UI elements from YouTube tutorials using OpenCV. The tool improves accessibility by converting video content into a more user-friendly format.",
      github: "https://github.com/VibhaNavale/CS597-Automated-Visual-Tech-Support",
      report: "CS597Report.pdf",
      technologies: "HCI, UX Research, OS-ATLAS, OpenCV, React, FastAPI"
    },
    {
      image: "BYOD.jpg",
      title: "How BYOD Sessions Support Ongoing Digital Engagement in Older Adults",
      date: "Apr 2025",
      tags: ["publication"],
      text: "Analyzed recordings from 13 workshops with 83 older adults to study how spatial learning, instruction methods, and motivation shaped digital engagement. Applied inductive and deductive codes in a structured qualitative analysis and co-authored a paper on design implications for onboarding and education systems, focusing on sociomaterial factors, privacy, and user goals.",
      paper: "",
      technologies: "HCI, Qualitative Analysis",
      publicationStatus: "Not yet published. Submitted to ACM ASSETS 2025."
    },
    {
      image: "MindBridge.jpg",
      title: "MindBridge",
      date: "Sep 2024 - Dec 2024",
      tags: ["uxresearch"],
      text: "Led user interviews and usability testing for a mental-health intake platform, synthesizing insights into prioritized requirements and accessibility heuristics. Built a working React prototype that captured the proposed flows and provided the course team with implementation notes for further iteration.",
      github: "https://github.com/VibhaNavale/MindBridge",
      website: "https://mindbridge.netlify.app/",
      technologies: "HCI Research, Interview Synthesis, Figma, React"
    },
    {
      image: "LLM.jpg",
      title: "LLM Training & Deployment on AWS",
      date: "Sep 2024 - Nov 2024",
      tags: ["aiml"],
      text: "Developed LLM pipelines on AWS using Hadoop for tokenization and Spark for training. Created REST APIs with Akka HTTP and deployed the microservice with Docker on EC2 and Lambda, exploring scalable inference with Ollama.",
      github: "https://github.com/VibhaNavale/CS-441-HW3",
      technologies: "Scala, Hadoop, Spark, EC2, Lambda, EMR, Akka HTTP, Ollama"
    },
    {
      image: "FindYourRoof.jpg",
      title: "Find Your Roof",
      date: "Jan 2024 - Apr 2024",
      tags: ["fullstack"],
      text: "Built a full-stack web application using React, Next.js, and Supabase to help unhoused individuals in Chicago find shelters, affordable rentals, and job opportunities. Focused on accessibility and user needs to support real-world impact.",
      github: "https://github.com/VibhaNavale/Find-Your-Roof",
      website: "https://findyourroof.netlify.app/",
      technologies: "React, Next.js, Supabase, TypeScript, Tailwind CSS"
    },
    {
      image: "SocialMediaBuzz.jpeg",
      title: "Social Media Buzz Prediction",
      date: "Apr 2024",
      tags: ["aiml"],
      text: "Utilizing UCI's dataset, this ML project predicts social media buzz across Twitter and Tom's Hardware forum. Using classification and regression models, it identifies the most accurate predictor for buzz events on these platforms.",
      github: "https://github.com/Lakuna/CS-412-Final-Project",
      technologies: "Machine Learning, Classification, Regression"
    },
    {
      image: "EyeTracking.jpg",
      title: "Design & Implementation of Eye Movement-based PIN Authentication",
      date: "Aug 2020 - July 2021",
      tags: ["aiml"],
      text: "This project helps increase security by providing a double-layer protection – face detection + entering and identifying gaze-based PINs using a web camera through real-time eye detection and tracking.",
      github: "https://github.com/VibhaNavale/Eye-Movement-based-PIN-Authentication",
      report: "EyeTracking.pdf",
      paper: "https://www.ijrti.org/papers/IJRTI2210049.pdf",
      technologies: "OpenCV, Computer Vision, Face Detection, Eye Tracking"
    },
    {
      image: "BreastCancerPrediction.jpeg",
      title: "Breast Cancer Prediction",
      date: "Nov 2020 - Jan 2021",
      tags: ["aiml"],
      text: "This Machine Learning project investigates various ML algorithms that are used to train the models and determine if the breast cancer is benign or malignant. The dataset used is taken from Kaggle – Wisconsin breast cancer dataset.",
      github: "https://github.com/VibhaNavale/Breast-Cancer-Prediction",
      report: "BreastCancerPrediction.pdf",
      technologies: "Machine Learning, Python, Scikit-learn"
    },
    {
      image: "ELibrary.png",
      title: "E-library website",
      date: "Nov 2020 - Jan 2021",
      tags: ["fullstack"],
      text: "This web application (called 'Bookworm') is developed using HTML, CSS, and JS, and runs on XAMPP. This website allows users to log into it and read books for free. The information about each book is also displayed on their respective cards.",
      github: "https://github.com/VibhaNavale/E-Library",
      report: "E-Library.pdf",
      technologies: "HTML, CSS, JavaScript, XAMPP"
    },
    {
      image: "FaceRecognition.jpeg",
      title: "Face recognition system using Python (OpenCV)",
      date: "July 2019 - Aug 2019",
      tags: ["aiml"],
      text: "This project allows users to use the face unlock feature to log into the web application & access previous years' question papers. The aim was to create a secure application for professors to access the question papers pool.",
      github: "https://github.com/VibhaNavale/Face-Recognition",
      technologies: "Python, OpenCV, Face Recognition"
    },
    {
      image: "EAuction.png",
      title: "E-Auction System",
      date: "Nov 2019 - Dec 2019",
      tags: ["fullstack"],
      text: "A web application made using HTML5, CSS, PHP, and MySQL. This project allows users to either sell or place bids on a product. It has an admin login as well.",
      github: "https://github.com/VibhaNavale/EAuction-System",
      report: "E-Auction.pdf",
      technologies: "HTML5, CSS, PHP, MySQL"
    }]

  const categories = [
    { id: 'all', name: 'All', icon: faCode },
    { id: 'fullstack', name: 'Full-Stack', icon: faServer },
    { id: 'uxresearch', name: 'UX Research/HCI', icon: faUserGroup },
    { id: 'aiml', name: 'AI/ML', icon: faBrain },
    { id: 'publication', name: 'Publications', icon: faBook }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? cardItems 
    : cardItems.filter(item => item.tags && item.tags.includes(selectedCategory));

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentIndex(0);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === filteredItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? filteredItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="projects-page">
      <NavHeader />
      <PageDecorations />
      <div className="projects-content">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-button ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category.id)}
            >
              <FontAwesomeIcon icon={category.icon} /> {category.name}
            </button>
          ))}
        </div>
        {filteredItems.length > 0 ? (
          <>
            <div className="projects-carousel-container">
              <div className="projects-carousel-wrapper">
                <button 
                  className="carousel-button carousel-button-prev" 
                  onClick={prevSlide}
                  disabled={filteredItems.length === 0}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div className="projects-carousel">
                  <div 
                    className="projects-carousel-track"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    {filteredItems.map((item, index) => {
                      return (
                        <div key={index} className="project-card">
                          <div className="project-image-container">
                            <img 
                              src={require(`../assets/images/${item.image}`)} 
                              alt={item.title}
                              className="project-image"
                            />
                            <div className="project-category-badges">
                              {item.tags && item.tags.map((tag, tagIndex) => {
                                const tagInfo = categories.find(cat => cat.id === tag);
                                return tagInfo ? (
                                  <span key={tagIndex} className="project-category-badge">
                                    {tagInfo.name}
                                  </span>
                                ) : null;
                              })}
                            </div>
                          </div>
                          <div className="project-header">
                            <h3 className="project-title">{item.title}</h3>
                            <p className="project-date">{item.date}</p>
                          </div>
                          <div className="project-body">
                            <p className="project-text">{item.text}</p>
                            {item.publicationStatus && (
                              <p className="project-publication-status">
                                <em>{item.publicationStatus}</em>
                              </p>
                            )}
                            {item.technologies && (
                              <p className="project-technologies">
                                <strong>Technologies:</strong> {item.technologies}
                              </p>
                            )}
                          </div>
                          {(item.github || item.website || item.report || item.paper) && (
                            <div className="project-footer">
                              {item.github && (
                                <a 
                                  href={item.github} 
                                  target="_blank" 
                                  rel="noreferrer noopener" 
                                  className="project-link"
                                >
                                  <FontAwesomeIcon icon={faGithub} /> GitHub
                                </a>
                              )}
                              {item.website && (
                                <a 
                                  href={item.website} 
                                  target="_blank" 
                                  rel="noreferrer noopener" 
                                  className="project-link"
                                >
                                  <FontAwesomeIcon icon={faExternalLinkAlt} /> Website
                                </a>
                              )}
                              {item.report && (
                                <a 
                                  href={require(`../assets/pdfs/${item.report}`)} 
                                  target="_blank" 
                                  rel="noreferrer noopener" 
                                  className="project-link"
                                >
                                  <FontAwesomeIcon icon={faFilePdf} /> Report
                                </a>
                              )}
                              {item.paper && (
                                <a 
                                  href={item.paper} 
                                  target="_blank" 
                                  rel="noreferrer noopener" 
                                  className="project-link"
                                >
                                  <FontAwesomeIcon icon={faFilePdf} /> Paper
                                </a>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <button 
                  className="carousel-button carousel-button-next" 
                  onClick={nextSlide}
                  disabled={filteredItems.length === 0}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
              <div className="carousel-indicators">
                {filteredItems.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
        </>
        ) : (
          <div className="no-projects-message">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
