export const emptyArea = () => [
    [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 0 ]
];



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
export const full = (board) => {
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



//LEFT
//перемещаем значения  > 0  BЛEВО
const stir = ( board ) => {
    const newBoard = emptyArea();

//     board.map((el,i) => {
//         let colIndex = 0;
//         el.map((e,j) => {
//             if ( board[i][j] !==0 ) {
//                 newBoard[i][colIndex] = board[i][j];
//                 colIndex++;
//             }
//         })
//         return newBoard;
//     })
// };
    for( let i = 0; i < board.length; i++ ){
        let colIndex = 0;

        for ( let j = 0; j < board[i].length; j++ ){
            if ( board[i][j] !==0 ) {
                newBoard[i][colIndex] = board[i][j];
                colIndex++;
            }
        }
    }
    return newBoard;
};

//Схлопываем одинаковые значения
const collapse = (board) => {

    // board.map((el,i) => {
    //     el.map((e,j) => {
    //         if( board[i][j] !== 0 && board[i][j] === board[i][j + 1] ) {
    //             board[i][j] = board[i][j] * 2;
    //             board[i][j + 1] = 0;
    //         }
    //     })
    // })
    
    
    
    // board.map((el,i) => {
    //     el.map((e,j) => {
    //         if( board[i][j] !== 0 && board[i][j] === board[i][j + 1] ) {
    //             board[i][j] = board[i][j] * 2;
    //             board[i][j + 1] = 0;
    //         }
    //     })
    // })


    for( let i = 0; i < board.length; i++ ){
        for ( let j = 0; j < board[i].length - 1; j++ ){
            if( board[i][j] !== 0 && board[i][j] === board[i][j + 1] ) {
                board[i][j] = board[i][j] * 2;
                board[i][j +1] = 0
            }
        }
    }
}


export const moveLeft = ( board ) => {
    const newBoard1 = stir(board);
    const newBoard2 = collapse(newBoard1);

    return stir(newBoard2);
}

//RIGHT
//Перемещение вправо - это отзеркаливание : влево : отзеркаливание 
//ПЕРЕДЕЛАТЬ ЧЕРЕЗ /МАР/
const reverse = ( board ) => {
    const reverseBoard = emptyArea();

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
          reverseBoard[i][j] = board[i][board[i].length - 1 - j];
        }
      }
      return reverseBoard;
};

export const moveRight = ( board ) => {
    const reversedBoard = reverse( board );
    const newBoard = moveLeft( reversedBoard );
    
    return reverse( newBoard );
}

//UP
// -90grad moveLeft +90grad

const rotateLeft = ( board ) => {
    const rotateBoard = emptyArea();
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            rotateBoard[i][j] = board[j][board[i].length - 1 - i];
        }
    }
    
    return rotateBoard;
};

const rotateRight = ( board ) => {
    const rotateBoard = emptyArea();
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            rotateBoard[i][j] = board[board[i].length - 1 - j][i];
        }
    }
    
    return rotateBoard;
};

export const moveUp = ( board ) => {
    const rotateBoard = rotateLeft(board);
    const newBoard = moveLeft(rotateBoard);
    
    return rotateRight(newBoard);
};

//DOWN
export const moveDown = ( board ) => {
    const rotateBoard = rotateRight(board);
    const newBoard = moveLeft(rotateBoard);
    
    return rotateLeft(newBoard);
};


//Предыдущий и нынешний ход не меняют значение матрицы
const hasDiff = (board, updatedBoard) => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] !== updatedBoard[i][j]) {
          return true;
        }
      }
    }
    return false;
  };
  
//Если ходов нет - конец игры 
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