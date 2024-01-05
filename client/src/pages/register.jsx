import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector} from 'react-redux';
import { fetchUser } from '../redux/registerSlice';
import Formulaire from '../assets/Formulaire.jpeg'; 
import './register.css'; 

const Register = () => {

  const navigate = useNavigate(); 

  const values = { name: "", username: "", email: "", password: "", }; 
  const [ enteredValues, setEnteredValues ] = useState(values);

  const handleChange = (identifier, value) => {
    setEnteredValues(previousValues => ({...previousValues, [identifier] : value, }))
  }; 

  const dispatch = useDispatch(); 
  const loading = useSelector((state) => state.register.loading); 
  const error = useSelector((state) => state.register.error); 

  const handleSubmission = async (event) => {

    event.preventDefault();

    const result = await dispatch(fetchUser(enteredValues)); 
    if (fetchUser.fulfilled.match(result)) {
      navigate('/'); 
    }

  }; 

  return (
   <section className="register--section">
      <img className="register--image" src={Formulaire} alt="page inscription" aria-label="page d'inscription" />
      <form className="register--form" onSubmit={handleSubmission}>      
          <h2>Rejoins notre communauté</h2>
          <div className="inputs">
            <input required type="text" placeholder="Nom et Prénom :" name="name" id="name" onChange={(event) => handleChange('name', event.target.value)} value={enteredValues.name}/>
            {error && <div className="register--errors">{error}</div>}
            <input required type="text" placeholder="Nom utilisateur :" name="username" id="username" onChange={ (event) => handleChange('username', event.target.value)} value={enteredValues.username}/>
            {error && <div className="register--errors">{error}</div>}
            <input required type="email" placeholder="E-mail :" name="email" id="email" onChange={ (event) => handleChange('email', event.target.value)} value={enteredValues.email}/>
            {error && <div className="register--errors">{error}</div>}
            <input required type="password" placeholder="Mot de passe :" name="password" id="password" onChange={ (event) => handleChange('password', event.target.value)} value={enteredValues.password}/>
            {error && <div className="register--errors">{error}</div>}
          </div>
          <div className="form--buttons">
            <button className="form--btn" type="submit">
            Je m'incris
            </button>
            <p>
              {loading && <div>Veuillez patienter...</div>}
            </p>
          </div>
      </form>
    </section>
  )
}

export default Register; 