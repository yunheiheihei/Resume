(function () {
    router('nav',$('.nav'));

    setTimeout(function () {
        $('.nav ul li').eq(1).addClass('active');
    },100);

    $('.skill .node').eq(0).css({'background': 'linear-gradient(to bottom, #e4e5e7 0%,#e4e5e7 20%,transparent 100%)'});
    $('.skill .node').eq(1).css({'background': 'linear-gradient(to top, #e4e5e7 0%,#e4e5e7 20%,transparent 100%)'});
    $('.skill .node').eq(2).css({'background': 'linear-gradient(to bottom, #e4e5e7 0%,#e4e5e7 20%,transparent 100%)'});
    $('.skill .node').eq(3).css({'background': 'linear-gradient(to right, #e4e5e7 0%,#e4e5e7 20%,transparent 100%)'});


    $('.skill .row1 .node').eq(0).delay(1000).animate({'opacity':1},1000,function () {
        $('.skill .row1 .sline').animate({'width':'100%'},2000,function () {
            $('.skill .row1 .node').eq(1).animate({'opacity':1},'slow',function () {
                $('.skill .row2 .scolline').animate({'height':'1rem'},1000,function () {
                    $('.skill .row3 .node').eq(1).animate({'opacity':1},'slow',function () {
                        $('.skill .row3 .sline').animate({'width':'100%'},1000,function () {
                            $('.skill .row3 .node').eq(0).animate({'opacity':1},'slow',function () {
                                $('.skill .row4 .sign1').css({'opacity': 1});
                                $('.skill .row4 .sign2').css({'opacity': 1});
                                $('.skill .row4 .sign3').css({'opacity': 1});
                                cicleFun(".sign1",".sign2",".sign3",0.3,200);
                            });
                        })
                    });

                });
            });

        });

    });

        function cicleFun(name1,name2,name3,shift,interval){
            $(name1).animate({"bottom":"-="+shift+"rem"},interval,function(){
                $(name1).hide();
                $(name2).animate({"bottom":"-="+shift+"rem"},interval,function(){
                    $(name2).hide();
                    $(name3).animate({"bottom":"-="+shift+"rem"},interval,function(){
                        $(name3).hide();
                        $(name1).css("bottom","+="+ shift*2+"rem").show().animate({"bottom":"-="+shift+"rem"},interval,function(){
                            $(name2).css("bottom","+="+shift*2+"rem").show().animate({"bottom":"-="+shift+"rem"},interval,function(){
                                $(name3).css("bottom","+="+shift*2+"rem").show().animate({"bottom":"-="+shift+"rem"},interval,function(){
                                    setTimeout(function(){cicleFun(name1,name2,name3,shift,interval)},1500);

                                });
                            });
                        });
                    });
                });
            });
        }
    
    function arc(can,num,col) {
        var canvas = can.get(0);
        var cvs =canvas.getContext('2d');
        function wsize() {
            var w=$('.skill').innerWidth();
            canvas.width=w/6;
            canvas.height=w/6;
        }
        wsize();
        $(window).resize(wsize);
        var x = canvas.width/2;
        var y = canvas.height/2;
        var r = canvas.height/3;
        var max = 100;
        var n=0;

        function background(){
            cvs.beginPath();
            cvs.lineWidth = 14;
            cvs.strokeStyle = 'rgba(153,153,153,0.5)';
            cvs.lineCap = 'round';
            cvs.arc(x,y,r,0,Math.PI*2);
            cvs.stroke();
        }

        var dis = Math.PI*2*num/max;
        var start = Math.PI*3/2/max;

        var time = setInterval(function(){
            cvs.clearRect(0,0,canvas.width,canvas.height);
            background();
            var text = parseInt(num/max*n*100);
            cvs.beginPath();
            cvs.lineWidth = 14;
            cvs.strokeStyle = col;
            cvs.lineCap = 'round';
            cvs.arc(x,y,r,start*n,n*(dis+start));
            cvs.stroke();
            cvs.fillStyle = 'black';
            cvs.font='0.3rem Arial';
            cvs.textAlign = 'center';
            cvs.textBaseline = 'middle';
            cvs.fillText(''+text+'%',x,y);
            n++;
            if(n>max){
                clearInterval(time);
            }
        },50);
    }

    setTimeout(function () {
        $('.skill .row5').animate({'opacity':1},1000,function () {
           $('.skill .row6').delay(3000).animate({'opacity':1},1000);
        });
        arc($('#can1'),0.8,'rgba(51,122,183,0.5)');
        arc($('#can2'),0.9,'rgba(91,191,222,0.5)');
        arc($('#can3'),0.9,'rgba(1,16,28,0.5)');
        arc($('#can4'),0.85,'rgba(217,83,79,0.5)');
        arc($('#can5'),0.75,'rgba(240,173,78,0.5)');
        arc($('#can6'),0.7,'rgba(92,184,92,0.5)');
    },8500);





})();
