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
                <h3>Software Developer</h3>
                <h5>BlackBerry Limited <span>(Jan 2024 - April 2024)</span></h5>
                <p>I efficiently managed project dependencies using Gradle and facilitated public key deployment to Nexus through Jenkins. By leveraging Xcode’s code analysis tools, I improved app performance by 12% and significantly reduced bugs. Additionally, I conducted thorough code reviews to ensure adherence to coding standards, security practices, and overall quality.</p>
            </div>
        </div>
        <div className="container right techtronix">
            <div className="content">
                <h3>Full-Stack Developer</h3>
                <h5>Techtronix Nepal <span>(Feb 2021 - Nov 2022)</span></h5>
                <p>I played a key role in developing an e-commerce mobile app with React Native and enhanced a content management web app using MERN stack, increasing user interaction by 13%. I developed RESTful APIs, reduced issue resolution time by 10% with JIRA, and ensured high code quality through Redux, Context API, and Jest testing.</p>
            </div>
        </div>
        <div className="container left pathway">
            <div className="content">
                <h3>Web Developer</h3>
                <h5>Pathway Technologies <span>(Nov 2019 - Jan 2021)</span></h5>
                <p>I assisted in developing and maintaining e-commerce web applications using PHP and MySQL. I created responsive and interactive web pages with Bootstrap and jQuery, and designed UI/UX prototypes with Adobe XD, reducing development time by 25%. </p>
            </div>
        </div>
    </div>
      </div>
    </>
  )
}

 