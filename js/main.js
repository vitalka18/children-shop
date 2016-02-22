(function($) {
  $('.main-slider').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2500,
  });

  $('.catalog-slider').slick({
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 6000,
    nextArrow: '<button class="catalog-slider-btn next"></button>',
    prevArrow: '<button class="catalog-slider-btn prev"></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });

  $('.popular-goods-slider, .view-later-slider, .we-recomend-slider').slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    nextArrow: '<button class="popular-slider-btn next"></button>',
    prevArrow: '<button class="popular-slider-btn prev"></button>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.comments-slider').slick({
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    nextArrow: '<button class="comments-slider-btn next"></button>',
    prevArrow: '<button class="comments-slider-btn prev"></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
    
  initPreviewSlider();

  $('.js-open-menu').on('click', function(e){
    e.preventDefault();

    var $selector = $(this).parent().next();
    var $that = $(this);
    
    if( !$(this).hasClass('open') ) {
      $selector.slideDown(300);
      $that.addClass('open');
    } else {
      $selector.slideUp(300);
      $that.removeClass('open');
    }
  });

  $('.js-open-sub-menu').on('click', function(e){
    e.preventDefault();

    var $selector = $(this).parent().next();
    var $that = $(this);
    
    if( !$(this).hasClass('open') ) {
      $selector.slideDown(300);
      $that.addClass('open');
    } else {
      $selector.slideUp(300);
      $that.removeClass('open');
    }
  });

  $(window).scroll(function() {
    if($(this).scrollTop() >60) {
        $('.to-up')/*.fadeIn(400)*/.css({'top':'80%'});
    }else {
        $('.to-up')/*.fadeOut(400)*/.css({'top':'-100%'});
    }
  });

  $('#scrollTop').click(function() {
    $('body,html').animate({scrollTop:0}, 800);
  });

  $('.js-buy-now-modal').on('shown.bs.modal', function (e) {
      $('.modal-preview-slider-goods').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.item-slider-goods'
      });
      
      $('.modal-item-slider-goods').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.preview-slider-goods',
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
            }
          },
        ]
      });
    
  });

  $('.rating').rating({
    min: 0,
    max: 5,
    step: 1,
    showCaption: false,
    showClear: false,
    size: 'xs'
  });

  if( $('.js-scrollbar').length ) {
    $('.js-scrollbar').each(function() {
      $(this).jScrollPane(
        {
          showArrows: $(this).is('.arrow')
        }
      );
      var api = $(this).data('jsp');
      var throttleTimeout;
      $(window).bind('resize', function() {
        if (!throttleTimeout) {
          throttleTimeout = setTimeout(function() {
            api.reinitialise();
            throttleTimeout = null;
          }, 50);
        }
      });
    });
  }

  $('.js-compare-table').each(function() {
    $(this).jScrollPane({
      showArrows: true,
      animateScroll: true
    });

    var api = $(this).data('jsp');
    var throttleTimeout;
    $(window).bind('resize', function() {
      if (!throttleTimeout) {
        throttleTimeout = setTimeout(function() {
          api.reinitialise();
          throttleTimeout = null;
        }, 50);
      }
    });

    $('#scroll-to-end').bind('click', function() {
      api.scrollBy(100, 0);
      return false;
    });

     $('#scroll-to-start').bind('click', function() {
      api.scrollBy(-100, 0);
      return false;
    });
  });

  
  
  $('.js-range-slider').slider();

  setEqualHeight( $('.catalog-list').find('.catalog-item-name') );

  $(".validate").validate({
    rules: {
      firstName: {
        required: true,
        minlength: 2
      },
      lastName: {
        required: true,
        minlength: 2
      },
      fullNameCabinet: {
        required: true,
        minlength: 4
      },
      addressCabinet: {
        required: true
      },
      password: {
        required: true,
        minlength: 5
      },
      confirm_password: {
        required: true,
        minlength: 5,
        equalTo: "#password"
      },
      email: {
        required: true,
        email: true
      },
      telNumberCabinet: {
        required: true,
        minlength: 8
      },
      agree: "required"
    },
    messages: {
      fullNameCabinet: {
        required: "Введите пожалуйста Ваше имя",
        minlength: "Ваше имя пользователя должно состоять минимум из 4 символов"
      },
      firstName: {
        required: "Введите пожалуйста Ваше имя",
        minlength: "Ваше имя должно состоять минимум из 2 символов"
      },
      lastName: {
        required: "Введите пожалуйста Вашу фамилию",
        minlength: "Ваша фамилия должна состоять минимум из 2 символов"
      },
      addressCabinet: {
        required: "Введите пожалуйста Ваш адрес",
      },
      password: {
        required: "Введите пожалуйста Ваш новый пароль",
        minlength: "Ваш пароль должен состоять минимум из 5 символов"
      },
      confirm_password: {
        required: "Подтвердите пожалуйста Ваш пароль",
        minlength: "Ваш пароль должен состоять минимум из 5 символов",
        equalTo: "Введите пожалуйста Ваш пароль идентичный паролю выше"
      },
      required: "Поле обязательно",
      email: "Введите пожалуйста валидный Email",
      telNumberCabinet: {
        required: "Введите пожалуйста Ваш номер телефона",
        minlength: "Ваш  номер телефона должен состоять минимум из 8 символов"
      },
    }
  });
  
  $("#login").validate({
    rules: {
      loginPasswordInput: {
        required: true,
        minlength: 5
      },
      loginEmailInput: {
        required: true,
        email: true
      },
    },
    messages: {
      loginPasswordInput: {
        required: "Введите пожалуйста пароль",
        minlength: "Ваш пароль должен состоять минимум из 5 символов"
      },
      loginEmailInput: "Введите пожалуйста валидный Email",
    }
  });

  $("#changePassword").validate({
    rules: {
      password: {
        required: true,
        minlength: 5
      },
      confirm_password: {
        required: true,
        minlength: 5,
        equalTo: "#password"
      }
    },
    messages: {
      password: {
        required: "Введите пожалуйста Ваш новый пароль",
        minlength: "Ваш пароль должен состоять минимум из 5 символов"
      },
      confirm_password: {
        required: "Подтвердите пожалуйста Ваш пароль",
        minlength: "Ваш пароль должен состоять минимум из 5 символов",
        equalTo: "Введите пожалуйста Ваш пароль идентичный паролю выше"
      }
    }
  });

  $('.js-spin').TouchSpin({
      initval: 40
  });
}(jQuery));

$( window ).resize(function() {
  $('.catalog-list').find('.catalog-item-name').css('height', 'auto');
  setEqualHeight( $('.catalog-list').find('.catalog-item-name') );
});

function initPreviewSlider() {
  $('.static-preview-slider-goods').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.item-slider-goods'
  });
  
  $('.static-item-slider-goods').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.preview-slider-goods',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
  });
}

function setEqualHeight(columns){
  var tallestcolumn = 0;
    columns.each(function() {
      currentHeight = $(this).height();
      if(currentHeight > tallestcolumn){
        tallestcolumn = currentHeight;
      }
    });
    columns.height(tallestcolumn);
}

function myAlert(text, title, type) {
  if(title) {
    $('#alert').find('.modal-title').html(title);
  }

  if(type) {
    $('#alert').find('.modal-body').addClass(type);
  }

  $('#alert').find('.modal-body').html(text);
  $('#alert').modal('show');
}

function myConfirm(text, title, success, fail) {
  if(title) {
    $('#confirm').find('.modal-title').html(title);
  }

  $('#confirm').find('.modal-body').html(text);
  $('#confirm').modal('show');

  $(document).on('click', '#confirmSuccess', new Function(success));
  $(document).on('click', '#confirmFail', new Function(fail));
}

// "text-muted"
// "text-primary"
// "text-success"
// "text-info"
// "text-warning"
// "text-danger"