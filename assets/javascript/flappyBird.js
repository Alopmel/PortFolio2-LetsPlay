// HTML Elements
const flappyGame = document.getElementById('flappyGame')
const block = document.getElementById('block');
const hole = document.getElementById('hole');
const character = document.getElementById('character');
const scoreBoard = document.getElementById('scoreBoard');
const startButtom = document.getElementById('start');
const totalScore = document.getElementById('totalScore');
const playGamePage = document.getElementById('start-game');
const gameOverPage = document.getElementById('game-over');
const resetButtom = document.getElementById('play-again');
const gameBoard = document.getElementById('flappyGame');

//Game Variables
let setState;
let score = 1;
let gravityCharacter; 
let characterTop;
let jumping = 0;
//const SetGame 
const setGame = () => {
character.style.display = "block";
character.style.top = 100+"px";
score = 1;
}
setGame();

// const Start game
function startGame() {
    playGamePage.style.display = 'none';
    gameOverPage.style.display = 'none';
    gameBoard.style.display = 'block';
    startButtom.disabled = true;
    gravity();
    moveHole();
    setGame();
}

startButtom.addEventListener('click', startGame);
resetButtom.addEventListener('click', startGame);
// Change hole position
const moveHole = () =>{
    if(startButtom.disabled = true){
        hole.classList.add('hole-start');
        block.classList.add('block-start');
       
    }
    hole.addEventListener('animationiteration', () =>{
        const random = -((Math.random()*300)+150);
        hole.style.top = random +"px";
    })
} 

// Add the gravity of the character

const gravity = () =>{
   if(startButtom.disabled == true) {
         characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping == 0){
        character.style.top = (characterTop+3)+'px'  
    }
       

    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    const holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    const cTop = -(500 - characterTop);

    if((characterTop > flappyGame.clientHeight)||
      ((blockLeft<20)&&(blockLeft >-50)&&((cTop<holeTop)||
      (cTop > holeTop+130)))){ 
        startButtom.disabled = false;
        gameOverPage.style.display = 'block';
        character.style.display = 'none';
        hole.classList.remove('hole-start');
        block.classList.remove('block-start');
    }else{
        score++;
        updateScore();
    }
}

}

gravityCharacter = setInterval(gravity, 10)

//
const updateScore = () => {
    scoreBoard.innerText = score;
    totalScore.innerText = score;
}
// Create the jump function

jump =() =>{
    jumping = 1;
    let jumpCount = 0;
    const jumpInterVal = setInterval (function (){
        const characterTop =
        parseInt(window.getComputedStyle(character).getPropertyValue("top"))
        if((characterTop > 6)&&(jumpCount < 15)){
            character.style.top = (characterTop-5)+"px"  
        }        
        if(jumpCount > 20){
            clearInterval(jumpInterVal);
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount ++;
    }, 10);
}
