import React from 'react'

type Props = {
    questions: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNbr: number;
    totalQuestions: number;

}



const QuizCard: React.FC<Props> = ({ question, questionNbr, answers, userAnswer, callback, totalQuestions }) => (
    <div>
    <p>
    Question : {questionNbr}/{totalQuestions}
    </p>

    <p dangerouslySetInnerHTML= {{__html:question}}/>
    <div>
      {answers.map((answer) => (
        
          <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        
      ))}
    </div>  
</div>)


export default QuizCard;