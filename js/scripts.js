var base_url = $('#baseurl').val();
var starValue;
			
/***********************************************/
/*
 * click wine
 *
 *
 **********************************************/

$(document).ready(function() {
	$('.wineRack').click(function() {

		var wine_id = $(this).attr('id');

	
		
		$("#wine_" + wine_id).fadeIn();
		
		
		
	});
	
	
	$('.closePopup').click(function() {

		
		$(".popupBack").fadeOut();
		
		
		
	});
	
	$('.mapLink').click(function() {

		var stand_id = $(this).attr('id');

	 window.location = base_url + "welcome/display_stand/" + stand_id;
		
		
		
		
		
	});
	
	$('.star').click(function() {
			
			var wine_id = $(this).parent().attr('id');
		
			
			if($(this).hasClass('oneStar')) {
			
			$('.star').removeClass("starchecked");
			
				if(starValue == 1) 
				{ 
				$('.star').removeClass("starchecked");	
				starValue = 0; 
				} else if(starValue != 1) 
				{
				$(this).stop().toggleClass("starchecked");
				
				starValue = 1;
				}
			}
			
			
			if($(this).hasClass('twoStar')) {
				
			$('.star').removeClass("starchecked");	
			
				
			if(starValue == 2) 
				{ 
				$('.star').removeClass("starchecked");	
				starValue = 0; 
				} 
				else if(starValue != 2) 
				{
				$(this).stop().toggleClass("starchecked");
				$("#" + wine_id).find('.oneStar').toggleClass("starchecked");
				starValue = 2;
				}
		
			}
			
			if($(this).hasClass('threeStar')) {
				
			$('.star').removeClass("starchecked");
			
			if(starValue == 3) 
				{ 
				$('.star').removeClass("starchecked");	
				starValue = 0; 
				} 
				else if(starValue != 3) 
				{
					$(this).stop().toggleClass("starchecked");
			
					$("#" + wine_id).find('.twoStar').toggleClass("starchecked");
					$("#" + wine_id).find('.oneStar').toggleClass("starchecked");
					
					starValue = 3;
				}
		
			}
			
			
		
			
			
			if($(this).hasClass('fourStar')) {
			$('.star').removeClass("starchecked");	
			
			if(starValue == 4) 
				{ 
				$('.star').removeClass("starchecked");	
				starValue = 0; 
				} 
				else if(starValue != 4) 
				{
					$(this).stop().toggleClass("starchecked");
					$("#" + wine_id).find('.threeStar').toggleClass("starchecked");
					$("#" + wine_id).find('.twoStar').toggleClass("starchecked");
					$("#" + wine_id).find('.oneStar').toggleClass("starchecked");
					
					starValue = 4;
				}
			
			
			
			}
			
			if($(this).hasClass('fiveStar')) {
			$('.star').removeClass("starchecked");	
			
			
			if(starValue == 5) 
				{ 
				$('.star').removeClass("starchecked");	
				starValue = 0; 
				} 
				else if(starValue != 5) 
				{
					$(this).stop().toggleClass("starchecked");
					$("#" + wine_id).find('.fourStar').toggleClass("starchecked");
					$("#" + wine_id).find('.threeStar').toggleClass("starchecked");
					$("#" + wine_id).find('.twoStar').toggleClass("starchecked");
					$("#" + wine_id).find('.oneStar').toggleClass("starchecked");
					
					starValue = 5;
				}
			
			
			
			}
		});


}); 
