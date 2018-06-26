//vars//

var APIKey = "&api_key=bHqkMcxYFjGLDZN4kdne5mYiOLUHWDnH"
var limit ="&limit=10"

//Initial array//

var gifArray = ["Fifa-bicycle-kick", "NHL-save", "NHL-hit", "NBA-block", "NBA-windmill", "NBA-half-court",
"NFL-celebration", "NFL-sack", "NFL-touchdown", "NHL-breakaway"]
//creating the buttons based on the array//  

    var makeButtons = function(){
          
    // Delete the content inside the movies-view div prior to adding new movies
    $("#gif-button-area").empty()
  
    for (i=0; i < gifArray.length; i++){
    var gifButton = $("<button>")
    gifButton.text(gifArray[i]);
    gifButton.addClass("btn btn-primary");
    gifButton.addClass("gifCreate")
    gifButton.attr("data-name", gifArray[i]);
    $("#gif-button-area").append(gifButton);
    }
}

// add the button based on the array on the search //
    var searchGif = function(){
    $("#searchButton").on("click", function(event){
        event.preventDefault()
        var newGif = $("#gif-search").val().trim()
        gifArray.push(newGif)
        makeButtons()
        gifCall()
        })
    }

    //test for clickability//
    //var gifCreate = gifCall()
   function gifCall(){
    $(".gifCreate").on("click", function(){
        alert("click")
        var keyword = $(this).attr("data-name");
        var queryURL = "http:/" + "/api.giphy.com/v1/gifs/search?q=" + keyword + APIKey + limit
        
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            var results = response.data;
            console.log(results)
        })
    })
    }





// the AJAX call //


// giphy documentation to provide proper html request // 

makeButtons()
searchGif()
gifCall()