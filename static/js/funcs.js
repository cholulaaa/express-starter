$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  var drawSquare = function(x, y, sideLen, color) {
    context.beginPath();
    context.strokeStyle = color;
    context.moveTo(x, y);
    context.lineTo(x + sideLen, y);
    context.lineTo(x + sideLen, y + sideLen);
    context.lineTo(x, y + sideLen);
    context.lineTo(x, y);
    context.stroke();
  };

  var drawCircle = function(x, y, radius, color) {
    context.beginPath();
    context.strokeStyle = color;
    context.arc(x, y, radius, 0, 2*Math.PI);
    context.stroke();
  };

  // Write drawTriplet function here

  // Challenge:
  // Write drawTriangle, drawTriforce, drawTripleTriforce,
  // drawSierpinski functions here

  $('#p1').click(function() {
    drawSquare(100, 200, 50, 'blue');
  });

  $('#p2').click(function() {
    drawSquare(300, 100, 25, 'green');
  });

  $('#p3').click(function() {
    drawCircle(100, 200, 50, 'red');
  });

  $('#p4').click(function() {
    drawCircle(300, 100, 25, 'black');
  });

  $('#p5').click(function() {
    drawSquare(200, 200, 50, 'red');
    drawCircle(225, 225, 25, 'blue');
    drawCircle(250, 225, 25, 'green');
    drawCircle(200, 225, 25, 'green');
    drawCircle(225, 200, 25, 'green');
    drawCircle(225, 250, 25, 'green');

  });  //---------------------------------------------------------------------------
  //Write your code for p5-p11 here
  //
});
