  $(function () {

            $.ajax({

                url: "./json/white.json",
                dataType: "json",

                success: function (data) {

                    if (data.length > 0) {

                        for (var i in data) {

                            $(".change").eq(i).append('<a href="#">' + "<img src='img/" + data[i].change_url + "'/>" + '</a>');

                            $(".w_img").eq(i).append('<a href="#">' + "<img src='img/" + data[i].url + "'/>" + '</a>');

                            $(".w_text").eq(i).append('<h4><a href="#">' + data[i].title + "</a></h4>");

                            $(".w_text").eq(i).append('<p><a href="#">' + data[i].subtitle + "</a></p>");

                            $(".w_text").eq(i).append("<p>" + data[i].price + "</p>")

                        }

                    }

                    //첫번째 박스

                    var demo = document.createElement("span");
                    var result = document.createTextNode("Event");
                    demo.appendChild(result);

                    $(".w_text:first").children("p:first").append(demo);

                    $(demo).css({
                        "borderRadius": "8px", "backgroundColor": "#ffc34d",
                        "padding": "2px 8px", "margin": "0px 3px",
                        "color": "white", "font-size": "13px"
                    });

                    var demo1 = document.createElement("span");
                    var result1 = document.createTextNode("1+1");
                    demo1.appendChild(result1);

                    $(".w_text:first").children("p:first").append(demo1);
                    $(demo1).css({
                        "borderRadius": "8px", "backgroundColor": "coral",
                        "padding": "2px 8px",
                        "color": "white", "font-size": "13px"
                    });

                    //세번째 박스

                    var demo2 = document.createElement("span");
                    var result2 = document.createTextNode("Best");
                    demo2.appendChild(result2);

                    $(".w_box:nth-of-type(3)").children(".w_text").children("p:first").append(demo2);
                    $(demo2).css({
                        "borderRadius": "8px", "backgroundColor": "#ffc34d",
                        "padding": "2px 8px", "margin": "0px 3px",
                        "color": "white", "font-size": "13px"
                    });

                    //다섯번째 박스

                    var demo5 = document.createElement("span");
                    var result5 = document.createTextNode("Quick");
                    demo5.appendChild(result5);

                    $(".w_box:nth-of-type(5)").children(".w_text").children("p:first").append(demo5);
                    $(demo5).css({
                        "borderRadius": "8px", "backgroundColor": "#ffc34d",
                        "padding": "2px 8px", "margin": "0px 3px",
                        "color": "white", "font-size": "13px"
                    });

                    //여섯번째 박스

                    var demo6 = document.createElement("span");
                    var result6 = document.createTextNode("New");
                    demo6.appendChild(result6);

                    $(".w_box:nth-of-type(6)").children(".w_text").children("p:first").append(demo6);
                    $(demo6).css({
                        "borderRadius": "8px", "backgroundColor": "#ffc34d",
                        "padding": "2px 8px", "margin": "0px 3px",
                        "color": "white", "font-size": "13px"
                    });

                    //일곱번째 박스

                    var demo7 = document.createElement("span");
                    var result7 = document.createTextNode("Best");
                    demo7.appendChild(result7);

                    $(".w_box:nth-of-type(7)").children(".w_text").children("p:first").append(demo7);
                    $(demo7).css({
                        "borderRadius": "8px", "backgroundColor": "#ffc34d",
                        "padding": "2px 8px", "margin": "0px 3px",
                        "color": "white", "font-size": "13px"
                    });

                    var demo8 = document.createElement("span");
                    var result8 = document.createTextNode("Review");
                    demo8.appendChild(result8);

                    $(".w_box:nth-of-type(7)").children(".w_text").children("p:first").append(demo8);
                    $(demo8).css({
                        "borderRadius": "8px", "backgroundColor": "coral",
                        "padding": "2px 8px",
                        "color": "white", "font-size": "13px"
                    });


                }

            });

        });