$(function () {
    $(".w_box").hover(function () {
        $(this).children(".change").css("display", "block");
    }, function () {
        $(this).children(".change").css("display", "none");
    });
});