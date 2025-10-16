import React from 'react'
import './Home.css'
import proflieimg from '../../../assets/img2.jpg'

const Home = () => {
  return <>
    <div className='home container'>
        <div className='row'>
            <div className="col-6">
                <h1>Hello, I'm Kalaivanan</h1>
                <h3>Web Developer</h3>
               <a href="/resume.docx" download="Kalaivanan resume.docx">
                   <button className='btn'>Download CV</button>
               </a>    
            </div>            
        </div>
        <div className="col-6 profile-pic">
            <img src={proflieimg} alt="" />
        </div>
        
    </div>
    </>
  
}

export default Home