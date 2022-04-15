//Имеет ли матрица заданное значение, будет проверка на 0 и 2048

export const hasValue = ( board, value ) => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] === value) {
            return true;
          }
        }
      }
    return false;
};