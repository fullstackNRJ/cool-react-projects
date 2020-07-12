import React from 'react'

type Props = {
    questions: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNr: number;
    totalQuestions: number;

}



const QuestionCard: React.FC<Props> = ({ question, questionNr, answers, userAnswer, callback, totalQuestions }) => (
    <div>
    <p>
    Question : {questionNr}/{totalQuestions}
    </p>

    <p dangerouslySetInnerHTML= {{__html:question}}/>
    <div> 
        {answers.map(answer =>{
            <p dangerouslySetInnerHTML = {{__html:answer}}/>
        })}
    </div>    
</div>)


export default QuestionCard;