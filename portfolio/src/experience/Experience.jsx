import React from 'react'
import "../experience/Experience.css"

export default function Experience() {
  return (
    <>
      <div className="experienceContainer">
        <h1>Experience</h1>
        <div className="timeline">
        <div className="container left blackberry">
            <div className="content">
                <h3>Software Developer CO-OP</h3>
                <h5>BlackBerry Limited <span>(Jan 2024 - April 2024)</span></h5>
                <p>Designed and implemented software features in Objective-C for a cybersecurity R&D team, contributing creative ideas and ensuring secure mobile app development aligned with industry best practices. Actively participated in Agile/Scrum ceremonies and sprint planning.</p>
            </div>
        </div>
        <div className="container right techtronix">
            <div className="content">
                <h3>REACT Native Developer</h3>
                <h5>Techtronix Nepal <span>(Feb 2021 - Nov 2022)</span></h5>
                <p>Developed and improved an e-commerce mobile app with React Native, adding features like product recommendations and user reviews. Ensured its stability by implementing Redux and Context API for state management, integrating third-party tools, and conducting extensive testing.</p>
            </div>
        </div>
        <div className="container left pathway">
            <div className="content">
                <h3>Full Stack Developer</h3>
                <h5>Pathway Technologies <span>(Nov 2019 - Jan 2021)</span></h5>
                <p>Developed core features for a content management web app using the MERN stack, focusing on efficient content updates. Built RESTful APIs with Node.js and Express.js, integrated with MongoDB. Designed interfaces and prototypes in Adobe XD for seamless integration across web and mobile platforms.</p>
            </div>
        </div>
    </div>
      </div>
    </>
  )
}

 