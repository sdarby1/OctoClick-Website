import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="margin-container">
       <div className="boxed-container">
          <div className="footer-content">
            <p>© 2024 OctoClick Productions | All rights reserved.</p>
            <div className="footer-links-cr">
              <Link className='footer-link'>Datenschutz</Link>
              <Link to="impressum" className='footer-link'>Impressum</Link>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Footer