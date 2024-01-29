import React, { useState }  from 'react'; 
import { useNavigate, Link } from 'react-router-dom'; 
import { useSelector, useDispatch } from 'react-redux'; 
import { Authentication } from '../redux/authenticationSlice';
import Formulaire from '../assets/Formulaire.jpeg'; 
import './login.css'; 

const Login = () => {


  const inputs = {username: "", password: "", };
  const [ enteredValues, setEnteredValues ] = useState(inputs); 

  const handleChange = (identifier, value) => {
    setEnteredValues(previousInputs => ({...previousInputs, [identifier] : value, }));
  }; 

  const { loading, error } = useSelector((state) => state.userAuthentication); 
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const usernameError = error?.usernameError;
  const passwordError = error?.passwordError;

  const handleSubmission = async (event) => {

    event.preventDefault(); 
 
    const result = await dispatch(Authentication(enteredValues)); 
    if (result.meta.requestStatus === 'fulfilled') {
      navigate('/'); 
    }; 

  }; 



  return (
    <section className="login--section">
        <img className="form--image" src={Formulaire} alt="se connecter" aria-label="se connecter" />
        <form className="login--form" onSubmit={handleSubmission}>
          <h2>Je me connecte</h2>
          <div className="login--inputs">
            <input required placeholder="Nom d'utilisateur :" type="text" id="username" name="username" onChange={(event) => handleChange("username", event.target.value)} value={enteredValues.username} />
            {usernameError && <p className='login--errors'>{usernameError}</p>}
            <input required placeholder="Mots de passe :" type="password" id="password" name="password" onChange={(event) => handleChange("password", event.target.value)} value={enteredValues.password}/>
            {passwordError && <p className='login--errors'>{passwordError}</p>}
          </div> 
            <div className="login--buttons">
              <button className="login--btn" type="submit">
                Se connecter
              </button>
              <p>Tu n'es pas encore inscrit ? <br />
                <Link to="/register">
                  Rejoins-nous
                </Link>
              </p>
          </div>
          {error && !usernameError && !passwordError && <p className='login--errors'>{error}</p>}
          {loading && <p className='login--loading'></p>}
        </form>
    </section>
  )
}

export default Login; 