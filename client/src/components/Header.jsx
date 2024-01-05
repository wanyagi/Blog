import React, { useState } from 'react'; 
import { Link, NavLink, } from 'react-router-dom'; 
import { IoClose } from "react-icons/io5"; 
import { LuMenu } from "react-icons/lu"; 
import Logo from '../assets/Logo.png'; 

const Header = () => {

    const [ isMobileMenuOpened, setIsMobileMenuOpened ] = useState(false); 


    const handleMobileMenu = () => {
      setIsMobileMenuOpened(!isMobileMenuOpened)
    }; 

    const closeMobileMenu = () => {
      setIsMobileMenuOpened(false)
    }; 


    const handleClick = () => {
      closeMobileMenu(); 
    }; 

    const menuItems = [ 
      {title: "Accueil", link: "/",}, 
      {title: "A propos", link: "/apropos", }, 
      {title: "Post", link: "/article", }, 
  ];

    const mobileMenuItems = [  
      {title: "Accueil", link: "/"},
      {title: "Croissance" , link: "/category/croissance"}, 
      {title: "Bien-être" , link: "/category/bien-être"},
      {title: "Lifestyle" , link: "/category/lifestyle"},
      {title: "Cuisine" , link: "/category/cuisine"},
      {title: "A propos", link: "/apropos"}, 
    ];

  return (
    <header>
       <nav className="navbar" id="glass">
            <Link to="/" >
              <img src={Logo} alt="logo" className="logo--btn" />
            </Link>
            <ul className="desktop--menu">
                {menuItems.map((menuItem) => <li><NavLink to={menuItem.link} onClick={() => handleClick(menuItem)}>{menuItem.title}</NavLink></li>)}
            </ul>
            { isMobileMenuOpened ? <IoClose size={25} className="mobile-menu-btn" onClick={handleMobileMenu} /> : <LuMenu size={25}  className="mobile-menu-btn" onClick={handleMobileMenu}/>}
            { isMobileMenuOpened ? <ul className="mobile--menu">
              {mobileMenuItems.map((menuItem) => <li><NavLink to={menuItem.link} onClick={() => handleClick(menuItem)} >{menuItem.title}</NavLink></li>)}
            </ul> : ""}
       </nav>
    </header>
  )
}; 

export default Header; 