import React, {useEffect} from "react";
import NavHeader from "./NavHeader";

export default function Resume() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = require("../assets/js/fluid-simulation.js");
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <NavHeader />
      <canvas className="fluid-canvas"></canvas>
      <div>
        <object data={require("../assets/pdfs/Resume.pdf")} type="application/pdf" style={{ position: "absolute", top: "85px",
          bottom: "0px", right: "0px", width: "100%", height: "87%", border: "none", margin: 0, padding: 0, overflow: "hidden" }}>
          <p className="text-center bg-light" style={{ marginTop: "55%", padding: "5px" }}>Your web browser doesn't have a PDF plugin.
          Instead you can <a href={require("../assets/pdfs/Resume.pdf")} target="_blank" rel="noreferrer noopener">click here to
          view/download the PDF file.</a></p>
        </object>
      </div>
    </div>
  );
}
