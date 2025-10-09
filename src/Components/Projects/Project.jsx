import React from 'react'
import projectpic1 from '../../assets/projectpic1.png'
import projectpic2 from '../../assets/projectpic2.png'
import projectpic3 from '../../assets/projectpic3.png'
import "./Project.css"

const Projects = () => {
  return <>
    <section class="projects" id="my projects">
    <div class="projects-grid">
       
        <div class="project">
            <img src={projectpic1} alt="Portfolio"/>
            <div class="overlay">
                <h3>Intrusion Detection System</h3>
                <p>An Intrusion Detection System (IDS) monitors network or system activity to detect malicious behavior or policy violations.</p>
                <a href="https://github.com/Kalaivanan-E/Intrusion-Detection-System" target="_blank"><button className='btn1'>View Project</button></a>
            </div>
        </div>
    

        <div class="project">
            <img src={projectpic2} alt="E-commerce"/>
            <div class="overlay">
                <h3>Speech to Text Converter</h3>
                <p>A Speech-to-Text Converter transcribes spoken words into written text using voice recognition technology.</p>
                <a href="https://github.com/Kalaivanan-E/js-practice/tree/main/Project/speech%20to%20text" target="_blank"><button className='btn1'>View Project</button></a>
            </div>
        </div>
        <div class="project">
            <img src={projectpic3} alt="Explore Southern India"/>
            <div class="overlay">
               <h3>Education Landing Page</h3>
                <p>An Education Landing Page is a web page designed to showcase educational content or services and capture user interest or sign-ups.</p>
                <a href="https://github.com/Kalaivanan-E/js-practice/tree/main/Project/responsive%20websites/edusityww" target="_blank"><button className='btn1'>View Project</button></a>
            </div>
        </div>

    
        {/* <div class="project">
            <img src={Book} alt="Doctor Appointment"/>
            <div class="overlay">
                <h3>BookSky</h3>
                <p>BookSky is a web-based platform where users can explore, search, and read a wide variety of books online in a user-friendly interface.</p>
                <a href="https://github.com/Guru-Prasath-M/BookSky-JS" target="_blank"><button className='btn1'>View Project</button></a>
            </div>
        </div> */}
    </div>
</section>
  </>
}

export default Projects;