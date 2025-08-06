import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function Navbar() {
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/next-token-kya-hai/login");
  };

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", borderBottom: "1px solid #ccc" }}>
      <div>
        <Link to="/next-token-kya-hai/welcome" style={{ marginRight: "15px" }}>Home</Link>
        <Link to="/next-token-kya-hai/makemore" style={{ marginRight: "15px" }}>MakeMore Quiz</Link>
        <Link to="/next-token-kya-hai/micrograd">MicroGrad Quiz</Link>
      </div>
      <div>
        {user && <span style={{ marginRight: "15px" }}>👤 {user.name}</span>}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}
