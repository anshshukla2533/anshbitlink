"use client";
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function authenticateAdmin(password) {
 
  return password === "admin123";
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [links, setLinks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      fetch("/api/admin-links")
        .then(res => res.json())
        .then(data => setLinks(data.links || []));
    }
  }, [isAuthenticated]);

  const handleLogin = e => {
    e.preventDefault();
    if (authenticateAdmin(password)) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid password");
    }
  };

 
  const chartData = {
    labels: links.map(l => l.shorturl),
    datasets: [
      {
        label: "Clicks",
        data: links.map(l => l.clicks || 0),
        backgroundColor: "#a78bfa",
      },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto my-16 p-8 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      {!isAuthenticated ? (
        <form onSubmit={handleLogin} className="mb-8 flex flex-col gap-4">
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="border px-4 py-2 rounded"
          />
          <button className="bg-purple-500 text-white px-4 py-2 rounded font-bold">Login</button>
          {error && <div className="text-red-600">{error}</div>}
        </form>
      ) : (
        <>
          <Bar data={chartData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
          <table className="w-full border mt-8">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">Short URL</th>
                <th className="p-2">Original URL</th>
                <th className="p-2">Clicks</th>
                <th className="p-2">Created At</th>
                <th className="p-2">Expires At</th>
              </tr>
            </thead>
            <tbody>
              {links.map(link => (
                <tr key={link.shorturl} className="border-t">
                  <td className="p-2">{link.shorturl}</td>
                  <td className="p-2">{link.url}</td>
                  <td className="p-2">{link.clicks || 0}</td>
                  <td className="p-2">{link.createdAt ? new Date(link.createdAt).toLocaleString() : '-'}</td>
                  <td className="p-2">{link.expiresAt ? new Date(link.expiresAt).toLocaleString() : '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
