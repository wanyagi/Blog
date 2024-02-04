import React, { useState, useEffect } from 'react'; 
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteToken } from '../redux/deleteTokenSlice'; 
import { logOut } from '../redux/authenticationSlice';
import { IoClose } from "react-icons/io5"; 
import Logo from '../assets/Logo.png'; 

const Header = () => {

    const [ isMobileMenuOpened, setIsMobileMenuOpened ] = useState(false); 
    const [ desktop, setDesktop] = useState(window.innerWidth); 

    useEffect(() => {

      const handleResize = () => {
        setDesktop(window.innerWidth > 1200); 
      }; 

      window.addEventListener('resize', handleResize);
      
      handleResize();

      return () => window.removeEventListener('resize', handleResize); 

    }, []); 
    
    const dispatch = useDispatch(); 
    const navigate = useNavigate(); 
    const {loggedIn, users_role: userRole} = useSelector((state) => state.userAuthentication);
    const isAdmin = userRole === 'admin'; 

    const handleLogout = () => {
      dispatch(deleteToken())
      .unwrap()
      .then(() => {dispatch(logOut()); navigate('/')})
      .catch((error) => console.error(`logout: ${error}`)); 
    }; 

    const handleClick = (menuItem) => {
      closeMobileMenu(); 
      if (menuItem.title === "Log out") {
        handleLogout(); 
      } else {
        navigate(menuItem.link)
      }
    }; 

    const handleMobileMenu = () => {
      setIsMobileMenuOpened(!isMobileMenuOpened)
    }; 

    const closeMobileMenu = () => {
      setIsMobileMenuOpened(false)
    }; 


    const menuItems = [ 
      isAdmin ? {title: "Post", link: "/article",} : null, 
      {title: "Accueil", link: "/",}, 
      {title: "A propos", link: "/apropos", }, 
      {title: loggedIn ? "Log out" : "Login", link: loggedIn ? "" : "/login"}, 
  ].filter(Boolean);

    const mobileMenuItems = [  
      {title: "Accueil", link: "/"},
      {title: "Croissance" , link: "/category/croissance"}, 
      {title: "Bien-être" , link: "/category/bien-être"},
      {title: "Lifestyle" , link: "/category/lifestyle"},
      {title: "Cuisine" , link: "/category/cuisine"},
      {title: "A propos", link: "/apropos"},
      {title: loggedIn ? "Log out" : "Login", link: loggedIn ? "" : "/login"}, 
    ];

  return (
    <header>
       <nav>
            <Link to="/" >
              { desktop ? <img src={Logo} alt="logo" className="logo--btn" /> : <p className="mobile-menu-btn">SAYFEMUMS</p>}
            </Link>
            <ul className="desktop--menu">
                {menuItems.map((menuItem, index) => <li key={index}><NavLink to={menuItem.link} onClick={() => handleClick(menuItem)} >{menuItem.title}</NavLink></li>)}
            </ul>
            { isMobileMenuOpened ? <IoClose size={25} className="mobile-menu-btn" onClick={handleMobileMenu} style={{'color': '#fcfcf7'}} /> : <p className="mobile-menu-btn" onClick={handleMobileMenu}>MENU</p>}
            {isMobileMenuOpened ? <ul className='mobile--menu'>
              {mobileMenuItems.map((menuItem, index) => <li key={index}><NavLink to={menuItem.link} onClick={() => handleClick(menuItem)} >{menuItem.title}</NavLink></li>)}
              <img src={Logo} alt="logo" className="image--menu" />
            </ul> : ''}
       </nav>
    </header>
  )
}; 

export default Header; 