import React from 'react'
import './Project.css'
import projectpic1 from '../../assets/projectpic1.png'
import projectpic2 from '../../assets/projectpic2.png'
import projectpic3 from '../../assets/projectpic3.png'

const Project = () => {
  return <>
    <div className="projects container">
      <div className="project">
        <img src={projectpic1} alt="" />
        <div className="caption">
          <h3>Intrusion Detection System</h3>
          <p>The Intrusion Detection System (IDS) is a machine learning-based project designed to detect and prevent unauthorized access or malicious activities within a network.
           It analyzes network traffic patterns and identifies potential threats in real time, helping improve overall network security.</p>
        </div>
      </div>
      <div className="project">
        <img src={projectpic2} alt="" />
        <div className="caption">
          <h3>Speech to Text Converter</h3>
          <p>The Speech-to-Text Converter is an interactive web application that converts spoken words into accurate, readable text in real time. It leverages modern browser APIs 
          and JavaScript libraries to provide a seamless speech recognition experience with a simple and responsive user interface.</p>
        </div>
      </div>
      <div className="project">
        <img src={projectpic3} alt="" />
        <div className="caption">
          <h3>Education Landing Page</h3>
          <p>The Education Landing Page is a responsive and modern web application built using React.js. 
          It features a clean design, smooth navigation, and an engaging user interface that showcases educational programs effectively.
           The layout adapts seamlessly to all screen sizes, providing an excellent user experience across devices.</p>
        </div>
      </div>
          
     </div>

  </>
}

export default Project