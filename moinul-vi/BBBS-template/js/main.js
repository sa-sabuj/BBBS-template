$(document).ready(function(){
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        //nav:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    
    
    var isMenuOpen = false;

    $("#click-btn").click(function () {
        if (isMenuOpen == false) {
            $("#nav-menu").slideDown("1000");
            $("#click-btn span").remove("menu").add("close");
            isMenuOpen = true;
        } else {
            $("#nav-menu").slideUp("1000");
            $("#click-btn span").remove("fa-times").add("fa-bars");
            isMenuOpen = false;
        }
    });

    $(window).resize(function () {
        var screenSize = $(window).width();

        if (screenSize > 991) {
            $("#nav-menu").removeAttr("style");
            $("#click-btn span").remove("fa-times").add("fa-bars");
        }
    });

    $(function(){
        var tickerHeight = $('.member-scroll-parent ul li').outerHeight();
        $('.member-scroll-parent ul li:last-child').prependTo('.member-scroll-parent ul');
        $('.member-scroll-parent ul').css('marginTop',-tickerHeight);
        function moveTop(){
            $('.member-scroll-parent ul').animate({
                top : -tickerHeight
            },600, function(){
                $('.member-scroll-parent ul li:first-child').appendTo('.member-scroll-parent ul');
                $('.member-scroll-parent ul').css('top','');
            });
        }
        setInterval( function(){
            moveTop();
        }, 2000);
    });
    
});