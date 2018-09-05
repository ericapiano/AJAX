$(document).ready(function(){

$("#find-weather").on("click", function(event) {

event.preventDefault();


var weather = $("#weather-input").val().trim();

var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + weather + "&api_key=CpvK7O9GXdSIyzQAwhyTmPGGT2Ai3eRA&limit=10";


  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);

    var results = response.data;
    
    for (var i = 0; i < results.length; i++) 

    var gifDiv = $("<div>");

    // var rating = results[i].rating; 

    // var p = $("<p>").text("rating: " + rating);


    var stillImage = results[i].images.fixed_height_small.url;
    
    // results[i].images.fixed_height.url;
    var animated = results[i].images.fixed_height_still.url;

    var gifImage = $("<img>");
    gifImage.attr("src", stillImage);

    gifImage.attr("data_still", stillImage);

    gifImage.attr("data_animate", animated);

    gifImage.attr("state", stillImage);

    // gifDiv.append(p);
    gifDiv.append(gifImage);

    $("#gif-view").append(gifDiv); 



    });

});
});