$(document).ready(function(){
    console.log('Wooh!')



// showy hidey bits
    $('.readmore').on('click', showMore);
    $('.readless').on('click', showLess);

  function showMore(){
    $('#show-on-click1').slideToggle(1500);
    event.preventDefault();
    $('.readmore').removeClass('show');
    $('.readmore').addClass('hide');
    $('.readless').removeClass('hide');
    $('.readless').addClass('show');
    console.log('show more');
  }

  function showLess(){
    $('#show-on-click1').slideToggle(1500);
    event.preventDefault();
    $('.readless').removeClass('show');
    $('.readless').addClass('hide');
    $('.readmore').removeClass('hide');
    $('.readmore').addClass('Show');
    console.log('show less');
  }

  $(function() {
    $('.showmoreButton').on('click', function() {
        $('.showmore').slideToggle("fast");
      });
  });



// scrolly bits = bottom to top
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
          // Is the window more than 100px (maybe pixels...) away?
            $('#scroll').fadeIn();
            // if yes, turn on the scroll button
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 800);
        console.log('To The Top!')
        return false;
    });


// 4 part slidey bits
    $(document).ready(function(){
      $('.slider').bxSlider({
        mode: 'vertical',
        keyboardEnabled: true,
        minSlides: 1,
        maxSlides: 1,
        pager: false,
        control: true,
        control: true
        });
      });

// typeywriter bits
// 100% credit to Simon Shahriveri on CodePen for this js code
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 1;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 70 - Math.random() * 100;
        // The lower that first number the faster the speed!!
        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = false; // set to true to repeat animation!
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 1em solid #fff}";
        document.body.appendChild(css);
    };





// scrolly header bits
// Credit to Marius Craciunoiu
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 350);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}

}); // closing bit of the initial doc ready check
