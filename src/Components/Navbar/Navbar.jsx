import React from 'react'
import { useEffect, useState } from 'react'

import './Navbar.css'
import { Link } from 'react-scroll'


const Navbar = () => {
  const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[])
  return <>
      <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <h2 className='logo'>Kalaivan<span>an</span></h2>
        <ul>
            <li><Link to='home' smooth={true} offset={0} duration={500}> Home</Link> </li>
            <li><Link to='about' smooth={true} offset={-260} duration={500} >About</Link></li>
            <li><Link to='skills' smooth={true} offset={-260} duration={500} >Skills</Link></li>
            <li>Projects</li>
            <li><button className='btn'>Contact me</button></li>
        </ul>

      </nav>
      </>
}

export default Navbar