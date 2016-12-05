/**
 * Created by Robin on 11/12/2016.
 */
$(document).ready(function(){
    //Set Options
    var speed = 500;  //fade speed: half second
    var autoswitch = true;  // auto slider option
    var autoswitch_speed = 4000;  //auto slider speed

    //add initial active class
    $('.slide').first().addClass('active');

    //Hide all slides;
    $('.slide').hide();
    //Show first slide
    $('.active').show();

    $('#next').on('click',nextSlide);

    $('#prev').on('click',prevSlide);

    if(autoswitch = true){
        setInterval(nextSlide, autoswitch_speed);
    }

    // Switch to the next slide
    function nextSlide(){
        $('.active').removeClass('active').addClass('oldActive');

        if($('.oldActive').is(':last-child')){       //how does compiler know (':last-child') is the last slide?
            $('.slide').first().addClass('active');
        }else{
            $('.oldActive').next().addClass('active');
        }

        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }

    // Switch to the previous slide
    function prevSlide(){
        $('.active').removeClass('active').addClass('oldActive');

        if($('.oldActive').is(':first-child')){       //how does compiler know (':last-child') is the last slide.
            $('.slide').last().addClass('active');
        }else{
            $('.oldActive').prev().addClass('active');
        }

        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
});