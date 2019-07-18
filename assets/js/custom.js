$(document).ready(function() {
    //imageProgress
function imagesProgress(){
	var $container = $("#progress"),
		$progressBar = $container.find(".progress-bar"),
		$progressText = $container.find(".progress-text"),
		imgLoad = imagesLoaded("body"),	
		imgTotal = imgLoad.images.length,	
		imgLoaded = 0,										
		current = 0,							
		progressTimer = setInterval(updateProgress, 1000 / 60);
	
	imgLoad.on("progress", function(){
		imgLoaded++;
	});

	function updateProgress(){
		var target = ( imgLoaded / imgTotal) * 100;
		
		current += ( target - current) * 0.1;
		$progressBar.css({ width: current + '%' });
		$progressText.text( Math.floor(current) + '%' );
		
		if(current >= 100){
			clearInterval(progressTimer);
			$progressBar.add($progressText)
				.delay(500)
				.animate({opacity: 0},250,function(){
					$container.animate({top: '-110%'},1000,'easeInOutQuint');
				});
			$("body").addClass("active");
		}
		if(current > 99.9){
			current = 100;
		}
	}	
}
imagesProgress();

/* cont1 animation */
var stars=800;
  var $stars=$(".stars");
  var r=800;
  for(var i=0;i<stars;i++){
    var $star=$("<div/>").addClass("star");
    $stars.append($star);
  }
  $(".star").each(function(){
    var cur=$(this);
    var s=0.2+(Math.random()*1);
    var curR=r+(Math.random()*300);
    cur.css({ 
      transformOrigin:"0 0 "+curR+"px",
      transform:" translate3d(0,0,-"+curR+"px) rotateY("+(Math.random()*360)+"deg) rotateX("+(Math.random()*-50)+"deg) scale("+s+","+s+")"
       
    })
  })


    //animation
    var main = $('.cont1');
    var count = $('#cont2');
    var cont2 = $('.cont2');
    var cont = $("#cont3 > div.port");
    var cont4 = $('.cont4 > div.ani');
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
        if(wScroll>=$('#cont2').offset().top&&wScroll<=$('#cont5').offset().top){
            $('#navi').find('svg').css('fill','#000');
        }else{
            $('#navi').find('svg').css('fill','#fff'); 
        }
        

        if(wScroll>=$('#cont2').offset().top&&wScroll<=$('#cont5').offset().top){
            $('#navi').find('.nav__trigger').addClass('show').css({'transition-delay':'0s'});
        }else{
            $('#navi').find('.nav__trigger').removeClass('show').css({'transition-delay':'0s'});
        }

        if(wScroll>=$('.cont4').offset().top-$(window).height()){
            $('.cont4').addClass('show');
        }
        if(wScroll>=cont4.eq(0).offset().top-$(window).height()){
            cont4.eq(0).addClass('show');
        }
        if(wScroll>=cont4.eq(1).offset().top-$(window).height()){
            cont4.eq(1).addClass('show');

        }
        if(wScroll>=cont4.eq(2).offset().top-$(window).height()){
            cont4.eq(2).addClass('show');
        }
        if(wScroll>=cont4.eq(3).offset().top-$(window).height()){
            cont4.eq(3).addClass('show');
        }

        if(wScroll>=$('#cont5').offset().top-$(window).height()/3){
            $('.cont5').addClass('show');
        }
        

        //portfolio-animation
        if(wScroll>=main.offset().top){
            main.addClass('show');
        }

        if(wScroll>=cont2.offset().top-$(window).height()/3){
            cont2.addClass('show');
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
        if(wScroll>=cont.eq(5).offset().top-$(window).height()/3){
            cont.eq(5).addClass('show');
        }
        
        //if(wScroll>=foot.offset().top-$(window).height()){
        //    foot.addClass('show');
        //}
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
                        $('#navi').addClass('show');
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
                    $('#navi').removeClass('show');
                    
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
        $('#navi').removeClass('show');
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

    $('.mobile').click(function(){
        var win = window.open("http://jinyu.dothome.co.kr/class/cgv/web/index.html", "PopupWin", "width=414,height=700");
    })
    
    var $this1 = $('.cont5 .like')
    
    //cont5
    $this1.find('.like_img').mouseenter(function(){
        $(this).parent().addClass('show');
        $(this).parent().find('h5,p,a').css({'opacity':'1','transition-duration':'1s','transition-delay':'0.7s'});
    })
    $this1.mouseleave(function(){
        $(this).removeClass('show');
        $(this).find('h5,p,a').css({'opacity':'0','transition-duration':'0s','transition-delay':'0s'});
    })

    

});