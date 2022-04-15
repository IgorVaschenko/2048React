import { emptyArea } from "./EmptyArea";

//LEFT
//перемещаем значения  > 0  BЛEВО
const stir = ( board ) => {
    const newBoard = emptyArea();

    board.map((el,i) => {
        let colIndex = 0;
        el.map((e,j) => {
            if ( board[i][j] !==0 ) {
                newBoard[i][colIndex] = board[i][j];
                colIndex++;
            }
        })
    })
    return newBoard;
};

//Схлопываем одинаковые значения
const collapse = (board) => {

    board.map((el,i) => {
        el.map((e,j) => {
            if( board[i][j] !== 0 && board[i][j] === board[i][j + 1] ) {
                board[i][j] = board[i][j] * 2;
                board[i][j + 1] = 0;
            }
        })
    })

    return board;
}

export const moveLeft = ( board ) => {
    const newBoard1 = stir(board);
    const newBoard2 = collapse(newBoard1);

    return stir(newBoard2);
}

//RIGHT
//Перемещение вправо - это отзеркаливание : влево : отзеркаливание 
const revers = ( board ) => {
    const reverseBoard = emptyArea();

    board.map((el, i) => {
        reverseBoard[i] = el.reverse();
    });

    return reverseBoard;
};

export const moveRight = ( board ) => {
    const reversedBoard = revers( board );
    const newBoard = moveLeft( reversedBoard );
    
    return revers( newBoard );
}

//UP
// -90grad moveLeft +90grad

const rotateLeft = ( board ) => {
    const rotateBoard = emptyArea();
    
    board.map((el, i) => {
        el.map((e, j) => {
            rotateBoard[i][j] = board[j][board[i].length - 1 - i];
        });
    });
    
    return rotateBoard;
};

const rotateRight = ( board ) => {
    const rotateBoard = emptyArea();
    
    board.map((el, i) => {
        el.map((e, j) => {
            rotateBoard[i][j] = board[board[i].length - 1 - j][i];
        });
    });
 
    return rotateBoard;
};

export const moveUp = ( board ) => {
    const rotateBoard = rotateLeft(board);
    const newBoard = moveLeft(rotateBoard);
    
    return rotateRight(newBoard);
};

//DOWN
// +90grad moveLeft -90grad
export const moveDown = ( board ) => {
    const rotateBoard = rotateRight(board);
    const newBoard = moveLeft(rotateBoard);
    
    return rotateLeft(newBoard);
};





