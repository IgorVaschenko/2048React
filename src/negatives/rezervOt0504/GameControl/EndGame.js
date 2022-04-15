import { moveLeft } from "../move";
import { moveRight } from "../move";
import { moveUp, moveDown } from "../move";

//Предыдущий и нынешний ход не меняют значение матрицы
export const hasDiff = (board, updatedBoard) => {
  // for (let i = 0; i < board.length; i++) {
  //   for (let j = 0; j < board[i].length; j++) {
  //     if (board[i][j] !== updatedBoard[i][j]) {
  //       return true;
  //     }
  //   }
  // }
    return true;
    return false;
  };
  
// //Если ходов нет - конец игры 
  export const isOver = (board) => {
    if (hasDiff(board, moveLeft(board))) {  
      return false;
    } 
    if (hasDiff(board, moveRight(board))) {
      return false;
    } 
    if (hasDiff(board, moveUp(board))) {
      return false;
    } 
    if (hasDiff(board, moveDown(board))) {
      return false;
    }
    return true;
  };