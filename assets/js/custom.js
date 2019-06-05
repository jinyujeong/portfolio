$(document).ready(function(){
   //탭메뉴
   //$('.about ul>li a').on('click',function(e){
   //   e.preventDefault();
   //   var $parent=$(this).parent();
   //   $(this).removeClass('on').removeAttr('class');
   //   $parent.find('>ul').removeClass('on').removeAttr('class');
   //   $(this).addClass('on');
   //   $parent.find('>ul').addClass('on');
   //})
   var $tab_list=$('.tab_menu');
   $tab_list.find('ul').hide();
   $tab_list.find('li.active>ul').show();

   function tabMenu(e){
       e.preventDefault();
       var $this=$(this);

       $this.next('ul').show().parent('li').addClass('active').siblings('li').removeClass('active').find('>ul').hide();
   }
   $tab_list.find('li>a').click(tabMenu).focus(tabMenu);


});

