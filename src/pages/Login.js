import React, { useState } from 'react';
import axios from 'axios';
import "../Style/Login.css"
import Loginsvg from "../assesst/illustrations/Login.svg"
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    axios.post('https://inventory-pyes.onrender.com/api/login', user)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <header>
     <div className='login-box'>
    <div className="login-form__container">
      <h2 className="login-form__title">Login</h2>
     
      <form onSubmit={handleSubmit}>
        <div className="login-form__input-container">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="login-form__input-container">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="login-form__submit-button" type="submit">
          Login
        </button>
      </form>
      
    </div>
    <div className='login-svg'>
         <img src={Loginsvg} alt="login" />
      </div>
    </div>
    </header>
  );
}

export default LoginForm;