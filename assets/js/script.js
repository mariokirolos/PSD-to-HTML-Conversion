$(document).on("scroll", onScroll);

$(window).scroll(function(){
    if($(document).scrollTop() > 0) {
        $('#topHeader').addClass('fixedHeader');
    } else {
        $('#topHeader').removeClass('fixedHeader');
    }
});

$(document).on('click' , '.scroll-link' , function(e){
    $('nav li').removeClass('active');
    $(this).parent('li').addClass('active');
	e.preventDefault();
	$div = $(this).attr('href');
	$('html, body').animate({
        scrollTop: $( $div ).offset().top
    });
});


 function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('nav li').removeClass("active");
            currLink.parent('li').addClass("active");
        }
        else{
            currLink.parent('li').removeClass("active");
        }
    });
}