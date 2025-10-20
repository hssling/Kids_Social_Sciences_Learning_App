import React, { useState } from 'react';
import { gamesData } from '../data/topics';

function MatchingGame({ onBack }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [matched, setMatched] = useState([]);
  const pairs = gamesData.matching;

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const handleContinentClick = (continent) => {
    if (selectedCountry) {
      const pair = pairs.find(p => p.country === selectedCountry && p.continent === continent);
      if (pair) {
        setMatched([...matched, pair]);
        setSelectedCountry(null);
      }
    }
  };

  const reset = () => {
    setMatched([]);
    setSelectedCountry(null);
  };

  return (
    <div>
      <button onClick={onBack}>Back to Games</button>
      <h2>Match Countries to Continents</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div>
          <h3>Countries</h3>
          {pairs.filter(p => !matched.includes(p)).map(p => (
            <button 
              key={p.country} 
              onClick={() => handleCountryClick(p.country)}
              disabled={matched.some(m => m.country === p.country)}
            >
              {p.country}
            </button>
          ))}
        </div>
        <div>
          <h3>Continents</h3>
          {["Asia", "Africa", "Europe", "North America", "South America", "Australia"].map(cont => (
            <button 
              key={cont} 
              onClick={() => handleContinentClick(cont)}
            >
              {cont}
            </button>
          ))}
        </div>
      </div>
      <p>Selected: {selectedCountry || 'None'}</p>
      <p>Matched: {matched.length}/{pairs.length}</p>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

function FlashcardGame({ onBack }) {
  const [current, setCurrent] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const cards = gamesData.flashcards;

  return (
    <div>
      <button onClick={onBack}>Back to Games</button>
      <h2>Flashcards</h2>
      {cards.length > 0 && (
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
          <h3>{showAnswer ? cards[current].definition : cards[current].term}</h3>
          <button onClick={() => setShowAnswer(!showAnswer)}>{showAnswer ? 'Hide' : 'Show Answer'}</button>
          <div>
            <button onClick={() => { setCurrent((current - 1 + cards.length) % cards.length); setShowAnswer(false); }}>Prev</button>
            <button onClick={() => { setCurrent((current + 1) % cards.length); setShowAnswer(false); }}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
}

function TrueFalseGame({ onBack }) {
  const trueFalseQuestions = [
    { question: "India has the largest democracy.", answer: true },
    { question: "There are 8 continents.", answer: false },
    { question: "Pyramids are in Egypt.", answer: true },
    { question: "Kangaroos live in Africa.", answer: false },
    { question: "Constitution protects everyone's rights.", answer: true },
    { question: "All continents have animals.", answer: true },
    { question: "Money was invented in stone age.", answer: false },
    { question: "Government builds roads.", answer: true },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const handleAnswer = (userAnswer) => {
    if (!answered) {
      setAnswered(true);
      if (userAnswer === trueFalseQuestions[current].answer) {
        setScore(score + 1);
        alert("Correct!");
      } else {
        alert("Wrong! The answer is " + (trueFalseQuestions[current].answer ? "True" : "False"));
      }
    }
  };

  const nextQuestion = () => {
    if (current < trueFalseQuestions.length - 1) {
      setCurrent(current + 1);
      setAnswered(false);
    } else {
      alert(`Game Over! Score: ${score}/${trueFalseQuestions.length}`);
    }
  };

  return (
    <div>
      <button onClick={onBack}>Back to Games</button>
      <h2>True or False</h2>
      <p>{trueFalseQuestions[current].question}</p>
      <div>
        <button onClick={() => handleAnswer(true)} disabled={answered}>True</button>
        <button onClick={() => handleAnswer(false)} disabled={answered}>False</button>
      </div>
      {answered && (
        <div>
          <button onClick={nextQuestion}>Next Question</button>
        </div>
      )}
      <p>Score: {score}/{current + 1}</p>
    </div>
  );
}

function Games() {
  const [game, setGame] = useState('menu');

  return (
    <div>
      {game === 'menu' && (
        <div>
          <h2>Choose a Game</h2>
          <button onClick={() => setGame('matching')}>Country Matching</button>
          <button onClick={() => setGame('flashcards')}>Flashcards</button>
          <button onClick={() => setGame('truefalse')}>True or False</button>
        </div>
      )}
      {game === 'matching' && <MatchingGame onBack={() => setGame('menu')} />}
      {game === 'flashcards' && <FlashcardGame onBack={() => setGame('menu')} />}
      {game === 'truefalse' && <TrueFalseGame onBack={() => setGame('menu')} />}
    </div>
  );
}

export default Games;
