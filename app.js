// alert()

// create players one will be person the other is computer 

// create ball 
// create paddles 

// click start button 
// add click event 

// ball is fired 
// does ball collide with paddle or wall 
// if ball collides with paddle bounce the ball until it hits the oppessing team's wall or your wall


// select the classes 
let playerOneScore = document.querySelector(".player-one-score");
let playerTwoScore = document.querySelector(".player-two-score");
let message = document.querySelector(".message");
let paddleOne = document.querySelector(".paddle-one");
let paddleTwo = document.querySelector(".paddle-two");
let ball = document.querySelector(".ball");

let gameOver = false;
let playerOneScoreValue = 0;
let playerTwoScoreValue = 0;

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
    message.textContent = "Game Started";
    startRound();
  }
});

function startRound() {
  // starting a round of the game
  const ball = document.querySelector(".ball");
  ball.style.left = "calc(50% - 15px)";
  ball.style.top = "calc(50% - 15px)";

  // Start moving the ball
  let xDirection = 1;
  let yDirection = 1;
  let xSpeed = 5;
  let ySpeed = 5;
  
  const ballMovement = setInterval(() => {
    // Calculate new position
    let x = parseInt(ball.style.left);
    let y = parseInt(ball.style.top);
    x = x + xSpeed * xDirection;
    y = y + ySpeed * yDirection;

    // Change direction if hitting wall
    if (x <= 0 || x >= window.innerWidth - 50) {
      xDirection = -xDirection;
    }
    if (y <= 0 || y >= window.innerHeight - 50) {
      yDirection = -yDirection;
    }

    // Update ball position
    ball.style.left = x + "px";
    ball.style.top = y + "px";

    // Check if ball hits paddles
    function checkCollision(ball, paddle) {
        let bottomOfBall = ball.offsetTop + ball.offsetHeight;
        let topOfPaddle = paddle.offsetTop;
        let leftSideOfPaddle = paddle.offsetLeft;
        let rightSideOfPaddle = paddle.offsetLeft + paddle.offsetWidth;
      
        if (bottomOfBall >= topOfPaddle && 
            ball.offsetLeft >= leftSideOfPaddle && 
            ball.offsetLeft <= rightSideOfPaddle) {
          return true;
        }
        return false;
      }
    
  // if the ball goes out of bounds, increment the appropriate score and check for a win
  if (ball.left < 0) {
    playerTwoScoreValue++;
    playerTwoScore.textContent = playerTwoScoreValue;
    checkWin();
  } else if (ball.left + ball.width > window.innerWidth) {
    playerOneScoreValue++;
    playerOneScore.textContent = playerOneScoreValue;
    checkWin();
  }
})

function checkWin() {
  if (playerOneScoreValue === 3) {
    message.textContent = "Player One Wins!";
    gameOver = true;
  } else if (playerTwoScoreValue === 3) {
    message.textContent = "Player Two Wins!";
    gameOver = true;
  } else {
    message.textContent = "Press Enter to Begin Next Round";
  }
}
}
