/**
 * Created by Robin on 12/3/2016.
 */

var currentdate = new Date();
var datetime = "Now: " + currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/"
    + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();


$(document).ready(function(){
    $('nav a').on('click',function(){
        //current class assignment;
        $('nav li.current').removeClass('current');
        $(this).parent().addClass('current');   //$(this) means the hyperlink we clicked; .parent()is the li.

        //set heading text;
        $('h1#heading').text($(this).text());

        //get and filter link text
        var category = $(this).text().toLowerCase().replace(' ','-');

        //remove hidden class if 'all-projects' is selected
        if(category == 'all-projects'){
            $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
        }else{
            $('ul#gallery li').each(function () {
                if(!$(this).hasClass(category)){
                    $(this).hide().addClass('hidden');
                }else{
                    $(this).fadeIn('slow').removeClass('hidden');
                }
            });
        }
        //stop link behavior
        return false;
    });


    //mouse enter to show overlay div
    $('ul#gallery li').on('mouseenter', function () {
       //get data attribute values
        var title=$(this).children().data('title');
        var desc=$(this).children().data('desc');

        //validation
        if(desc==null){
            desc='Click to Enlarge';
        }

        if(title==null){
            title='';
        }

        //create overlay div
        $(this).append('<div class="overlay"></div>')

        //get the overlay div
        var overlay = $(this).children('.overlay');

        //add html to overlay
        overlay.html('<h3>' + title + '</h3><p>' + desc + '</p>')

        //Fade in overlay
        overlay.fadeIn(800);
    });

    //mouseleave overlay
    $('ul#gallery li').on('mouseleave', function () {
        //create overlay div
        $(this).append('<div class="overlay"></div>');

        //get the overlay div
        var overlay = $(this).children('.overlay');

        //Fade our overlay
        overlay.fadeOut(500);
    });



});


