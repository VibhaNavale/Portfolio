import React, {useEffect, useState} from "react";
import NavHeader from "./NavHeader";

export default function Resume() {
  const [resumeType, setResumeType] = useState("software-engineering");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = require("../assets/js/fluid-simulation.js");
    document.body.appendChild(script);
  }, []);

  const getResumePath = () => {
    const resumeMap = {
      "software-engineering": require("../assets/pdfs/SE_Resume.pdf"),
      "frontend": require("../assets/pdfs/Frontend_Resume.pdf"), // Update with actual frontend resume path
      "ux-researcher": require("../assets/pdfs/UXResearch_Resume.pdf") // Update with actual UX researcher resume path
    };
    return resumeMap[resumeType] || resumeMap["software-engineering"];
  };

  return (
    <div>
      <NavHeader />
      <canvas className="fluid-canvas"></canvas>
      <div style={{ position: "absolute", top: "100px", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <select 
          value={resumeType} 
          onChange={(e) => setResumeType(e.target.value)}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "2px solid #333",
            backgroundColor: "white",
            cursor: "pointer",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
          }}
        >
          <option value="software-engineering">Software Engineering</option>
          <option value="frontend">Frontend Developer</option>
          <option value="ux-researcher">UX Researcher</option>
        </select>
      </div>
      <div>
        <object 
          data={getResumePath()} 
          type="application/pdf" 
          style={{ 
            position: "absolute", 
            top: "160px",
            bottom: "0px", 
            right: "0px", 
            width: "100%", 
            height: "calc(100% - 160px)", 
            border: "none", 
            margin: 0, 
            padding: 0, 
            overflow: "hidden" 
          }}
        >
          <p className="text-center bg-light" style={{ marginTop: "55%", padding: "5px" }}>
            Your web browser doesn't have a PDF plugin.
            Instead you can <a href={getResumePath()} target="_blank" rel="noreferrer noopener">click here to
            view/download the PDF file.</a>
          </p>
        </object>
      </div>
    </div>
  );
}
