import React, { useState }  from 'react'; 
import { Link, Navigate } from 'react-router-dom'; 
import { useSelector, useDispatch } from 'react-redux'; 
import { Authentication } from '../redux/authenticationSlice';
import Formulaire from '../assets/Formulaire.jpeg'; 
import './login.css'; 

const Login = () => {


  const inputs = {username: "", password: "", };
  const [ enteredValues, setEnteredValues ] = useState(inputs); 
  const user = useSelector((state) => state.userAuthentication.user); 
  const error = useSelector((state) => state.userAuthentication.error);
  const dispatch = useDispatch();  

  const handleChange = (identifier, value) => {
    setEnteredValues(previousInputs => ({...previousInputs, [identifier] : value, }))
  }; 

  const handleSubmission = (event) => {

    event.preventDefault(); 
 
    dispatch(Authentication(enteredValues)); 

    //setEnteredValues(""); 
  }; 



  return (
    <section className="login--section">
        <img className="form--image" src={Formulaire} alt="se connecter" aria-label="se connecter" />
        <form className="login--form" onSubmit={handleSubmission}>
          <h2>Je me connecte</h2>
          <div className="login--inputs">
            <input required placeholder="Nom d'utilisateur :" type="text" id="username" name="username" onChange={(event) => handleChange("username", event.target.value)} value={enteredValues.username} />
            <input required placeholder="Mots de passe :" type="password" id="password" name="password" onChange={(event) => handleChange("password", event.target.value)} value={enteredValues.password}/>
          </div> 
            <div className="login--buttons">
              <button className="login--btn" type="submit">
                Se connecter
              </button>
              <p>Tu n'es pas encore inscrit ? <br />
                <Link to="/register">
                  rejoins nous
                </Link>
              </p>
          </div>
          {error && <div className="error--display">There's an error...</div>}
          {user ? <Navigate to="/" /> : null}
        </form>
    </section>
  )
}

export default Login; 