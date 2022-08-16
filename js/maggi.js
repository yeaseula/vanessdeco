
        $(function () {

            $.ajax({

                url: "./json/maggiol.json",
                dataType: "json",

                success: function (data) {

                    if (data.length > 0) {

                        for (var i in data) {

                            $(".m_img").eq(i).append('<a href="#">' + "<img src='img/" + data[i].url + "'/>" + '</a>');

                            $(".maggi_change").eq(i).append('<a href="#">' + "<img src='img/" + data[i].change_url + "'/>" + '</a>');

                            $(".m_text").eq(i).append('<h4><a href="#">' + data[i].title + "</a></h4>");

                            $(".m_text").eq(i).append('<p><a href="#">' + data[i].subtitle + "</a></p>");

                            $(".m_text").eq(i).append("<p>" + data[i].price + "</p>")

                        }

                    }

                    //첫번째

                    var m_demo = document.createElement("span");
                    var m_result = document.createTextNode("Best");
                    m_demo.appendChild(m_result);

                    $(".m_text:first").children("p:first").after(m_demo);
                    $(".m_text:first").children("p:first").css("display","inline-block");


                    $(m_demo).css({
                        "borderRadius": "8px", "backgroundColor": "#ffc34d",
                        "padding": "2px 8px", "margin": "0px 3px",
                        "color": "white", "font-size": "13px"
                    });

                    //세번째

                    var m_demo2 = document.createElement("span");
                    var m_result2 = document.createTextNode("Best");
                    m_demo2.appendChild(m_result2);

                    $(".m_box:nth-of-type(3)").children(".m_text").children("p:first").append(m_demo2);
                    $(m_demo2).css({
                        "borderRadius": "8px", "backgroundColor": "#ffc34d",
                        "padding": "2px 8px", "margin": "0px 3px",
                        "color": "white", "font-size": "13px"
                    });

                    //일곱번째

                    var m_demo3 = document.createElement("span");
                    var m_result3 = document.createTextNode("Event");
                    m_demo3.appendChild(m_result3);

                    $(".m_box:nth-of-type(7)").children(".m_text").children("p:first").append(m_demo3);
                    $(m_demo3).css({
                        "borderRadius": "8px", "backgroundColor": "#ffc34d",
                        "padding": "2px 8px", "margin": "0px 3px",
                        "color": "white", "font-size": "13px"
                    });

                    var m_demo4 = document.createElement("span");
                    var m_result4 = document.createTextNode("Best");
                    m_demo4.appendChild(m_result4);

                    $(".m_box:nth-of-type(7)").children(".m_text").children("p:first").append(m_demo4);
                    $(m_demo4).css({
                        "borderRadius": "8px", "backgroundColor": "coral",
                        "padding": "2px 8px",
                        "color": "white", "font-size": "13px"
                    });


                }

            });

        });