import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { makemoreData } from "../data/makemore";

export default function ResultsMakeMore() {
  const { results } = useContext(AppContext);
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <>
    <Navbar />
    <div style={{ display: "flex" }}>
      <Sidebar users={results.makemore} onSelect={setSelectedUser} />
      <div style={{ padding: "20px", flex: 1 }}>
        {selectedUser ? (
          <div>
            <h3>{selectedUser.name}'s Answers</h3>
            {makemoreData.map((q, idx) => (
              <div key={idx} style={{ marginBottom: "15px" }}>
                <p><strong>{q.question}</strong></p>
                <p>Your Answer: {selectedUser.answers[idx]}</p>
                <p>Correct Answer: {q.answer}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Select a user to see details</p>
        )}
      </div>
    </div>
    </>
  );
}
