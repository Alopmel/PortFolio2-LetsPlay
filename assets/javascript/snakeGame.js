// HTML Elements
const board = document.getElementById('board');
const scoreBoard = document.getElementById('scoreBoard');
const totalScore = document.getElementById('totalScore');
const startButtom = document.getElementById('start');
const resetButtom = document.getElementById('play-again');
const gameBoard = document.getElementById('snake');
const gameOverPage = document.getElementById('game-over');
const playGamePage = document.getElementById('start-game');

// Game settings
const boardSize = 10;
const gameSpeed = 100;
const squareTypes = {
    emptySquare: 0,
    snakeSquare: 1,
    foodSquare: 2,
};
const directions = {
    ArrowUp: -10,
    ArrowDown: 10,
    ArrowRight: 1,
    ArrowLeft: -1,
};

const drawSnake = () => {
    snake.forEach( square => drawSquare(square, 'snakeSquare'));
}
// Game variables
let snake;
let score = 0;
let direction;
let boardSquares;
let emptySquares;
let moveInterval;

// Draw Snake
const drawSquare = (square, type) => {
    const[ row, column] = square.split('');
    boardSquares[row][column] = squareTypes[type];
    const squareElement = document.getElementById(square);
    squareElement.setAttribute('class', `square ${type}`);

    if(type === 'emptySquare') {
        emptySquares.push(square);
    } else {
        if (emptySquares.indexOf(square) !== -1){
            emptySquares.splice(emptySquares.indexOf(square), 1)
        }
    }
}

// Create the directions commands
const setDirection = newDirection => {
    direction = newDirection;
}

const directionEvent = key => {
    switch (key.code) {
        case 'ArrowUp':
            direction != 'ArrowDown' && setDirection(key.code)
            break;
        case 'ArrowDown':
            direction != 'ArrowUp' && setDirection(key.code)
            break;
        case 'ArrowLeft':
            direction != 'ArrowRight' && setDirection(key.code)
            break;
        case 'ArrowRight':
            direction != 'ArrowLeft' && setDirection(key.code)
            break;
    }
}

// Move Snake

const moveSnake = () => {
    const newSquare = String(
        Number(snake[snake.length -1]) + directions[direction])
        .padStart(2, '0'); //pad the current string with a given string
        const [row, column] = newSquare.split('') // we take the row and column parameters from newSquare to be able to choose what we need in boardSquare

    if( newSquare < 0 || // it goes off the top edge
        newSquare > boardSize * boardSize || //comes out from the bottom edge
        ( direction === 'ArrowRight' && column == 0) || // comes off the right edge 
        ( direction === 'ArrowLeft' && column == 9 || // comes off the left edge
        boardSquares[row][column] === squareTypes.snakeSquare) ){ // square in which the snake is located
        gameOver();
        console.log(boardSquares)
  } else {
      snake.push(newSquare); //if the previous block is false we add the new square
      if(boardSquares[row][column] === squareTypes.foodSquare){ // we ask broadSquare (where all the information from our board is) if the square is a foodSquare
        addFood(); 
      }  else {
            const emptySquare = snake.shift(); // we take the first element and we take it out 
            drawSquare(emptySquare, 'emptySquare'); 
      }
      drawSnake();
  }
}

// function to add the square to our snake

const addFood = () => {
    score++;
    updateScore(); 
    createRandomFood();
}

// Create a game over function

const gameOver = () => {
    //gameOverSign.style.display = 'block';
    clearInterval(moveInterval) // we set the movement of the snake
    startButtom.disabled = false;
    gameBoard.style.display = 'none';
    gameOverPage.style.display = 'block'; // we activate the start button again
    updateScore();
}
// Create Ramdon Food

const createRandomFood = () => {
    const randomEmptySquare = emptySquares[Math.floor(Math.random() * emptySquares.length)];
    drawSquare(randomEmptySquare, 'foodSquare');
}
// Update Score

const updateScore = () => {
    scoreBoard.innerText = score;
    totalScore.innerText = score;
}

// Draw board
const createBoard = () => {
    boardSquares.forEach( (row, rowIndex)  =>  {
        row.forEach( (column, columnIndex) =>  {
            const squareValue = `${rowIndex}${columnIndex}`;
            squareElement = document.createElement('div');
            squareElement.setAttribute('class', 'square emptySquare');
            squareElement.setAttribute('id', squareValue);
            board.appendChild(squareElement);
            emptySquares.push(squareValue);

        })
    })
}

const setGame = () => {
    snake = ['00', '01', '02', '03'];
    score = 1; 
    direction = 'ArrowRight';
    boardSquares = Array.from(Array(boardSize), () => new Array(boardSize).fill(squareTypes.emptySquare));
    console.log(boardSquares)
    board.innerHTML= '';
    emptySquares = [];
    createBoard();
}
setGame();

const startGame = () => {    
    playGamePage.style.display = 'none';
    gameOverPage.style.display = 'none';
    gameBoard.style.display = 'block';
    startButtom.disabled = true;
    console.log("start")
    setGame();
    drawSnake();
    updateScore();
    createRandomFood();
    document.addEventListener('keydown', directionEvent);
    moveInterval = setInterval( () => moveSnake(), gameSpeed);
}

startButtom.addEventListener('click', startGame);
resetButtom.addEventListener('click', startGame);
