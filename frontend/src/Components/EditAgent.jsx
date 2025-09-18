import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditAgent({ agents, setAgents }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const agentToEdit = agents.find((a) => a.id === parseInt(id));

  const [form, setForm] = useState(agentToEdit || { name: "", email: "", phone: "" });

  useEffect(() => {
    if (!agentToEdit) navigate("/agents"); // Redirect if invalid
  }, [agentToEdit, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAgents(
      agents.map((agent) => (agent.id === parseInt(id) ? { ...agent, ...form } : agent))
    );
    navigate("/agents");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <h2 className="text-xl font-semibold">Edit Agent</h2>
      <input className="border p-2 w-full" type="text" name="name" value={form.name} onChange={handleChange} required />
      <input className="border p-2 w-full" type="email" name="email" value={form.email} onChange={handleChange} required />
      <input className="border p-2 w-full" type="text" name="phone" value={form.phone} onChange={handleChange} required />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
    </form>
  );
}

export default EditAgent;
