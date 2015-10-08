


$(document).ready(function(){
$(".box").bind("webkitAnimationEnd mozAnimationEnd msAnimationEnd oAnimationEnd animationEnd", function(){
  $(this).removeClass("animated");  
});

$(".box").hover(function(){
  $(this).addClass("animated");       
});


$(".shadow").bind("webkitAnimationEnd mozAnimationEnd msAnimationEnd oAnimationEnd animationEnd", function(){
  $(this).removeClass("animated");  
});

$(".shadow").hover(function(){
  $(this).addClass("animated");        
});

$(".shadow").appendTo(".box")

/*button Hover States*/


/*hover buttons*/
 
 $("#c_home").show();
	$("#c_home").hide();
   
	$('#homewrap1').hover(function () {
        $("#c_home").stop().slideToggle("fast");
    });

 $("#c_reel").show();
	$("#c_reel").hide();
   
	$('#homewrap2').hover(function () {
        $("#c_reel").stop().slideToggle("fast");
    });

	 $("#c_about").show();
	$("#c_about").hide();
   
	$('#homewrap3').hover(function () {
        $("#c_about").stop().slideToggle("fast");
    });

	 $("#c_clients").show();
	$("#c_clients").hide();
   
	$('#homewrap4').hover(function () {
        $("#c_clients").stop().slideToggle("fast");
    });

	 $("#c_contact").show();
	$("#c_contact").hide();
   
	$('#homewrap5').hover(function () {
        $("#c_contact").stop().slideToggle("fast");
    });

	 $("#c_photography").show();
	$("#c_photography").hide();
   
	$('#homewrap6').hover(function () {
        $("#c_photography").stop().slideToggle("fast");
    });

	 $("#c_tutorials").show();
	$("#c_tutorials").hide();
   
	$('#homewrap7').hover(function () {
        $("#c_tutorials").stop().slideToggle("fast");
    });

/*click functions for all buttons*/

											/*home*/

 $("#click_home").show();
	$("#click_home").hide();
   
	$('#homewrap1').click(function () {
        
		$("#click_reel").slideUp(1000);
		$("#click_about").slideUp(1000);
		$("#click_clients").slideUp(1000);
		$("#click_contact").slideUp(1000);
		$("#click_photography").slideUp(1000);
		$("#click_tutorials").slideUp(1000);
		$("#mainBigReel").fadeOut(1000);
		$("#corpBigReel").fadeOut(1000);
		$("#gamesBigReel").fadeOut(1000);
		$("#close").fadeOut(1000);
		$(".video-js1")[0].player.pause();
		$(".video-js2")[0].player.pause();
		$(".video-js3")[0].player.pause();
		
    });
											/*reel*/
	 $("#click_reel").show();
	$("#click_reel").hide();
   
	$('#homewrap2').click(function () {
        $("#click_reel").stop().slideToggle("slow");
		
		$("#click_home").fadeOut(1000);
		$("#click_about").fadeOut(1000);
		$("#click_clients").fadeOut(1000);
		$("#click_contact").fadeOut(1000);
		$("#click_photography").fadeOut(1000);
		$("#click_tutorials").fadeOut(1000);
		$("#mainBigReel").fadeOut(1000);
		$("#corpBigReel").fadeOut(1000);
		$("#gamesBigReel").fadeOut(1000);
		$("#close").fadeOut(1000);
		$(".video-js1")[0].player.pause();
		$(".video-js2")[0].player.pause();
		$(".video-js3")[0].player.pause();
			
    });
											/*about*/
		 $("#click_about").show();
	$("#click_about").hide();
   
	$('#homewrap3').click(function () {
        $("#click_about").stop().slideToggle("slow");
		
		$("#click_home").fadeOut(1000);
		$("#click_reel").fadeOut(1000);
		$("#click_clients").fadeOut(1000);
		$("#click_contact").fadeOut(1000);
		$("#click_photography").fadeOut(1000);
		$("#click_tutorials").fadeOut(1000);
		$("#mainBigReel").fadeOut(1000);
		$("#corpBigReel").fadeOut(1000);
		$("#gamesBigReel").fadeOut(1000);
		$("#close").fadeOut(1000);
		$(".video-js1")[0].player.pause();
		$(".video-js2")[0].player.pause();
		$(".video-js3")[0].player.pause();
			
    });
											/*clients*/
		 $("#click_clients").show();
	$("#click_clients").hide();
   
	$('#homewrap4').click(function () {
        $("#click_clients").stop().slideToggle("slow");
		
		$("#click_home").fadeOut(1000);
		$("#click_reel").fadeOut(1000);
		$("#click_about").fadeOut(1000);
		$("#click_contact").fadeOut(1000);
		$("#click_photography").fadeOut(1000);
		$("#click_tutorials").fadeOut(1000);
		$("#mainBigReel").fadeOut(1000);
		$("#corpBigReel").fadeOut(1000);
		$("#gamesBigReel").fadeOut(1000);
		$("#close").fadeOut(1000);
		$(".video-js1")[0].player.pause();
		$(".video-js2")[0].player.pause();
		$(".video-js3")[0].player.pause();
			
    });											
											/*contact*/
		 $("#click_contact").show();
	$("#click_contact").hide();
   
	$('#homewrap5').click(function () {
        $("#click_contact").stop().slideToggle("slow");
		
		$("#click_home").fadeOut(1000);
		$("#click_reel").fadeOut(1000);
		$("#click_clients").fadeOut(1000);
		$("#click_about").fadeOut(1000);
		$("#click_photography").fadeOut(1000);
		$("#click_tutorials").fadeOut(1000);
		$("#mainBigReel").fadeOut(1000);
		$("#corpBigReel").fadeOut(1000);
		$("#gamesBigReel").fadeOut(1000);
		$("#close").fadeOut(1000);
		$(".video-js1")[0].player.pause();
		$(".video-js2")[0].player.pause();
		$(".video-js3")[0].player.pause();
			
    });											
											/*testimonials*/
		 $("#click_photography").show();
	$("#click_photography").hide();
   
	$('#homewrap6').click(function () {
        $("#click_photography").stop().slideToggle("slow");
		
		$("#click_home").fadeOut(1000);
		$("#click_reel").fadeOut(1000);
		$("#click_clients").fadeOut(1000);
		$("#click_contact").fadeOut(1000);
		$("#click_about").fadeOut(1000);
		$("#click_tutorials").fadeOut(1000);
		$("#mainBigReel").fadeOut(1000);
		$("#corpBigReel").fadeOut(1000);
		$("#gamesBigReel").fadeOut(1000);
		$("#close").fadeOut(1000);
		$(".video-js1")[0].player.pause();
		$(".video-js2")[0].player.pause();
		$(".video-js3")[0].player.pause();
		
			
    });											
											/*tutorials*/
		 $("#click_tutorials").show();
	$("#click_tutorials").hide();
   
	$('#homewrap7').click(function () {
        $("#click_tutorials").stop().slideToggle("slow");
		
		$("#click_home").fadeOut(1000);
		$("#click_reel").fadeOut(1000);
		$("#click_clients").fadeOut(1000);
		$("#click_contact").fadeOut(1000);
		$("#click_photography").fadeOut(1000);
		$("#click_about").fadeOut(1000);
		$("#mainBigReel").fadeOut(1000);
		$("#corpBigReel").fadeOut(1000);
		$("#gamesBigReel").fadeOut(1000);
		$("#close").fadeOut(1000);
		$(".video-js1")[0].player.pause();
		$(".video-js2")[0].player.pause();
		$(".video-js3")[0].player.pause();
		
			
    });	
	
	/*photography hover over an image and zoom*/
	
	
	
	
	
	/*showreels page hover over an image and thumb movie plays*/
	
		$("#main_reel_hover").show();
	$("#main_reel_hover").hide();
   
	$('#reelwrap1').hover(function () {
        $("#main_reel_hover").stop().slideToggle("fast");
		$("#main_reel").toggleClass("color");
	 });	
	 
	 
	 	$("#corp_reel_hover").show();
	$("#corp_reel_hover").hide();
   
	$('#reelwrap2').hover(function () {
        $("#corp_reel_hover").stop().slideToggle("fast");
		$("#corp_reel").toggleClass("color");
	 });
	 
	 
	 	$("#games_reel_hover").show();
	$("#games_reel_hover").hide();
   
	$('#reelwrap3').hover(function () {
        $("#games_reel_hover").stop().slideToggle("fast");
		$("#games_reel").toggleClass("color");
	 });
	 
	 
	 	$("#stills_reel_hover").show();
	$("#stills_reel_hover").hide();
   
	$('#reelwrap4').hover(function () {
        $("#stills_reel_hover").stop().slideToggle("fast");
		$("#stills_reel").toggleClass("color");
	 });

														/* main large reels*/

	$("#mainBigReel").show();
	$("#mainBigReel").hide();
	$("#close").show();
	$("#close").hide();
	$("#corpBigReel").hide();
	$("#gamesBigReel").hide();
   
	$('#reelwrap1').click(function () {
        $("#mainBigReel").stop().slideToggle("fast");
		$("#close").stop().slideToggle("fast");		
		});	
		
		
	$("#corpBigReel").show();
	$("#corpBigReel").hide();
	$("#close").show();
	$("#close").hide();
	$("#mainBigReel").hide();
	$("#gamesBigReel").hide();
   
	$('#reelwrap2').click(function () {
        $("#corpBigReel").stop().slideToggle("fast");
		$("#close").stop().slideToggle("fast");		
		});
		
	$("#gamesBigReel").show();
	$("#gamesBigReel").hide();
	$("#close").show();
	$("#close").hide();
	$("#mainBigReel").hide();
	$("#corpBigReel").hide();
   
	$('#reelwrap3').click(function () {
        $("#gamesBigReel").stop().slideToggle("fast");
		$("#close").stop().slideToggle("fast");		
		});	

			
														/*close Button*/
		$("#close").show();
		$("#close").hide();
	$('#close').click(function () {
        $("#mainBigReel").stop().hide();
		$("#close").hide();
		$(".video-js1")[0].player.pause();
		$("#mainBigReel").hide();
		$("#close").hide();
		
		$("#corpBigReel").stop().hide();
		$("#close").hide();
		$(".video-js2")[0].player.pause();
		$("#corpBigReel").hide();
		$("#close").hide();
		
		$("#gamesBigReel").hide();
		$("#close").hide();
		$(".video-js3")[0].player.pause();
		$("#gamesBigReel").hide();
		$("#close").hide();
		
		});	
		


	
		


});





	
	

/* duplicate boxes not working


var outer = $('#container'), inner = $('.box')

    // total availabel area
    totalArea = outer.width() * outer.height(),
        
    // since one is there at the start
    // outerWidth to account for the border as well
    usedArea = inner.outerWidth() * inner.outerHeight();

while(usedArea < totalArea) {
    $('<div/>').addClass('inner').appendTo(outer);
    usedArea += inner.outerWidth() * inner.outerHeight();
}


toggle a div with the href

$(function() {
  $('#prim').click(function(e) {
    e.preventDefault();
    $('#individualscreen').toggle();
  });
});*/






