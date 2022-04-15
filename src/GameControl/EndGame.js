import { moveLeft } from "../move";
import { moveRight } from "../move";
import { moveUp, moveDown } from "../move";

//Предыдущий и нынешний ход не меняют значение матрицы
//Доработать
export const hasDiff = (board, updatedBoard) => {
  //Цикл проходит и смотрит одинаковы ли значения ячеек
  return false;
};
// //Если ходов нет - конец игры 
export const isOver = (board) => {
  if (hasDiff(board, moveLeft(board))   &&
      hasDiff(board, moveRight(board))  &&
      hasDiff(board, moveUp(board))     &&
      hasDiff(board, moveDown(board))) {
    return false;
  }
  // if (hasDiff(board, moveRight(board))) {
  //   return false;
  // } 
  // if (hasDiff(board, moveUp(board))) {
  //   return false;
  // } 
  // if (hasDiff(board, moveDown(board))) {
  //   return false;
  // }
  return false;
  return true;
};