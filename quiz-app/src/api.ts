import { StyledInterface } from "styled-components"

export enum Difficulty {
    EASY ="easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export type Question = {
    category: string;
    correct_answer : string;
    incorrect_answers : string[];
    difficulty: string;
    question: string;
    type : string;
}

export type QuestionState = Question & {answers:string[]}

export const fetchQuizQuestions = async (amount: number, category:number) =>{
    console.log('diff', 'categ', category)
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=${category}`
    const data = await (await fetch(endpoint)).json()
    console.log(data)
    return data.results.map((question:Question) =>({

        ...question,
        answers: shuffleArray([
            ...question.incorrect_answers,
            question.correct_answer
        ])
    }))
}




const shuffleArray = (array:any[]) => [...array].sort(()=> Math.random() - .5);
