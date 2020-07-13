import React, {useState} from 'react';
import {fetchQuizQuestions, Difficulty, QuestionState} from './api';
import QuizCard from './components/quizcard';
import DropDown from './components/dropdown';



export type AnswerObject = {
  question:string;
  answer:string;
  correct:boolean;
  correctAnswer:string;
}

const categories = [
  {option:'Sports', value:22}, 
  {option:'Mythology', value:23}
]

const level = [{option:'Select difficulty'},{option:'EASY', value:'EASY'}, {option:'MEDIUM', value:'MEDIUM'},{option:'HARD', value:'HARD'}] 

const App : React.FC = () => {
  
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [difficulty_level, setdifficuly_level] = useState(Difficulty.MEDIUM);
  const [category, setCategory] = useState(11);
  const TOTAL_QUESTIONS = 10
  //console.log(fetchQuizQuestions(10, Difficulty.EASY,21))

  const startTrivia = async () =>{
    setLoading(true)
    setGameOver(false)
    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS,difficulty_level,category)
    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
  }

  const updateDifficulty_level = (e:React.MouseEvent<HTMLButtonElement>) =>{
    const {name, value} = e.target
    console.log('name', name, 'value :', value)
    setdifficuly_level(value)
    console.log('difficulty', difficulty_level)
  }

  const updateCategory = (e:React.MouseEvent<HTMLButtonElement>) =>{
    const {value} = e.target
    setCategory(value)
  }

  const checkAnswer = (e:React.MouseEvent<HTMLButtonElement>) =>{
    if(!gameOver){
      //user's answer 
      const answer = e.currentTarget.value;
      //check answer against correct answer
      const correct = questions[number].correct_answer === answer;

      if(correct){
        setScore((prev)=> prev+1);
      }

      const answerObject = {
        question : questions[number].question,
        answer,
        correct,
        correctAnswer : questions[number].correct_answer,
      };
      setUserAnswers(prev=> [...prev,answerObject])
    }

  }

  const nextQuestion = () =>{
    const nextQues = number + 1;
    
    if(nextQues === TOTAL_QUESTIONS){
      setGameOver(true)
    }else{
      setNumber(nextQues)
    }
  }
  
  return (
    <div className="App">
      <h1> React Quiz</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ?
    ( 
      <div className = "main_row">
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <DropDown name="Difficulty" dropdowndata={level} handleChange={updateDifficulty_level} currentValue={difficulty_level} />
      <DropDown name="Categories" dropdowndata={categories} handleChange={updateCategory} currentValue={category} />
      </div>
    ): null 
      }
      {!gameOver ?<p className="score">Score : {score}</p> : null}
      {loading ? <p>Loading Questions...</p>:null}
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
    </div>
  );
}

export default App;
