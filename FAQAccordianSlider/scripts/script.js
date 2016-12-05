/**
 * Created by Robin on 11/13/2016.
 */
//Accordian
var action = "click"; //using click, hover or double-click to open answer;
var speed=200;

$(document).ready(function(){
    //question handler
    $('li.q').on(action, function(){
        //get next element
       $(this).next()          //using next() to get next element.
           .slideToggle(speed)
           .siblings('li.a')   //select all other answers
           .slideUp();

        //get image for active question
        var img=$(this).children('img');
        //remove the 'rotate' class for all images except the active
        $('img').not(img).removeClass('rotate');
        //Toggle rotate class;
        img.toggleClass('rotate');
    });
});


