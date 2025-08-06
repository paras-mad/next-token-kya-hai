import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Login from "./pages/Login";
import Home from "./pages/Home";
import QuizMakeMore from "./pages/QuizMakeMore";
import QuizMicroGrad from "./pages/QuizMicroGrad";
import ResultsMakeMore from "./pages/ResultsMakeMore";
import ResultsMicroGrad from "./pages/ResultsMicroGrad";

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/next-token-kya-hai/login" element={<Login />} />
          <Route path="/next-token-kya-hai/welcome" element={<Home />} />
          <Route path="/next-token-kya-hai/makemore" element={<QuizMakeMore />} />
          <Route path="/next-token-kya-hai/makemore/results" element={<ResultsMakeMore />} />
          <Route path="/next-token-kya-hai/micrograd" element={<QuizMicroGrad />} />
          <Route path="/next-token-kya-hai/micrograd/results" element={<ResultsMicroGrad />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
