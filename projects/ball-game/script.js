let canvas, canvasContext;

let ballX = 400;
let ballY = 100;
let ballSpeedX = 5;
let ballSpeedY = 7;

const Paddle_width = 100;
const Paddle_thickness = 10;
const Paddle_edge = 60;
let paddleX = 400 - Paddle_width/2;

const brick_W = 80;
const brick_H = 20;
let brick_G = 2;
let brickCols = 10;
let brickRows = 12;
let brickGrid = new Array(brickCols * brickRows);  
let bricksLeft = 0;

let mouseX;
let mouseY;

// Start                                     
window.onload = function() {
    canvas = document.querySelector('#gameCanvas');
    canvasContext = canvas.getContext('2d');

    let framesPerSecond = 30;
    setInterval(updateAll, 1000/framesPerSecond);

    canvas.addEventListener('mousemove', updateMouse); 

    brickReset();  
    ballReset(); 
};

// move paddle with mousemove x
function updateMouse(evt){
    let rect = canvas.getBoundingClientRect();
    let root = document.documentElement;

    mouseX = evt.clientX - rect.left - root.scrollLeft;  //on big screen > evt.clientX = (116 ~ 916) - (~116) - 0;

    paddleX = mouseX - Paddle_width/2; 

    /*  // HACK: make ball move on mouse move( to test game) !
    mouseY = evt.clientY - rect.top - root.scrollTop;
    ballX = mouseX;
    ballY = mouseY;
    ballSpeedX = 3;
    ballSpeedY = 4; */
};

// Remove first 3 row of bricks to make little space, after draw bricks normally >  gridindex = true
function brickReset() { 
    bricksLeft = 0;
    for(let i=30; i < brickGrid.length; i++){
        brickGrid[i] = true;
        bricksLeft++
    }  
};
function ballReset() {
    ballX = canvas.width/2;
    ballY = canvas.height/2;
};

// start function
function updateAll() {
    moveAll();
    drawAll();  
};

function ballMove() {
    ballX+= ballSpeedX;
    ballY+= ballSpeedY;
  
    // go back from walls
    if(ballX < 0 && ballSpeedX < 0.0) { // && tu isedac ukan brundeba agar daaminusos (fixbug)
        ballSpeedX *= -1;
    }
    if(ballX > canvas.width && ballSpeedX > 0.0 ) {
        ballSpeedX *= -1;
    }
    if(ballY < 0 && ballSpeedY < 0.0 ) {
        ballSpeedY *= -1;
    }
    if(ballY > canvas.height ) {  // (game over) 
        ballReset();
        brickReset();  
    }
};

function isBrickAtColRow(col, row) {
    if (col >= 0 && col < brickCols && 
        row >= 0 && row < brickRows) {                               // if its in area  0 - 119  
            let brickIndexUnderGrid = rowColToArrayIndex(col, row);  // ball coordinate as  0 - 119  index 
            return brickGrid[brickIndexUnderGrid];   //  E.g. brickGrid[31] as true or false
        }else { // outside of grid 
            return false;
        }
};

// ball behavior to bricks
function ballBrickHandling(){
    //  ball coordinate on game area
    let ballBrickCol = Math.floor(ballX / brick_W) ; // min 0 - max 9
    let ballBrickRow = Math.floor(ballY / brick_H) ; // min 0 - max 29
    let brickIndexUnderBall = rowColToArrayIndex(ballBrickCol, ballBrickRow);

    if (ballBrickCol >= 0 && ballBrickCol < brickCols && 
        ballBrickRow >= 0 && ballBrickRow < brickRows) {   // tu burti agurebis areashia in  0 119 

        // Brick Removal

        if(isBrickAtColRow(ballBrickCol, ballBrickRow )) {   // if ball hits existing brick 
            brickGrid[brickIndexUnderBall] = false;        
            bricksLeft--;

            // wina aguris mdebareobis mixedvit imodzraos burTma
            let prevballX = ballX - ballSpeedX;
            let prevballY = ballY - ballSpeedY;
            // burtis wina mdebareona as grid 0 119
            let prevBrickCol = Math.floor(prevballX /brick_W); 
            let prevBrickRow = Math.floor(prevballY /brick_H); 
            
            let bothTestFailed = true;

            if(prevBrickCol != ballBrickCol) {  // tu aguris gverds moxvda mashin ukan dabrundes x gerdzze;
                if(isBrickAtColRow(prevBrickCol, ballBrickRow ) == false){   // if there is no brick let us buncle
                    ballSpeedX *= -1;
                    bothTestFailed = false;
                }
            }
            if(prevBrickRow != ballBrickRow) {   // tu dabla an magla moxvda aisxlitos, change y
                if(isBrickAtColRow(ballBrickCol, prevBrickRow ) == false){
                    ballSpeedY *= -1;
                    bothTestFailed = false;
                }
            }
            if(bothTestFailed) { // aireklos 2vemxirdan anu ukan gabrtundes igive gerdzze
                ballSpeedX *= -1;
                ballSpeedY *= -1;
            }
        }
    }
};
// reflect ball on paddle hit 
function ballPaddleHandling() {
    // paddle edges
    let paddleTopEdgeY = canvas.height - Paddle_edge;
    let paddleBottomEdgeY = paddleTopEdgeY + Paddle_thickness; 
    let paddleLeftEdgeX = paddleX;
    let paddleRightEdgeX = paddleLeftEdgeX +  Paddle_width; 
    // have effect of bottomY hit effect on paddle hit
    if (ballY > paddleTopEdgeY &&        
        ballY < paddleBottomEdgeY &&
        ballX > paddleLeftEdgeX && 
        ballX < paddleRightEdgeX ) {
        ballSpeedY *= -1;
        let paddleCenterX = paddleX + Paddle_width/2;              //mouse(padleCenter) coordinate -50 - 750 + 50
        let ballDistanceFromPaddleCenterX = ballX - paddleCenterX; //if hits paddlexCenter its = 0; ballx can be -50 beind or 50forwards    
        // Accelerate based on how far  ball hit from paddle center
        ballSpeedX = ballDistanceFromPaddleCenterX *0.3;       
    }
    // game end
    if(bricksLeft == 0) {
        console.log("you Win!")
        brickReset();
    }
}
function moveAll() { 
    ballMove()

    ballBrickHandling();
    
    ballPaddleHandling();
};

function drawAll() { 
    // black screen
    colorRect(0, 0, canvas.width, canvas.height, "#000"); 
    // draw ball
    colorCircle(ballX, ballY, 10, 'red');
    // draw moving rect (paddle);
    colorRect(paddleX, canvas.height - Paddle_edge, Paddle_width, Paddle_thickness, 'white');
    //draw bricks
    drawBricks();
        
};
// calc briks  // 0 to 119 ,
function rowColToArrayIndex(col,row) {
    return brickCols * row + col;
}
// bricks
function drawBricks() {
    for( let eachrow = 0; eachrow < brickRows; eachrow++) {
        for(let eachCol = 0; eachCol< brickCols; eachCol++) {
            
            let arrayIndex = rowColToArrayIndex(eachCol,eachrow); // meramdeneze brikze vart in array

            if(brickGrid[arrayIndex]) {   //  brickGrid[0] to [29] is false 
                colorRect(brick_W * eachCol, brick_H *eachrow, 
                brick_W - brick_G, brick_H - brick_G, 'skyblue');
            }
        }
    };
};

function colorRect (topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight); 
};
function colorCircle(centerX, centerY, radius, fillColor) {
    canvasContext.beginPath(); 
    canvasContext.fillStyle = fillColor;                                  
    canvasContext.arc( centerX, centerY, radius, 0, Math.PI*2, true);
    canvasContext.fill();
};
