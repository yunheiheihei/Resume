$(document).ready(function(){

    //-----------------------------------------------------------------------------------------------------------------------------
    //顶部搜索框
    (function () {

        $(window).scroll(function () {

             var scrtop = $(window).scrollTop();
             if(scrtop>=1000){
                 $('.sup-top').slideDown();
             }
             if(scrtop<1000){
                 $('.sup-top').slideUp();
             }
        })
    })();
    
	 //-----------------------------------------------------------------------------------------------------------------------------
	//二级菜单导航
	(function (){
		var time1;
		var time2;

		var list = $('.main .cb-list-main .cb-list');
		var oli = $('.main .b-nav .pg1-list li');

		list.hide();

		oli.hover(function(){

			$(this).addClass('act').siblings().removeClass('act');
			var num = $(this).index();
			time1=setTimeout(function () {
				list.eq(num).fadeIn().siblings().hide();

			},300)

		},function(){

			oli.removeClass('act');
			time2 = setTimeout(function () {
				list.hide();
				
			},300)

			clearTimeout(time1);
		})

		list.hover(function () {
			var num = $(this).index();
			clearTimeout(time2);
			oli.eq(num).addClass('act').siblings().removeClass('act');

		},function () {
			oli.removeClass('act');
			$(this).fadeOut();
		})

	})();

	//------------------------------------------------------------------------------------------------------------------------------
	//顶部弹出菜单切换

	(function () {
		var arr = ['北京','上海','天津','重庆','河北','山西','河南','辽宁','吉林','黑龙江','内蒙古','江苏','安徽','山东','浙江','福建','河北','河南','广西','广东','江西','四川','海南','贵州','云南','西藏','陕西','甘肃','青海','宁夏','新疆','港澳','台湾','钓鱼岛','海外'];
		var time;

        for(var i=0;i<arr.length;i++){
            $('.h-top-left-ps').append('<li><span>'+arr[i]+'</span></li>');
        }
        $('.h-top-left-ps').children('li').hover(function () {
			  $(this).children('span').addClass('hover').siblings().removeClass('hover');
        },function () {
            $('.h-top-left-ps li span').removeClass('hover');
        })

        $('.h-top-left-ps').children('li').click(function () {
            $(this).children('span').addClass('click');
            $(this).siblings().find('span').removeClass('click');
            var val =  $(this).children('span').text();
            $('.h-top-left .add').html(val+'<i>◇</i>');
            $('.h-top-left .add i').css('transform','rotate(180deg)');
        });

		$('.h-top-left .add').hover(function () {
			$(this).children('i').css('transform','rotate(180deg)');
			$(this).addClass('addhover');
			$('.h-top-left-ps').show();
			
        },function () {
            time=setTimeout(function () {
                $('.h-top-left .add').children('i').css('transform','rotate(0deg)');
                $('.h-top-left .add').removeClass('addhover');
                $('.h-top-left-ps').hide();
            },300);
        });

        $('.h-top-left-ps').hover(function () {
			clearTimeout(time);
        },function () {
            $('.h-top-left .add i').css('transform','rotate(0deg)');
            $('.h-top-left .add').removeClass('addhover');
            $('.h-top-left-ps').hide();
        })
    })();

	//--------------------------------------------------------------------------------------------------------------------------------------
	//主页顶部大轮播图

	(function () {

        var time;
        var n=0;
        var uli = $('.pg1-banner ul li');
        $('.pg1-banner').append($('<ol>'));
        for(var i=0;i<uli.length;i++){
            $('.pg1-banner ol').append($('<li>'));
        }

        var oli = $('.pg1-banner ol li');
		oli.eq(0).addClass('act');
		var l = ($('.pg1-banner').outerWidth() - $('.pg1-banner ol').outerWidth())/2;
        $('.pg1-banner ol').css('left',l);

        run();

        oli.hover(function(){
            clearInterval(time);
            $(this).addClass('act').siblings().removeClass('act');
            uli.eq($(this).index()).show().siblings().hide();
            return n=$(this).index();
        },function () {
            run();
        });

        uli.hover(function () {
            clearInterval(time);
        },function () {
        	run();
        })

        $('.pg1-banner').hover(function () {
			$(this).children('button').addClass('butact');
        },function () {
            $(this).children('button').removeClass('butact');
        })

        $('.pg1-banner .butleft,.pg1-banner .butright').hover(function () {
            clearInterval(time);
        },function () {
			run();
        })

		$('.pg1-banner .butleft').click(function () {
			n--;
            oli.eq(n).addClass('act').siblings().removeClass('act');
            uli.eq(n).show().siblings().hide();
            if(n<=0){
            	n=oli.length;
			}
        })
		
        $('.pg1-banner .butright').click(function () {
            oli.eq(n).addClass('act').siblings().removeClass('act');
            uli.eq(n).show().siblings().hide();
            n++;
            if(n==oli.length){
            	n=0;
			}
        })

        function run(){
            time=setInterval(function(){
				if(n<oli.length){
                    oli.eq(n).addClass('act').siblings().removeClass('act');
                    uli.eq(n).fadeIn().siblings().hide();
                    n++;
				}
                if(n>=oli.length){
                    n=0;
                }
            },1000);
        }
    })();

	//-------------------------------------------------------------------------------------------------------------------------------------------------------
    //顶部12格效果
    (function () {

        var time;
        var iconli = $('.pg1-right .icon .icon-ul li').slice(0,4);

        iconli.hover(function () {
            time=setTimeout(function () {
                $('.pg1-right .icon .icon-ul').slideUp(500);
            },500)

        },function () {
            clearTimeout(time);
        });

        $('.pg1-right .icon .box .top li').mouseenter(function () {
            $(this).addClass('act').siblings().removeClass('act');
            $('.pg1-right .icon .box .text').eq($(this).index()).show().siblings('div').hide();
           
        });

        $('.pg1-right .icon .box .text span').click(function () {
            $('.pg1-right .icon .icon-ul').slideDown();
        })

        $('.pg1-right .box .texta div ul li').mouseenter(function () {
             $(this).addClass('act').siblings().removeClass('act');
            $('.pg1-right .box .texta form ').hide();
             $('.pg1-right .box .texta form ').eq($(this).index()).show();
        })


        $('.pg1-right .box .textb div ul li').mouseenter(function () {
            $(this).addClass('act').siblings().removeClass('act');
            $('.pg1-right .box .textb form ').hide();
            $('.pg1-right .box .textb form ').eq($(this).index()).show();
        })

        $('.pg1-right .box .textc div ul li').mouseenter(function () {
            $(this).addClass('act').siblings().removeClass('act');
            $('.pg1-right .box .textc form ').hide();
            $('.pg1-right .box .textc form ').eq($(this).index()).show();
        })

        $('.pg1-right .box .textd div ul li').mouseenter(function () {
            $(this).addClass('act').siblings().removeClass('act');
            $('.pg1-right .box .textd form ').hide();
            $('.pg1-right .box .textd form ').eq($(this).index()).show();
        })

    })();


    //-------------------------------------------------------------------------------------------------------------------------------------------------------
	//热门晒单轮播滚动

	(function (){

		$('.m-page13 .right-item-box a').clone().appendTo($('.m-page13 .right-item-box'));
		var n=0;
		var time;
		var obox = $('.m-page13 .right-item-box');
		var step =  $('.m-page13 .right-item-box a').outerHeight();
		var leng =  $('.m-page13 .right-item-box a').length/2;

		run();

		function run() {

			time=setInterval(function () {
				n++;
				if(n<=leng)
					obox.animate({'top':-step*n},500);
				if(n>leng){
					n = 0;
					obox.animate({'top':0},0);
				}
			},1000);
		}

		$('.m-page13 .right .item').hover(function () {
			clearInterval(time);
		},function () {
			run();
		})

	})();

  //----------------------------------------------------------------------------------------------------------------------------------------------------



	
});
