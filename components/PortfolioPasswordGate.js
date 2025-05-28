import React, { useEffect, useState } from "react";

import Breadcrumb from "@/components/Breadcrumb";

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
    <div className="flex flex-col items-center h-screen pt-24 bg-neutral-100 dark:bg-neutral-900">
      <Breadcrumb url="/" />
      <div className="flex flex-col items-center space-y-2 my-8">
        <h1 className="h2">Andrew Millen Portfolio</h1>
        <p className="text-neutral-600 dark:text-neutral-300">
          If you need access, please{" "}
          <a href="mailto:andrewmillen1+website@gmail.com" className="textLink">
            contact me
          </a>
          .
        </p>
      </div>
      <form onSubmit={handleSubmit} className="relative">
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          autocomplete="off"
          data-1p-ignore
          data-lpignore="true"
          data-protonpass-ignore="true"
          className="w-80 border bg-white dark:bg-black border-neutral-300 dark:border-neutral-800 rounded-md p-3 pr-14 outline-none focus:ring-2 focus:ring-blue-700 dark:focus:ring-blue-800 focus:ring-offset-2"
        />
        <button
          type="submit"
          className={`font-degular absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-sm text-2xl font-semibold outline-none focus:ring-2 focus:ring-blue-700 dark:focus:ring-blue-800 focus:ring-offset-2 transition-opacity duration-100 ${
            password ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="sr-only">Submit</span>→
        </button>
      </form>
      {error && (
        <p className="bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-200 text-sm py-1 px-2 rounded mt-4">
          {error}
        </p>
      )}
    </div>
  );
}
