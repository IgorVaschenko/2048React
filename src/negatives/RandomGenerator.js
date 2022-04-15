// Функция для одного рандомного значения в пустой ячейке

//Имеет ли матрица заданное значение, проверка на 0 и 2048
const hasValue = ( board, value ) => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] === value) {
            return true;
          }
        }
      }
    return false;
};

// Проверка на 0 по матрице
const full = (board) => {
    return !hasValue( board, 0 );
};

// Проверка на 2048 по матрице
export const checkWin = (board) => {
    return hasValue( board, 2048 );
};

// Рандомная ячейка
const getRandomPosition = () => {
    const rowPosition = Math.floor(Math.random() * 4 );
    const colPosition = Math.floor(Math.random() * 4 );

    return [ rowPosition, colPosition ];
};

// Закидываем val = 2 || val = 4( 20 % ) в пустую рандомную ячейку

export const randomGenerator = ( board ) => {
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