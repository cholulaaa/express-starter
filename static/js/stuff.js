alert('Wilkommen zu meine Seite!'); // edit me!

// Problem 1 (Say Hello!) ---------------------------------------------------
$('#say_hello').click(function() 
{
	alert('hello world!');
});


// Problem 2 (Houdini) ------------------------------------------------------
$('#disappear').click(function() 
{
	$(houdini_text).hide();
});

$('#reappear').click(function() {
	$(houdini_text).show();
});


// Problem 3 (Tickle Me Pink) -----------------------------------------------
$('#tickle_me').click(function()
{
	$(tickle_text).css('color','pink');

});// WRITE CODE HERE


// Problem 4 (Greet Me) -----------------------------------------------------
// WRITE CODE HERE
$('#greet').click(function() 
{
	alert($('#my_name').val())

});






