$(document).ready(function() {
  //initialize canvas
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;

  //PUT STUFF HERE

  //run an iteration of the game


  var ball = {
    x: 20,
    y: 20,
    radius: 20,
    vx: 5,
    vy: 5

  };

  var updateGame = function() {
    ball.x = ball.x + ball.vx;
    ball.y = ball.y + ball.vy;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.strokeStyle = 'black';
    context.arc(ball.x, ball.y, ball.radius, 0, 2*Math.PI);
    context.stroke();
    if (ball.x == 0 + ball.radius){
      ball.vx = -ball.vx;
    }
    if (ball.x == width - ball.radius){
      ball.vx = -ball.vx;
    }
    if (ball.y == 0 + ball.radius){
      ball.vy = -ball.vy;
    }
    if (ball.y == height - ball.radius){
      ball.vy = -ball.vy;
    }

    setTimeout(updateGame, 10);
    
  };

  updateGame();
});
