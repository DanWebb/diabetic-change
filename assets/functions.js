$.fn.scrollTo = function() {
    $('html, body').animate({
        scrollTop: this.offset().top - 100
    }, 200);

    return this;
};

$.fn.highlight = function() {
    this.addClass('highlightable');
    this.addClass('highlight');

    setTimeout(function() {
        setTimeout(function() {
            this.removeClass('highlight');
        }.bind(this), 400);

        setTimeout(function() {
            this.removeClass('highlightable');
        }.bind(this), 1100);
    }.bind(this), 150);

    return this;
};

$(function() {
    $('.subscribe-now').click(function(e) {
        e.preventDefault();

        if($(window).width() < 550) {
            $('.subscribe-form').scrollTo().highlight();
        } else {
            $('.subscribe-form').highlight();
        }
    });

    $('[data-scrollTo]').click(function(e) {
        e.preventDefault();
        $($(this).attr('data-scrollTo')).scrollTo();
    });

    $('[data-highlight]').click(function(e) {
        e.preventDefault();
        $($(this).attr('data-highlight')).highlight();
    });
});
