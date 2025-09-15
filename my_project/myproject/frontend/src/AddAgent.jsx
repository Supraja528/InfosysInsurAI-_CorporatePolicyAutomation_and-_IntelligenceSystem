import React, { useState } from 'react';
import axios from 'axios';

function AddAgent() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    if (!name.trim()) {
      setError('Please enter an agent name.');
      return;
    }
    try {
      await axios.post('http://localhost:8081/api/agents', { name });
      setMessage('Agent added successfully!');
      setName('');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Error adding agent.');
      }
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)' }}>
      <div style={{ maxWidth: 400, width: '100%', background: '#fff', padding: 40, borderRadius: 20, boxShadow: '0 12px 40px rgba(44,62,80,0.18)', textAlign: 'center' }}>
        <h2 style={{ color: '#2575fc', marginBottom: 24, fontWeight: 800, fontSize: '2rem', letterSpacing: '1px', textShadow: '0 2px 8px rgba(44,62,80,0.10)' }}>Add Agent</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Agent Name"
            value={name}
            onChange={e => setName(e.target.value)}
            style={{ width: '100%', padding: 14, marginBottom: 18, borderRadius: 10, border: '1px solid #e0e0e0', fontSize: '1.1rem', background: '#f7f9fa', fontWeight: 500 }}
          />
          <button type="submit" style={{ width: '100%', padding: 14, borderRadius: 10, border: 'none', background: 'linear-gradient(90deg, #2575fc 0%, #6a11cb 100%)', color: '#fff', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer', boxShadow: '0 2px 8px rgba(44,62,80,0.10)', marginBottom: 8, transition: 'background 0.3s' }}>Add Agent</button>
        </form>
        {error && <p style={{ color: '#e74c3c', marginTop: 18, fontWeight: 500 }}>{error}</p>}
        {message && <p style={{ color: '#2575fc', marginTop: 18, fontWeight: 500 }}>{message}</p>}
      </div>
    </div>
  );
}

export default AddAgent;
