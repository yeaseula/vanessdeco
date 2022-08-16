
        $(function () {

            $.ajax({

                url: "./json/loydn.json",
                dataType: "json",

                success: function (data) {

                    if (data.length > 0) {

                        for (var i in data) {

                            $(".l_img").eq(i).append('<a href="#">' + "<img src='img/" + data[i].url + "'/>" + '</a>');

                            $(".loydn_change").eq(i).append('<a href="#">' + "<img src='img/" + data[i].change_url + "'/>" + '</a>');

                            $(".l_text").eq(i).append('<h4><a href="#">' + data[i].title + "</a></h4>");

                            $(".l_text").eq(i).append('<p><a href="#">' + data[i].subtitle + "</a></p>");

                            $(".l_text").eq(i).append("<p>" + data[i].price + "</p>")

                        }

                    }

                    $("p:last-child").css("margin", "7px 0 0 0px");

                    var l_demo2 = document.createElement("span");
                    var l_result2 = document.createTextNode("Quick");
                    l_demo2.appendChild(l_result2);

                    $(".l_box:nth-of-type(2)").children(".l_text").children("p:first").append(l_demo2);
                    $(l_demo2).css({
                        "borderRadius": "8px", "backgroundColor": "#ffc34d",
                        "padding": "2px 8px", "margin": "0px 3px",
                        "color": "white", "font-size": "13px"
                    });




                    var l_demo3 = document.createElement("span");
                    var l_result3 = document.createTextNode("Best");
                    l_demo3.appendChild(l_result3);

                    $(".l_box:nth-of-type(5)").children(".l_text").children("p:first").append(l_demo3);
                    $(l_demo3).css({
                        "borderRadius": "8px", "backgroundColor": "#ffc34d",
                        "padding": "2px 8px", "margin": "0px 3px",
                        "color": "white", "font-size": "13px"
                    });

                    var l_demo31 = document.createElement("span");
                    var l_result31 = document.createTextNode("Event");
                    l_demo31.appendChild(l_result31);

                    $(".l_box:nth-of-type(5)").children(".l_text").children("p:first").append(l_demo31);
                    $(l_demo31).css({
                        "borderRadius": "8px", "backgroundColor": "coral",
                        "padding": "2px 8px", "margin": "0px 3px",
                        "color": "white", "font-size": "13px"
                    });


                }

            });

        });
