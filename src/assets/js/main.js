console.log('new');

$(document).ready(function(){
  $('.slider__box').slick();
});


$(function(){
$('.menu__btn-burger').document('click',function(){
    $('menu__list').toggleClass('active');
  });
});