import React from 'react'
import isWinner from '../winner'
import { useState } from 'react'
import Board from './Board'
import { render } from '@testing-library/react'

export default function Game() {

    const [board, setBoard] = useState(Array(9).fill(null))
    const [XTurn, setXTurn] = useState(true)
    const winner = isWinner(board)

    const handleClick = i =>{
        //copy board
        let boardCopy = [...board]
        //check winner status or if square is occupied
        console.log('winner', winner)
        if( winner || boardCopy[i]) return;

        boardCopy[i] = XTurn ? 'X':'O'
        setBoard(boardCopy)
        setXTurn(!XTurn)

    }

    const jumpTo = () =>{

    }

    const renderMoves = () => (
        <button onClick ={()=>setBoard(Array(9).fill(null))}>
            Start Game
        </button>    
    )
    
    
  return (
    <div>
     <Board squares={board} onClick={handleClick}/> 
     <p> {winner ? `Winner : ${winner}`  :'Next player : ' + (XTurn ? 'X' : 'O')}</p>
     {renderMoves()}
    </div>
  )
}
