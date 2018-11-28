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

$(document).on('click' , '.contactus button' , function(e){
    e.preventDefault();
    
    if($('#name').val() == '' || $('#email').val() == '' || $('#message').val() == ''){
        $('#response').addClass('alert alert-danger').slideDown( 300 ).html('Please fill all fields to send your request').delay( 3000 ).slideUp( 400 );
    }else{
        $('#response').removeClass('alert-danger').addClass('alert alert-success').slideDown( 300 ).html('Message Sent! Thank you').delay( 3000 ).slideUp( 400 );
        $(this).parents('form').reset();
    }
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


 $(document).ready(function(){
      $('#mainTestContent').slick();
    });