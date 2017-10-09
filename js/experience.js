(function () {
    router('nav',$('.nav'));

    setTimeout(function () {
        $('.nav ul li').eq(2).addClass('active');
    },100);

    function hsize() {
        $('.experience .line').css({'height':$(window).height()});
    }
    hsize();
    $(window).resize(hsize);
    function exoerline() {
        $('.experience .line li').css({'left':'100%'});
         $('.experience .line li').each(function (i) {
              $(this).delay(400*i).animate({'opacity': 1,'left':5+10*i+'%'},1000,function () {
                 $(this).children('span').animate({'opacity':1},1000,function () {
                     $(this).siblings('a').animate({'opacity':1},1000);
                 });
              });
         })
    }
    exoerline();

    


})();