$(".nav-trigger").on("click", function() {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).children().removeClass("active");
    } else {
        $(this).addClass("active");
        $(this).children().addClass("active");
    }
    blah();
});

function blah() {
    $(".nav-trigger").one('transitionend', function () {
        $(".nav-menu__item").toggleClass("move");
    });
}