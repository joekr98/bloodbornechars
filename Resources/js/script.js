$(document).ready(function() {
    /******** STICKY NAV ***************/
    $('.js--showcase').waypoint(function(direction){
        if (direction=="down") {
            $('.sticky-nav').removeClass('hidden')
        } else {
            $('.sticky-nav').addClass('hidden');
        }
    }, {
        offset: '60px'
    })

    /*************SCROLL BUTTONS ***********/
    $('.js--scroll-to-welcome').click(function() {
        $('html, body').animate({ scrollTop: $('.js--welcome').offset().top}, 700)
    });

    $('.js--scroll-to-characters').click(function() {
        $('html, body').animate({ scrollTop: $('.js--showcase').offset().top}, 400)
    });


   /***********SCROLL NAV *****************/
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


  /***********ANIMATIONS ON SCROLL *******************/
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-11').waypoint(function(direction) {
        $('.js--wp-11').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-22').waypoint(function(direction) {
        $('.js--wp-22').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-33').waypoint(function(direction) {
        $('.js--wp-33').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-44').waypoint(function(direction) {
        $('.js--wp-44').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-55').waypoint(function(direction) {
        $('.js--wp-55').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-6').waypoint(function(direction) {
        $('.js--wp-6').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-66').waypoint(function(direction) {
        $('.js--wp-66').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-7').waypoint(function(direction) {
        $('.js--wp-7').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-77').waypoint(function(direction) {
        $('.js--wp-77').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-8').waypoint(function(direction) {
        $('.js--wp-8').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-88').waypoint(function(direction) {
        $('.js--wp-88').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });


})