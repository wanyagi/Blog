import React, { useState } from 'react';
import './contact.css'; 

const Contact = () => {
   
  const contactData = {Nom: "", Email: "", Message: "", }; 

  const [ enteredData, setEnteredData ] = useState(contactData); 

  const handleChange = (identifier, value) => {
    setEnteredData(previousData => ({...previousData, [identifier] : value, }))
  }; 

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log(enteredData); 

    setEnteredData("");

  }

  return (
    <form className="contact--form" onSubmit={handleSubmit} >
      <div className="form--contact" >
        <h3>Quel est votre message ? </h3>
        <input required placeholder="Nom :" type="text" name="nom" id="nom" onChange={(event) => handleChange('Nom', event.target.value)} value={enteredData.Nom}/>
        <input required placeholder="Email :" type="email" name="email" id="email" onChange={(event) => handleChange('Email', event.target.value)} value={enteredData.Email}/>
        <textarea required rows="15" columns="100" name="message" id="message" onChange={(event) => handleChange('Message', event.target.value)} value={enteredData.Message}/>
        <div className="contact--btn">
          <button>
            Envoyer
          </button>
        </div>
      </div>
    </form>
  )
}

export default Contact; 