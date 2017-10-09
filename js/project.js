(function () {
    router('nav',$('.nav'));

    setTimeout(function () {
        $('.nav ul li').eq(3).addClass('active');
    },100);

    function project() {
        $('.project li').each(function (i) {
            var time = Math.random()*800+500;
            setTimeout(function () {
                $('.project li').eq(i).addClass('active');
                setTimeout(function () {
                    $('.project img').eq(i).css({'transform': 'scale(1)','transition':'all 0.5s','opacity': 1});
                },1200);
            },time);
        })
    }

    project();


})();
