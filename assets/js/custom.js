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
        //logo
        if(wScroll>=$('#cont2').offset().top){
            $('#navi').find('svg').css('fill','#000');
        }else{
            $('#navi').find('svg').css('fill','#fff');   
        }

        //line
        if(wScroll>=$('#cont1').offset().top){
            $('.line').find('span').html('01');
            $('.line').addClass('show1');
        }
        if(wScroll>=$('#cont2').offset().top){
            $('.line').find('span').html('02');
            $('.line').addClass('show2');
        }
        if(wScroll>=$('#cont3').offset().top){
            $('.line').find('span').html('03');
            $('.line').addClass('show3');
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
        if(wScroll>=cont.eq(5).offset().top-$(window).height()/3){
            cont.eq(5).addClass('show');
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

    function counter() {
        if ($('.about .count').size()) {
            $c = $('.about .count');
    
            $c.each(function () {
                var $this = $(this);
                $this.data('target', parseInt($this.html()));
                $this.data('counted', false);
                $this.html('0');
            });
    
            $(window).bind('scroll', function () {
                var speed = 5000;
    
                $c.each(function (i) {
                    var $t = $(this);
                    if (!$t.data('counted') && $(window).scrollTop() + $(window).height() >= $t.offset().top) {
    
                        $t.data('counted', true);
                        
                        $t.animate({
                            dummy: 1
                        }, {
                            duration: speed,
                            step: function (now) {
                                var $this = $(this);
                                var val = Math.round($this.data('target') * now);
                                $this.html(val);
                            },
                            easing: 'easeInOutQuart'
                        });
    
                        // easy pie
                        $('.pie').easyPieChart({
                            barColor: '#000',
                            trackColor: '#ccc',
                            scaleColor: '#000',
                            scaleLength: 5,
                            lineWidth: 1,
                            size: 200,
                            lineCap: 'round',
                            animate: { duration: speed, enabled: true }
                        });
                    }
                });
            }).triggerHandler('scroll');
        }
    }
    counter();
});