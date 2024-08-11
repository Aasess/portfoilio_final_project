// Ashish Neupane

import React from 'react'
import '../css/Home.css'
import { profiles } from '../constant/profie'

const Home = ({ selectedUser }) => {
  const profile = profiles[selectedUser ?? 'ashish']

  return (
    <div className="home-container">
      <div className="profile-pic-container">
        <img
          src={profile.imageUrl}
          alt={profile.name}
          className="profile-pic"
        />
      </div>
      <div className="profile-info">
        <h1>{profile.name}</h1>
        <p>{profile.title}</p>
        <div className="social-links">
          {profile.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`fab fa-${link.platform}`}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
