import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = isCorrect ? '#4CAF50' : '#f0f0f0';
  }, [isCorrect]);

  const handleGuess = (e) => {
    e.preventDefault();
    const userGuess = parseInt(guess);
    setAttempts(attempts + 1);

    if (userGuess === number) {
      setMessage(`Congratulations! You guessed the number in ${attempts + 1} attempts!`);
      setIsCorrect(true);
    } else if (userGuess < number) {
      setMessage('Too low! Try a higher number.');
    } else {
      setMessage('Too high! Try a lower number.');
    }

    setGuess('');
  };

  const resetGame = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('');
    setAttempts(0);
    setIsCorrect(false);
  };

  return (
    <div className="App">
      <h1>Guess the Number</h1>
      <p>I'm thinking of a number between 1 and 100.</p>
      <form onSubmit={handleGuess}>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Enter your guess"
          min="1"
          max="100"
          required
        />
        <button type="submit">Guess</button>
      </form>
      <p className="message">{message}</p>
      <p>Attempts: {attempts}</p>
      {isCorrect && <button onClick={resetGame}>Play Again</button>}
    </div>
  );
}

export default App;