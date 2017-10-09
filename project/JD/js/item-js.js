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
    
    //------------------------------------------------------------------------------------------------------------------------------------
    //按键返回浏览器顶部
    (function () {

        $('.kefuico7,.kefuico7+p').click(function () {

            $('html,body').animate({'scrollTop':0},500);
        })

    })();


    //------------------------------------------------------------------------------------------------------------------------------------
    //二级菜单
	(function () {
        var oli = $('.main .b-nav .pg1-list li');
        var list = $('.main .cb-list-main .cb-list');
        var oi = $('.header .h-bot .fenlie i');
        var time1;
        var time2;
        var time3;
        var time4;

        $('.header .h-bot .fenlie').hover(function(){
            oli.parent().show();
            oi.css('transform','rotate(180deg)');
        },function(){
            time1=setTimeout(function(){
                oi.css('transform','rotate(0deg)');
                oli.parent().hide();
            },300);
        });

        oli.hover(function(){
            clear();
            $(this).addClass('act').siblings().removeClass('act');
            var num = $(this).index();
            time2=setTimeout(function () {
                list.eq(num).show().siblings().hide();
            },300);

        },function(){
            clear();
            oli.removeClass('act');
            time3=setTimeout(function(){
                oi.css('transform','rotate(0deg)');
                oli.parent().hide();
                list.hide();

            },300);
        });

        list.hover(function () {
            clear();
            var num = $(this).index();
            oli.eq(num).addClass('act').siblings().removeClass('act');

        },function () {
            $(this).hide();
            time4=setTimeout(function () {
                oi.css('transform','rotate(0deg)');
                oli.parent().hide();
            },300)
        });

        function clear() {
            for(var i=0;i<1000;i++){
                clearTimeout(i);
            }
        }

    })();

    //--------------------------------------------------------------------------------------------------------------------------------------------------------
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

    //-----------------------------------------------------------------------------------------------------------------------------------------------------
    //产品放大镜
    (function () {

        var bigpic = $('.m-item-pud-left .bigpic .bigpic-add');
        var suppic = $('.m-item-pud-left .supbigpic');
        
        $('.m-item-pud-left .bigpic').mousemove(function(ev){

            bigpic.show();
            suppic.show();

            var l = ev.pageX - $(this).offset().left - bigpic.width()/2;
            var t = ev.pageY - $(this).offset().top - bigpic.height()/2;

            var maxl = $(this).width() - bigpic.width();
            var maxt = $(this).height() - bigpic.height();

            if(l<0){l=0;}
            if(t<0){t=0;}

            if(l>maxl){l=maxl;}
            if(t>maxt){t=maxt;}

            bigpic.css({'left':l,'top':t});
            suppic.children('img').css({'left':-l*16/9,'top':-t*16/9})

        });

        $('.m-item-pud-left .bigpic').mouseleave(function(){

            bigpic.hide();
            suppic.hide();
        })
        
    })();

     //--------------------------------------------------------------------------------------------------------------------------------------------------
    //产品小图轮播
    (function () {

        var bigpic = $('.m-item-pud-left .bigpic img');
        var smallpic = $('.m-item-pud-left .smallpic li');
        var suppic = $('.m-item-pud-left .supbigpic img')

        smallpic.mouseenter(function () {
            $(this).addClass('actli').siblings().removeClass('actli');
            var valnormal = $(this).children('img').attr('src').replace('small','normal');
            var valbig = $(this).children('img').attr('src').replace('small','big');
            bigpic.attr('src',valnormal);
            suppic.attr('src',valbig);
        });
        
        var oul = $('.m-item-pud-left .smallpic ul');
        var n=0;
        $('.m-item-pud-left .smallpic .leftbutton').click(function () {
            if(n<0){
                n++;
                oul.css('left',76*n);
            }
        });
        $('.m-item-pud-left .smallpic .rightbutton').click(function () {
            if(n>(5-oul.children('li').length)){
                n--;
                oul.css('left',76*n);
            }
        });
    })();
    
    //----------------------------------------------------------------------------------------------------------------------------------------------------
    //产品颜色选择
    (function () {

        var oli = $('.m-item-pud-right .right-f6 ul li');

        oli.hover(function () {
            $(this).addClass('act').siblings().removeClass('act');
        },function () {
            $(this).removeClass('act');
        })
        oli.click(function () {
            $(this).addClass('click').siblings().removeClass('click');
        })
    })();


    //----------------------------------------------------------------------------------------------------------------------------------------------------
    //套装选择
    
    (function () {
        
        var oli = $('.m-item-pud-right .right-f7 li');
        var ps = $('.m-item-pud-right .right-f7 li .ps');

        oli.hover(function () {
            $(this).addClass('move').siblings().removeClass('move');
        },function () {
            $(this).removeClass('move');
        });

        oli.click(function () {

           $(this).toggleClass('click').siblings().removeClass('click');
           $(this).siblings().children('.ps').hide();
           var num = $(this).index();
           ps.eq(num).toggle();
        })
    })();
    
    //----------------------------------------------------------------------------------------------------------------------------------------------------
    //购物车,白条功能
    (function () {

        var ipt = $('.m-item-pud-right .right-f10 .num input');
        var addbut = $('.m-item-pud-right .right-f10 .num button').eq(0);
        var redbut = $('.m-item-pud-right .right-f10 .num button').eq(1);
        var oli = $('.m-item-pud-right .right-f9 li');

        var n=1;
        
        addbut.click(function () {
            n++;
            ipt.val(n);
            redbut.prop('disabled',false);

            oli.find('span').each(function () {
                var txt =parseInt($(this).text()*100)/100;
                $(this).text(parseInt((txt+(txt/(n-1)))*100)/100);
            })
        });

        redbut.click(function () {
            if(n<=1){
                redbut.prop('disabled',true);
            }

            if(n>1){
                redbut.prop('disabled',false);
                n--;
                ipt.val(n);
                oli.find('span').each(function () {
                    var txt =parseInt($(this).text()*100)/100;
                    $(this).text(parseInt((txt-(txt/(n+1)))*100)/100);
                })
            }
        })
        
       oli.hover(function () {
           $(this).addClass('move').siblings().removeClass('move');
       },function () {
           $(this).removeClass('move');
       })

       oli.click(function () {
           $(this).toggleClass('click').siblings().removeClass('click');
           oli.hasClass('click')==true?$('.m-item-pud-right .right-f10 .baitiao').show():$('.m-item-pud-right .right-f10 .baitiao').hide();
       })

    })();

     //-----------------------------------------------------------------------------------------------------------------------------------------------------------
    //中部套餐选择计费
    (function () {
        
        var n=0;
        $('.m-item-taocan .top li').click(function () {
               $(this).addClass('act').siblings().removeClass('act');
               var num = $(this).index();
            $('.m-item-taocan .bot-ul ul').eq(num).show().siblings().hide();
            $('.m-item-taocan .bot-ul ul').find('input').prop('checked',false);

            n=0;
            $('.m-item-taocan .bot .right .p1 i').text(0);
            $('.m-item-taocan .bot .right .p2 .val').text(1579);
        })

        var val =  $('.m-item-taocan .bot .right .p2 .val').text();
        $('.m-item-taocan .bot-ul ul input').click(function () {
            if($(this).prop('checked')==true){
                n++;
                val = parseInt(val) + parseInt($(this).siblings('.val').text());

            }
            if($(this).prop('checked')==false){
                n--;
                val = parseInt(val) - parseInt($(this).siblings('.val').text());
            }

            $('.m-item-taocan .bot .right .p1 i').text(n);
            $('.m-item-taocan .bot .right .p2 .val').text(val);
        })

    })();

    //-----------------------------------------------------------------------------------------------------------------------------------------------------------
    //地址选择区域


    var address = [
        {'city':'北京','county':[{'name':'朝阳区','add':['四环到五环之间','管庄','北苑']},{'name':'海淀区','add':['三环以内','六环以外','西三旗']},{'name':'西城区','add':['内环','二环']}]},

        {'city':'上海','county':[{'name':'徐汇区','add':['城区','徐家汇','城外']},{'name':'宝山区','add':['罗店镇','大场镇','月浦镇']},{'name':'奉贤区','add':['南桥镇','四团镇','奉城镇']}]},

        {'city':'重庆','county':[{'name':'万州区','add':['白土镇','长坪镇','甘宁镇']},{'name':'南川区','add':['头渡镇','古花乡','民主乡']},{'name':'江津区','add':['广兴镇','西湖镇','石门镇']}]},

        {'city':'宁夏','county':[{'name':'银川市','add':['永宁县','贺兰县','西夏区']},{'name':'中卫市','add':['中宁县','海原县','沙坡头区']},{'name':'吴忠市','add':['青铜峡市','同心县','盐池县']}]},
    ];
    var time1;

    $('.m-item-pud-right .right-f3 div .add').hover(function(){
        $(this).children('i').css('transform','rotate(180deg)');
        $(this).addClass('addact');
        $('.m-item-address').show();
        
    },function(){
        time1=setTimeout(function(){
            $('.m-item-pud-right .right-f3 .add i').css('transform','rotate(0deg)');
            $('.m-item-pud-right .right-f3 div .add').removeClass('addact');
            $('.m-item-address').hide();
        },500);

    });

    $('.m-item-address').hover(function(){
        clearTimeout(time1);
        run();
       
    },function(){
        $('.m-item-pud-right .right-f3 div .add').removeClass('addact');
        $('.m-item-pud-right .right-f3 .add i').css('transform','rotate(0deg)');
        $('.m-item-address').hide();
        clearRun();
    });

    $('.m-item-address .top i').attr('flag','true');

    $('.m-item-address .top i').click(function(){

      if($(this).attr('flag')=='true'){
          $(this).css('transform','rotate(0deg)');
          $(this).attr('flag','false');
          $('.m-item-address .mid,.m-item-address .address-bot').hide();
          return false;
      }

        if($(this).attr('flag')=='false'){
            $(this).css('transform','rotate(180deg)');
            $(this).attr('flag','true');
            $('.m-item-address .mid,.m-item-address .bot').show();
            return false;
        }

    });

    function run() {
        var bot = $('.m-item-address .address-bot .bot');
        var x=0;
        for(var i=0;i<address.length;i++){
            bot.eq(0).append('<li><i>'+address[i].city+'</i></li>');
        }
        bot.eq(0).children('li').click(function () {
            var val_1=$(this).text();
            $('.m-item-address .mid span').eq(0).text(val_1);
            $(this).addClass('bot-act').siblings().removeClass('bot-act');

            var num_x = $(this).index();
            bot.eq(1).children('li').remove();
            for(var j=0;j<address[num_x].county.length;j++){
                bot.eq(1).append('<li><i>'+address[num_x].county[j].name+'</i></li>');
            }

            tab();

            bot.eq(1).children('li').click(function () {
                var val_2=$(this).text();
                $('.m-item-address .mid span').eq(1).text(val_2);
                $(this).addClass('bot-act').siblings().removeClass('bot-act');
                $('.m-item-address .mid li').eq(2).show();
                 var num_y = $(this).index();
                bot.eq(2).children('li').remove();
                for(var k=0;k<address[num_x].county[num_y].add.length;k++){
                    bot.eq(2).append('<li><i>'+address[num_x].county[num_y].add[k]+'</i></li>');
                }
                tab();

                bot.eq(2).children('li').click(function () {
                    var val_3=$(this).text();
                    $('.m-item-address .mid span').eq(2).text(val_3);
                    $(this).addClass('bot-act').siblings().removeClass('bot-act');
                    tab();
                    $('.m-item-pud-right .right-f3 .add span').text(val_1+val_2+val_3);
                });
            });

        });

    }

    function clearRun() {
        $('.m-item-address .address-bot .bot li').remove();
        $('.m-item-address .mid li').eq(2).hide();
    }

    function tab() {
        $('.m-item-address .mid li').click(function () {
           $(this).addClass('mid-act').siblings().removeClass('mid-act');
            $('.m-item-address .address-bot .bot').eq($(this).index()).show().siblings().hide();
        });
    }

   //--------------------------------------------------------------------------------------------------------------------------------------



});
