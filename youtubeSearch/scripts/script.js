/**
 * Created by Robin on 11/12/2016.
 */
$(function(){
    var searchField = $('#query');
    var icon = $('#search-btn');

    //Focus Event Handler
    $('.search-field').on('click', function(){
        $(this).animate({width:'100%'}, 400);
        $(icon).animate({right:'10px'}, 400);
    });

    //Blur Event Handler
    $('.search-field').on('blur', function(){
        if(searchField.val() == ''){
            $(searchField).animate({width:'45%'}, 400, function(){});
            $(icon).animate({right:'360px'},400, function(){});
        }
    });

    $('#search-form').submit(function(e){
        e.preventDefault();
    })

});

/*Dynamic the search result list and paging buttons*/
function search(){
    //clear 'result' div.
    $('#results').html('');
    $('#buttons').html('');

    //Get Form Input
    q = $('#query').val();

    //Get Request on API
    $.get("https://www.googleapis.com/youtube/v3/search"
        ,{  part: 'snippet, id',
            q:q,
            type:'video',
            maxResults: 10, //5 result is default
            key:'AIzaSyCqImcN9JlpeLzhk3hFiFKCH0VsBlBNitY'}
        ,function(data) {
            var nextPageToken = data.nextPageToken;
            var prevPageToken = data.prevPageToken;

            //log data
            //console.log(data);

            $.each(data.items, function (i, item) {
                var output = getOutput(item);

                //Display Results
                $('#results').append(output);
            });

            var buttons = getButtons(prevPageToken, nextPageToken);

            //display buttons
            $('#buttons').append(buttons);
        }
    )
}

//Build output string
function getOutput(item){
    var videoId = item.id.videoId;
    var title=item.snippet.title;
    var description=item.snippet.description;
    var thumb=item.snippet.thumbnails.high.url;
    var channelTitle=item.snippet.channelTitle;
    var videoDate=item.snippet.publishedAt;

    //build output string
    var output = '<li>' +
                    '<div class="list-left">' +
                        '<img src = "' + thumb + '">' +
                    '</div>' +
                     '<div class="list-right">' +
                         '<h3><a class="fancybox fancybox.iframe" href="http://www.youtube.com/embed/'+videoId+'">' + title + '</a></h3>' +
                         '<small> by <span class="cTitle">' + channelTitle + '</span> on ' + videoDate + '</small>'+
                         '<p>' + description + '</p>' +
                     '</div>' +
                 '</li>' +
                 '<div class="clearfix"></div>'+
                 '';
    console.log(output);
    return output;
}



// Build the buttons
function getButtons(prevPageToken, nextPageToken){
    if(!prevPageToken){
        var btnoutput = '<div class="button-container">' +
                            '<button id="next-button" class="paging-button" data-token="' + nextPageToken
                                    + '" data-query = "' + q + '" ' + 'onclick = "nextPage()">Next Page</button>'+
                        '</div>';
    }else{
        var btnoutput = '<div class="button-container">' +
            '<button id="prev-button" class="paging-button" data-token="' + prevPageToken
            + '" data-query = "' + q + '" ' + 'onclick = "prevPage()">Prev Page</button>'+
            '<button id="next-button" class="paging-button" data-token="' + nextPageToken
            + '" data-query = "' + q + '" ' + 'onclick = "nextPage()">Next Page</button>'+
            '</div>';
    }
    console.log(btnoutput);
    return btnoutput;
}


// Next Page function
function nextPage(){
    var token = $('#next-button').data('token');  //not necessary to write out 'data-token', just need the second part
    var q = $('#next-button').data('query');

    $('#results').html('');
    $('#buttons').html('');

    //Get Form Input
    q = $('#query').val();
    console.log(q);
    console.log(token);

    //Get Request on API
    $.get("https://www.googleapis.com/youtube/v3/search"
        ,{  part: 'snippet, id',
            q:q,
            pageToken:token,
            type:'video',
            maxResults: 10, //5 result is default
            key:'AIzaSyCqImcN9JlpeLzhk3hFiFKCH0VsBlBNitY'}
        ,function(data) {
            var nextPageToken = data.nextPageToken;
            var prevPageToken = data.prevPageToken;

            //log data
            console.log(data);

            $.each(data.items, function (i, item) {
                var output = getOutput(item);

                //Display Results
                $('#results').append(output);
            });

            var buttons = getButtons(prevPageToken, nextPageToken);

            //display buttons
            $('#buttons').append(buttons);
        });
}


// Previous Page function
function prevPage(){
    var token = $('#prev-button').data('token');  //not necessary to write out 'data-token', just need the second part
    var q = $('#prev-button').data('query');

    $('#results').html('');
    $('#buttons').html('');

    //Get Form Input
    q = $('#query').val();

    //Get Request on API
    $.get("https://www.googleapis.com/youtube/v3/search"
        ,{  part: 'snippet, id',
            q:q,
            pageToken:token,
            type:'video',
            maxResults: 10, //5 result is default
            key:'AIzaSyCqImcN9JlpeLzhk3hFiFKCH0VsBlBNitY'}
        ,function(data) {
            var nextPageToken = data.nextPageToken;
            var prevPageToken = data.prevPageToken;

            //log data
            console.log(data);

            $.each(data.items, function (i, item) {
                var output = getOutput(item);

                //Display Results
                $('#results').append(output);
            });

            var buttons = getButtons(prevPageToken, nextPageToken);

            //display buttons
            $('#buttons').append(buttons);
        });
}





