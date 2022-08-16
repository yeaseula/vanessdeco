        //인기검색어 베스트 오른쪽구역 리뷰

        var review = Math.floor(Math.random() * 1000);
        document.getElementsByClassName("random_review")[0].innerHTML = "Review " + review;

        var review2 = Math.floor(Math.random() * 1000);
        document.getElementsByClassName("random_review")[1].innerHTML = "Review " + review2;

        var review3 = Math.floor(Math.random() * 1000);
        document.getElementsByClassName("random_review")[2].innerHTML = "Review " + review3;

        //화이트

        //제목

        var whiteTitle = document.getElementById("whiteTitle");
        whiteTitle.innerHTML = "WHITE";

        //마지올로니 제목

        var maggiTitle = document.getElementById("maggiTitle");
        maggiTitle.innerHTML = "MAGGIOLONY";

        //로이든 제목

        var loydnTitle = document.getElementById("loydn_title");
        loydnTitle.innerHTML = "LOYDN";