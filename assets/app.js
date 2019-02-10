var userTeam = ["team"];
    
// // creates buttons for each of these
// function makeButtons(){ 
// // deletes the userTeam prior to adding new userTeam so there are no repeat buttons
// $('#createdButtons').empty();
// // loops through the userTeam array
// for (var i = 0; i < userTeam.length; i++){
//     // dynamically makes buttons for every thing in the array
//     var a = $('<button>') 
//     a.addClass('thing'); // add a class
//     a.attr('data-name', userTeam[i]); // add a data-attribute
//     a.text(userTeam[i]); // make button text

//     var b = $('<p>') 
//     b.attr('data-team', userTeam[i]); // add a data-attribute
//     b.text(userTeam[i]);
    
    
//     $('#createdButtons').append(a); // append the button to buttonsView div
//     $("#teamName").append(b);
// }
    
// console.log(userTeam);

var thing = "";
// handles addthing button event
$("#search-btn2").on("click", function(){

// grabs the user thing input
thing = $("#search2").val().trim();
// that input is now added to the array
userTeam.push(thing);
// the makeButtons function is called, which makes buttons for all userTeam plus the user thing
// makeButtons();
// this line is so users can hit "enter" instead of clicking the submit button
return false; 
})
function displayInfo(){

// var thing = $('').attr("data-name");
console.log(thing);
var queryURL = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=" + thing;
$.ajax({
    url: queryURL,
    method: "GET"
  })
  // After the data comes back from the API
  .then(function(response) {
    // $("#teamGif").text(JSON.stringify(response));
    console.log(response);
    // console.log(thing);
    // Storing an array of results in the results variable
    var results = response.data;
    // var teamId = response.teams[0].idTeam;
    // console.log(teamId)
    // var teamName = response.teams[0].strTeam

    $('#teamName').text(response.teams[0].strTeam);
    $('#sportType').text(response.teams[0].strSport);
    $('#team-img').attr("src", response.teams[0].strTeamFanart3)
    $('#league').text(response.teams[0].strLeague);
    $('#stadium').text(response.teams[0].strStadium);
    $('#location').text(response.teams[0].strStadiumLocation);
    $('#team-logo').attr("src", response.teams[0].strTeamLogo);
    $('#year-formed').text(response.teams[0].intFormedYear);
    $('#manager').text(response.teams[0].strManager);
    $('#description').text(response.teams[0].strDescriptionEN);
    
    var query2URL = "https://newsapi.org/v2/everything?q=" + thing + "&sortBy=newest&apiKey=97ed65750f0347c8b468742817667d30";
    marker(query2URL)
    
    
    // // Looping over every result item
    for (var i = 0; i < results.length; i++) {
        //      // Storing the result item's logo
        var teamVs = results[i].data;
        
        //      // Creating a paragraph tag with the result item's logo
        // var p = $("<p>").text("" + teamVs);

        $("teamGif").append(p);  
}
});
}

function marker(query2URL) {
$.ajax({
url: query2URL,

method: "GET"
}).then(function (response) {

console.log(response);
// console.log(thing);
// Storing an array of results in the results variable
// var results = response.data;
})};


// starts displayGif function on click
$('#search-btn2').on("click", displayInfo);
// initially calls the makeButtons function
// makeButtons();