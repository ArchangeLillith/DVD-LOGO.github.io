let velocityX = 10;
let velocityY = 10;
let positionX = 0;
let positionY = 0;
let ball = document.getElementById("ball");
let BTN = document.getElementById("playBtn");
let SHEET = document.getElementById("sheet");
let VID = document.getElementById("video");


//Button handler
BTN.addEventListener("click", function play(){ 
    BTN.classList.add("hide")
    SHEET.classList.remove("inEffect")
    SHEET.classList.add("outOfEffect")
    startLogo();
    
});

//Logo bounde handler
function startLogo(){
    setInterval(
        function cheekyLogo() {
            // HORIZONTAL
            positionX = positionX + velocityX;
            ball.style.left = positionX + "px"
            // VERTICAL
            positionY = positionY + velocityY;
            ball.style.top = positionY + "px";
            
            if (positionX >= 1720){
                changeDirLeft();
            }
            else if (positionX <= 0){
                changeDirRight();
            }
            else if (positionY >= 1000){
                changeDirUp();
            }
            else if (positionY <= 0){
                changeDirDown();
            }
        },
    100);
}

//Video handler
function playVideo(){
    VID.play(); 
} 

//Movement function library
function changeDirLeft(){
    velocityX = -10;
}
function changeDirRight(){
    velocityX = 10;
}
function changeDirUp(){
    velocityY = -10;
}
function changeDirDown(){
    velocityY = 10;
}
