$(document).ready(function(){
    //배너 슬라이드
    $('#banner-slide').slick({
        arrows:true,
        autoplay:true,
        autoplaySpeed:5000
    });
    $('.slb_slide').slick({
        arrows:true
    });
    $('.sbr_slide').slick({
      dots:true,
      arrows:false,
      autoplay:true,
      autoplaySpeed:6000
    });
    $('.sbn_slide').slick({
      dots:true,
      arrows:false,
      autoplay:true,
      autoplaySpeed:6000
    });
    //전체메뉴
    $('.all_menu').click(function(e){
      e.preventDefault();
      $('#site').slideToggle(400);
    })
    //뱅킹로그인 메뉴
    $('.bklogin').hover(function(e){
      e.preventDefault();
      $('.bklogin_menu').slideToggle(400);
    })


    /* IE skip menu */
    var focusIsSupported = (function(){
 
        // Create an anchor + some styles including ':focus'.
        // Focus the anchor, test if style was applied,
        // if it was then we know ':focus' is supported.
     
        var ud = 't' + +new Date(),
            anchor = $('<a id="' + ud + '" href="#"/>').css({top:'-999px',position:'absolute'}).appendTo('body'),
            style = $('<style>#'+ud+'{font-size:10px;}#'+ud+':focus{font-size:1px !important;}</style>').appendTo('head'),
            supported = anchor.focus().css('top') !== '0px';
        anchor.add(style).remove();
        return supported;
     
    })();
  });