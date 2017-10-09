(function () {

    setTimeout(function () {
        $('.nav ul li').css({'transform':'skew(-40deg,0deg) translateX(1.2rem)'});
    },1000);

    setTimeout(function () {
        $('.nav ul li').css({'transition': 'all 0.5s  0.1s'});
    },1500);

    $('.nav ul li').hover(function () {
          $(this).css({'transform':'skew(-40deg,0deg) translateX(1rem) scale(1.1)'});
    },function () {
          $(this).css({'transform':'skew(-40deg,0deg) translateX(1.2rem) scale(1)'});
    });

    var arr=['home','skill','experience','project','contact'];
    $('.nav ul li').click(function () {
           $(this).addClass('click').siblings().removeClass('click');
           $(this).addClass('active').siblings().removeClass('active');
           var that=$(this);
           setTimeout(function () {
               that.removeClass('click');
               $('.nav ul li').css({'transform':'skew(-40deg,0deg) translateX(5rem)'});
           },1000);
           setTimeout(function () {
               router(arr[that.index()]);
           },2000);

           if($('.box').children('div').hasClass('home')){
               $('.home .photo').animate({'left':'1.5rem','opacity': 0},1000);
               $('.home ul li').eq(0).delay(0).animate({'opacity':0,'left':'55%'},1000);
               $('.home ul li').eq(1).delay(200).animate({'opacity':0,'left':'50%'},1000);
               $('.home ul li').eq(2).delay(400).animate({'opacity':0,'left':'45%'},1000);
               $('.home ul li').eq(3).delay(600).animate({'opacity':0,'left':'45%'},1000);
               $('.home ul li').eq(4).delay(800).animate({'opacity':0,'left':'50%'},1000);
               $('.home ul li').eq(5).delay(1000).animate({'opacity':0,'left':'55%'},1000);
           }

        if($('.box').children('div').hasClass('experience')){
            $('.experience .line li').each(function (i) {
                $(this).delay(200 * i).animate({'opacity': 0, 'left': 0}, 1000);
            })
        }
        if($('.box').children('div').hasClass('skill')){
            $('.skill').animate({'opacity':0},1000);
        }
        if($('.box').children('div').hasClass('project')){
            $('.project').animate({'opacity':0},1000);
        }
        if($('.box').children('div').hasClass('contact')){
            $('.contact').animate({'opacity':0},1000);
        }


    })


})();
