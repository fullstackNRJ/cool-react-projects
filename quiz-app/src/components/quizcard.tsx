import React from 'react'
import { Wrapper, ButtonWrapper } from '../components/quizcard.styles';

type Props = {
    questions: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: any;
    questionNbr: number;
    totalQuestions: number;

}



const QuizCard: React.FC<Props> = ({ question, questionNbr, answers, userAnswer, callback, totalQuestions }) => (
   <Wrapper>
   <div>
    <p>
    Question : {questionNbr}/{totalQuestions}
    </p>

    <p className="animate-card" dangerouslySetInnerHTML= {{__html:question}}/>
    <div>
      {answers.map((answer) => (
        <>
        <ButtonWrapper
        key={answer}
        correct = {userAnswer?.correctAnswer === answer}
        userClicked={userAnswer?.answer === answer}
        >
          <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
            <span className="animate-card" dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
      </>))}
    </div>  
</div>
</Wrapper>
)


export default QuizCard;