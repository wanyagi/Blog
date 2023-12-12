import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import { useDispatch, useSelector} from 'react-redux';
import { fetchUser } from '../redux/registerSlice';
import Formulaire from '../assets/Formulaire.jpeg'; 
import './register.css'; 

const Register = () => {

  const values = { name: "", username: "", email: "", password: "", }; 
  const [ enteredValues, setEnteredValues ] = useState(values);

  const handleChange = (identifier, value) => {
    setEnteredValues(previousValues => ({...previousValues, [identifier] : value, }))
  }; 

  const dispatch = useDispatch(); 
  const loading = useSelector((state) => state.register.laoding); 
  const error = useSelector((state) => state.register.error); 
 

  const handleSubmission = (event) => {

    event.preventDefault();

    dispatch(fetchUser(enteredValues)); 

    console.log(enteredValues)

    //setEnteredValues(""); 
  }; 

  return (
   <section className="register--section">
      <img className="register--image" src={Formulaire} alt="page inscription" aria-label="page d'inscription" />
      <form className="register--form" onSubmit={handleSubmission}>      
          <h2>Rejoins notre communauté</h2>
          <div className="inputs">
            <input required type="text" placeholder="Nom et Prénom :" name="name" id="name" onChange={(event) => handleChange('name', event.target.value)} value={enteredValues.name}/>
            {error && <div>message test</div>}
            <input required type="text" placeholder="Nom utilisateur :" name="username" id="username" onChange={ (event) => handleChange('username', event.target.value)} value={enteredValues.username}/>
            {error && <div>message test</div>}
            <input required type="email" placeholder="E-mail :" name="email" id="email" onChange={ (event) => handleChange('email', event.target.value)} value={enteredValues.email}/>
            {error && <div>message test</div>}
            <input required type="password" placeholder="Mot de passe :" name="password" id="password" onChange={ (event) => handleChange('password', event.target.value)} value={enteredValues.password}/>
            {error && <div>message test</div>}
          </div>
          <div className="form--buttons">
            <button className="form--btn" type="submit">
            Je m'incris
            </button>
            <p>
              {loading && <div>Veuillez patienter...</div>}
              Tu fais déjà parti de la cummuntauté ?<br /> 
              <Link to="/login">
                connectes toi
              </Link>
            </p>
          </div>
      </form>
    </section>
  )
}

export default Register; 