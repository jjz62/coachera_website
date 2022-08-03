var y = $(window).scrollTop();

$(document).ready(function(){
	$('#arrow').fadeIn();
	$('#arrow').click(function(){
 		$('html, body').animate({ scrollTop: y + $(window).height() }) 
  	});
  	$("div > button").hover(function(){
		$(" div > button").css("background color", "white")
  	});
});
