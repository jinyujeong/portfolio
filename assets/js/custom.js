$(document).ready(function(){
   //탭메뉴
   $('.about ul>li a').on('click',function(e){
      e.preventDefault();
      var $parent=$(this).parent();
      $(this).removeClass('on').removeAttr('class');
      $parent.find('>ul').removeClass('on').removeAttr('class');
      $(this).addClass('on');
      $parent.find('>ul').addClass('on');
   })

});

