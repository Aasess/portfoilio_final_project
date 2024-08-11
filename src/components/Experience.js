// Bipin Gurung
import React from 'react'
import '../css/Experience.css'
import { experiences } from '../constant/experience'

const Experience = ({ selectedUser }) => {
  const experienceList = experiences[selectedUser ?? 'ashish']

  return (
    <div className="experience-container">
      <div className="experience-title">
        <h3>{experienceList.totalExperience}</h3>
      </div>

      {experienceList.details.map((item, index) => (
        <div key={index} className="experience-item">
          <h3 className="company-name">{item.companyName}</h3>
          {item.positions.map((position, posIndex) => (
            <React.Fragment key={posIndex}>
              <div className="position">
                <span className="date">{position.date}</span>
                <span className="role">{position.role}</span>
              </div>
              <ul className="responsibilities">
                {position.responsibilities.map((responsibility, resIndex) => (
                  <li key={resIndex}>{responsibility}</li>
                ))}
              </ul>
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Experience
