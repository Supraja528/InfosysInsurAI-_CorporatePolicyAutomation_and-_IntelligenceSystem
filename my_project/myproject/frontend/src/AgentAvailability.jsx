import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AgentAvailability() {
  const [editId, setEditId] = useState(null);
  const [editDay, setEditDay] = useState('');
  const [editStartTime, setEditStartTime] = useState('');
  const [editEndTime, setEditEndTime] = useState('');
  const [agents, setAgents] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState('');
  const [day, setDay] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [availabilities, setAvailabilities] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8081/api/agents')
      .then(res => setAgents(res.data));
  }, []);

  useEffect(() => {
    if (selectedAgent) {
      axios.get(`http://localhost:8081/api/availability/agent/${selectedAgent}`)
        .then(res => setAvailabilities(res.data));
    }
  }, [selectedAgent]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!selectedAgent || !day || !startTime || !endTime) {
      setError('Please fill in all fields.');
      return;
    }
    try {
      await axios.post('http://localhost:8081/api/availability', {
        agent: { id: selectedAgent },
        day,
        startTime,
        endTime
      });
      setSuccess('Availability set successfully!');
      setDay('');
      setStartTime('');
      setEndTime('');
      // Refresh availability list
      axios.get(`http://localhost:8081/api/availability/agent/${selectedAgent}`)
        .then(res => setAvailabilities(res.data));
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Error setting availability.');
      }
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)' }}>
      <div style={{ maxWidth: 500, width: '100%', background: '#fff', padding: 40, borderRadius: 20, boxShadow: '0 12px 40px rgba(44,62,80,0.18)', textAlign: 'center' }}>
        <h2 style={{ color: '#2575fc', marginBottom: 24, fontWeight: 800, fontSize: '2rem', letterSpacing: '1px', textShadow: '0 2px 8px rgba(44,62,80,0.10)' }}>Agent Availability</h2>
        <form onSubmit={handleSubmit}>
          <select value={selectedAgent} onChange={e => setSelectedAgent(e.target.value)} style={{ width: '100%', padding: 14, marginBottom: 18, borderRadius: 10, border: '1px solid #e0e0e0', fontSize: '1.1rem', background: '#f7f9fa', fontWeight: 500 }}>
          <option value="">Select Agent</option>
          {agents.map(agent => (
            <option key={agent.id} value={agent.id}>{agent.name}</option>
          ))}
        </select>
          <input type="text" placeholder="Day" value={day} onChange={e => setDay(e.target.value)} style={{ width: '100%', padding: 14, marginBottom: 18, borderRadius: 10, border: '1px solid #e0e0e0', fontSize: '1.1rem', background: '#f7f9fa', fontWeight: 500 }} />
          <input type="text" placeholder="Start Time" value={startTime} onChange={e => setStartTime(e.target.value)} style={{ width: '100%', padding: 14, marginBottom: 18, borderRadius: 10, border: '1px solid #e0e0e0', fontSize: '1.1rem', background: '#f7f9fa', fontWeight: 500 }} />
          <input type="text" placeholder="End Time" value={endTime} onChange={e => setEndTime(e.target.value)} style={{ width: '100%', padding: 14, marginBottom: 18, borderRadius: 10, border: '1px solid #e0e0e0', fontSize: '1.1rem', background: '#f7f9fa', fontWeight: 500 }} />
          <button type="submit" style={{ width: '100%', padding: 14, borderRadius: 10, border: 'none', background: 'linear-gradient(90deg, #2575fc 0%, #6a11cb 100%)', color: '#fff', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer', boxShadow: '0 2px 8px rgba(44,62,80,0.10)', marginBottom: 8, transition: 'background 0.3s' }}>Set Availability</button>
      </form>
        {error && <p style={{ color: '#e74c3c', marginTop: 18, fontWeight: 500 }}>{error}</p>}
        {success && <p style={{ color: '#2575fc', marginTop: 18, fontWeight: 500 }}>{success}</p>}
        <h3 style={{ marginTop: 32, color: '#2575fc', fontWeight: 700 }}>Current Availabilities</h3>
    <ul>
        {availabilities.map(a => (
          <li key={a.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            {editId === a.id ? (
              <>
                <input type="text" value={editDay} onChange={e => setEditDay(e.target.value)} placeholder="Day" style={{ width: 80, marginRight: 8 }} />
                <input type="text" value={editStartTime} onChange={e => setEditStartTime(e.target.value)} placeholder="Start" style={{ width: 60, marginRight: 8 }} />
                <input type="text" value={editEndTime} onChange={e => setEditEndTime(e.target.value)} placeholder="End" style={{ width: 60, marginRight: 8 }} />
                <button
                  style={{ marginRight: 8, padding: '4px 10px', borderRadius: 6, border: 'none', background: 'linear-gradient(90deg, #2575fc 0%, #6a11cb 100%)', color: '#fff', fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer' }}
                  onClick={async () => {
                    try {
                      await axios.post('http://localhost:8081/api/availability', {
                        id: a.id,
                        agent: { id: selectedAgent },
                        day: editDay,
                        startTime: editStartTime,
                        endTime: editEndTime
                      });
                      setEditId(null);
                      setSuccess('Availability updated successfully!');
                      setError('');
                      axios.get(`http://localhost:8081/api/availability/agent/${selectedAgent}`)
                        .then(res => setAvailabilities(res.data));
                    } catch (err) {
                      setError('Error updating availability.');
                      setSuccess('');
                    }
                  }}
                >Save</button>
                <button
                  style={{ padding: '4px 10px', borderRadius: 6, border: 'none', background: 'linear-gradient(90deg, #aaa 0%, #ccc 100%)', color: '#fff', fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer' }}
                  onClick={() => setEditId(null)}
                >Cancel</button>
              </>
            ) : (
              <>
                <span>{a.day}: {a.startTime} - {a.endTime}</span>
                <button
                  style={{ marginLeft: 12, padding: '4px 10px', borderRadius: 6, border: 'none', background: 'linear-gradient(90deg, #f7b731 0%, #fd746c 100%)', color: '#fff', fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer', boxShadow: '0 1px 4px rgba(44,62,80,0.10)' }}
                  onClick={() => {
                    setEditId(a.id);
                    setEditDay(a.day);
                    setEditStartTime(a.startTime);
                    setEditEndTime(a.endTime);
                  }}
                >Edit</button>
                <button
                  style={{ marginLeft: 8, padding: '4px 10px', borderRadius: 6, border: 'none', background: 'linear-gradient(90deg, #e74c3c 0%, #fd746c 100%)', color: '#fff', fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer', boxShadow: '0 1px 4px rgba(44,62,80,0.10)' }}
                  onClick={async () => {
                    try {
                      await axios.delete(`http://localhost:8081/api/availability/${a.id}`);
                      setAvailabilities(availabilities.filter(av => av.id !== a.id));
                      setSuccess('Availability deleted successfully!');
                      setError('');
                    } catch (err) {
                      setError('Error deleting availability.');
                      setSuccess('');
                    }
                  }}
                >Delete</button>
              </>
            )}
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default AgentAvailability;
