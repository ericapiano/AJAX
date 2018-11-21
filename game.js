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
        var gifDiv = $("<div>");

        // var rating = results[i].rating;

        // var p = $("<p>").text("rating: " + rating);


        var stillImage = results[i].images.fixed_height_still.url;

        // results[i].images.fixed_height.url;
        var animated = results[i].images.fixed_height.url;

        var gifImage = $("<img>");
        gifImage.attr("src", stillImage);

        gifImage.attr("data_still", stillImage);

        gifImage.attr("data_animate", animated);

        gifImage.attr("state", stillImage);

        // gifDiv.append(p);
        gifDiv.append(gifImage);

        $("#display-images").append(gifDiv);

      }

    });

  });
});