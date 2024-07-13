import React from 'react'
import "../skills/Skills.css"

function Skills() {
  return (
    <>
      <div className="skillsContainer">
        <h1>Technical skills</h1>
        <div className="skillsList">
          <div className="skillsListLeft">
            <h5>ReactJS</h5>
            <h5>REACT Native</h5>
            <h5>Redux</h5>
            <h5>MongoDB</h5>
            <h5>Firebase</h5>
            <h5>Node.js</h5>
            <h5>Express.js</h5>
            <h5>PHP</h5>
          </div>
          <div className="skillsListLeft">
            <h5>Swift</h5>
            <h5>Objective-C</h5>
            <h5>mySQL</h5>
            <h5>Adobe XD</h5>
            <h5>GIT</h5>
            <h5>Jira</h5>
            <h5>Postman</h5>
            <h5>Unit Testing</h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills