var base_url = $('#baseurl').val();
var starValue;
			
/***********************************************/
/*
 * click wine
 *
 *
 **********************************************/

$(document).ready(function() {
	
		$('#startButton').click(function() {

		
	 window.location = base_url + "welcome/stand_menu/";
		
		
		
		
		
	});
	
	
	$('.wineRack').click(function() {

		var wine_id = $(this).attr('id');

	
		
		$("#wine_" + wine_id).fadeIn();
		
		var currentValue = $("#wine_" + wine_id).find('#starValueInput').val();
		if(currentValue == 1)
		{
			$("#wine_" + wine_id).find('.oneStar').addClass("starchecked");
		}
		
		if(currentValue == 2)
		{
			$("#wine_" + wine_id).find('.oneStar').addClass("starchecked");
			$("#wine_" + wine_id).find('.twoStar').addClass("starchecked");
		}
		
		if(currentValue == 3)
		{
			$("#wine_" + wine_id).find('.oneStar').addClass("starchecked");
			$("#wine_" + wine_id).find('.twoStar').addClass("starchecked");
			$("#wine_" + wine_id).find('.threeStar').addClass("starchecked");
		}
		
		if(currentValue == 4)
		{
			$("#wine_" + wine_id).find('.oneStar').addClass("starchecked");
			$("#wine_" + wine_id).find('.twoStar').addClass("starchecked");
			$("#wine_" + wine_id).find('.threeStar').addClass("starchecked");
			$("#wine_" + wine_id).find('.fourStar').addClass("starchecked");
		}
		
		if(currentValue == 5)
		{
			$("#wine_" + wine_id).find('.oneStar').addClass("starchecked");
			$("#wine_" + wine_id).find('.twoStar').addClass("starchecked");
			$("#wine_" + wine_id).find('.threeStar').addClass("starchecked");
			$("#wine_" + wine_id).find('.fourStar').addClass("starchecked");
			$("#wine_" + wine_id).find('.fiveStar').addClass("starchecked");
		}
		
	});
	
	
	$('.closePopup').click(function() {

		
		$(this).parent().parent().parent().fadeOut();
		
		
		
	});
	
	$('.submitReview').click(function() {

var CurrentReview = $(this).parent().parent().find('#starValueInput').val();
		if(CurrentReview > 0) {
		$(".popupBack").fadeOut();
		
		$("#detailsForm").fadeIn();
	} else { 
		alert('must enter rating ' + CurrentReview);
		}
		
	});
	
	$('.loadTerms').click(function() {

		
		
		
		$("#terms").fadeIn();
		
	});
	
	$('.mapLink').click(function() {

		var stand_id = $(this).attr('id');

	 window.location = base_url + "welcome/display_stand/" + stand_id;
		
		
		
		
		
	});
	
	
	
	$('.star').click(function() {
			
			var wine_id = $(this).parent().attr('id');
		
			
			
			if($(this).hasClass('oneStar')) {
			
			$("#" + wine_id).find('.star').removeClass("starchecked");
			
				if(starValue == 1) 
				{ 
				$('.star').removeClass("starchecked");	
				starValue = 0; 
				} else if(starValue != 1) 
				{
				$(this).stop().addClass("starchecked");
				
				starValue = 1;
				}
			}
			
			
			if($(this).hasClass('twoStar')) {
				
			$("#" + wine_id).find('.star').removeClass("starchecked");	
			
				
			if(starValue == 2) 
				{ 
				$("#" + wine_id).find('.star').removeClass("starchecked");	
				starValue = 0; 
				} 
				else if(starValue != 2) 
				{
				$(this).stop().addClass("starchecked");
				$("#" + wine_id).find('.oneStar').addClass("starchecked");
				starValue = 2;
				}
		
			}
			
			if($(this).hasClass('threeStar')) {
				
			
			$("#" + wine_id).find('.star').removeClass("starchecked");	
			if(starValue == 3) 
				{ 
					$("#" + wine_id).find('.star').removeClass("starchecked");
				starValue = 0; 
				} 
				else if(starValue != 3) 
				{
					$(this).stop().addClass("starchecked");
			
					$("#" + wine_id).find('.twoStar').addClass("starchecked");
					$("#" + wine_id).find('.oneStar').addClass("starchecked");
					
					starValue = 3;
				}
		
			}
			
			
		
			
			
			if($(this).hasClass('fourStar')) {
			
			$("#" + wine_id).find('.star').removeClass("starchecked");	
			if(starValue == 4) 
				{ 
				$("#" + wine_id).find('.star').removeClass("starchecked");	
				starValue = 0; 
				} 
				else if(starValue != 4) 
				{
					$(this).stop().addClass("starchecked");
					$("#" + wine_id).find('.threeStar').addClass("starchecked");
					$("#" + wine_id).find('.twoStar').addClass("starchecked");
					$("#" + wine_id).find('.oneStar').addClass("starchecked");
					
					starValue = 4;
				}
			
			
			
			}
			
			if($(this).hasClass('fiveStar')) {
			
			$("#" + wine_id).find('.star').removeClass("starchecked");	
			
			if(starValue == 5) 
				{ 
				$("#" + wine_id).find('.star').removeClass("starchecked");	
				starValue = 0; 
				} 
				else if(starValue != 5) 
				{
					$(this).stop().toggleClass("starchecked");
					$("#" + wine_id).find('.fourStar').addClass("starchecked");
					$("#" + wine_id).find('.threeStar').addClass("starchecked");
					$("#" + wine_id).find('.twoStar').addClass("starchecked");
					$("#" + wine_id).find('.oneStar').addClass("starchecked");
					
					starValue = 5;
				}
			
			
			
			}
			
			//apply starvalue to input
			$("#" + wine_id).find('#starValueInput').val(starValue);
		});


}); 
