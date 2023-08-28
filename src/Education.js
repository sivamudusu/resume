import React from 'react'
import "./Education.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp,faLinkedinIn, faSlack } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

function Education() {
  return (
    <div className='end'>
      <div className='contact'>
        <div className='contact-me'>
          <button>contact me</button>
        </div>
        <div className='links'>
        <a href='https://linkedin.com/in/shiva-mudusu-267607118'>
        <div><FontAwesomeIcon icon={faLinkedinIn} /></div>
      </a>
      <a href='mailto:sivamudusu@gmail.com.com'>
        <div><FontAwesomeIcon icon={faEnvelope} /></div>
      </a>
      <a href='https://slack.com'>
        <div><FontAwesomeIcon icon={faSlack} /></div>
      </a>
        </div>
      </div>
    </div>
  )
}

export default Education