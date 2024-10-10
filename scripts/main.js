////////////// GAME BOARD COORDINATES
/// 0 1 2
/// 3 4 5
/// 6 7 8

// whole game is tucked away in a IIFE
const game = (function () {
    function init() {
        const player1 = createPlayer("Player 1", "X");
        const player2 = createPlayer("Player 2", "O");

        // game board is an array with 9 entries reflective of the 9 fields
        // filled with null in the beginning, to suggest being empty on purpose
        let board = [null, null, null, null, null, null, null, null, null];

        let currentTurnBy = player1;

        return {player1, player2, board, currentTurnBy};
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
            gameStatus.board[position] = gameStatus.currentTurnBy.marker;
            console.log(gameStatus.board);
            console.log("Marker placed");
            gameFlow();
        }
        return;
    }

    function gameFlow() {
        winner = checkWinningCondition();
        
        if (winner !== null) {
            announceWinner(winner)
        } else {
            flipCurrentTurnBy();
        }
    }

    function checkWinningCondition() {
        console.log("Check winning condition");
        let m = gameStatus.currentTurnBy.marker;
        let b = gameStatus.board;
        // check horizontal, vertical and diagonal winning conditions
        if (   (b[0] === m && b[1] === m && b[2] === m) 
            || (b[3] === m && b[4] === m && b[5] === m) 
            || (b[6] === m && b[7] === m && b[8] === m) 
            || (b[0] === m && b[3] === m && b[6] === m)
            || (b[1] === m && b[4] === m && b[7] === m) 
            || (b[2] === m && b[5] === m && b[8] === m) 
            || (b[0] === m && b[4] === m && b[8] === m) 
            || (b[2] === m && b[4] === m && b[6] === m)) {
                return gameStatus.currentTurnBy;
        } else {
                return null;
        }
    }

    function flipCurrentTurnBy() {
        if (gameStatus.currentTurnBy === gameStatus.player1) {
            gameStatus.currentTurnBy = gameStatus.player2;
        } else if (gameStatus.currentTurnBy === gameStatus.player2) {
            gameStatus.currentTurnBy = gameStatus.player1
        }
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