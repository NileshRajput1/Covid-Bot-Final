function smoothScroll(target) {
    
    $(window).on('load',docSize(target));
    setTimeout(docSize(target),100); //Firefox
    
    $(window).resize(function(){
        docSize(target);
    });
    
    $(window).scroll(function(){
        
        var wScroll = $(this).scrollTop();
        
        easing(wScroll, target);
        
    });
}

function docSize(target) {
    
    setTimeout(function(){ // timeOut needed to get proper target height
        contentHeight = $(target).height();
        $('body').css({'min-height' : contentHeight});
    }, 100);
    
}

function easing(windowScroll, target) {
    
    $(target).css({
        'transform' : 'translate(0px,' + -windowScroll + 'px)'
    });
    
}
