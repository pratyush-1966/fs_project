import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Auth = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const history = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://fsbackendd-production.up.railway.app/api/v1/auth/login', formData);
      const data = response.data;
      // Handle successful login
      localStorage.setItem('token', data.token); // Store token in local storage
      localStorage.setItem('user', JSON.stringify({ name: data.user.name }));
      history('/');
    } catch (error) {
      // Handle login error
      console.error('Login error:', error);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post('https://fsbackendd-production.up.railway.app/api/v1/auth/register', formData);
      const data = response.data;
      // Handle successful registration
      localStorage.setItem('token', data.token); // Store token in local storage
      localStorage.setItem('user', JSON.stringify({ name: data.user.name }));
      history('/');
    } catch (error) {
      // Handle registration error
      console.error('Registration error:', error);
    }
  };

  const handleToggleMode = () => {
    setIsRegisterMode(!isRegisterMode);
  };

  return (
    <>
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: '10px auto' ,padding:'10px',}}>
        <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          {isRegisterMode ? <h2>Register</h2> : <h2 className='text-center'>Login</h2>}
          {isRegisterMode && <input type="text" name="name" placeholder="Name" onChange={handleInputChange} style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ced4da' }} />}
          <input type="email" name="email" placeholder="Email" onChange={handleInputChange} style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ced4da' }} />
          <input type="password" name="password" placeholder="Password" onChange={handleInputChange} style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ced4da' }} />
          <button onClick={isRegisterMode ? handleRegister : handleLogin} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', background: 'rgb(17 24 39)', color: '#fff', cursor: 'pointer' }}>{isRegisterMode ? 'Register' : 'Login'}</button>
          <p onClick={handleToggleMode} style={{ textAlign: 'center', marginTop: '10px', cursor: 'pointer', color: 'rgb(17 24 39)'  }}>{isRegisterMode ? 'Already have an account? Login' : 'Don\'t have an account? Register'}</p>
        </div>
      </div>
    </>
  );
};

export default Auth;
