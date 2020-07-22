import React, { useState } from 'react';
import { fetchQuizQuestions, QuestionState } from './api';
import QuizCard from './components/quizcard';
import DropDown from './components/dropdown';
import { Wrapper, GlobalStyle } from './App.styles'


export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}


const App: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [category, setCategory] = useState(11);
  const TOTAL_QUESTIONS = 10
  //console.log(fetchQuizQuestions(10, Difficulty.EASY,21))

  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)
    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, category)
    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
  }


  const updateCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.target
    setCategory(value)
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //user's answer 
      const answer = e.currentTarget.value;
      //check answer against correct answer
      const correct = questions[number].correct_answer === answer;

      if (correct) {
        setScore((prev) => prev + 1);
      }

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers(prev => [...prev, answerObject])
    }

  }

  const nextQuestion = () => {
    const nextQues = number + 1;

    if (nextQues === TOTAL_QUESTIONS) {
      setGameOver(true)
    } else {
      setNumber(nextQues)
    }
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1> React Quiz</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ?
          (
            <div className="main_row">
              <button className="start" onClick={startTrivia}>
                Start
      </button>
              <DropDown name="Categories" dropdowndata={categories} handleChange={updateCategory} currentValue={category} />
            </div>
          ) : null
        }
        {!gameOver ? <p className="score">Score : {score}</p> : null}
        {loading ? 
        (<>
          <p className="loader">Loading Questions...</p>
          <div className="spinner"></div>
          </>)
           : null}
        {!loading && !gameOver && (
          <QuizCard
            questionNbr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )

        }
        <button className="next" onClick={nextQuestion}>Next Question</button>

      </Wrapper>
    </>
  );
}

export default App;

const categories = [
  { option: 'General Knowledge', value: 9 },
  { option: 'Books', value: 10 },
  { option: 'Movies', value: 11 },
  { option: 'Music', value: 12 },
  { option: 'Musicals & Theatre', value: 13 },
  { option: 'Television', value: 14 },
  { option: 'Video Games', value: 15 },
  { option: 'Board Games', value: 16 },
  { option: 'Science', value: 17 },
  { option: 'Computers', value: 18 },
  { option: 'Mathemetics', value: 19 },
  { option: 'Mythology', value: 20 },
  { option: 'Sports', value: 21 },
  { option: 'Geography', value: 22 },
  { option: 'History', value: 23 },
  { option: 'Politics', value: 24 },
  { option: 'Art', value: 25 },
  { option: 'Celebrities', value: 26 },
  { option: 'Animals', value: 27},
  { option: 'Vehicles', value: 28 },
  { option: 'Comics', value: 29 },
  { option: 'Gadgets', value: 30 },
  { option: 'Japnese Manga comics', value: 31 },
  { option: 'Anime', value: 32 },
]