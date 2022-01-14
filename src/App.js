import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import questionsData from "./data";
import Questions from "./questions";

function App() {
  const [questions, setQuestions] = useState(questionsData);
  return (
    <>
      <main>
        <article className="container">
          <h2>Questions And Answers About Login</h2>
          <div className="questions">
            <Questions questions={questions} />
          </div>
        </article>
      </main>
    </>
  );
}

export default App;
