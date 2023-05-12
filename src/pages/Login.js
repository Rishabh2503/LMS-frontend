import React, { useState } from 'react';
import axios from 'axios';
import "../Style/Login.css"
import reactangle from "../assesst/illustrations/Login/reactangle1.svg"
import reactangle2 from "../assesst/illustrations/Login/Rectangle2.svg"
import Rectangle3 from "../assesst/illustrations/Login/Rectangle3.svg"
import reactangle4 from "../assesst/illustrations/Login/reactangle4.svg"
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
    <div className='reactangle'>
    <img src={reactangle} alt="reactangle" />
    </div>
   <div className='reactangle2'> <img src={reactangle2} alt="Rectangle2" /></div>
   <div className='reactangle4'> <img src={reactangle4} alt="reactangle4" /></div>
     <div className='login-box'>
    <div className="login-form__container">
      <h2 className="login-form__title">Welcome</h2>
     
      <form onSubmit={handleSubmit}>
        <div className="login-form__input-container">
          <label htmlFor="email">Username</label>
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
          <label htmlFor="password">Password</label>
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
    </div>
    </header>
  );
}

export default LoginForm;