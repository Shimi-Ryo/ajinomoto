(function ($) {

  var commons = $.commons = {
    init: function () {

      $("a.scroll_link").click(function() {
        var target = $(this.hash);
        var data = $(this).attr('data');
        var timer2 = false;
        if (target) {
          $('html,body').animate({scrollTop: target.offset().top},500);
          return false;
        }
      });

      // $('.slide-item').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      //   if(isInView){
      //     $(this).stop().addClass('show');
      //   }
      // });

      $('.slider').slick({
        infinite: false,
        arrows: true,
        dots: false,
        focusOnSelect: true,
      });

      $('.faq dt a').click(function () {
        var link = $(this);
        var target = link.attr('href');

        if ($(this).attr('class') == 'on') {
          link.removeClass('on');
          $(target).stop().animate({'height' : 0}, 200);
        }
        else {
          link.addClass('on');
          $(target).stop().animate({'height' : $(target).find('.imt').outerHeight(true)}, 300);
        }
        return false;
      });

      $("input[name='survey-btn-01']").click(function(){
      $(".survey-01").css("display", "none");
      $(".survey-02").css("display", "block");
      });
      $("input[name='survey-btn-02']").click(function(){
        $(".survey-02").css("display", "none");
        $(".survey-03").css("display", "block");
      });
      $("input[name='survey-btn-03']").click(function(){
        $(".survey-03").css("display", "none");
        $(".survey-04").css("display", "block");
      });
      $("input[name='survey-btn-04']").click(function(){
        $(".survey-04").css("display", "none");
        $(".answer-block").css("display", "block");
        var off = $('.answer-block').offset();
        $('html,body').animate({scrollTop : off.top}, 1000);
      });
      // $(".check-item").change(function(){
      //     var cnt1 = $(".check-item:checked").length;
      //     if(cnt1 == 0) {
      //         $(".survey-btn05").css("pointer-events", "none");
      //     } else {
      //         $(".survey-btn05").css("pointer-events", "auto");
      //     }
      // });

      var timer = false;
      var link_box = $('header');
      $(window).scroll(function() {
        if (timer !== false) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
          if($(window).scrollTop() > 200) {
            link_box.addClass('on');
          }
          else {
            link_box.removeClass('on');
          }
        }, 0);
      });
    }

  };

  $(function () {
    commons.init();
  });
})(jQuery);