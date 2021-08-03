$(function () {

  $('.header__select').styler();
  $('.footer__content-select').styler();

  $('.center').slick({
    centerMode: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    dots: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.svg" alt=""></button>',
    //infinite: true,
    //speed: 300,
    centerPadding: '100px',
    //slidesToShow: 3,
  });
  $(".star").rateYo({
    rating: 5,
    starWidth: "21px",
    ratedFill: "#FFF4CB"
  });

});