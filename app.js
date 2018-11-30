$(document).ready(function () {

  $("#submitPress").on("click", function (event) {

    event.preventDefault();


    var character = $("#user-input").val().trim();

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + character + "&api_key=CpvK7O9GXdSIyzQAwhyTmPGGT2Ai3eRA&limit=10";

    console.log(queryURL);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);

      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        console.log(results[i].images.fixed_height.url);
        var gifDiv = $("<div class='gifDiv'>");

        // var rating = results[i].rating;

        // var p = $("<p>").text("rating: " + rating);


        var stillImage = results[i].images.fixed_height_still.url;

        // results[i].images.fixed_height.url;
        var animated = results[i].images.fixed_height.url;

        var gifImage = $("<img>");
        gifImage.attr("src", stillImage);

        gifImage.attr("data-still", stillImage);

        gifImage.attr("data-animate", animated);

        gifImage.attr("state", stillImage);

        gifImage.on("click", function () {
          var state = $(this).attr("state");
          var dataStill = $(this).attr("data-still");
          var dataAnimate = $(this).attr("data-animate");

          if (state === dataStill) {
            $(this).attr("state", dataAnimate);
            $(this).attr("src", dataAnimate);
          }
          else {
            $(this).attr("state", dataStill);
            $(this).attr("src", dataStill);
          }

        })
        // gifDiv.append(p);
        gifDiv.append(gifImage);

        $("#display-images").append(gifDiv);

      }

    });

  });  

});