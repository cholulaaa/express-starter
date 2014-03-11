$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  //---------------------------------------------------------------------------
  //Write your code for p1-p12 here
  //
  $('#p1').click(function() {
  	var c=document.getElementById('canvas');
	var ctx=c.getContext('2d');

  	context.strokeRect(50, 50, 150, 100);
  });

  $('#p2').click(function() {
  	var c=document.getElementById('canvas');
	var ctx=c.getContext('2d');

  	context.strokeRect(200, 200, 50, 50);
  });

  $('#p3').click(function() {
  	var c=document.getElementById('canvas');
  	var ctx=c.getContext('2d');

  	context.beginPath();
  	context.arc(50,450,50,0*Math.PI,1.5*Math.PI);
  	ctx.stroke();

  });

  $('#p4').click(function() {
  	var c=document.getElementById('canvas');
  	var ctx=c.getContext('2d');

  	context.beginPath();

  	ctx.arc(400,400,50,0,2*Math.PI);
	ctx.stroke();
});

$('#p5').click(function() {
  	var c=document.getElementById('canvas');
  	var ctx=c.getContext('2d');

  	context.beginPath();
  	context.moveTo(0, 0);
  	context.lineTo(300, 150);
  	ctx.stroke();
});



});
