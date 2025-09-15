import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8081/api/auth/login', { username, password });
      if (res.data.success && res.data.role === 'admin') {
        setIsAuthenticated(true);
        navigate('/admin');
      } else {
        setError('Login failed');
      }
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)'
    }}>
      <div style={{
        background: '#fff',
        padding: '40px 32px',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(44,62,80,0.15)',
        width: '100%',
        maxWidth: '350px',
        textAlign: 'center'
      }}>
        <h2 style={{
          marginBottom: '24px',
          color: '#2575fc',
          fontWeight: 700,
          fontSize: '2rem',
          letterSpacing: '1px'
        }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '16px',
              borderRadius: '8px',
              border: '1px solid #e0e0e0',
              fontSize: '1rem',
              outline: 'none',
              background: '#f7f9fa'
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '20px',
              borderRadius: '8px',
              border: '1px solid #e0e0e0',
              fontSize: '1rem',
              outline: 'none',
              background: '#f7f9fa'
            }}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: 'none',
              background: 'linear-gradient(90deg, #2575fc 0%, #6a11cb 100%)',
              color: '#fff',
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(44,62,80,0.10)'
            }}
          >Login</button>
        </form>
        {error && <p style={{color: '#e74c3c', marginTop: '18px', fontWeight: 500}}>{error}</p>}
      </div>
    </div>
  );
}

export default Login;
