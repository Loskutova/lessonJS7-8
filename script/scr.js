$(function (){

$('ul.tabs_collection').each(function() {
    $(this).find('li').each(function(i) {
      $(this).click(function(){
        $(this).addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs_content')
          .removeClass('active').eq(i).addClass('active')});
    });

});

});



$(function(){

   $('input').on('mouseenter', function(){
      $(this).siblings('.help').animate({opacity: "show"}, "fast");
   });
   $('input').on('mouseleave', function(){
      $(this).siblings('.help').animate({opacity: "hide"}, "fast");
   });
   $('.button').on('click',function(){
      $('.help').show('slow');
   });
   });



