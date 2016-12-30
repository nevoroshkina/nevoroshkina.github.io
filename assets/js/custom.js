(function($) {

// prettyPhoto
	jQuery(document).ready(function(){
		jQuery('a[data-gal]').each(function() {
			jQuery(this).attr('rel', jQuery(this).data('gal'));
		});  	
		jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});
	}); 

	$('#mainContactForm').on('submit', function(event){
		event.preventDefault();
		var messageSend = "";
		var name = $('#exampleInputName1').val();
		var email = $('#exampleInputEmail1').val();
		var subject = $("#exampleInputSubject1").val();
		var message = $('#message1').val();

		messageSend += 'name='+name;
		if(messageSend.length > 0){
			messageSend +='&email='+email;
		} else {
			messageSend +='email='+email;
		}
		if(messageSend.length > 0){
			messageSend +='&subject='+subject;
		} else {
			messageSend +='subject='+subject;
		}
		if(messageSend.length > 0){
			messageSend +='&message='+message;
		} else {
			messageSend +='message='+message;
		}
		console.log(messageSend);
		$.ajax({
		    url: "https://formspree.io/a.shengilevych@gmail.com", 
		    method: "POST",
		    data: messageSend,
		    dataType: "json"
		});
	})

		
})(jQuery);