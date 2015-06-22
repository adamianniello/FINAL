$(function() {
  // Handler for .ready() called.
});

$("#span").hover(function() { 
		  $(this).animate({textShadow: "#aaa 0 0 0"});
		}, function() { 
		  $(this).animate({textShadow: "#aaa 0 0 10px"});
		});