// Problem 2 (Peekaboo) ------------------------------------------------------
// WRITE CODE HERE
$('#toggle_img').click(function() 
{
	if ($('#toggle_img').text()==='Go Away!'){
		$('#main_img').hide();
		$('#toggle_img').text('Come Back!');
	}	
	else{
	$('#main_img').show();
	$('#toggle_img').text('Go Away!');
	}
});

// Problem 3 (Swap Em) -----------------------------------------------
// WRITE CODE HERE
$('#change_img').click(function() 
{
	alert($('#new_img_file').val());

});



// Problem 4 (Find the Source) -------------------------------------------------
$('.clickable').click(function() {
  // WRITE CODE HERE
  $(this).attr('width', '200px');

  
});




// Problem 5 (Imgrr) -------------------------------------------------
// WRITE CODE HERE
