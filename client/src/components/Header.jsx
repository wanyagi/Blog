import React, { useState, useEffect } from 'react'; 
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteToken } from '../redux/deleteTokenSlice'; 
import { logOut } from '../redux/authenticationSlice';
import { IoClose } from "react-icons/io5"; 
import { LuMenu } from "react-icons/lu"; 
import Logo from '../assets/Logo.png'; 

const Header = () => {

    const [ isMobileMenuOpened, setIsMobileMenuOpened ] = useState(false); 
    const [ userRole, setUserRole ] = useState('');
    
    const dispatch = useDispatch(); 
    const navigate = useNavigate(); 
    const isLogged = useSelector((state) => state.userAuthentication.loggedIn);

    const handleLogout = () => {
      dispatch(deleteToken())
      .unwrap()
      .then(() => {localStorage.clear(); dispatch(logOut()); navigate('/')})
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

    useEffect(() => {
      const role = localStorage.getItem('users_role'); 
      if (role) {
        console.log(role.toLowerCase().trim());
        setUserRole(role.toLowerCase().trim()); 
      }
    }, []);  

    const isAdmin = userRole === 'admin'; 


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
      {title: isLogged ? "Log out" : "Login", link: isLogged ? "" : "/login"}, 
  ].filter(Boolean);

    const mobileMenuItems = [  
      {title: "Accueil", link: "/"},
      {title: "Croissance" , link: "/category/croissance"}, 
      {title: "Bien-être" , link: "/category/bien-être"},
      {title: "Lifestyle" , link: "/category/lifestyle"},
      {title: "Cuisine" , link: "/category/cuisine"},
      {title: "A propos", link: "/apropos"},
      {title: isLogged ? "Log out" : "Login", link: isLogged ? "" : "/login"}, 
    ];

  return (
    <header>
       <nav>
            <Link to="/" >
              <img src={Logo} alt="logo" className="logo--btn" />
            </Link>
            <ul className="desktop--menu">
                {menuItems.map((menuItem, index) => <li key={index}><NavLink to={menuItem.link} onClick={() => handleClick(menuItem)} activeClassName='activated'>{menuItem.title}</NavLink></li>)}
            </ul>
            { isMobileMenuOpened ? <IoClose size={25} className="mobile-menu-btn" onClick={handleMobileMenu} style={{'color': '#fcfcf7'}} /> : <LuMenu size={25}  className="mobile-menu-btn" onClick={handleMobileMenu}/>}
            { isMobileMenuOpened ? <ul className="mobile--menu">
              {mobileMenuItems.map((menuItem) => <li><NavLink to={menuItem.link} onClick={() => handleClick(menuItem)} >{menuItem.title}</NavLink></li>)}
            </ul> : ""}
       </nav>
    </header>
  )
}; 

export default Header; 