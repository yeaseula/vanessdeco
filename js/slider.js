 $(function () {

    $("#circle > li").mouseover(function () {
        $(".slider > li").stop().hide();
        $(".slider > li").eq($(this).index()).stop().show();

        $("#circle > li").removeClass("li_hover");
        $(this).addClass("li_hover");
    }).mouseleave(function () {
        $("#circle > li").removeClass("li_hover");
        $(this).addClass("li_hover");
    });


    var i = 0;

    function slider() {
        i++;

        if (i > $(".slider > li:last").index()) {
            i = 0;
        }

        $(".slider > li").stop().hide();
        $(".slider > li").eq(i).stop().show();
        $("#circle >li").removeClass("li_hover");
        $("#circle >li").eq(i).addClass("li_hover");

    }

    setInterval(slider, 3000)


        });