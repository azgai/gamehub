import { useState } from "react";

function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xTurn, setXTurn] = useState(true);

    function handleClick(index) {
        if (board[index]) return;

        const newBoard = [...board];
        newBoard[index] = xTurn ? "X" : "O";

        setBoard(newBoard);
        setXTurn(!xTurn);
    }

    return (
        <div className="page">
            <h1>Tic Tac Toe</h1>

            <div className="board">
                {board.map((cell, index) => (
                    <button
                        key={index}
                        className="cell"
                        onClick={() => handleClick(index)}
                    >
                        {cell}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default TicTacToe;