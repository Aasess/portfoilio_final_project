// Ashish Neupane, Sandeep Kaur

import React from 'react'
import '../css/About.css'

import { FaCss3Alt, FaHtml5, FaSass, FaReact } from 'react-icons/fa'
import {
  SiJquery,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPython,
  SiDjango,
  SiVuedotjs,
  SiTypescript,
} from 'react-icons/si'

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 size={64} color="rgb(94 162 86)" /> },
    { name: 'CSS3', icon: <FaCss3Alt size={64} color="rgb(94 162 86)" /> },
    { name: 'SASS', icon: <FaSass size={64} color="rgb(94 162 86)" /> },
    {
      name: 'Javascript',
      icon: <SiJavascript size={64} color="rgb(94 162 86)" />,
    },
    { name: 'JQuery', icon: <SiJquery size={64} color="rgb(94 162 86)" /> },
    {
      name: 'Typescript',
      icon: <SiTypescript size={64} color="rgb(94 162 86)" />,
    },
    { name: 'React JS', icon: <FaReact size={64} color="rgb(94 162 86)" /> },
    { name: 'Next JS', icon: <SiNextdotjs size={64} color="rgb(94 162 86)" /> },
    { name: 'Vue JS', icon: <SiVuedotjs size={64} color="rgb(94 162 86)" /> },
    { name: 'Node JS', icon: <SiNodedotjs size={64} color="rgb(94 162 86)" /> },
    { name: 'Express', icon: <SiExpress size={64} color="rgb(94 162 86)" /> },
    { name: 'MySQL', icon: <SiMysql size={64} color="rgb(94 162 86)" /> },
    { name: 'MongoDB', icon: <SiMongodb size={64} color="rgb(94 162 86)" /> },
    { name: 'Python', icon: <SiPython size={64} color="rgb(94 162 86)" /> },
    { name: 'Django', icon: <SiDjango size={64} color="rgb(94 162 86)" /> },
  ]

  return (
    <div className="skills-container">
      {skills.map((skill) => (
        <div key={skill.name} className="skill-box">
          <p className="skill-name">{skill.name}</p>
          <div>{skill.icon}</div>
        </div>
      ))}
    </div>
  )
}

export default Skills
