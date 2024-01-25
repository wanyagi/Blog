import React from 'react'; 
import { NavLink } from 'react-router-dom';

const Footer = () => {

  const footerItems = [
    {title: "Instagram", link: "https://www.instagram.com/sayfemums/?igsh=ODA1NTc5OTg5Nw%3D%3D&utm_source=qr",},
    {title: "Tiktok", link: "https://www.tiktok.com/@sayfemums?_t=8im7Gqd16H2&_r=1",},
    {title: "Contact", link: "/contact", },
    {title: "CGV", link: "/cgv", },
  ]; 

  return (
    <footer className="footer">
      <ul className="footer--list">
        {footerItems.map((footerItem, index) => <li key={index}><NavLink to={footerItem.link}>{footerItem.title}</NavLink></li>)}
      </ul>
    </footer>
  )
}; 

export default Footer; 
