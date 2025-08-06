import React from "react";

export default function Sidebar({ users, onSelect }) {
  return (
    <div style={{ width: "200px", borderRight: "1px solid #ccc", padding: "10px" }}>
      <h3>Summary</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {users.map((r, idx) => (
          <li
            key={idx}
            onClick={() => onSelect(r)}
            style={{ cursor: "pointer", marginBottom: "8px" }}
          >
            {r.name} - {r.score}
          </li>
        ))}
      </ul>
    </div>
  );
}
