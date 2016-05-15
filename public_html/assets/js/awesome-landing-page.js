var big_image;
$().ready(function () {
    $('.selector').click(function () {
        SelectColor(this);
    });
    var selectCol = 0;
    if (selectCol == 0) {
        if ($('body').hasClass('landing-page1')) {

        }
    }

});

$(window).on('scroll', function () {
    responsive = $(window).width();
    if (responsive >= 768) {
        parallax();
    }
});

function SelectColor(btn) {
    oldColor = $('.filter-gradient').attr('data-color');
    newColor = $(btn).attr('data-color');

    oldButton = $('a[id^="Demo"]').attr('data-button');
    newButton = $(btn).attr('data-button');

    $('.filter-gradient').removeClass(oldColor).addClass(newColor).attr('data-color', newColor);

    $('a[id^="Demo"]').removeClass("btn-" + oldButton).addClass("btn-" + newButton).attr('data-button', newButton);

    $('.carousel-indicators').removeClass("carousel-indicators-" + oldColor).addClass("carousel-indicators-" + newColor);

    $('.card').removeClass("card-" + oldColor).addClass("card-" + newColor);

    $('.selector').removeClass('active');
    $(btn).addClass('active');
};

$('.switch').each(function () {
    var selector = $(this).parent('li')
    $(this).click(function () {
        if (selector.siblings().hasClass('active')) {
            selector.addClass('active');
            selector.siblings().removeClass('active');
            var slide = $(this).attr('data-slide')
            var lastClass = $('body').attr('class').split(' ').pop();
            $('body').removeClass(lastClass);
            $('body').addClass('landing-page' + slide);
        }
    });
});

var parallax = debounce(function () {
    no_of_elements = 0;
    $('.parallax').each(function () {
        var $elem = $(this);

        if (isElementInViewport($elem)) {
            var parent_top = $elem.offset().top;
            var window_bottom = $(window).scrollTop();
            var $image = $elem.find('.parallax-background-image')
            var $oVal = ((window_bottom - parent_top) / 3);
            $image.css('margin-top', $oVal + 'px');
        }
    });
}, 6);

/* ----------------------------------------------------------- */
/* Team Carousel
/* ----------------------------------------------------------- */
var owl = $("#owl-team");
owl.owlCarousel({
    navigation: false, // Show next and prev buttons
    // navigationText: ["prev","next"],
    navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    slideSpeed: 300,
    paginationSpeed: 400,
    autoPlay: true,
    items: 4,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [979, 3],  //As above.
    itemsTablet: [768, 3],    //As above.
    // itemsTablet:[640,2],
    itemsMobile: [479, 1],    //As above
    goToFirst: true,    //Slide to first item if autoPlay reach end
    goToFirstSpeed: 1000
});

// Custom Navigation Events
/*var owl = $("#testimonial-carousel");

// Custom Navigation Events
$(".next").click(function () {
    owl.trigger('owl.next');
})
$(".prev").click(function () {
    owl.trigger('owl.prev');
})
$(".play").click(function () {
    owl.trigger('owl.play', 1000); //owl.play event accept autoPlay speed as second parameter
})
$(".stop").click(function () {
    owl.trigger('owl.stop');
})*/
/* ----------------------------------------------------------- */
/* Team Carousel END
/* ----------------------------------------------------------- */

function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
};


function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round($elem.offset().top);
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
};