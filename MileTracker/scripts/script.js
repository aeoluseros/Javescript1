/**
 * Created by Robin on 12/4/2016.
 */
//$(document).ready();

//with jquery mobile we use pageinit instead of ready.
//$(document).one() Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
$(document).one('pageinit', function () {
    //Add Handler
    $('#submitAdd').on('tap',addRun);          //tap is like click when we use in laptop.

    /*
    * Add a run
    */
    function addRun(){
        //Get Form Values
        var miles = $('#addMiles').val();
        var date = $('#addDate').val();

        //Create 'run' object
        var run = {
            date:date,
            miles:parseFloat(miles)
        }

        var runs = getRunsObject();

        //Add run to runs array
        runs.push(run);

        alert('Run Added');

        //set stringified object to localstorage
        localStorage.setItem('runs', JSON.stringify(runs));

        //Redirect back to index page
        window.location.href="index.html";

        return false;
    }

    /*
    * Get the runs object
    */
    function getRunsObject(){
        //set runs array
        var runs = new Array();
        //get the current runs from localStorage
        var currentRuns = localStorage.getItem('runs');

        //Check localStorage
        if(currentRuns != null){
            //set to runs
            var runs = JSON.parse(currentRuns);
        }

        //return runs object
        return runs.sort(function(a,b){return new Date(b.date)-new Date(a.date)});  //Sort Javascript Object Array By Date
    }

});












