import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import TurnPlayer from './components/TurnPlayer/TurnPlayer';

const winningPositions = [
  [0,1,2,3],
  [4,5,6,7],
  [8,9,10,11],
  [12,13,14,15],
  [0,4,8,12],
  [1,5,9,13], 
  [2,6,10,14], 
  [3,7,11,15],
  [0,5,10,15],
  [3,6,9,12]
];


const App = () => {

  const [turn, setTurn] = useState('X');
  const [squares, setSquares] = useState(Array(16).fill(null));
  const [winningSquares, setWinningSquares] = useState([]);
  const [score, setScore] = useState({
    X: 0,
    O: 0,
  });

  const reset = () => {
    setTurn('X');
    setSquares(Array(16).fill(null));
    setWinningSquares([]);
  }

  const checkForWinner = newSquares => {
    for(let i = 0; i < winningPositions.length; i++) {
      const [a,b,c,d] = winningPositions[i];
      if(newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c] && newSquares[a] === newSquares[d] ) {
        endGame(newSquares[a], winningPositions[i]);
        return
      }
    }

    if(!newSquares.includes(null)) {
      endGame(null, Array.from(Array(17).keys()));
      return
    }
    setTurn(turn === 'X' ? 'O' : 'X');
  }

  const handleClick = square => {
    let newSquares = [...squares];
    newSquares.splice(square, 1, turn);
    setSquares(newSquares);
    checkForWinner(newSquares);
  }

  const endGame = (result, winningPositions) => {
    setTurn(null);
    if(result !== null) {
      setScore({
        ...score,
        [result]: score[result] + 1,
      })
    }
    setWinningSquares(winningPositions);
    setTimeout(reset, 2000);
  }

  return (
    <div className="container">
      <Board winningSquares={winningSquares} turn={turn} squares={squares} onClick={handleClick}/>
      <ScoreBoard scoreO={score.O} scoreX={score.X} />
      <TurnPlayer turn={turn}/>
    </div>
  );
}

export default App;
