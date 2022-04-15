import { rotateLeft, rotateRight } from "./Rotate";
import { moveLeft } from "./MoveLeft";

//UP
// -90grad moveLeft +90grad
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
