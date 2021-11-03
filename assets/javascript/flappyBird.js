// HTML Elements
const flappyGame = document.getElementById('flappyGame')
const block = document.getElementById('block');
const hole = document.getElementById('hole');
const character = document.getElementById('character');
 console.log(flappyGame.clientHeight);
//Game Variables

let jumping = 0;
let counter = 0;
// Change hole position

hole.addEventListener('animationiteration', () =>{
    const random = -((Math.random()*300)+150);
    hole.style.top = random +"px";
    counter = 0;
})

// Add the gravity of the character

setInterval(function() {
     characterTop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping == 0){
        character.style.top = (characterTop+3)+'px'  
    }
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    console.log(blockLeft);
    const holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    const cTop = -(500 - characterTop);
    if((characterTop > flappyGame.clientHeight)||((blockLeft<20)&&(blockLeft >-50)&&((cTop<holeTop)||(cTop > holeTop+130)))){
        alert("Game Over. Score"+ counter);
        character.style.top = 100 + "px";
    }
}, 10);

// Create the jump function

function jump(){
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