$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE
var numBalls = 50;

var balls = [];
    /*var b0 = {
      x: 20,
      y: 20,
      radius: 20,
      vx: 10,
      vy: 10
    };
    var b1 = {
      x: 140,
      y: 40,
      radius: 40,
      vx: 5,
      vy: 5
    };
    var b2 = {
      x: 255,
      y: 155,
      radius: 35,
      vx: 10,
      vy: 5
    };
    balls.push(b0);
    balls.push(b1);
    balls.push(b2);
  //alert(balls.length)
*/


for(var i = 0; i < numBalls; i++){
  var b0 = {
      x: width * Math.random(),
      y: height * Math.random(),
      radius: 10,
      vx: 10,
      vy: 10
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

  requestAnimationFrame(updateGame);

  };
  

  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    balls.push({
      x: e.pageX - $(this).offset().left,
      y: e.pageY - $(this).offset().top,
      radius: 50,
      vx: 10,
      vy: 5
    });
    // PUT STUFF HERE
    context.fillStyle= 'black';
    context.beginPath();
    context.arc(x, y, 20, 0, 2 * Math.PI);
    context.fill();
  }); 

  updateGame();
});
