
$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('#Header').addClass('shrink');
    }
    else {
        $('#Header').removeClass('shrink');
    }
});


$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});

jQuery(".nav-link").click(function() {
		if(parseInt(jQuery(window).width()) > 991){
		elemid =jQuery(this).data("link");
		if(elemid != ""){
			jQuery('#Header').addClass('shrink');
			setTimeout(function(){
				console.log(jQuery('#Header').height());
				jQuery([document.documentElement, document.body]).animate({
					scrollTop: jQuery(elemid).offset().top - jQuery("#Header").height()
				}, 100);
			},400);
			return false;
		}
	}
	else{
		return true;
	}
});






