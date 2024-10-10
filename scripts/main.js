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
        // filled with null in the beginning, to suggest being empty
        let board = ["", "", "", "", "", "", "", "", ""];

        let currentTurnBy = player1;
        let currentRound = 1;
        let winner = null;

        return {player1, player2, board, currentTurnBy, currentRound, winner};
    }

    function render() {
        const board = [];
        for (let i = 0; i < 10; i++) {
            board[i] = document.getElementById(i);
        }
        function renderBoard() {
            for (let i = 0; i < 9; i++) {
                board[i].textContent = gameStatus.board[i];
            }
        }
        return {renderBoard};
    }

    // player only needs name and marker; 
    function createPlayer(name, marker) {
        return {name, marker};
    }

    function placeMarker(position) {
        console.log("Evaluating marker");
        if (gameStatus.board[position] !== "") {
            console.log("Field already blocked!")
            return;
        } else {
            gameStatus.board[position] = gameStatus.currentTurnBy.marker;
            console.log(gameStatus.board);
            console.log("Marker placed");
            display.renderBoard();
            gameFlow();
        }
        return;
    }

    function gameFlow() {
        gameStatus.winner = checkWinningCondition();
        
        if (gameStatus.winner === gameStatus.player1 || gameStatus.winner === gameStatus.player2 || gameStatus.winner === "tie") {
            announceResult(gameStatus.winner)
        } else {
            flipCurrentTurnBy();
            gameStatus.currentRound++;
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
        } else if (gameStatus.currentRound === 9) {
            return "tie"
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

    function announceResult(result) {
        console.log(result);
    }

    function resetGame() {
        console.log("Reset game");
    }    
    
    let gameStatus = init();
    let display = render();
    
    return { 
        placeMarker, resetGame
    };


})();