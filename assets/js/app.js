
    var userTeam = ["team"];
    // creates buttons for each of these
function makeButtons(){ 
	// deletes the userTeam prior to adding new userTeam so there are no repeat buttons
	$('#createdButtons').empty();
	// loops through the userTeam array
	for (var i = 0; i < userTeam.length; i++){
		// dynamically makes buttons for every thing in the array
		var a = $('<button>') 
		a.addClass('thing'); // add a class
		a.attr('data-name', userTeam[i]); // add a data-attribute
        a.text(userTeam[i]); // make button text

        var b = $('<p>') 
		b.attr('data-team', userTeam[i]); // add a data-attribute
        b.text(userTeam[i]);
        
        
		$('#createdButtons').append(a); // append the button to buttonsView div
        $("#teamName").append(b);
    }
        
    console.log(userTeam);
    
}

// handles addthing button event
$("#addthing").on("click", function(){

// grabs the user thing input
var thing = $("#thing-input").val().trim();
// that input is now added to the array
userTeam.push(thing);
// the makeButtons function is called, which makes buttons for all userTeam plus the user thing
makeButtons();
// this line is so users can hit "enter" instead of clicking the submit button
return false; 
})
function displayGifs(){
    var thing = $(this).attr("data-name");
// "http://api.giphy.com/v1/gifs/search?q="++"&api_key=YOUR_API_KEY&limit=5"
var queryURL = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=" + userTeam;
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      // After the data comes back from the API
      .then(function(response) {
        console.log(response);
        // console.log(thing);
        // Storing an array of results in the results variable
        // var results = response.data;
        
        
        // // Looping over every result item
        // for (var i = 0; i < results.length; i++) {

        //      // Storing the result item's rating
        //      var rating = results[i].rating;
        //     // storing result for title
        //      var title = results[i].title;

        //      // Creating a paragraph tag with the result item's rating
        //      var p = $("<p>").text("Rating: " + rating);
        //     // creating p tag with the result for item title
        //      var p2 = $("<p>").text("Title: " + title);
        //     // Creating a div for the gif
        //     var gifDiv = $("<div class=gifs>");
        //      // Creating an image tag
        //     var personImage = $("<img>");
        //     // Appending the personImage to the div 
        //     gifDiv.append(personImage);
        //     // appending rating to p
        //     gifDiv.append(p);
        //     // appends title to p2 
        //     gifDiv.append(p2);
            
        //     // Giving the image tag an src attribute of a proprty pulled off the
        //     // result item
        //     personImage.attr("src", results[i].images.fixed_height_still.url);
        //     personImage.attr('data-still', results[i].images.fixed_height_still.url);
        //     personImage.attr('data-state', 'still');
        //     personImage.addClass('gif');
        //     personImage.attr('data-animate', results[i].images.fixed_height.url);
            
        //     // Prepending the gifDiv to the div in the HTML
        //     $("#gifsView").prepend(gifDiv);
        //     // console.log("#gifsView")
            
            
        // }
      });
    }

    // $(document).on("click", ".gif", function() {
    //     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    //     var state = $(this).attr("data-state");
    //     // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    //     // Then, set the image's data-state to animate
    //     // Else set src to the data-still value
    //     if (state === "still") {
    //       $(this).attr("src", $(this).attr("data-animate"));
    //       $(this).attr("data-state", "animate");
    //     } else {
    //       $(this).attr("src", $(this).attr("data-still"));
    //       $(this).attr("data-state", "still");
    //     }
    //   });
    



// starts displayGif function on click
$(document).on("click",".thing", displayGifs);
// initially calls the makeButtons function
makeButtons();