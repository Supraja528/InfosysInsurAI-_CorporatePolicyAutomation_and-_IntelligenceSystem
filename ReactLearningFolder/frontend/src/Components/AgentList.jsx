import React from "react";
import { Link } from "react-router-dom";

function AgentList({ agents, setAgents }) {
  const handleDelete = (id) => {
    setAgents(agents.filter((agent) => agent.id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">All Agents</h2>
      <table className="border-collapse border border-gray-400 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent) => (
            <tr key={agent.id}>
              <td className="border p-2">{agent.id}</td>
              <td className="border p-2">{agent.name}</td>
              <td className="border p-2">{agent.email}</td>
              <td className="border p-2">{agent.phone}</td>
              <td className="border p-2">
                <Link className="mr-2 text-blue-600" to={`/agents/edit/${agent.id}`}>Edit</Link>
                <button onClick={() => handleDelete(agent.id)} className="text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AgentList;
