// Sandeep Kaur

import React from 'react'
import Skills from './Skills'
import '../css/About.css'
import { aboutContents } from '../constant/about'

const About = ({ selectedUser }) => {
  const aboutContent = aboutContents[selectedUser ?? 'ashish']

  // function to bold or highlight important text in about content
  const renderText = (textArray) => {
    return textArray.map((part, index) =>
      typeof part === 'string' ? (
        part
      ) : (
        <span key={index} className="highlight">
          {part.highlight}
        </span>
      )
    )
  }

  return (
    <div id="about" className="about-container">
      <p className="about-text">
        {renderText(aboutContent.firstParagraph.text)}
      </p>
      <p className="about-text-second">
        {renderText(aboutContent.secondParagraph.text)}
      </p>

      <div className="skills">
        <div className="skills-header">
          <h3 className="skills-title">Skills</h3>
          <div className="blink"></div>
        </div>

        <Skills />
      </div>
    </div>
  )
}

export default About
