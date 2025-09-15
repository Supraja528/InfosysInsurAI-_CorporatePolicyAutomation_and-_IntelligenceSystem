import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import AdminDashboard from './AdminDashboard';
import AgentAvailability from './AgentAvailability';
import AddAgent from './AddAgent';

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/admin" element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/" />} />
  <Route path="/availability" element={isAuthenticated ? <AgentAvailability /> : <Navigate to="/" />} />
  <Route path="/add-agent" element={isAuthenticated ? <AddAgent /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
