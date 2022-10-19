
const BOARD = (function(){
    let squares =   [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
    const squareElements = document.querySelectorAll('.square');
    const updateBoard = () => {
        squares.forEach((mark, index) => squareElements[index].innerHTML = mark);
    };

    const move = (mark, index) => {
        if(squares[index] != '') return;
        squares[index] = mark;
        squareElements[index].innerHTML = mark;
        updateBoard();
    };

    const isOver = () => {
        //rows
        if (squares[0] != '' && squares[0] == squares[1] 
            && squares[1] == squares[2]) return squares[0];
        if (squares[3] != '' && squares[3] == squares[4] 
            && squares[4] == squares[5]) return squares[3];
        if (squares[6] != '' && squares[6] == squares[7] 
            && squares[7] == squares[8]) return squares[6];
        //cols
        if (squares[0] != '' && squares[0] == squares[3] 
            && squares[3] == squares[6]) return squares[0];
        if (squares[1] != '' && squares[1] == squares[4] 
            && squares[4] == squares[7]) return squares[1];
        if (squares[2] != '' && squares[2] == squares[5] 
            && squares[5] == squares[8]) return squares[2];
        //diagonals
        if (squares[0] != '' && squares[0] == squares[4] 
            && squares[4] == squares[8]) return squares[0];
        if (squares[2] != '' && squares[2] == squares[4] 
            && squares[4] == squares[6]) return squares[2];
        //keep playing or tie
        if (squares.includes('')) return 'keep playing';
        return 'tie';
    };

    return{updateBoard, move, isOver};
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

    const whoWon = () => {
        let result = BOARD.isOver();
        switch (result) {
            case player1.mark:
                return player1.name;
            case player2.mark:
                return player2.name;
            case 'tie':
                return 'tie';
            default:
                return 'keep palying';
        }
    };

    return {whoWon};
})(player1, player2);

