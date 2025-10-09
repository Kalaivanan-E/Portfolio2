import React from 'react'
import './Skills.css'
import HTML from '../../assets/HTML3.png'
import CSS from '../../assets/CSS1.png'
import JS from '../../assets/JS1.png'
import Reactjs from '../../assets/React.jpg'
import mysql from '../../assets/Mysql.jpg'
import MongoDB from '../../assets/mongodb.png'
import Github from '../../assets/github.jpg'
import Nodejs from '../../assets/nodejs.png'
import Bootstrap from '../../assets/Bootstrap-removebg-preview.png'

const Skills = () => {
  return <>
    <div className="skills">
      <div className="gallery">
        <img src={HTML} alt="" />
        <img src={CSS} alt="" />
        <img src={Bootstrap} alt="" />
        <img src={JS} alt="" />
        <img src={Reactjs} alt="" />
        <img src={Github} alt="" />
      </div>
      <div className='gallery1'>
        
        <img src={mysql} alt="" />        
        <img src={MongoDB} alt="" />
        <img src={Nodejs} alt="" />
      </div>
    </div>
  </>
}

export default Skills