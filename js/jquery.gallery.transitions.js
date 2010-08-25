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
    
    $.fn.gallery.curtain = function(config) {
        var leftPane    = config.old.css({
                border:                 "0",
                width:                  "50%",
                backgroundPosition:     "0 0",
                left:                   ((config.new.outerWidth() - config.new.width()) / 2) + 'px',
                top:                    ((config.new.outerHeight() - config.new.height()) / 2) + 'px'
            }),
            rightPane   = config.old.clone().css({
                border:                 "0",
                width:                  "50%",
                backgroundPosition:     -config.old.get(0).offsetWidth + 'px 0',
                left:                   config.old.get(0).offsetWidth
            });
        
        config.view.append(rightPane);
        leftPane.animate({
            left:       -leftPane.get(0).offsetWidth + 'px',
            opacity:    0
        }, {
            duration:   config.duration,
            queue:      false,
            complete:   function(e) {
                $(this).remove();
            }
        });
        rightPane.animate({
            left:       rightPane.position().left + rightPane.get(0).offsetWidth + 'px',
            opacity:    0
        }, {
            duration:   config.duration,
            queue:      false,
            complete:   function(e) {
                $(this).remove();
            }
        });
    }
})(jQuery);