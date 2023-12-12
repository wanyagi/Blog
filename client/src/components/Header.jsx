import React, { useState } from 'react'; 
import { Link, NavLink } from 'react-router-dom'; 
import { IoClose } from "react-icons/io5"; 
import { LuMenu } from "react-icons/lu"; 
import Logo from '../assets/Logo.png'; 

const Header = () => {

    const [ isMobileMenuOpened, setIsMobileMenuOpened ] = useState(false); 

    const handleMobileMenu = () => {
        setIsMobileMenuOpened(!isMobileMenuOpened)
    }; 

    const menuItems = [{title: "Articles", link: "/article"}, {title: "Accueil", link: "/"}, {title: "A propos", link: "/apropos"}, {title: "Login", link: "/login"}];

  return (
    <header>
       <nav className="navbar" id="glass">
            <Link to="/" >
              <img src={Logo} alt="logo" className="logo--btn" />
            </Link>
            <ul className="desktop--menu">
                {menuItems.map((menuItem) => <li><NavLink to={menuItem.link}>{menuItem.title}</NavLink></li>)}
            </ul>
            { isMobileMenuOpened ? <IoClose size={25} className="mobile-menu-btn" onClick={handleMobileMenu} /> : <LuMenu size={25}  className="mobile-menu-btn" onClick={handleMobileMenu}/>}
            { isMobileMenuOpened ? <ul className="mobile--menu">
                {menuItems.map((menuItem) => <li><NavLink to={menuItem.link}>{menuItem.title}</NavLink></li>)}
            </ul> : ""}
       </nav>
    </header>
  )
}; 

export default Header; 