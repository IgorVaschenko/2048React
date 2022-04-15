import { full, checkWin } from "../GameControl/Checks";
import { getRandomPosition } from "./GetRandomPosition";

// Закидываем val = 2 || val = 4( 20 % ) в пустую рандомную ячейку
const randomGenerator = ( board ) => {
    if( full(board) ) {
        return board;
    }

    let [ row, col ] = getRandomPosition();
    while ( board[row][col] !==0 ){
        [ row, col ] = getRandomPosition(); 
    }

    board[row][col] = ( Math.random() > 0.8 ) ? 4: 2;
    return board;
}

export { randomGenerator, checkWin }