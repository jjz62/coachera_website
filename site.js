// $(document).ready(function(){
//         var scroll_pos = 0;
//         $(document).scroll(function() {
//             scroll_pos = $(this).scrollTop();
//             if(scroll_pos > 650) {
//                 $('.hover-reveal').css('color', '#031036');
//             } else {
//                 $('.hover-reveal').css('color', '#fff');
//             }
//         });
//     });

    $(document).ready(function(){
      $(window).scroll(function(){
      	var scroll = $(window).scrollTop();
    	  if (scroll > 650) {
    	    $("#menubuttons").css("background" , "blue");
    	  }

    	  else{
    		  $("#menubuttons").css("background" , "#333");  	
    	  }
