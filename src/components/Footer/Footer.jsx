import React from 'react'
import EmailBox from '../EmailBox/EmailBox'
import './Footer.css'

const Footer = () => {
  return (
    <div className="f-wrapper">
        <div className="container">
            <div className="f-container">
                {/* <span className="title">Get Funded Today!</span> */}
                <EmailBox/>

                <hr/>{/* Horizontal line */}
                <div className="f-menu">
                    <span>Home</span>
                    <span>Services</span>
                    <span>Portfolio</span>
                    <span>Details</span>
                    <span>Contact Us</span>
                    
                </div>

                <hr />

                <span className="text">Made with ❤️ by Artilino</span>
            </div>
        </div>
    </div>
  )
}

export default Footer
