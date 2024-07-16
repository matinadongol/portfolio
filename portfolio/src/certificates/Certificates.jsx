import React from 'react'
import "../certificates/Certificates.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons'

export default function Certificates() {
  return (
    <>
      <div className="certificatesContainer">
        <h1>Certificates</h1>
        <div className="certificatesSubDiv">
          <div className="certificateLeft">
            <FontAwesomeIcon icon={faAward} className="awardIcon" />
          </div>
          <div className="certificateName">
            <a href='https://learn.mongodb.com/c/pM8c7714TFCfeb46eZph0A'>
            <h3>MongoDB Node.js Developer Path</h3>
          </a>
          </div>
        </div>
        <div className="certificatesSubDiv">
          <div className="certificateLeft">
            <FontAwesomeIcon icon={faAward} className="awardIcon"/>
          </div>
          <div className="certificateName">
            <a href='https://www.udemy.com/certificate/UC-bbc38682-29ea-48fd-8d70-903c09af6ce2/'>
            <h3>Unit Testing Swift Mobile App </h3>
          </a>
          </div>
        </div>
      </div>
    </>
  )
}