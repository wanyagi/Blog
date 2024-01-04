import React, { useState, useEffect } from 'react'; 
import { Link, NavLink, useNavigate } from 'react-router-dom'; 
import { useSelector, useDispatch } from 'react-redux';
import { loggout } from '../redux/authenticationSlice';
import { IoClose } from "react-icons/io5"; 
import { LuMenu } from "react-icons/lu"; 
import Logo from '../assets/Logo.png'; 

const Header = () => {

  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 
  const isLogged = useSelector((state) => state.userAuthentication.loggedIn);

    const [ isMobileMenuOpened, setIsMobileMenuOpened ] = useState(false); 
    const [ userRole, setUserRole ] = useState(false); 

    useEffect(() => {
      const role = localStorage.getItem("usersRole"); 
      if (role) {
        console.log(role);
        setUserRole(role); 
      }
    }, []);  

    const isAdmin = userRole === "admin"; 
    console.log(isAdmin); 

    const handleMobileMenu = () => {
      setIsMobileMenuOpened(!isMobileMenuOpened)
    }; 

    const closeMobileMenu = () => {
      setIsMobileMenuOpened(false)
    }; 

    const handleLogout = () => {
      dispatch(loggout()); 
      navigate('/'); 
    }; 

    const handleClick = (menuItem) => {
      closeMobileMenu(); 
      if (menuItem.title === "Log out") {
        handleLogout(); 
      } else {
        navigate(menuItem.link)
      }
    }; 

    const menuItems = [ 
      {title: "Articles", link: "/article", show: isAdmin, }, 
      {title: "Accueil", link: "/",}, 
      {title: "A propos", link: "/apropos", }, 
      {title: isLogged ? "Log out" : "Login", link: isLogged ? "" : "/login"},
  ];

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
       <nav className="navbar" id="glass">
            <Link to="/" >
              <img src={Logo} alt="logo" className="logo--btn" />
            </Link>
            <ul className="desktop--menu">
                {menuItems.map((menuItem) => { 
                  if (menuItem.show !== false) { 
                    return (
                      <li><NavLink to={menuItem.link} onClick={() => handleClick(menuItem)}>{menuItem.title}</NavLink></li>
                      );
                   } return null; 
                  })}
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