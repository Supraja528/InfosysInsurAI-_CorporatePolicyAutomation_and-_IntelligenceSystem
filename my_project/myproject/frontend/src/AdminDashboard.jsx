import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate();
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
        padding: '48px 40px',
        borderRadius: '20px',
        boxShadow: '0 12px 40px rgba(44,62,80,0.18)',
        width: '100%',
        maxWidth: '420px',
        textAlign: 'center',
        position: 'relative'
      }}>
        <h2 style={{
          marginBottom: '18px',
          color: '#2575fc',
          fontWeight: 800,
          fontSize: '2.2rem',
          letterSpacing: '1px',
          textShadow: '0 2px 8px rgba(44,62,80,0.10)'
        }}>Admin Dashboard</h2>
        <p style={{
          color: '#444',
          fontSize: '1.1rem',
          marginBottom: '32px',
          fontWeight: 500
        }}>Welcome to the admin dashboard! Manage agents and their availability below.</p>
        <button
          style={{
            width: '100%',
            padding: '14px',
            borderRadius: '10px',
            border: 'none',
            background: 'linear-gradient(90deg, #2575fc 0%, #6a11cb 100%)',
            color: '#fff',
            fontWeight: 700,
            fontSize: '1.1rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(44,62,80,0.10)',
            marginBottom: '18px',
            transition: 'background 0.3s'
          }}
          onClick={() => navigate('/availability')}
        >Go to Agent Availability</button>
        <button
          style={{
            width: '100%',
            padding: '14px',
            borderRadius: '10px',
            border: 'none',
            background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
            color: '#fff',
            fontWeight: 700,
            fontSize: '1.1rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(44,62,80,0.10)',
            marginBottom: '8px',
            transition: 'background 0.3s'
          }}
          onClick={() => navigate('/add-agent')}
        >Add Agent</button>
        <div style={{
          position: 'absolute',
          bottom: '-24px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#aaa',
          fontSize: '0.95rem'
        }}>
          <span>Powered by LoginAdminDashboard</span>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
