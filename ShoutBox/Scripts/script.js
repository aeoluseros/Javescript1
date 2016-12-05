/**
 * Created by Robin on 11/20/2016.
 */
$(document).ready(function(){
    $('#submit').on('click', function () {
        var title = $('#title').val();
        var memo = $('#memo').val();
        var date = getDate();

        var dataString = 'title=' + title + '&memo=' + memo + '&date=' + date;

        //Validation
        if(title==''||memo==''){
            alert('Please fill in the message title and content.');
        } else{
            $.ajax({
               type:"POST",   //get is the default
               url:"../ShoutBox/shoutbox.php",
               data:dataString,
               cache:false,
               success:function(html){   //insert the html into the page without refreshing
                    $('#shouts ul').prepend(html);
               }
            });
        }
        return false;
    });
});

function getDate() {
    var date = new Date();
    date = date.getUTCFullYear() + '-' +
        ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
        ('00' + date.getUTCDate()).slice(-2) + ' ' + ' ' +
        ('00' + date.getUTCHours()).slice(-2) + ':' +
        ('00' + date.getUTCMinutes()).slice(-2) + ':' +
        ('00' + date.getUTCSeconds()).slice(-2);
    return date;
}