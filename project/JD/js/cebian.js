   $(document).ready(function(){
   	
   	(function(){
        $('.cbfloor').hide();

        function size() {
            var dis = $(window).width();
            var l = (dis-1210)/2-60;
            if(l<0){
                l=0;
            }
            $('.cbfloor').css('left',l);
            }
            size();

            $(window).resize(size);

           $(window).scroll(function(){
               var srctop = $(window).scrollTop();

               if(srctop>=1500 && srctop<=9000){
                   $('.cbfloor').show("slow");
               }
               if(srctop<1500 || srctop>9000) {
                   $('.cbfloor').hide("slow");
               }

               $('div.floor').each(function(i){
                   var offtop = $('div.floor').eq(i).offset().top;
                    var dis = offtop - srctop;
                   if(dis>=0 && dis<=250){
                       $('.cbfloor li').eq(i).addClass('act').siblings().removeClass('act');
                   }
               });
           });

            $('.cbfloor li').click(function(){
                var num = $(this).index();
                var ws=$('div.floor').eq(num).offset().top - 100;
                $('body,html').animate({'scrollTop':ws},1000);
                
            });})();

   //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
       (function () {

           $('.kefuico7,.kefuico7+p').click(function () {

               $('html,body').animate({'scrollTop':0},500);
           })

       })();
   	




   	
    });


