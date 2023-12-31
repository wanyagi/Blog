import React from 'react'; 
import { NavLink } from 'react-router-dom';
import './Catégorie.css'; 

const Catégorie = (props) => {

  return (
    <section className="cards--container">   
      <button>
        <NavLink to={props.page}>
          {props.title}
        </NavLink>
      </button>
    </section>
  )
};

export default Catégorie; 