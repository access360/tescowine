var base_url = $('#baseurl').val();
var starValue;
var tips = $( ".validateTips" );



        function checkRegexp( o, regexp, n ) {
            if ( !( regexp.test( o.val() ) ) ) {
                o.addClass( "ui-state-error" );
               updateTips( n );
                return false;
            } else {
                return true;
            }
        }
        
         function checkLength( o, n, min, max ) {
            if ( o.val().length > max || o.val().length < min ) {
                o.addClass( "ui-state-error" );
              updateTips( "Length of " + n + " must be between " +
                  min + " and " + max + "." );
                return false;
            } else {
                return true;
            }
        }
        
        function checkCheckbox(o){
        	if(o.val() != 1) {
        		updateTips("You must read the Terms");
        		return false; 
        	} else {
        		return true
        	}
        }
        
        function updateTips( t ) {
            tips
                .text( t )
                .addClass( "ui-state-highlight" );
            setTimeout(function() {
                tips.removeClass( "ui-state-highlight", 1500 );
            }, 500 );
        }
			
/***********************************************/
/*
 * click wine
 *
 *
 **********************************************/

$(document).ready(function() {
	$(function(){
			$('#keyboard').keyboard({
				 autoAccept: 'true'
			});
			$('#keyboard2').keyboard({
				layout: 'custom',
				 autoAccept: 'true',
				 customLayout: {
        'default': [
            '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
            'q w e r t y u i o p [ ] .com',
            'a s d f g h j k l @ ; .co.uk',
            '{shift}  z x c v b n m , . {shift}',
            '{accept} {space}  {cancel}'
            ],
            'shift': [
            '` ! " # $ % ^ & * ( ) _ + {bksp}',
            'Q W E R T Y U I O P [ ] .com',
            'A S D F G H J K L @ ; .co.uk',
            '{shift}  Z X C V B N M , . {shift}',
            '{accept} {space}  {cancel}'
            ]
    }
				 
			});
			$('#keyboard3').keyboard({
				 layout: 'custom',
				 autoAccept: 'true',
				customLayout: {
        'default': [
            '7 8 9',
            '4 5 6',
            '1 2 3',
            '0 {bksp}',
            '{accept}'
            ]
    }
			});
		});

	
		$('#startButton').click(function() {

		
	 window.location = base_url + "welcome/stand_menu/";
		
		
		
		
		
	});
	
	$('#finish').click(function(){
			
	 window.location = base_url;
	});
	
	$('#continue').click(function(){
			
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
	var WineID = $(this).parent().parent().find('#wineID').val();
	var SessionID = $(this).parent().parent().find('#sessionID').val();

		if(CurrentReview > 0) {
			
			//alert(base_url +'wineID:'+ WineID + ' Session:' + SessionID + ' CurrentReview:' + CurrentReview);
			
			$.post(base_url + "forms/rateWine", { 
				starvalue: CurrentReview,
				windeID: WineID,
				sessionID: SessionID
				
				},
		   function(data) {
		     //alert("Data Loaded: " + data);
		   });
		   
		$(".popupBack").fadeOut();
		
		$("#detailsForm").fadeIn();
		
		
	} else { 
		
	var OriginalColor = $(this).parent().parent().find("#ratingWarning").css("color");
		$(this).parent().parent().find("#ratingInstruction").fadeOut();
		
		$(this).parent().parent().find("#ratingWarning").delay('500').fadeIn().find("h4").animate({
			
			color:"#ff653c"
		}, 100).delay('1000').animate({
			color: "#730055"
		});
		
		
		}
		
	});
	
$('.submitEntry').click(function() {
	updateTips("Form OK");
var email = $('#keyboard2');
var name = $('#keyboard');
var phone = $('#keyboard3');
var checked = $('#termsCheck');
var SessionID = $('#sessionID');
 name.removeClass( "ui-state-error" );
 email.removeClass( "ui-state-error" );
	var bValid = true;
	
	 bValid = bValid && checkLength( name, "Name", 1, 50 );	
	 bValid = bValid && checkRegexp( email, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i, "Must be a valid email eg. name@domain.com" );
 bValid = bValid && checkCheckbox(checked);	
		if(bValid) {
			//form is valid, post it
			$.post(base_url + "forms/addEntry", { 
				email: email.val(),
				phone: phone.val(),
				name: name.val(),
				sessionID: SessionID.val()
				
				},
		   function(data) {
		  //   alert("Data Loaded: " + data);
		   });
		   
		   $(".popupBack").fadeOut();
		
		$("#finished").fadeIn();
		   
		   
		} else { 
			//alert('not valid')
			}
		
		
	});
	
	
	$('.loadTerms').click(function() {

		
		
		
		$("#terms").fadeIn();
		
	});
	
	$('.mapLink').click(function() {

		var stand_id = $(this).attr('id');

	 window.location = base_url + "welcome/display_stand/" + stand_id;
		
		
		
		
		
	});
	
	
	$('.formCheckbox').click(function() {
		
		if($(this).hasClass('isTicked')) {
			
			$(this).removeClass('isTicked');
			$("#termsCheck").val("");
		
		} else {
			$(this).addClass('isTicked');
			$("#termsCheck").val("1");
		}
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
$(document).ready(function() {
    $('.slideshow').cycle({
		fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
	});
});