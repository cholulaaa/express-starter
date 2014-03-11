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

  	context.strokeRect(150, 150, 50, 50);
  });

});
