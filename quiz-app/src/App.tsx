import React, {useState} from 'react';
import {fetchQuizQuestions, Difficulty} from './api';

const App = () => {
  
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const TOTAL_QUESTIONS = 10
  console.log(fetchQuizQuestions(10, Difficulty.EASY,21))

  const startTrivia = () =>{
       
  }

  const checkAnswer = (e:React.MouseEvent<HTMLButtonElement>) =>{

  }

  const nextQuestion = () =>{

  }
  
  return (
    <div className="App">
      <h1> React Quiz</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score : </p>
      <p>Loading Questions...</p>

      <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
