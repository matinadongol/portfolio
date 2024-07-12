import React from 'react'
import '../home/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <>
      <div className="homeContainer">
        <h1>Hi, I am <span>Matina Dongol.</span></h1>
        <h3>A MERN Stack Developer.</h3>
        <div className="homeBottomSection">
          <button>Download CV&nbsp;&nbsp;&gt;</button>
          <hr/>
          <div className="socialIconSection">
          <a href="https://www.facebook.com/matina.dongol/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook}/>
          </a>
          <a href="https://www.linkedin.com/in/matina-dongol-6619191b6/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin}/>
          </a>
          <a href="https://www.instagram.com/matimatinaa/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram}/>
          </a>
          </div>
        </div>
      </div>
    </>
  )
}
