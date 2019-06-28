$(function(){
  $(".button_call_top, .button_icon_phone, .button_order, .button_call_footer").click(function(){
  $(".form-container").css("display", "flex");
  });

  $(".button_icon_menu").click(function(){
  $(".popup-menu-wrap").css("display", "block");
  $(".button_icon_menu").hide();
  $(".button_icon_close").show();
  });

  $(".button_icon_close").click(function(){
    $(".popup-menu-wrap, .button_icon_close").hide();
    $(".button_icon_menu").show();
  });

  $(document).mouseup(function (e){ 
    var div = $(".form"); 
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) {
      $(".form-container").hide();
    }
  });

  $(document).ready(function(){
    $(".menu, .menu-footer, .popup-menu").on("click","a", function (event) {
        event.preventDefault();
          var id  = $(this).attr('href'),
              top = $(id).offset().top;
          $('body,html').animate({scrollTop: top}, 1500);
      });
  });

  $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                700:{
                    items:2
                },
                1100:{
                    items:3
                }
            }
        });
    });
});