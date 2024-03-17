// QuizPage.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router

import QuestionRend from "./QuestionRend";
import { ResultCountUpdate } from "../../DataContext"; // Assuming you have a DataContext for result count

function QuizPage() {
  const [correctAnsw, setCorrectAnsw] = useState([]);
  const [userAnsw, setUserAnsw] = useState([]);

  // Custom hook for context API
  const setCount = ResultCountUpdate();
  const navigate = useNavigate(); // Use the useNavigate hook

  function quizSubmit(e) {
    e.preventDefault();
    let marks = 0;
    for (let i = 0; i < userAnsw.length; i++) {
      if (userAnsw[i] === correctAnsw[i]) {
        marks = marks + 1;
      }
    }

    setCount(marks);
    navigate("/UserResult"); // Use navigate directly
  }

  return (
    <div className="quiz_view d-flex justify-content-center">
      <div className="quiz-container">
        {/* Render questions and collect user answers */}
        <QuestionRend
          setCorrectAnsw={setCorrectAnsw}
          setUserAnsw={setUserAnsw}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="submit"
            className="quizsubmit"
            onClick={(e) => quizSubmit(e)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
