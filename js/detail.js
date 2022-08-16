        $(document).ready(function () {
            $("#smalling li:first-child").mouseover(function () {
                $("#cimg").attr("src", "img/detail1.JPG");
            });

            $("#smalling li:nth-child(2)").mouseover(function () {
                $("#cimg").attr("src", "img/detail2.JPG");
            });
            $("#smalling li:nth-child(3)").mouseover(function () {
                $("#cimg").attr("src", "img/product.JPG");
            });
        });