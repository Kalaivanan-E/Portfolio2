import React from 'react'
import './Skills.css'
import HTML from '../../assets/HTML.jpg'
import CSS from '../../assets/CSS.jpg'
import JS from '../../assets/JS.jpg'
import Reactjs from '../../assets/React.jpg'
import mysql from '../../assets/Mysql.jpg'
import MongoDB from '../../assets/MongoDB.jpg'

const Skills = () => {
  return <>
    <div className="skills">
      <div className="gallery">
        <img src={HTML} alt="" />
        <img src={CSS} alt="" />
        <img src={JS} alt="" />
        <img src={Reactjs} alt="" />
        <img src={mysql} alt="" />
        <img src={MongoDB} alt="" />
        
      </div>
    </div>
  </>
}

export default Skills