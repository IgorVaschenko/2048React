// Рандомная ячейка
export const getRandomPosition = () => {
    const rowPosition = Math.floor(Math.random() * 4 );
    const colPosition = Math.floor(Math.random() * 4 );

    return [ rowPosition, colPosition ];
};