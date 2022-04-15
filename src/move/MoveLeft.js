import { emptyArea } from "../GameControl/EmptyArea";

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
