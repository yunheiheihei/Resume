 $(function(){

            var timeup;
            var timedown;
            var timeshow;
            var timeclick;
            var type ='h';
            var n;
            var sc=0;
            var state=true;
            var arrPos = [
                {left:"98px",top:"115px"},
                {left:"17px",top:"160px"},
                {left:"15px",top:"220px"},
                {left:"30px",top:"293px"},
                {left:"122px",top:"273px"},
                {left:"207px",top:"295px"},
                {left:"200px",top:"211px"},
                {left:"187px",top:"141px"},
                {left:"100px",top:"185px"}
            ];

            $('.but').click(function(){           //按键控制游戏的开启与再玩
                if($('.but').text()=='Ready GO!'){
                    sc=0;
                    $('.score').text(sc);
                    $(this).hide();
                    run();
                }
                if($('.but').text()=='Game Over!'){
                    $('.but').text('Ready GO!');
                    $('.blood').animate({'width':180},0);
                }
            });

            function run(){                             //最外部定时器
                $('.blood').animate({'width':0},18000,function(){
                    $('.but').show().text('Game Over!');
                    $('.wolf').remove();
                    clearInterval(timeshow);
                });
                show();
                }

            function show() {                    //$('.wolf')定义与生成的位置，跟后面执行语句(click)的配合，要注意！
                state=true;
                clearInterval(timeshow);
                timeshow=setInterval(function(){
                    n=0;
                    var num = parseInt(Math.random()*9+1);
                    if(num<3){type='x';}
                    if(num>=3){type='h';}
                    $('<img class="wolf"/>').appendTo($('#box'));
                    var rad = parseInt(Math.random()*arrPos.length);
                    $('.wolf').prop('src','img/'+type+n+'.png').css(arrPos[rad]);
                    up();
                    click();
                },1000);
            }

            function up(){                    //图像升起
                clearInterval(timeup);
                timeup=setInterval(function(){
                    $('.wolf').prop('src','img/'+type+n+'.png');
                    n++;
                    if(n>5){
                        clearInterval(timeup);
                        down();
                    }
                },80);
            }

          function down(){                 //图像落下
              clearInterval(timedown);
              timedown=setInterval(function(){
                  n--;
                  $('.wolf').prop('src','img/'+type+n+'.png');
                  if(n<=0){
                      clearInterval(timedown);
                      $('.wolf').remove();
                  }
              },80);
          }

          function click() {                 //打击图像
              $('.wolf').click(function(){
                  if(state==false){
                      return;
                  }
                  clearInterval(timeshow);
                  clearInterval(timeup);
                  clearInterval(timedown);
                  if(type=='h'){sc+=10;}
                  if(type=='x'){sc-=10;}
                  $('.score').text(sc);
                  var x=6;
                  clearInterval(timeclick);
                  timeclick=setInterval(function(){
                      $('.wolf').prop('src','img/'+type+x+'.png');
                      x++;
                      if(x>=9){
                          clearInterval(timeclick);
                          $('.wolf').remove();
                          show();
                      }
                  },80)
                  state=!state;
              });
          }




        });


