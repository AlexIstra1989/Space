

 
  $(document).ready(function(){

    $('.slider__box').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      
    });
}); 

$('.menu__btn-burger').on('click', function(){
  $('.menu__list').toggleClass('active');
  });
});