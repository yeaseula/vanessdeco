$(function () {
    $(".l_box").hover(function () {
        $(this).children(".loydn_change").css("display", "block");
    }, function () {
        $(this).children(".loydn_change").css("display", "none");
    });
});