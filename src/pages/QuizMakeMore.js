import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { makemoreData } from "../data/makemore";
import Navbar from "../components/Navbar";

const QuizMakeMore = () => {
  const { user, results, setResults } = useContext(AppContext);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (qIndex, value) => {
    setAnswers({ ...answers, [qIndex]: value });
  };

  const handleSubmit = () => {
    const score = makemoreData.reduce(
      (acc, q, idx) => acc + (answers[idx] === q.answer ? 1 : 0),
      0
    );

    const updated = { ...results };
    if (!Array.isArray(updated.makemore)) {
      updated.makemore = [];
    }

    const userIndex = updated.makemore.findIndex(r => r.name === user);

    if (userIndex >= 0) {
      updated.makemore[userIndex] = { name: user, answers, score };
    } else {
      updated.makemore.push({ name: user, answers, score });
    }

    setResults(updated);
    setSubmitted(true);
  };

  return (
    <div>
      <Navbar />
      <h2>MakeMore Quiz</h2>
      {makemoreData.map((q, idx) => (
        <div key={idx}>
          <p>{q.question}</p>
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

export default QuizMakeMore;
