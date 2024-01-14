import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../redux/registerSlice';
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

  const handleSubmission = async (event) => {

    event.preventDefault();

    dispatch(registerUser(enteredValues)); 
    navigate('/login');

  }; 

  return (
   <section className="register--section">
      <img className="register--image" src={Formulaire} alt="page inscription" aria-label="page d'inscription" />
      <form className="register--form" onSubmit={handleSubmission}>      
          <h2>Rejoins notre communauté</h2>
          <div className="inputs">
            <input required type="text" placeholder="Nom et Prénom :" name="name" id="name" onChange={(event) => handleChange('name', event.target.value)} value={enteredValues.name}/>
            <input required type="text" placeholder="Nom utilisateur :" name="username" id="username" onChange={ (event) => handleChange('username', event.target.value)} value={enteredValues.username}/>
            <input required type="email" placeholder="E-mail :" name="email" id="email" onChange={ (event) => handleChange('email', event.target.value)} value={enteredValues.email}/>
            <input required type="password" placeholder="Mot de passe :" name="password" id="password" onChange={ (event) => handleChange('password', event.target.value)} value={enteredValues.password}/>
          </div>
          <div className="form--buttons">
            <button className="form--btn" type="submit">
            Je m'inscris
            </button>
            <p>
              {loading && <div className="patientez">Veuillez patientez...</div>}
              Tu fais déjà partie de la communauté ?<br /> 
              <Link to="/login">
                Connecte-toi
              </Link>
            </p>
          </div>
      </form>
    </section>
  )
}

export default Register; 