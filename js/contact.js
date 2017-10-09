(function () {
    router('nav',$('.nav'));

    setTimeout(function () {
        $('.nav ul li').eq(4).addClass('active');
    },100);

   $('.contact').delay(1500).animate({'opacity':1},1000);

})();