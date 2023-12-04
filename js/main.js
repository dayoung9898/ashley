$('.bnSld').slick({
    dots : false,
    autoplay : true,
    autoplaySpeed : 2000,
    fade : true,
    prevArrow : false,
    nextArrow : false,
});

  
$('.menuSld').slick({
    dots : false,
    prevArrow : '.sldPrev',
    nextArrow : '.sldNext',
    slidesToShow: 4,
    asNavFor : '.menuTxt',
    variableWidth: true

})

$('.menuTxt').slick({
    dots : false,
    fade : true,
    prevArrow : '.sldPrev',
    nextArrow : '.sldNext',
    slidesToShow: 1,
    asNavFor : '.menuSld'
})


$('.gnb li').mouseover(function(){

    $(this).children('.sub').stop().slideDown();
    
    }).mouseout(function(){
    
    $(this).children('.sub').stop().slideUp();
    
});


var swiper = new Swiper(".s3Wrap", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    'slidesToShow': 4,
    'slidesPerView': 4,
    slidesOffsetBefore: 20,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
});


$('.prev').click(function(){
    $('.prev img').css({'opacity':1});
    $('.next img').css({'opacity':0.6});
});

$('.next').click(function(){
    $('.next img').css({'opacity':1});
    $('.prev img').css({'opacity':0.6});
});