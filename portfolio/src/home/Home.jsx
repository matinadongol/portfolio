import React from 'react'
import '../home/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <>
      <div className="homeContainer">
        <div className="homeIntro">
          <div className="homeRole">
            <h2>Hi! I'm</h2>
            <span>FULL-STACK DEVELOPER</span>
          </div>
          <div className="homeRole">
            <h1>Matina Dongol.</h1>
          </div>
        </div>
        <div className="homeBottomSection">
          <a href="portfolio//Matina_Dongol_Resume.pdf" download>
            <button>Download CV&nbsp;&nbsp;&gt;</button>
          </a>
          <hr/>
          <div className="socialIconSection">
          <a href="https://github.com/matinadongol" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/matina-dongol-6619191b6/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin}/>
          </a>
          <a href="mailto:dongolmt@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope}/>
          </a>
          </div>
        </div>
      </div>
    </>
  )
}