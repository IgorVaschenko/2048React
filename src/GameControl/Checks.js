import { hasValue } from "./HasVal";

// Проверка на 0 по матрице
export const full = (board) => {
    return !hasValue( board, 0 );
};

// Проверка на 2048 по матрице
export const checkWin = (board) => {
    return hasValue( board, 2048 );
};