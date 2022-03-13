import Square from "../Square/Square";
import './Board.css';

const Board = ({squares, onClick, turn, winningSquares }) => {

    const createSquares = values => (
        values.map( value => (
            <Square
                winner={winningSquares.includes(value)}
                turn={turn}
                onClick={() => onClick(value)}
                value={squares[value]}
                key={`square_${value}`}
            />
        ))
    );

    return (
        <div className="board">
            <div className="row">
               {createSquares([0,1,2,3])}
            </div>
            <div className="row">
                {createSquares([4,5,6,7])}
            </div>
            <div className="row">
                {createSquares([8,9,10,11])}
            </div>
            <div className="row">
                {createSquares([12,13,14,15])}
            </div>
        </div>
    );
}

export default Board;