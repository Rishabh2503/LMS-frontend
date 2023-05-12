import React, { useState } from 'react';
import axios from 'axios';
import "../Style/Reg.css"
import Learn from "../assesst/illustrations/Learn.png"

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }

    axios.post('https://inventory-pyes.onrender.com/api/register', {
      username,
      email,
      password,
    })
      .then((response) => {
        console.log(response);
        // redirect to success page or log user in
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage('Error registering user');
      });
  };

  return (
    <div className="register-container">
      <div className="learning-illustration">
        <img src={Learn} alt='learn'></img>

      </div>
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="register-form__title">Register</h2>
        {errorMessage && <p className="register-form__error-message">{errorMessage}</p>}
        <input className="register-form__input" type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
        <input className="register-form__input" type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
        <input className="register-form__input" type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        <input className="register-form__input" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        <button className="register-form__submit-button" type="submit">Register</button>
      </form>
      
    </div>
    
  );
};

export default RegisterForm;
