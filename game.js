
const BOARD = (function(){
    let squares =   [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
    const squareElements = document.querySelectorAll('.square');
    const renderSquares = () => {
        squares.forEach((mark, index) => squareElements[index].innerHTML = mark);
    };

    const move = (mark, index) => {
        if(squares[index] != '') return;
        squares[index] = mark;
        squareElements[index].innerHTML = mark;
        renderSquares();
    };

    return{renderSquares, move};
})();

const playerFactory = (name, mark) => {
    return {name, mark}
};

// create two players
const player1 = playerFactory('player 1', 'X');
const player2 = playerFactory('player 2', 'O');

const GAMEPLAY = (function(){
    let currentPlayer = player1;

    const squareElements = document.querySelectorAll('.square');
    const clickSquare = (e) => {
        const index = e.target.dataset.index;
        BOARD.move(currentPlayer.mark, index);// make move 
        currentPlayer = currentPlayer === player1 ? player2 : player1;// switch player
    };
    squareElements.forEach(square => square.addEventListener('click', clickSquare));
})(player1, player2);

