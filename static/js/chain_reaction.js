$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE
var numBalls = 5;

var reactions = [];
var balls = [];



for(var i = 0; i < numBalls; i++){
  var b0 = {
      x: width * Math.random(),
      y: height * Math.random(),
      radius: 20,
      vx: 10 * Math.random(),
      vy: 10 * Math.random()
    };
  balls.push(b0);
};

  
 var updateGame = function() {
  for(var i = 0; i < balls.length; i++){
    balls[i].x = balls[i].x + balls[i].vx;
    balls[i].y = balls[i].y + balls[i].vy;

    if (balls[i].x <= 0 + balls[i].radius){
      balls[i].vx = -balls[i].vx;
    }
    if (balls[i].x >= width - balls[i].radius){
      balls[i].vx = -balls[i].vx;
    }
    if (balls[i].y <= 0 + balls[i].radius){
      balls[i].vy = -balls[i].vy;
    }
    if (balls[i].y >= height - balls[i].radius){
      balls[i].vy = -balls[i].vy;
    }
  }

  context.clearRect(0, 0, canvas.width, canvas.height);
  for(var i = 0; i < balls.length; i++){
    context.beginPath();
    context.strokeStyle = 'black';
    context.arc(balls[i].x, balls[i].y, balls[i].radius, 0, 2*Math.PI);
    context.stroke();
  }

  for(var i = 0; i < reactions.length; i++){
    context.beginPath();
    context.strokeStyle = 'blue';
    context.arc(reactions[i].x, reactions[i].y, reactions[i].radius, 0, 2*Math.PI);
    context.stroke();
  }


  requestAnimationFrame(updateGame);

  };
  

  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var b = {
      x: e.pageX - $(this).offset().left,
      y: e.pageY - $(this).offset().top,
      radius: 30,
      vx: 5,
      vy: 5 
    };
    reactions.push(b);

  }); 
      /*x: e.pageX - $(this).offset().left,
      y: e.pageY - $(this).offset().top,
      radius: 50,
      vx: 10 * Math.random(),
      vy: 10 * Math.random()
    };
    balls.push(b);*/
    // PUT STUFF HERE


  updateGame();
});
