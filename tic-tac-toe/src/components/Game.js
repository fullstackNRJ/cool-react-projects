import React from 'react'
import isWinner from '../winner'
import { useState } from 'react'
import Board from './Board'

const styles = {
  width: '200px',
  margin: '20px auto',
};

export default function Game() {

    const [boardHistory, setBoardHistory] = useState([Array(9).fill(null)])
    const  [currentBoard, setCurrentBoard] = useState(0)
    const [XTurn, setXTurn] = useState(true)
    const winner = isWinner(boardHistory[currentBoard])

    const handleClick = i =>{
      const timeInBoardHistory = boardHistory.slice(0, currentBoard + 1)
      const current = timeInBoardHistory[currentBoard]

    //copy board
    let currentBoardCopy = [...current]
      //check winner status or if square is occupied
    console.log('winner', winner)
    if( winner || currentBoardCopy[i]) return;

    currentBoardCopy[i] = XTurn ? 'X':'O'
    setBoardHistory([...timeInBoardHistory, currentBoardCopy])
    setCurrentBoard(timeInBoardHistory.length)
    setXTurn(!XTurn)

    }

    const jumpTo = step =>{
      setCurrentBoard(step)
      setXTurn(step % 2 === 0)

    }

    const renderMoves = () => (
      boardHistory.map((_step, move)=>{
        const destination = move ? `Go to move#${move}` : 'Go to start'
        return (
        <li key = {move}>
          <button onClick ={()=>jumpTo(move)}>{destination}</button>    
        </li>
          )
      })
    )
    
    
  return (
    <div>
     <Board squares={boardHistory[currentBoard]} onClick={handleClick}/> 
    <div style={styles}>

     <p> {winner ? `Winner : ${winner}`  :'Next player : ' + (XTurn ? 'X' : 'O')}</p>
     {renderMoves()}
    </div>
    </div>
  )
}
