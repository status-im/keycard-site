$(document).ready(function() {
  var options = {
            classes: {
                clone:   'o-header__top--clone',
                stick:   'is-sticky',
                unstick: 'is-unsticky'
            }
        };
  if($(window).width() >= 767) {
    var header = new Headhesive('.js-header', options);
  }
  $('.js-navigation-open').on('click', function(event) {
    event.preventDefault();

    $('.js-navigation-list').addClass('is-active');
  });

  $('.js-navigation-close').on('click', function(event) {
    event.preventDefault();

    $('.js-navigation-list').removeClass('is-active');
  });

  $('.js-anchor-scroll').anchorScroll({
    scrollSpeed: 800, // scroll speed
    offsetTop: 100, // offset for fixed top bars (defaults to 0)
    onScroll: function () {
      // callback on scroll start
    },
    scrollEnd: function () {
      // callback on scroll end
    }
  });
});