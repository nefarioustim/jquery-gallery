(function($) {
    var debugMode = true;
    
    function debug(msg) {
        if(debugMode && window.console && window.console.log){
            window.console.log(msg);
        } else {
            alert(msg);
        }
    }
    
    $.fn.gallery = function(config) {
        var defaults = {
            "visiblePanes": 5,
            "panesToMove": 5
        };
        
        if (config) $.extend(defaults, config);
        
        this.each(function() {
            var gallery     = $(this),
                viewPane    = $(".view", gallery)
                                .css({
                                    position:   "relative"
                                }),
                thumbs      = $(".clip", gallery);
            
            thumbs.delegate("a", "click", function(e) {
                e.preventDefault();
                e.stopImmediatePropagation();
                var el      = $(this),
                    old     = viewPane.find("img"),
                    i       = new Image();
                
                i.src   = el.attr("href");
                i.alt   = el.find("img").attr("alt");
                
                viewPane.append(i);
                
                i       = $(i);
                
                if (old.length > 0) {
                    i.hide();
                    var shim    = $('<div class="shim" />')
                                    .css({
                                        position:           "absolute",
                                        backgroundImage:    "url(" + old.attr("src") + ")",
                                        backgroundRepeat:   "no-repeat",
                                        width:              old.attr("width") + "px",
                                        height:             old.attr("height") + "px",
                                        left:               0,
                                        top:                0,
                                        zIndex:             10
                                    });
                    viewPane.css({
                        width:  shim.css("width"),
                        height: shim.css("height")
                    })
                    viewPane.append(shim);
                    shim.ready(function(e) {
                        old.remove();
                        i.show();
                        shim.fadeOut(400, function(e) {
                            $(this).remove();
                        });
                    });
                }
            });
            
            gallery.carousel({
                "visiblePanes": defaults.visiblePanes,
                "panesToMove": defaults.panesToMove,
                "loop": true,
                "pagination": false
            });
            
            thumbs.find("a").first().trigger("click");
        });
        
        return this;
    }
})(jQuery);