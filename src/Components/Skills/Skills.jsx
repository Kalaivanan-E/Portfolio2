import React from 'react'
import './Skills.css'
import HTML from '../../assets/HTML.jpg'
import CSS from '../../assets/CSS.jpg'
import JS from '../../assets/JS.jpg'
import Reactjs from '../../assets/React.jpg'
import mysql from '../../assets/Mysql.jpg'
import MongoDB from '../../assets/MongoDB.jpg'
import Github from '../../assets/github.jpg'
import Nodejs from '../../assets/node js.jpg'
import Bootstrap from '../../assets/Bootstrap.jpg'

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