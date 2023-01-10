$(document).ready(function(){

	//phone masked
	$('input[type="tel"]').mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
	$('input[type="tel"]').on('click', function() {
		$(this).setCursorPosition(4);
	})
	$.fn.setCursorPosition = function(pos) {
	  this.each(function(index, elem) {
	    if (elem.setSelectionRange) {
	      elem.setSelectionRange(pos, pos);
	    } else if (elem.createTextRange) {
	      var range = elem.createTextRange();
	      range.collapse(true);
	      range.moveEnd('character', pos);
	      range.moveStart('character', pos);
	      range.select();
	    }
	  });
	  return this;
	};

    //swipebox
    $('[data-swipebox]').swipebox();


    //mobile menu
    $('.popup-menu-wrap li ul').each(function () {
        $(this).parent().addClass('submenu');
    })
    $('.popup-menu-wrap li a').on('click', function () {
        if ($(this).next('ul').length > 0) {
            if ($(window).innerWidth() < 1024) {
                if ($(this).parent().hasClass('open')) {
                    $(this).parent().removeClass('open').children('ul').slideUp(200);
                } else {
                    $('.popup-menu-wrap li.open').removeClass('open').children('ul').slideUp(200);
                    $(this).parent().addClass('open').children('ul').slideDown(200);
                }
                return false;
            }
        }
    })


    //popup block
    $('.js-popup-wrap .js-btn-toggle').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('body').removeClass('menu-show');
            $('.js-popup-wrap').removeClass('popup-right');
        } else {
            $('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
            $(this).addClass('active');
            if ($(this).parent().hasClass('popup-menu-wrap')) {
                $('body').addClass('menu-show');
            }
            pLeft = $(this).parent('.js-popup-wrap').find('.js-popup-block').offset().left;
            pWidth = $(this).parent('.js-popup-wrap').find('.js-popup-block').outerWidth();
            pMax = pLeft + pWidth;
            if ( pMax > $('.wrap').width() ) {
                $(this).parent('.js-popup-wrap').addClass('popup-right');
            } else {
                $('.js-popup-wrap').removeClass('popup-right');
            }
        }
        return false;
    })
    $('.js-popup-wrap .js-btn-close').on('click', function() {
        $(this).parents('.js-popup-wrap').children('.js-btn-toggle').removeClass('active');
        $('.js-popup-wrap').removeClass('popup-right');
        $('body').removeClass('menu-show');
        return false;
    })
    $(document).click(function(event) {
        if ($(event.target).closest(".js-popup-block").length) return;
        $('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
        $('.js-popup-wrap').removeClass('popup-right');
        $('body').removeClass('menu-show');
        event.stopPropagation();
    });
    $('.js-popup-wrap').each(function() {
        if ($(this).hasClass('js-popup-select')) {
            if ($(this).find('.js-popup-block').find('.active').length>0) {} else {
                $(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');
            }
            var currentSelect = $(this).find('.js-popup-block').find('.active').html();
            $(this).find('.js-btn-toggle').html(currentSelect);
        }
    })
    $('.js-popup-wrap.js-popup-select .js-popup-block a').on('click', function() {
        if ($(this).hasClass('active')) {} else {
            $(this).parents('.js-popup-wrap').find('.js-popup-block').find('.active').removeClass('active');
            $(this).addClass('active');
            $('.js-tab-block').removeClass('active');
            $('.js-tabs-nav').each(function() {
                $('.js-tab-block[data-tab*="'+$(this).find('.js-popup-block').find('.active').attr('data-tab')+'"]').addClass('active');
            })
        }
        $('.js-popup-wrap').each(function() {
            if ($(this).hasClass('js-popup-select')) {
                if ($(this).find('.js-popup-block').find('.active').length>0) {} else {
                    $(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');
                }
                var currentSelect = $(this).find('.js-popup-block').find('.active').html();
                $(this).find('.js-btn-toggle').html(currentSelect);
            }
        })
        $(this).parents('.js-popup-wrap').find('.js-btn-toggle').removeClass('active');
        return false;
    })

    //tabs
    $('.js-tabs-nav').each(function() {
        $('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
    })
    $('.js-tab-title').each(function() {
        if ($(this).hasClass('active')) {
            $(this).next('.js-tab-content').show(0);
        }
    })
    $('.js-tabs-nav').on('click', 'a[data-tab]', function() {
        if ($(this).hasClass('active')) {} else {
            $('.js-tab-block').removeClass('active');
            $(this).parents('.js-tabs-nav').find('.active').removeClass('active');
            $(this).addClass('active');
            $('.js-tabs-nav').each(function() {
                $('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
            })
        }
        return false;
    })
    $('.js-tab-title').on('click' , function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active').next('.js-tab-content').slideUp(200);
        } else {
            $(this).addClass('active').next('.js-tab-content').slideDown(200);
        }
    })


    //tiles-slider-box
    if (!!$('.tiles-slider-box').offset()) {
        $('.tiles-slider-box .slider-tiles .slider').slick({
            dots: true,
            slidesToShow: 3,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: true,
            rows: 1,
            swipeToSlide: true,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        dots: true,
                        variableWidth: true,
                    }
                },
            ]
        });
        $('.tiles-slider-box .slider-wrap:not(.slider-tiles):not(.slider-logos, .slider-reviews) .slider').slick({
            dots: true,
            slidesToShow: 3,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: true,
            rows: 1,
            swipeToSlide: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        infinite: false,
                        slidesToShow: 1,
                        dots: true,
                        variableWidth: true,
                        prevArrow: false,
                        nextArrow: false,
                    }
                },
            ]
        });
        $('.tiles-slider-box .slider-wrap.slider-logos:not(.slider-tiles) .slider').slick({
            dots: true,
            slidesToShow: 3,
            variableWidth: true,
            infinite: true,
            adaptiveHeight: true,
            rows: 1,
            swipeToSlide: true,
            centerMode: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        infinite: false,
                        centerMode: false,
                        slidesToShow: 1,
                        dots: true,
                        variableWidth: true,
                        prevArrow: false,
                        nextArrow: false,
                    }
                },
            ]
        });
        $('.tiles-slider-box .slider-wrap.slider-reviews:not(.slider-tiles) .slider').slick({
            dots: true,
            slidesToShow: 1,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: true,
            rows: 1,
            swipeToSlide: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        infinite: false,
                        slidesToShow: 1,
                        dots: true,
                        variableWidth: true,
                        prevArrow: false,
                        nextArrow: false,
                    }
                },
            ]
        });
    }
	
});


window.onload = function () {
    //field input
    let fieldInput = document.querySelectorAll('.js-input');
    if (fieldInput.length > 0) {
        for (i = 0; i < fieldInput.length; i++) {
            fieldInput[i].querySelector('label').onclick = function () {
                this.parentElement.classList.add('inp-active');
                this.parentElement.classList.remove('inp-valid');
                this.parentElement.querySelector('input').focus();
            }
            //input
            if (fieldInput[i].querySelector('input')) {
                fieldInput[i].querySelector('input').onfocus = function () {
                    this.parentElement.classList.add('inp-active');
                    this.parentElement.classList.remove('inp-valid');
                }
                fieldInput[i].querySelector('input').onblur = function () {
                    this.parentElement.classList.remove('inp-active');
                    if (this.value.length == "0") {
                        this.parentElement.classList.remove('inp-valid');
                    } else {
                        this.parentElement.classList.add('inp-valid');
                    }
                }
                //select
            } else if (fieldInput[i].querySelector('select')) {
                fieldInput[i].querySelector('select').onchange = function () {
                    this.parentElement.classList.add('inp-active');
                    this.parentElement.classList.remove('inp-valid');
                }
                fieldInput[i].querySelector('select').onblur = function () {
                    this.parentElement.classList.remove('inp-active');
                    if (this.options[this.selectedIndex].text === "") {
                        this.parentElement.classList.remove('inp-valid');
                    } else {
                        this.parentElement.classList.add('inp-valid');
                    }
                }
            }
        }
    }
}