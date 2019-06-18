$(document).ready(function() {
    /*
    $('.timer').countTo({
        speed:2000,
    });
*/
    var main = $('#cont1 .gradient');
    var count = $('#cont2');
    var cont = $("#cont3 > div.port");
    var foot = $('.footer h2');

    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        
        //text-animation
        if(wScroll>=main.offset().top-$(window).height()){
            main.addClass('show');
        }

        if(wScroll>=count.offset().top-$(window).height()/3){
            count.find('.timer').countTo({
                speed:1500,
            });
        }

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