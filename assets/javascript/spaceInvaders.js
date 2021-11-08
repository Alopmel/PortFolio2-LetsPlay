const invadersGame = document.getElementById('invaders')
const grid = document.querySelector('.grid')
const scoreBoard = document.getElementById('scoreBoard');
const totalScore = document.getElementById('totalScore');
const startButtom = document.getElementById('start');
const playGamePage = document.getElementById('start-game');
const gameOverPage = document.getElementById('game-over');
const resetButtom = document.getElementById('play-again');
const resetPage = document.getElementById('text-reset');
//Variables

let currentShooterIndex = 202;
let width = 15;
let direction = 1;
let invadersId ;
let goingRight = true;
let aliensRemoved;
let score;
let alienInvaders = [];

const setGame = () => {
currentShooterIndex = 202;
width = 15;
aliensRemoved = [];
score = 0;
alienInvaders = [
  0,1,2,3,4,5,6,7,8,9,
  15,16,17,18,19,20,21,22,23,24,
  30,31,32,33,34,35,36,37,38,39
];
draw();
}
//Start Game

const startGame = () => {    
  playGamePage.style.display = 'none';
  gameOverPage.style.display = 'none';
  invadersGame.style.display = 'block';
  startButtom.disabled = true;
  console.log("start")
  setGame();
  invadersId = setInterval(moveInvaders, 600);
}

startButtom.addEventListener('click', startGame);
resetButtom.addEventListener('click', startGame);

// Create divs 
for (let i = 0; i < 225; i++) {
    const square = document.createElement('div')
    grid.appendChild(square)
  }
  
// Array from the div

const squares = Array.from(document.querySelectorAll('.grid div'))
// Index for put the aliens



// Draw the aliens on the array

function draw() {
    for (let i = 0; i < alienInvaders.length; i++) {
      if(!aliensRemoved.includes(i)) {
        squares[alienInvaders[i]].classList.add('invader')
      }
    }
}
  
draw()

// Remove the class added before

function remove(){
    for (let i=0; i < alienInvaders.length; i++){
        squares[alienInvaders[i]].classList.remove('invader')    
    }
}
// create the shooter and its movement

squares[currentShooterIndex].classList.add('shooter')

function moveShooter(e) {
    squares[currentShooterIndex].classList.remove('shooter')
    switch(e.key) {
      case 'ArrowLeft':
        if (currentShooterIndex % width !== 0) currentShooterIndex -=1
        break
      case 'ArrowRight' :
        if (currentShooterIndex % width < width -1) currentShooterIndex +=1
        break
    }
    squares[currentShooterIndex].classList.add('shooter')
  }
  document.addEventListener('keydown', moveShooter)
  


// Move invaders

function moveInvaders() {

  if(startButtom.disabled = true){

    const leftEdge = alienInvaders[0] % width === 0
    const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width -1
    remove()
  
    if (rightEdge && goingRight) {
      for (let i = 0; i < alienInvaders.length; i++) {
        alienInvaders[i] += width +1
        direction = -1
        goingRight = false
      }
    }
  
    if(leftEdge && !goingRight) {
      for (let i = 0; i < alienInvaders.length; i++) {
        alienInvaders[i] += width -1
        direction = 1
        goingRight = true
      }
    }
  
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += direction
    }
    draw()

        
    if (squares[currentShooterIndex].classList.contains('invader', 'shooter')) {
        resetPage.classList.add('neon-text-red'); 
        gameOverPage.style.display = 'block';
        scoreBoard.innerText = score;
        resetPage.innerText = 'YOU LOOSE';
        remove();
        clearInterval(invadersId)
    }
  
    for (let i = 0; i < alienInvaders.length; i++) {
      if(alienInvaders[i] > (squares.length)) {
        resetPage.classList.add('neon-text-red'); 
        gameOverPage.style.display = 'block';
        scoreBoard.innerText = score;
        resetPage.innerText = 'YOU LOOSE';
        remove();
        clearInterval(invadersId)
      }
    }
    if (aliensRemoved.length === alienInvaders.length) {
      resetPage.classList.add('neon-text-green');
       gameOverPage.style.display = 'block';
       scoreBoard.innerText = score;
       resetPage.innerText = 'YOU WIN';
       clearInterval(invadersId)
    }}
  }

// Shoot the aliens

function shoot(e){
    let laserId
    let currentLaserIndex = currentShooterIndex
    function moveLaser(){
        squares[currentLaserIndex].classList.remove('laser')
        currentLaserIndex -= width
        //console.log(currentLaserIndex)
        squares[currentLaserIndex].classList.add('laser')
    
        if(squares[currentLaserIndex].classList.contains('invader')){
            squares[currentLaserIndex].classList.remove('invader')
            squares[currentLaserIndex].classList.remove('laser')
            squares[currentLaserIndex].classList.add('boom') 
            
            setTimeout(() => squares[currentLaserIndex].classList.remove('boom'), 300)
            clearInterval(laserId)

            const alienRemoved = alienInvaders.indexOf(currentLaserIndex)// Create an array with the aliens shooted
            aliensRemoved.push(alienRemoved) 
            score++
            totalScore.innerText = score;
            
        }
    }    
    switch(e.key){
        case 'ArrowUp': 
            laserId = setInterval(moveLaser, 100)
    }
}

document.addEventListener('keydown', shoot)