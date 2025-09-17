import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddAgent({ agents, setAgents }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAgents([...agents, { id: Date.now(), ...form }]);
    navigate("/agents");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <h2 className="text-xl font-semibold">Add Agent</h2>
      <input className="border p-2 w-full" type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input className="border p-2 w-full" type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input className="border p-2 w-full" type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
    </form>
  );
}

export default AddAgent;
