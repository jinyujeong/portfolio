$(document).ready(function() {
    /*
    $('.timer').countTo({
        speed:2000,
    });
*/
    //main-animation
    var main = $('#cont1');
    main.find('.gradient').addClass('show');

    //animation
    var count = $('#cont2');
    var cont = $("#cont3 > div.port");
    var foot = $('.footer h2');

    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        
        //timer-animation
        if(wScroll>=count.offset().top-$(window).height()/3){
            $('.timer').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                
                $({ countNum: $this.text()}).animate({
                  countNum: countTo
                },
                {
                  duration: 1500,
                  easing:'linear',
                  step: function() {
                    $this.text(Math.floor(this.countNum));
                  },
                  complete: function() {
                    $this.text(this.countNum);
                    //alert('finished');
                  }
              
                });  
                
                
              
            });
        }

        //portfolio-animation
        if(wScroll>=cont.eq(0).offset().top-$(window).height()/3){
            cont.eq(0).addClass('show');
        }
        if(wScroll>=cont.eq(1).offset().top-$(window).height()/3){
            cont.eq(1).addClass('show');
        }
        if(wScroll>=cont.eq(2).offset().top-$(window).height()/3){
            cont.eq(2).addClass('show');
        }
        if(wScroll>=cont.eq(3).offset().top-$(window).height()/3){
            cont.eq(3).addClass('show');
        }
        if(wScroll>=cont.eq(4).offset().top-$(window).height()/3){
            cont.eq(4).addClass('show');
        }
        
        if(wScroll>=foot.offset().top-$(window).height()){
            foot.addClass('show');
        }
    });
});