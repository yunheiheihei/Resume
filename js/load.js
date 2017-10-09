setTimeout(function () {
     $('.load').animate({'opacity':0},1000,function () {
         router('nav',$('.nav'));
         router('home');
         background();
         document.body.style.background="url('"+cvs.toDataURL()+"')";
     });
},8000);