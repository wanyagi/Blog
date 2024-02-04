import React, { useState, useEffect } from 'react'; 
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; 
import "./HeroSection.css"; 

const HeroSection = () => {

  const [ mobile, setMobile ] = useState(window.innerWidth); 

  useEffect(() => {
    const handleResize = () =>  {
      setMobile(window.innerWidth > 1024); 
    }; 

    window.addEventListener('resize', handleResize); 

    handleResize(); 
    
    return () => window.removeEventListener('resize', handleResize); 
  }, []); 

  return (
    <section className="hero">
        <Helmet>
          <meta charSet="UTF-8" />
          <link rel="canonical" href="http://localhost:3000" />
          <meta name="description" content="blog maternité" />
          <title>sayfemums</title>
        </Helmet>

        <picture>
          <source media="(min-width : 1025px)" srcSet="herodesktop.webp" />
          <source media="(min-width : 501px) and (max-width: 1024px)" srcSet="herotablette.webp" />
          <source media="(max-width : 500px)" srcSet="herotablette.webp" />
          <img src='herodesktop.webp' alt='herosectionsimage'/>
        </picture>

        <div className="hero--info">
          <h2>SAYFEMUMS</h2>
            <h1>
              Bienvenue dans le monde de la maternité : {mobile ? <br /> : ""} Un aperçu des joies et des défis
            </h1>
            <button>
              <NavLink to="/register" className="hero--btn">
                Rejoins-nous
              </NavLink>
            </button>
           </div>
    </section>
  )
}

export default HeroSection;