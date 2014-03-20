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
    context.arc(x, y, radius, 0, 2*Math.PI);
    
  };

  // Write drawTriplet function here
var drawTriplet = function(x, y, color) {
    context.strokeStyle = color;
    drawCircle (x, y, 30, color);
    drawCircle (x + 20, y + 30, 30, color);
    drawCircle (x - 20, y + 30, 30, color);
  };
    

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

  $('#p6').click(function() {
    drawTriplet(450, 400, 'green');
  });

  $('#p7').click(function() {
    drawTriplet(450, 300, 'blue');
  });
  //

  $('#p8').click(function() {
    drawTriplet(100, 400, 'red');
    drawTriplet(100, 250, 'yellow');
    drawTriplet(300, 300, 'orange');
    drawTriplet(400, 100, 'purple');
  });
});
