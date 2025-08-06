import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user") || "");
  
  const [results, setResults] = useState(() => {
    const saved = localStorage.getItem("quizResults");
    let parsed = saved ? JSON.parse(saved) : {};
    return {
      makemore: Array.isArray(parsed.makemore) ? parsed.makemore : [],
      micrograd: Array.isArray(parsed.micrograd) ? parsed.micrograd : []
    };
  });

  useEffect(() => {
    localStorage.setItem("quizResults", JSON.stringify(results));
  }, [results]);

  const logout = () => {
    setUser("");
    localStorage.removeItem("user");
  };

  return (
    <AppContext.Provider value={{ user, setUser, results, setResults, logout }}>
      {children}
    </AppContext.Provider>
  );
};
