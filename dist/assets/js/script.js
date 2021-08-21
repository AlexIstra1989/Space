
  $(document).ready(function(){

    $('.slider__box').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
      });
}); 

$(function(){
$('.menu__btn-burger').document('click',function(){
    $('menu__list').toggleClass('active');
  });
});
//# sourceMappingURL=script.js.map
