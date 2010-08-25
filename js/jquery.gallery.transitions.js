(function($) {
    $.fn.gallery.slideUp = function(config) {
        config.old.animate({
            top: -config.old.get(0).offsetHeight + 'px'
        }, {
            duration:   config.duration,
            complete:   function(e) {
                $(this).remove();
            }
        });
    }
    
    $.fn.gallery.slideUpLeft = function(config) {
        config.old.animate({
            top:    -config.old.get(0).offsetHeight + 'px',
            left:   -config.old.get(0).offsetWidth + 'px'
        }, {
            duration:   config.duration,
            complete:   function(e) {
                $(this).remove();
            }
        });
    }
    
    $.fn.gallery.slideLeft = function(config) {
        config.old.animate({
            left: -config.old.get(0).offsetWidth + 'px'
        }, {
            duration:   config.duration,
            complete:   function(e) {
                $(this).remove();
            }
        });
    }
    
    $.fn.gallery.slideDownLeft = function(config) {
        config.old.animate({
            top:    config.old.get(0).offsetHeight + 'px',
            left:   -config.old.get(0).offsetWidth + 'px'
        }, {
            duration:   config.duration,
            complete:   function(e) {
                $(this).remove();
            }
        });
    }
    
    $.fn.gallery.slideDown = function(config) {
        config.old.animate({
            top: config.old.get(0).offsetHeight + 'px'
        }, {
            duration:   config.duration,
            complete:   function(e) {
                $(this).remove();
            }
        });
    }
    
    $.fn.gallery.slideDownRight = function(config) {
        config.old.animate({
            top:    config.old.get(0).offsetHeight + 'px',
            left:   config.old.get(0).offsetWidth + 'px'
        }, {
            duration:   config.duration,
            complete:   function(e) {
                $(this).remove();
            }
        });
    }
    
    $.fn.gallery.slideRight = function(config) {
        config.old.animate({
            left: config.old.get(0).offsetWidth + 'px'
        }, {
            duration:   config.duration,
            complete:   function(e) {
                $(this).remove();
            }
        });
    }
    
    $.fn.gallery.slideUpRight = function(config) {
        config.old.animate({
            top:    -config.old.get(0).offsetHeight + 'px',
            left:   config.old.get(0).offsetWidth + 'px'
        }, {
            duration:   config.duration,
            complete:   function(e) {
                $(this).remove();
            }
        });
    }
})(jQuery);