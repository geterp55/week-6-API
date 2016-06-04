// Giphy API documentation: https://github.com/Giphy/GiphyAPI
//endpoint documentation    https://github.com/Giphy/GiphyAPI#search-endpoint
//Giphy API Key: the public beta key is "dc6zaTOxFJmzC”
//make an array of images animals
//When you click on a button, we get 10 images from giphy and put them on the page.
//When you click on the image, the gif plays. When you click again, the gif stops playing.
// You can use a form that takes the value and puts it into the array and remakes the buttons on the page.
// Display the rating of the image on the page (PG, G, etc...). This data is provided by the giphy api.


$('button').on('click', function(){
    $('.monsterButton').removeClass('active');
    $(this).addClass('active');
    var p = $(this).data('scare'); // <------------------------- 1. What is this in "this" case? 
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + p + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({url: queryURL, method: 'GET'})
     .done(function(response) {
         var results = response.data;
         for(var i=0; i < results.length; i++){
            if (results[i].rating == "r" || results[i].rating == "pg-13")
            {
            }
            else {
              var gifDiv = $('<div class="item">')
             var rating = results[i].rating;
             var p = $('<p>').text( "Rating: " + rating);
             var personImage = $('<img>');
             personImage.attr('src', results[i].images.fixed_height.url);
             gifDiv.append(p)
             gifDiv.append(personImage)
             $('#gifsAppearHere').prepend(gifDiv);               
            }
         }
    

    }); 
});



//document.getElementById("#reset").reset();
// $('#addMonster').on('click', function(){
//     var monster = $(#addMonster).val().trim();
//     monster.push(addMonster);
//     render.Buttons();
//     return false;
// });
