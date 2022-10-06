
const BOARD = (function(){
    let squares =   ['X', '', '',
                     'X', '', '',
                     '', 'O', ''
                    ];
    const squareElements = document.querySelectorAll('.square');
    const renderSquares = () => {
        squares.forEach((mark, index) => squareElements[index].innerHTML = mark);
    };

    return{renderSquares};
})();

const playerFactory = (name, mark) => {
    return {name, mark}
};

// create two players
const player1 = playerFactory('player 1', 'X');
const player2 = playerFactory('player 2', 'O');

