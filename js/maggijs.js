$(function () {
    $(".m_box").hover(function () {
        $(this).children(".maggi_change").css("display", "block");
    }, function () {
        $(this).children(".maggi_change").css("display", "none");
    });
});