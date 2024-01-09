import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import emailjs from '@emailjs/browser'; 
import './contact.css'; 

const Contact = () => {
   
  const contactData = {Nom: "", Email: "", Message: "", }; 
  const navigate = useNavigate(); 

  const [ enteredData, setEnteredData ] = useState(contactData); 

  const handleChange = (identifier, value) => {
    setEnteredData(previousData => ({...previousData, [identifier] : value, }))
  }; 

  const handleSubmit = (event) => {

    event.preventDefault(); 

    const serviceId = process.env.REACT_APP_SERVICEID;
    const templateId = process.env.REACT_APP_TEMPLATEID;
    const publicKey = process.env.REACT_APP_PUBLICKEY;

    const templateParams = {from_name: enteredData.Nom, from_email: enteredData.Email, to_name: "sayfemums", message: enteredData.Message, }; 

    emailjs.send(serviceId, templateId, templateParams, publicKey,)
    .then((response) => { console.log(response); setEnteredData("")})
    .catch((error) => {console.error(error)}); 

    navigate('/'); 

  }

  return (
    <form className="contact--form" onSubmit={handleSubmit} >
      <div className="form--contact" >
        <h3>Quel est votre message ? </h3>
        <input required placeholder="Nom :" type="text" name="nom" id="nom" value={enteredData.Nom} onChange={(event) => handleChange('Nom', event.target.value)} />
        <input required placeholder="Email :" type="email" name="email" id="email" value={enteredData.Email} onChange={(event) => handleChange('Email', event.target.value)} />
        <textarea required rows="15" columns="100" name="message" id="message" value={enteredData.Message} onChange={(event) => handleChange('Message', event.target.value)} />
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