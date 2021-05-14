$(function () {
  //ローディングアニメ
  $(window).on('load',function(){
    $(".loading-anime-wrap").delay(1300).fadeOut('500');
  });
  function loaderClose(){
    $(".loading-anime-wrap").fadeOut('slow');
  }
  setTimeout(loaderClose,10000);


  //ハンバーガーメニュー
  $(".burger-btn,.sp-nav-link").on("click", function () {
    $(".burger-btn").toggleClass("active");
    if ($(".burger-btn").hasClass("active")) {
      $(".sp-nav").addClass("active");
    } else {
      $(".sp-nav").removeClass("active");
    }
  });
});


//スクロールマジック
var controller = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene({ triggerElement: '.about', triggerHook: 0.8 })
  .on("enter", function () {
    $(".nav-about").addClass("nav-active");
  })
  .on("leave", function () {
    $(".nav-about").removeClass("nav-active");
  })

  // 開発用インジゲーター
  .addIndicators({ name: 'about' })
  .addTo(controller);

var scene2 = new ScrollMagic.Scene({
  triggerElement: '.work',
  triggerHook: 0.8
})
  .on("enter", function () {
    $(".nav-about").removeClass("nav-active");
  })
  .on("leave", function () {
    $(".nav-about").addClass("nav-active");
  })
  .on("enter", function () {
    $(".nav-work").addClass("nav-active");
  })
  .on("leave", function () {
    $(".nav-work").removeClass("nav-active");
  })
  .addIndicators({ name: 'work' })
  .addTo(controller);

  var scene3 = new ScrollMagic.Scene({
    triggerElement: '.contact',
    triggerHook: 0.8
  })
    .on("enter", function () {
      $(".nav-work").removeClass("nav-active");
    })
    .on("leave", function () {
      $(".nav-work").addClass("nav-active");
    })
    .on("enter", function () {
      $(".nav-contact").addClass("nav-active");
    })
    .on("leave", function () {
      $(".nav-contact").removeClass("nav-active");
    })
    .addIndicators({ name: 'contact' })
    .addTo(controller);