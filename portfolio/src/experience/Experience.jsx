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
                <p>Developed and debugged software features using Objective-C for a cybersecurity application, implemented continuous integration with Jenkins, and managed dependencies using Gradle. Actively participated in Agile/Scrum ceremonies and sprint planning.</p>
            </div>
        </div>
        <div className="container right techtronix">
            <div className="content">
                <h3>Full-Stack Developer</h3>
                <h5>Techtronix Nepal <span>(Feb 2021 - Nov 2022)</span></h5>
                <p>Contributed to the development of an e-commerce mobile app using React Native and implemented features for a content management web application with MongoDB, Express.js, React.js, and Node.js. Designed and integrated RESTful APIs, Implemented state management with Redux and Context API, integrated third-party libraries.</p>
            </div>
        </div>
        <div className="container left pathway">
            <div className="content">
                <h3>Web Developer</h3>
                <h5>Pathway Technologies <span>(Nov 2019 - Jan 2021)</span></h5>
                <p>Assisted in developing and maintaining e-commerce web applications with PHP and MySQL. Created responsive and interactive web pages using Bootstrap and jQuery. Designed user interfaces and prototypes using Adobe XD to facilitate seamless integration into responsive web and mobile applications. </p>
            </div>
        </div>
    </div>
      </div>
    </>
  )
}

 