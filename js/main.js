
/*
 * Replace all SVG images with inline SVG
 */

$(function(){
    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, else we gonna set it if we can.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
});

$('.road__btn').click(function (e) {
    e.preventDefault();
    $('#popup-call').arcticmodal({
    });

});
$('.dop__content2').click(function (e) {
    e.preventDefault();
    $('#popup-text').arcticmodal({
    });
});
$('.dop__content3').click(function (e) {
    e.preventDefault();
    $('#popup-text3').arcticmodal({
    });
});
$('.dop__content4').click(function (e) {
    e.preventDefault();
    $('#popup-text4').arcticmodal({
    });
});
$('.dop__content5').click(function (e) {
    e.preventDefault();
    $('#popup-text5').arcticmodal({
    });
});
$('.dop__content6').click(function (e) {
    e.preventDefault();
    $('#popup-text6').arcticmodal({
    });
});
$('.dop__content7').click(function (e) {
    e.preventDefault();
    $('#popup-text7').arcticmodal({
    });
});

$('.dop__view2').click(function (e) {
    e.preventDefault();
    $('#popup-call2').arcticmodal({
    });
});
$('.dop__view3').click(function (e) {
    e.preventDefault();
    $('#popup-call3').arcticmodal({
    });
});
$('.dop__view4').click(function (e) {
    e.preventDefault();
    $('#popup-call4').arcticmodal({
    });
});
$('.dop__view5').click(function (e) {
    e.preventDefault();
    $('#popup-call5').arcticmodal({
    });
});
$('.dop__view6').click(function (e) {
    e.preventDefault();
    $('#popup-call6').arcticmodal({
    });
});
$('.dop__view7').click(function (e) {
    e.preventDefault();
    $('#popup-call7').arcticmodal({
    });
});
$('.dop__view99').click(function (e) {
    e.preventDefault();
    $('#popup-call99').arcticmodal({
    });
});
$('.osago__add1').click(function (e) {
    $('.osago__user2').fadeIn();
    $(this).css('display', 'none')
});
$('.osago__add2').click(function (e) {
    $('.osago__user3').fadeIn();
    $(this).css('display', 'none')

});
$('.close__pic').click(function (e) {
      $.arcticmodal('close');
  });

// SLIDER
var $status = $('.pagingInfo');
var $status1 = $('.pag');
var $slickElement = $('.header__slider');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  if(!slick.$dots){
    return;
  }

  var i = (currentSlide ? currentSlide : 0) + 1;
  $status1.text(i);
  $status.text('/' + (slick.$dots[0].children.length));
});
$('.header__slider').slick({
 	infinite: true,
  autoplay: true,
  autoplaySpeed: 10000,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	dots: true,
	prevArrow: '<button type="button" class="slick-prev"><img src="img/leftar.svg"></button>',
	nextArrow: '<button type="button" class="slick-next"><img src="img/rightar.svg"></button>',



});
$('.review__slider').slick({
 	infinite: true,
  autoplay: true,
  autoplaySpeed: 20000,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	dots: true,
	prevArrow: '<button type="button" class="slick-prev"><img src="img/leftrev.svg"></button>',
	nextArrow: '<button type="button" class="slick-next"><img src="img/rightrev.svg"></button>',

});

// Burger
$('.menu-toggle').on('click', function(){
    $('body').toggleClass('open');
    $('.menu-collapse').toggleClass('d-none');
    $('.menu-collapse').toggleClass('opened');

});
$('.nav__item a').on('click', function(){
    $('body').removeClass('open');
    $('.menu-collapse').toggleClass('d-none');
    $('.menu-collapse').toggleClass('opened');
});

// Accordeon
$(document).ready(function(){
    $(".set > a").on("click", function(){
        if($(this).hasClass('active')){
            $(this).removeClass("active");
            $(this).siblings('.content').slideUp(200);
            $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
        }
        else{
            $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
            $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $('.content').slideUp(200);
            $(this).siblings('.content').slideDown(200);
        }
        return false
    });

});

// UP
  var top_show = 750; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 1000; // Задержка прокрутки
  $(document).ready(function() {
    $('.up').fadeOut();
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
      /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      if ($(this).scrollTop() > top_show) $('.up').fadeIn();
      else $('.up').fadeOut();
    });
    $('.up').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка наверх */
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });


// Scroll
$('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top -75 }, 800); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });

$(document).ready(function(){
    $('[data-submit]').on('click', function(e){
        e.preventDefault();
        $(this).parents('form').submit();
    })
    $.validator.addMethod(
            "regex",
            function(value, element, regexp) {
                var re = new RegExp(regexp);
                return this.optional(element) || re.test(value);
            },
            "Please check your input."
            );
    function valEl(el){

          el.validate({
        rules:{
          tel:{
            required:true,
            regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
          },
          name:{
            required:true
          },
          email:{
            required:true,
            email:true
          }
        },
          messages:{
            tel:{
                required:'Поле обязательно для заполнения',
                regex:'Телефон может содержать символы + - ()'
            },
            name:{
                required:'Поле обязательно для заполнения',
            },
            email:{
                required:'Поле обязательно для заполнения',
                email:'Неверный формат E-mail'
            }
        },
        submitHandler: function (form) {
            $('#loader').fadeIn();
            var $form = $(form);
            var $formId = $(form).attr('id');
            switch($formId){

            case'popupResult':
            $.ajax({
                  type: 'POST',
                  url: $form.attr('action'),
                  data: $form.serialize(),
                })
                .always(function (response) {
                setTimeout(function (){
                 $('#loader').fadeOut();
                },800);
                setTimeout(function (){
                   $.arcticmodal('close');
                  $('#overlay').fadeIn();
                  $form.trigger('reset');
                  //строки для остлеживания целей в Я.Метрике и Google Analytics
                },1100);
                $('#overlay').on('click', function(e) {
            $('#overlay').fadeOut();
        });

            });
        break;
        }
return false;
    }
  })
        }

              $('.js-form').each(function() {
                valEl($(this));
              });
        $('[data-scroll]').on('click', function(){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'data-scroll') ).offset().top
            }, 2000);
            event.preventDefault();
        })
   });


// Яндекс-карта
    // Инициализация карты
     ymaps.ready(init);

         function init () {

      //Центрирование и выбор масштаба карты
        var myMap = new ymaps.Map('map', {
             center: [55.820212, 37.329537],  //ввод координат
              zoom: 14                         // масштаб
         });
        // Создание своей метки
                var myPlacemark = new ymaps.Placemark(
                // Координаты метки
                    [55.820212, 37.329537] , {
                    // Свойства метки
                    // hintContent: 'Мой маркер'                //Подсказка при наведении на маркер
                }, {
                    iconImageHref: 'img/marker.png',  // картинка иконки
                    iconImageSize: [48, 48],                                      // размеры картинки
                    iconImageOffset: [-24, -48]                                   // смещение картинки
                    });
                // Добавление метки на карту
                myMap.geoObjects.add(myPlacemark);

                //Элементы управления
                myMap.controls
                // Кнопка изменения масштаба
                    .add('zoomControl', { left: 5, top: 50 })
                    // Список типов карты
                    // .add('typeSelector')
                    // // Кнопка изменения масштаба - справа
                    .add('smallZoomControl', { right: 5, top: 50 })
                    // // Стандартный набор кнопок
                    // .add('mapTools')
                    //Линейка масштаба
                   .add(new ymaps.control.ScaleLine());
                   var isMobile = {
                    Android: function() {return navigator.userAgent.match(/Android/i);},
                    BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
                    iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
                    Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
                    Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
                    any: function() {
                        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
                    }
                };

                // после вызова карты
                if(isMobile.any()){
                        myMap.behaviors.disable('scrollZoom');
                        myMap.behaviors.disable('drag');
                }
        };
