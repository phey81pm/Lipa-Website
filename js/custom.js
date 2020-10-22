var swiper = new Swiper('.swiper-container', { 
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }, 
});
 
$(function() {
    var rightoffset = $("#rightsidebar").offset();
    var leftoffset = $("#leftsidebar").offset();
    var topPadding = 50;
    $(window).scroll(function() {
        if ($(window).scrollTop() > rightoffset.top) {
            $("#rightsidebar").stop().animate({
                marginTop: $(window).scrollTop() - rightoffset.top + topPadding 
            });
        } else {
            $("#rightsidebar").stop().animate({
                marginTop: 0
            });
        };

        if ($(window).scrollTop() > leftoffset.top) {
            $("#leftsidebar").stop().animate({
                marginTop: $(window).scrollTop() - leftoffset.top + topPadding 
            });
        } else {
            $("#leftsidebar").stop().animate({
                marginTop: 0
            });
        };
    });
});