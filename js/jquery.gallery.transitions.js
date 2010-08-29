(function($) {
    $.fn.gallery.wipe = function(config) {
        config.old.hide(config.duration, function(e) {
            $(this).remove();
        });
    };
    
    $.fn.gallery.slideUp = function(config) {
        config.old.animate({
            top: -config.old.get(0).offsetHeight + 'px'
        }, {
            duration:   config.duration,
            complete:   function(e) {
                $(this).remove();
            }
        });
    };
    
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
    };
    
    $.fn.gallery.slideLeft = function(config) {
        config.old.animate({
            left: -config.old.get(0).offsetWidth + 'px'
        }, {
            duration:   config.duration,
            complete:   function(e) {
                $(this).remove();
            }
        });
    };
    
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
    };
    
    $.fn.gallery.slideDown = function(config) {
        config.old.animate({
            top: config.old.get(0).offsetHeight + 'px'
        }, {
            duration:   config.duration,
            complete:   function(e) {
                $(this).remove();
            }
        });
    };
    
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
    };
    
    $.fn.gallery.slideRight = function(config) {
        config.old.animate({
            left: config.old.get(0).offsetWidth + 'px'
        }, {
            duration:   config.duration,
            complete:   function(e) {
                $(this).remove();
            }
        });
    };
    
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
    };
    
    $.fn.gallery.cheeseyZoom = function(config) {
        var cheesiness = 4;
        
        config.view.css({
            height:     config.next.get(0).offsetHeight,
            width:      config.next.get(0).offsetWidth,
            overflow:   "hidden"
        });
        config.next.css({
            height: "110%",
            width:  "110%"
        });
        config.next.animate({
            height:     "100%",
            width:      "100%"
        }, {
            duration:   config.duration * cheesiness,
            queue:      false
        });
        config.old.fadeOut(config.duration, function(e) {
            $(this).remove();
        });
    }
    
    $.fn.gallery.curtain = function(config) {
        var leftPane    = config.old.css({
                border:                 "0",
                width:                  "50%",
                backgroundPosition:     "0 0",
                left:                   ((config.next.outerWidth() - config.next.width()) / 2) + 'px',
                top:                    ((config.next.outerHeight() - config.next.height()) / 2) + 'px'
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
    };
    
    function divide(x, y, config) {
        var grid = [],
            dx = config.next.width() / x,
            dy = config.next.height() / y,
            ox = (config.next.outerWidth() - config.next.width()) / 2,
            oy = (config.next.outerHeight() - config.next.height()) / 2;
            
        for (var i = 0; i < y; i++) {
            grid[i] = [];
            for (var j = 0; j < x; j++) {
                grid[i].push(config.old.clone().css({
                    border:                 "0",
                    width:                  dx,
                    height:                 dy,
                    left:                   (dx * j) + ox,
                    top:                    (dy * i) + oy,
                    backgroundPosition:     ((-config.old.get(0).offsetWidth / x) * j) + 'px ' + ((-config.old.get(0).offsetHeight / y) * i) + 'px'
                }));
                config.view.append(grid[i][j].animate({
                    width:      0,
                    height:     0,
                    opacity:    0
                },{
                    duration:   config.duration,
                    queue:      false,
                    complete:   function(e) {
                        $(this).remove();
                    }
                }));
            }
        }
        config.old.remove();
    }
    
    $.fn.gallery.squares = function(config) {
        divide(3, 2, config);
    }
    $.fn.gallery.smallSquares = function(config) {
        divide(6, 4, config);
    }
    $.fn.gallery.tinySquares = function(config) {
        divide(12, 8, config);
    }
})(jQuery);