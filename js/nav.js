$(function () {
            $(".nav2 > ul > li ").mouseover(function () {
                $(this).children(".sub").stop().slideDown();
            }).mouseout(function () {
                $(".sub").stop().slideUp();
            });
        });
