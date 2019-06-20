$(document).ready(function() {
    /*$(window).load(function() {
        $('#loading').hide();
        $('.line').hide();
     });*/

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

    var navigation = {
        // Variables
        $nav: document.querySelector('.nav'),
        $navTrigger: document.querySelector('.nav__trigger'),
        $navContent: document.querySelector('.nav__content'),
        transitionEnd: 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
        
        init: function() {
            var self = this;
    
            // Handle the transitions
            self.$navTrigger.addEventListener('click', function(e) {
                e.preventDefault();
                if (!self.$navTrigger.classList.contains('is-active')) {
                    // .nav--trigger active
                    self.$navTrigger.classList.add('is-active');
                    
                    // .nav active
                    if (!self.$nav.classList.contains('is-active')) {
                        self.$nav.classList.add('is-active');
                        self.$nav.addEventListener('transitionend', function(e) {
                            if (e.propertyName == 'transform' && self.$navTrigger.classList.contains('is-active')) {
                                self.$navContent.classList.add('is-active');
                            }
                        });
                    } else {
                        self.$navContent.classList.add('is-active');                    
                    }
    
                    // no-csstransitions fallback
                    if (document.documentElement.classList.contains('no-csstransitions')) {
                        self.$navContent.classList.add('is-active');
                    }
                } else {
                    // .nav--trigger inactive
                    self.$navTrigger.classList.remove('is-active');
                    
                    // .nav__content inactive
                    if (self.$navContent.classList.contains('is-active')) {
                        self.$navContent.classList.remove('is-active');
                        self.$navContent.addEventListener('transitionend', function(e) {
                            if (e.propertyName == 'opacity' && !self.$navTrigger.classList.contains('is-active')) {
                                // .nav inactive
                                self.$nav.classList.remove('is-active');
                            }
                        });
                    } else {
                        self.$nav.classList.remove('is-active');                    
                    }
    
                    // no-csstransitions fallback
                    if (document.documentElement.classList.contains('no-csstransitions')) {
                        self.$nav.classList.add('is-active');
                    }

                    
                }
            });
        }
        
    }
    
    navigation.init();
    
    var menu = $('.nav__list a')
    menu.click(function(){
        $('#navi').find('.nav__trigger').removeClass('is-active');
        $('#navi').find('.nav').removeClass('is-active');
    });
});