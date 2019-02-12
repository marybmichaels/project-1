$(document).ready(function () {
    $('.btn').on("click", function(e) {
        // e.preventDefault();
        var team = $('#search1').val() 
        
        if (team != "") {
        console.log("clicked");  
        
        console.log("team: " + team);  

        // add variable to local storage
        localStorage.setItem('team', team);

        }
    });
});