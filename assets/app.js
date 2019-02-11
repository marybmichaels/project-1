var userTeam = ["team"];
    
var thing = "";
// handles addthing button event
$("#search-btn2").on("click", function(){

// grabs the user thing input
thing = $("#search2").val().trim();
// that input is now added to the array
userTeam.push(thing);

// this line is so users can hit "enter" instead of clicking the submit button
return false; 
})


function displayInfo(){

$('#article-previews').empty();
$('#search2').val('');

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

    var imgAlt = (response.teams[0].strTeamLogo);
    console.log(imgAlt);
    if (imgAlt === null) {
      $('#team-logo').attr("src",response.teams[0].strTeamBadge);
    }
  
    // Yankees alt img
    if (response.teams[0].idTeam === "135260"){
      console.log("yay");
      document.getElementById("team-img").src = "https://external-preview.redd.it/QVUoX3MHUJmUFMWFzg2uknlmPvQpVlU6SjGhgd7VgT4.png?auto=webp&s=b20bd60d767c10e8f962ce660b27feb8d87ca7b2";
    }
    
    var query2URL = "https://newsapi.org/v2/everything?q=" + thing + "&sortBy=newest&apiKey=97ed65750f0347c8b468742817667d30";
    marker(query2URL)
    
    console.log(results)
    
    // // Looping over every result item
  });
}

function marker(query2URL) {
  $.ajax({
    url: query2URL,
    
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var results = response.articles;

        for (var i = 0; i < 3; i++) {
            // var news = results[i].data;
            var newsTitle = results[i].title;
            console.log(newsTitle);
    
            var newsImageUrl = response.articles[i].urlToImage;
            var newsDate = response.articles[i].publishedAt;
            var newsDescript = response.articles[i].description;
            var newsURL = response.articles[i].url;
    
            var newCard = $('<div>').attr("class", "card");
            var cardImg = $('<img>').attr({
              "class": "card-img-top newsImg",
              "src": newsImageUrl,
            });
            var cardBody = $('<div>').addClass("card-body");
            var title = $('<h5>').addClass("card-title").text(newsTitle);
            var description = $('<p>').addClass("card-text").text(newsDescript);
            var date = $('<p>').addClass('card-text text-muted').text(newsDate);
            var goToArticle = $('<a>').attr({
              "href": newsURL,
              "class": "btn btn-primary"
            }).text('View Article');           

            $(cardBody).append(title, description, date, goToArticle);
            $(newCard).append(cardImg, cardBody).appendTo('#article-previews');
            
            // $("#article-previews").append(newCard);  
    }
    
console.log(response);

})};


// starts displayGif function on click
$('#search-btn2').on("click", displayInfo);