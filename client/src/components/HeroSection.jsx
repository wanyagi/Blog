import React from 'react'; 
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; 
import "./HeroSection.css"; 

const HeroSection = () => {
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
          <source media="(min-width : 768px) and (max-width: 1024px)" srcSet="herotablette.webp" />
          <source media="(max-width : 767px)" srcSet="heromobile.webp" />
          <img src='herodesktop.webp' alt='herosectionsimage'/>
        </picture>

        <div className="hero--info">
          <h2>SAYFEMUMS</h2>
            <h1>
              Bienvenue dans le monde de la maternité :
              <br /><span>un aperçu des joies et des défis.</span>
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