import React from 'react'
import '../projects/Projects.css'

export default function Projects() {
  return (
    <>
    <div className="projectsContainer">
      <h1>My work</h1>
      <div className="projectsMain">
        <div className="projectsSub">
          <a href="https://github.com/matinadongol/chattpatte">
            <h5>Restaurant website</h5>
            <p>Built on the MERN stack, the e-commerce platform seamlessly integrates features like product browsing, user authentication, and effective order management.</p>
          </a>
        </div>
        <div className="projectsSub">
          <a href="https://github.com/matinadongol/TravelTracker">
            <h5>Travel Tracker App</h5>
            <p>Developed a React Native travel tracker app for planning, tracking, and documenting travels, while also offering real-time weather updates and a currency conversion tool.</p>
          </a>
        </div>
        <div className="projectsSub">
          <a href="https://github.com/matinadongol/news_portal">
            <h5>News Portal</h5>
            <p>News portal that fetches news from an API, includes a login system, enables commenting on articles, and allows users to mark news articles as favorites.</p>
          </a>
        </div>
        <div className="projectsSub">
          <a href="https://github.com/matinadongol/machchapuchreForm">
            <h5>Application Form</h5>
            <p>Created a KYC form with file upload capabilities, managed through MySQL for database operations, and integrated a PHP feature enabling users to download CSV files.</p>
          </a>
        </div>
        <div className="projectsSub">
          <a href="https://github.com/matinadongol/ecommerce">
            <h5>Ecommerce Site</h5>
            <p>Built e-commerce platform using PHP and MySQL, featuring essential functionalities like an add-to-cart feature and CRUD operations for products, banners, and categories.</p>
          </a>
        </div>
        <div className="projectsSub">
          <a href="https://github.com/matinadongol/cowayhome">
            <h5>Commercial Site</h5>
            <p>A responsive website designed for user-friendliness, featuring interactive elements to enhance user experience, developed using JavaScript, CSS, PHP.</p>
          </a>
        </div>
      </div>
    </div>
    </>
  )
}
