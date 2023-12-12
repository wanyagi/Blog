import React from 'react'; 
import './FooterPages.css'; 

const FooterPages = (props) => {
  return (
    <section className="container">
    <h3>{props.title}</h3>
    <div className="text">
     {props.content}
    </div>
  </section>
)
}

export default FooterPages