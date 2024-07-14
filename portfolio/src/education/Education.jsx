import React from "react";
import "../education/Education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

function Education() {
  return (
    <>
      <div className="educationContainer">
        <h1>Education</h1>
        <div className="educationSubDiv">
          <div className="educationLeft">
            <FontAwesomeIcon icon={faGraduationCap} className="graduationCap" />
          </div>
          <div className="educationDetails">
            <h3>Post-graduate certificate in Mobile Application Development</h3>
            <p>Fanshawe College, London, Ontario</p>
          </div>
        </div>
        <div className="educationSubDiv">
          <div className="educationLeft">
            <FontAwesomeIcon icon={faGraduationCap} className="graduationCap" />
          </div>
          <div className="educationDetails">
            <h3>Bachelor in Information Management</h3>
            <p>Tribhuvan University, kathmandu, Nepal</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
