import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../redux/registerSlice';
import Formulaire from '../assets/Formulaire.jpeg'; 
import registerValidation from '../utils/registerValidation';
import './register.css'; 

const Register = () => {

  const navigate = useNavigate(); 

  const values = { name: "", username: "", email: "", password: "", }; 
  const [ enteredValues, setEnteredValues ] = useState(values);
  const [ errors, setErrors ] = useState({});

  const handleChange = (identifier, value) => {
    setEnteredValues(previousValues => ({...previousValues, [identifier] : value, }));
    if (errors[identifier]) { setErrors(prevErrors => ({...prevErrors, [identifier]: '' }))}; 
  }; 

  const dispatch = useDispatch(); 
  const loading = useSelector((state) => state.register.loading); 

  const handleSubmission = async (event) => {

    event.preventDefault();
    const validationErrors = registerValidation(enteredValues); 
    setErrors(validationErrors); 

    if (Object.keys(validationErrors).length === 0) {
      const result = await dispatch(registerUser(enteredValues)); 
      if (registerUser.fulfilled.match(result)) {
        navigate('/login');
      }
    }
  }; 

  return (
   <section className="register--section">
      <img className="register--image" src={Formulaire} alt="page inscription" aria-label="page d'inscription" />
      <form className="register--form" onSubmit={handleSubmission} noValidate>      
          <h2>Rejoins notre communauté</h2>
          <div className="inputs">
            <input required type="text" placeholder="Nom et Prénom :" name="name" id="name" onChange={(event) => handleChange('name', event.target.value)} value={enteredValues.name}/>
            {errors.name && <p className="register--errors">{errors.name}</p>}
            <input required type="text" placeholder="Nom utilisateur :" name="username" id="username" onChange={ (event) => handleChange('username', event.target.value)} value={enteredValues.username}/>
            {errors.username && <p className="register--errors">{errors.username}</p>}
            <input required type="email" placeholder="E-mail :" name="email" id="email" onChange={ (event) => handleChange('email', event.target.value)} value={enteredValues.email}/>
            {errors.email && <p className="register--errors">{errors.email}</p>}
            <input required type="password" placeholder="Mot de passe :" name="password" id="password" onChange={ (event) => handleChange('password', event.target.value)} value={enteredValues.password}/>
            {errors.password && <p className="register--errors">{errors.password}</p>}
          </div>
          {loading && (<div className="register--loading"><div className='dot'></div><div className='dot'></div><div className='dot'></div></div>)}
          <div className="form--buttons">
            <button className="form--btn" type="submit">
            Je m'inscris
            </button>
            <p>
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