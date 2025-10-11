import React from 'react'
import './Contact.css'

const Contact = () => {
  return <>
    <div className="contact">
        <div className="contact-col">
            <form>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                <label>Write your message here</label>
                <textarea name="message" rows='6' placeholder='Enter your message' required></textarea>
                <button type='sumbit' className='btn dark-btn'>Submit now</button>
            </form>
        </div>
    </div>
  </>
}

export default Contact