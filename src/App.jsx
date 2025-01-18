import React, { useState } from "react";

function App() {
  const questions = [
    {
      questionText: "1. Where is RK University Located?",
      options: [
        { answerText: "Ahmedabadh", isCorrect: false },
        { answerText: "Vadodara", isCorrect: false },
        { answerText: "Rajkot", isCorrect: true },
        { answerText: "Surat", isCorrect: false },
      ],
    },
    {
      questionText: "2. Which language is used for web apps?",
      options: [
        { answerText: "Python", isCorrect: false },
        { answerText: "JavaScript", isCorrect: true },
        { answerText: "C++", isCorrect: false },
        { answerText: "Java", isCorrect: false },
      ],
    },
    {
      questionText: "3. What is React?",
      options: [
        { answerText: "A database", isCorrect: false },
        { answerText: "A framework", isCorrect: true },
        { answerText: "A compiler", isCorrect: false },
        { answerText: "None of the above", isCorrect: false },
      ],
    },
    {
      questionText: "4. Which is the Capital City of Gujrat?",
      options: [
        { answerText: "Ahmedabadh", isCorrect: false },
        { answerText: "Vadodara", isCorrect: false },
        { answerText: "Gandhinagar", isCorrect: true },
        { answerText: "Surat", isCorrect: false },
      ],
    },
    {
      questionText: "4. Which is the Capital City of India?",
      options: [
        { answerText: "Ahmedabadh", isCorrect: false },
        { answerText: "Mumbai", isCorrect: false },
        { answerText: "Delhi", isCorrect: true },
        { answerText: "Patna", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null); // Track the selected answer
  const [isCorrect, setIsCorrect] = useState(null); // Track if the selected answer is correct

  const handleAnswerOptionClick = (isCorrect, index) => {
    // Set the correctness and selected option
    setIsCorrect(isCorrect);
    setSelectedOption(index);

    if (isCorrect) {
      setScore(score + 1); // Increment score if correct
    }

    // Wait for a short delay before moving to the next question
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedOption(null); // Reset selected option
        setIsCorrect(null); // Reset correctness
      } else {
        setShowScore(true); // Show score if no more questions
      }
    }, 1000); // 1-second delay
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px", textAlign: "center" }}>
      <h1>Quiz App</h1>
      {showScore ? (
        <div>
          <h2>Your Score: {score} / {questions.length}</h2>
          <button onClick={handleRestart} style={{ padding: "10px", marginTop: "20px" }}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <div>
          <h3>{questions[currentQuestion].questionText}</h3>
          <div style={{ marginTop: "20px" }}>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option.isCorrect, index)}
                style={{
                  display: "block",
                  margin: "10px auto",
                  padding: "10px",
                  width: "100%",
                  maxWidth: "300px",
                  backgroundColor:
                    selectedOption === index
                      ? isCorrect
                        ? "green"
                        : "red"
                      : "yellow",
                  color: selectedOption === index ? "Yellow" : "black",
                  border: "1px solid black",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                disabled={selectedOption !== null} // Disable buttons after selection
              >
                {option.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;