////////////// GAME BOARD COORDINATES
/// 1 2 3 
/// 4 5 6
/// 7 8 9

// whole game is tucked away in a IIFE
const game = (function () {
    function init() {
        const player1 = createPlayer("Player 1", "X");
        const player2 = createPlayer("Player 2", "O");

        // game board is an array with 9 entries reflective of the 9 fields
        // filled with null in the beginning, to suggest being empty on purpose
        let board = [null, null, null, null, null, null, null, null, null];

        let nextTurnBy = player1;

        return {player1, player2, board, nextTurnBy};
    }

    // player only needs name and marker; 
    function createPlayer(name, marker) {
        return {name, marker};
    }

    function placeMarker(position) {
        console.log("Evaluating marker");
        if (gameStatus.board[position] !== null) {
            console.log("Field already blocked!")
            return;
        } else {
            gameStatus.board[position] = gameStatus.nextTurnBy.marker;
            console.log(gameStatus.board);
            console.log("Marker placed");
        }
        return;
        // if (gameStatus.board[position] === null) {
        //     gameStatus.board[position] = gameStatus.nextTurnBy.marker;
        //     console.log(gameStatus.board);
        //     console.log("Marker placed")
        // }
        // else {
        //     console.log("Field already blocked");
        // }
        // return gameStatus;
    }

    function gameFlow() {
        updateBoard();
        checkWinningCondition();
        announceWinner();
    }

            function updateBoard() {
                console.log("Update board");
            }

            function checkWinningCondition() {
                console.log("Check winning condition");
            }

            function announceWinner() {
                console.log("Announce Winner");
            }

    function resetGame() {
        console.log("Reset game");
    }
    
    
    let gameStatus = init();
    
    return { 
        placeMarker, resetGame
    };


})();