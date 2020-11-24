window.onload = function() {
    $(".header-nav > li ul").hide();
    $(".header-nav > li").hover(function() {
        $(this).children("ul").stop().slideDown();
    }, function() {
        $(this).children("ul").stop().slideUp();
    });
}