GAME DESIGN
- two players; 1 gameboard
- while taking turns: put a marker on the gameboard
- check for ties
- when 3 in a row: display a winner
- horizontal, vertical and diagonal allowed


GAME LOGIC
- array that stores gameboard
- marker will be array entry; X or O
- during every turn: check, if a field is already blocked by a previous marker
- after every turn check for winning condition
- if there is a winner: display dialog with announcements and button to restart
- button to reset the game


DESIGN PATTERNS
- 1 game object
    - 1 gameboard object
        - array of markers
    - 2 player objects
        - name
        - which marker
        - myturn (boolean)
        - place marker (method) -> access to player
    - 1 game flow object
        - check for blocked fields
        - check winning condition
        - check for ties (after 9 turns)
        - flip myTurn after every marker placed
        - button to restart the game -> access to player
    - 1 render (displayController)


SPECS FROM ODIN
- store gameboard inside an array inside a gameboard object
- object to control the flow of the game
- player object
- gameobject
- single instance of gameboard; single instance of displayController (render)
    - wrap into IIFE module, so only one instance possible
- as little global code as possible, everything in factories