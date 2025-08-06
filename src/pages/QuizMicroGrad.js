import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { microgradData } from "../data/micrograd";
import Navbar from "../components/Navbar";

const QuizMicroGrad = () => {
  const { user, results, setResults } = useContext(AppContext);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (qIndex, value) => {
    setAnswers({ ...answers, [qIndex]: value });
  };

  const handleSubmit = () => {
    const score = microgradData.reduce(
      (acc, q, idx) => acc + (answers[idx] === q.answer ? 1 : 0),
      0
    );

    const updated = { ...results };
    if (!Array.isArray(updated.micrograd)) {
      updated.micrograd = [];
    }

    const userIndex = updated.micrograd.findIndex(r => r.name === user);

    if (userIndex >= 0) {
      updated.micrograd[userIndex] = { name: user, answers, score };
    } else {
      updated.micrograd.push({ name: user, answers, score });
    }

    setResults(updated);
    setSubmitted(true);
  };

  return (
    <div>
      <Navbar />
      <h2>MicroGrad Quiz</h2>
      {microgradData.map((q, idx) => (
        <div key={idx}>
          <p>{q.question}</p>
          {console.log(q.options)}
          {q?.options.map((opt, oidx) => (
            <label key={oidx}>
              <input
                type="radio"
                name={`q${idx}`}
                value={opt}
                checked={answers[idx] === opt}
                onChange={() => handleChange(idx, opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit} disabled={submitted}>
        Submit
      </button>
      {submitted && <p>Your answers have been submitted!</p>}
    </div>
  );
};

export default QuizMicroGrad;
