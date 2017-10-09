(function () {
    router('nav',$('.nav'));

    setTimeout(function () {
       $('.nav ul li').eq(0).addClass('active');
    },100);

    function home() {
        setTimeout(function () {
            $('.home .photo').addClass('active');
        },800);

        setTimeout(function () {
            $('.home .photo img').css({'transform': 'scale(1)','transition':'all 0.5s','opacity': 1,'box-shadow': '0.15rem 0.15rem 0.15rem rgba(0,0,0,0.5)'});
        },2800);

        setTimeout(function () {
            $('.home ul li').eq(0).delay(0).animate({'opacity':1,'left':'50%'},1000);
            $('.home ul li').eq(1).delay(200).animate({'opacity':1,'left':'45%'},1000);
            $('.home ul li').eq(2).delay(400).animate({'opacity':1,'left':'40%'},1000);
            $('.home ul li').eq(3).delay(600).animate({'opacity':1,'left':'40%'},1000);
            $('.home ul li').eq(4).delay(800).animate({'opacity':1,'left':'45%'},1000);
            $('.home ul li').eq(5).delay(1000).animate({'opacity':1,'left':'50%'},1000);
        },3200);
    }

    home();


   



})();
