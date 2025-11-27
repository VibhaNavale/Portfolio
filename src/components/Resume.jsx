import React, {useState} from "react";
import NavHeader from "./NavHeader";
import PageDecorations from "./PageDecorations";

export default function Resume() {
  const [resumeType, setResumeType] = useState("software-engineering");

  const getResumePath = () => {
    const resumeMap = {
      "software-engineering": require("../assets/pdfs/SE_Resume.pdf"),
      "frontend": require("../assets/pdfs/Frontend_Resume.pdf"),
      "ux-researcher": require("../assets/pdfs/UXResearch_Resume.pdf")
    };
    return resumeMap[resumeType] || resumeMap["software-engineering"];
  };

  const getResumeLabel = () => {
    const labelMap = {
      "software-engineering": "Software Engineering",
      "frontend": "Frontend Developer",
      "ux-researcher": "UX Researcher"
    };
    return labelMap[resumeType] || labelMap["software-engineering"];
  };

  return (
    <div className="resume-page">
      <NavHeader />
      <PageDecorations />
      <div className="resume-container">
        <div className="resume-header">
          <h2 className="resume-title">Resume</h2>
          <div className="resume-selector">
            <label htmlFor="resume-select" className="resume-label">
              Resume Type:
            </label>
            <select 
              id="resume-select"
              value={resumeType} 
              onChange={(e) => setResumeType(e.target.value)}
              className="resume-select"
            >
              <option value="software-engineering">Software Engineering</option>
              <option value="frontend">Frontend Developer</option>
              <option value="ux-researcher">UX Researcher</option>
            </select>
            <a 
              href={getResumePath()} 
              download={`${getResumeLabel()}_Resume.pdf`}
              className="resume-download-btn"
              target="_blank"
              rel="noreferrer noopener"
            >
              Download PDF
            </a>
          </div>
        </div>
        <div className="resume-viewer">
          <object 
            data={getResumePath()} 
            type="application/pdf" 
            className="resume-pdf"
          >
            <div className="resume-fallback">
              <p>Your browser doesn't support PDF viewing.</p>
              <a 
                href={getResumePath()} 
                target="_blank" 
                rel="noreferrer noopener"
                className="resume-fallback-link"
              >
                Click here to view/download the PDF file
              </a>
            </div>
          </object>
        </div>
      </div>
    </div>
  );
}
