import React from 'react'; 
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; 
import "./HeroSection.css"; 

const HeroSection = () => {
  return (
    <section className="hero">
        <Helmet>
            <meta charSet="UTF-8" />
            <link rel="canonical" href="https://sayfemums.com" />
            <meta name="description" content="blog maternité" />
            <title>sayfemums</title>
        </Helmet> 

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