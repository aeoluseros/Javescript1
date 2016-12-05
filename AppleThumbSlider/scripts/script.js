/**
 * Created by Robin on 11/23/2016.
 */
$(document).ready(function(){
    //declare variables
    var totalWidth = 0;
    var position = [];

    $('#slides').find('.slide').each(function(i){
        //get slider widths
        position[i] = totalWidth;
        totalWidth += $(this).width();  // you only need $() when you're using jQuery. () is the jQuery constructor
                                        // function. 'this' is a reference to the DOM element of invocation.
                                        // so basically, in $(this), you are just passing the 'this' in $() as a parameter
                                        // so that you could call jQuery methods and functions. Here width() is a jquery function.

                                        // If you want jQuery's help to do DOM things just keep this in mind.
                                        // $(this)[0] === this
                                        // Basically every time you get a set of elements back jQuery turns it
                                        // into a jQuery object. If you know you only have one result, it's going to
                                        // be in the first element. $("#myDiv")[0] === document.getElementById("myDiv");

        if(!$(this).width()){
            alert('Please add a width to your images');
            return false;
        }
    });

    //set width
    $('#slides').width(totalWidth);

    $('#menu ul li a').click(function(e, keepScroll){
        //Remove active class and add inactive;
        $('li.product').removeClass('active').addClass('inactive');
        //add active class to parent;
        $(this).parent().addClass('active');

        var pos = $(this).parent().prevAll('.product').length;

        $('#slides').stop().animate({marginLeft:-position[pos]+'px'}, 450);

        //prevent default;
        e.preventDefault();

        //stop autoscroll;
        if(!autoScroll) clearInterval(itvl);
    });

    //Make first image active
    $('#menu ul li.product:first').addClass('active').siblings().addClass('inactive');

    //autoscroll
    var curr = 1;
    function autoScroll(){
        if(curr=== -1) return false;

        $('#menu ul li a').eq(curr%$('#menu ul li a').length).trigger('click',[true]);
                // the .eq() method constructs a new jQuery object from one element within that set.
                // The supplied index identifies the position of this element in the set.
                // E.g.: $( "li" ).eq( 2 ).css( "background-color", "red" );  The result of this call is a red background for item 3.

        curr++ ;
    }

    //Duration for autoScroll
    var duration = 2;
    var itvl = setInterval(function(){autoScroll()}, duration*1000)
});













