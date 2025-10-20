import React, { useState, useEffect } from 'react';
import { questions as allQuestions } from '../data/topics';

function Quiz() {
  const [category, setCategory] = useState('All');
  const [questions, setQuestions] = useState(allQuestions);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (category === 'All') {
      setQuestions(allQuestions);
    } else {
      setQuestions(allQuestions.filter(q => q.category === category));
    }
    setCurrent(0);
    setScore(0);
    setShowResult(false);
  }, [category]);

  const categories = ['All', ...new Set(allQuestions.map(q => q.category))];

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div>
        <h2>Quiz Complete!</h2>
        <p>Your score: {score} / {questions.length}</p>
        <button onClick={resetQuiz}>Try Again</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Quiz</h2>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      {questions.length > 0 && (
        <div>
          <h3>{questions[current].question}</h3>
          {questions[current].options.map(option => (
            <button key={option} onClick={() => handleAnswer(option)}>{option}</button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Quiz;
