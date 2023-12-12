import React from 'react'; 
import { NavLink } from 'react-router-dom';
import './Cards.css'; 

const Card = (props) => {

  return (
        <section className="cards--container">   
            <img src={props.image} alt={props.alt} aria-label={props.alabel} />
              <h3>{props.title}</h3>
              <p>{props.resume}</p>
              <button>
                <NavLink to={props.page}>
                  ARTICLES
                </NavLink>
              </button>
        </section>
  )
};

export default Card; 