import React, { useEffect, useState} from 'react';

import { emptyArea } from "./EmptyArea";
import { moveLeft, moveRight, moveUp, moveDown } from './move';
import { randomGenerator, checkWin } from './RandomGenerator'
import { isOver }  from './GameControl/EndGame';


const Cell = ({ number }) => {
    return (
        <div
            className={`cell cell-${number}`}
        >
            { number > 0 ? number : ''}
        </div>
    )
};


const GameControl = () => {
    const [ board, updateBoard ] = useState(randomGenerator(emptyArea()));

    const checkEndGame = () => {
        if ( checkWin(board) ){
            alert('YOU WIN!!!');
        } else if ( isOver(board) ) {
            alert('YOU LOSE!!!');
        }
    };

    const left = () => {
        const newBoard = moveLeft(board);
        updateBoard(randomGenerator(newBoard));
        checkEndGame();
    };

    const right = () => {
        const newBoard = moveRight(board);
        updateBoard(randomGenerator(newBoard));
        checkEndGame();
    };

    const up = () => {
        const newBoard = moveUp(board);
        updateBoard(randomGenerator(newBoard));
        checkEndGame();
    };

    const down = () => {
        const newBoard = moveDown(board);
        updateBoard(randomGenerator(newBoard));
        checkEndGame();
    };
    
    const onKeyDown = (event) => {
        switch( event.key ) {
            case 'ArrowLeft':
                left();
                break;
            case 'ArrowRight':
                right();
                break;
            case 'ArrowUp':
                up();
                break;
            case 'ArrowDown':
                down();
                break;

            default:
        }
    };

    useEffect(() =>{
        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    });

    return(
        <>
            <div className='game-board'>
                {board.map((row, i) => {
                    return (
                        <div key={`row-${i}`} className='row'>
                            {row.map((cell, j) => (
                                <Cell key={`cell-${i}-${j}`} number={cell} />
                            ))}
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default GameControl;