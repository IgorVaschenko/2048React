import { emptyArea } from "../GameControl/EmptyArea";
import { moveLeft } from "./MoveLeft";

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