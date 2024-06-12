score = 0;
cross = true;
document.onkeydown = function(e) {
    console.log("Key code is:", e.keyCode)
    if(e.keyCode==38){
        Dino = document.querySelector('.Dino');
        Dino.classList.add('animateDino');
        setTimeout(() => {
            Dino.classList.remove('animateDino')
        }, 700);
    }
    if(e.keyCode==39){
        Dino = document.querySelector('.Dino');
        DinoX = parseInt(window.getComputedStyle(Dino, null).getPropertyValue('left'));
        Dino.style.left = DinoX + 112 + "px";
        }
    
        if(e.keyCode==37){
            Dino = document.querySelector('.Dino');
            DinoX = parseInt(window.getComputedStyle(Dino, null).getPropertyValue('left'));
            Dino.style.left = (DinoX - 112) + "px";
            }
        }
    
setInterval(() =>{
    Dino = document.querySelector('.Dino');   
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');
    dx = parseInt(window.getComputedStyle(Dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(Dino, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
    offsetX = math.abs(dx-ox);
    offsety = math.abs(dy-oy);
    console.log(offsetX,offsetY);
    if(offsetX< 93 && offsetY<  52){
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
    }
    else(offsetX < 145 && cross) 
    {
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

    }

},100);
function updateScore(score){
    scoreCont.innerHTML = "Your Score:" + score
}