import React, { useEffect, useState } from "react";

const CORRECT_PASSWORD = "portfolio123"; // Placeholder password

export default function PortfolioPasswordGate({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const storedPassword = localStorage.getItem("portfolioPassword");
    if (storedPassword === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      localStorage.setItem("portfolioPassword", password);
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  if (isAuthenticated) {
    return children;
  }

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2>Portfolio Protected</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          style={{ marginRight: "10px" }}
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
