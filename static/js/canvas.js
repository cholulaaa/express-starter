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
  	context.closePath(); 
  	ctx.stroke();
});

$('#p6').click(function() {
  	var c=document.getElementById('canvas');
	var ctx=c.getContext('2d');

  	ctx.fillStyle="green";
  	context.fillRect(250, 50, 150, 100);
  	
  });

  $('#p7').click(function() {
  	var c=document.getElementById('canvas');
  	var ctx=c.getContext('2d');

  	context.beginPath();

  	ctx.fillStyle="red";
  	ctx.arc(200,400,50,0,2*Math.PI);
	ctx.fill();
});

$('#p8').click(function() {
  	var c=document.getElementById('canvas');
	var ctx=c.getContext('2d');

 	context.beginPath();
      context.rect(100, 245, 100, 100);
      context.fillStyle = 'yellow';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'blue';
      context.stroke();
      context.strokeStyle='black'
    context.closePath(); 
  
  });


$('#p9').click(function() {
  	var c=document.getElementById('canvas');
	var ctx=c.getContext('2d');

	for (var i = 1; i <= 6; i++) {
		context.strokeRect(50*i, 100, 50, 50);
    }

});

$('#p10').click(function() {
  	var c=document.getElementById('canvas');
	var ctx=c.getContext('2d');

	for (var i = 1; i <= 101; i++) {
		context.strokeRect(5*i, 100, 5, 5);
    }

});




});
