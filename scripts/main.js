

// whole game is tucked away in a IIFE
const game = (function () {
    function init() {
        const player1 = createPlayer("Player 1", "X");
        const player2 = createPlayer("Player 2", "O");

        // gameboard is an array with 9 entries reflective of the 9 fields
        // filled with null in the beginning, to suggest being empty on purpose
        const board = [null, null, null, null, null, null, null, null, null];

        return {player1, player2, board};
    }

    // player only needs name and marker; 
    function createPlayer(name, marker) {
        return {name, marker};
    }

    function placeMarker() {
        console.log("Marker placed");
    }

    function resetGame() {
        console.log("Reset game");
    }


    let gameStatus = init();

    return { 
        placeMarker, resetGame
    };


})();