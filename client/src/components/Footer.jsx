import React from 'react'; 
import { FaInstagram, FaTiktok } from 'react-icons/fa6'; 
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
            <ul className="footer--list">
                <li>
                  <NavLink to="/cvg">
                    CGV
                  </NavLink>
                </li>
                <li>
                 <NavLink to="/contact">
                    Contact
                 </NavLink>
                </li>
            </ul>

            <div className="icons">
              <NavLink to="https://www.instagram.com/">
                <FaInstagram size={45} />
              </NavLink>
              <NavLink to="https://www.tiktok.com/fr/">
                <FaTiktok size={38} />
              </NavLink>
            </div>
    </footer>
  )
}; 

export default Footer; 
