import { emptyArea } from "../GameControl/EmptyArea";

export const rotateLeft = ( board ) => {
    const rotateBoard = emptyArea();
    
    board.map((el, i) => {
        el.map((e, j) => {
            rotateBoard[i][j] = board[j][board[i].length - 1 - i];
        });
    });
    
    return rotateBoard;
};

export const rotateRight = ( board ) => {
    const rotateBoard = emptyArea();
    
    board.map((el, i) => {
        el.map((e, j) => {
            rotateBoard[i][j] = board[board[i].length - 1 - j][i];
        });
    });
 
    return rotateBoard;
};