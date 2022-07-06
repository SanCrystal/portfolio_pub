
$(document).ready(function(){
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
    setInterval(function(){
        $('.carousel.carousel-slider').carousel('next');
        
    },6000)

    // add scroll event listener
    $(window).scroll(function(){
        // get the scroll position
        var scroll = $(window).scrollTop();
        if (scroll > 0){
            $('header').addClass('add-bgcolor');
        }else{
            $('header').removeClass('add-bgcolor');
        }
    });

    //change  indicator color on carousel
    // $('.testimonials .container .carousel .indicators .indicator-item ').css('background-color','#001752');
    // $('.testimonials .container .indicators .indicator-item .active').css('background-color','#fff !important');
    
});