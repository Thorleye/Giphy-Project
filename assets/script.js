//vars//

var APIKey = "&api_key=bHqkMcxYFjGLDZN4kdne5mYiOLUHWDnH"
var limit ="&limit=10"
var rating = "&rating=g"

//Initial array//

var gifArray = ["NBA-block", "NBA-windmill", "NBA-tomahawk" ,"NBA-half-court",
"NFL-celebration", "NFL-sack", "NFL-touchdown", "NHL-breakaway", "Fifa-bicycle-kick", "NHL-save", "NHL-hit", ]

//creating the buttons based on the array//  
var makeButtons = function(){
          
    // Delete the content inside the movies-view div prior to adding new movies
    $("#gif-button-area").empty()
    //loop to make it work
    for (i=0; i < gifArray.length; i++){
    var gifButton = $("<button>")
    gifButton.text(gifArray[i]);
    gifButton.addClass("btn btn-primary"); //bootstrap formatting//
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
    $("#gif-search").val("")
    })
}

    //function to make ajax call//
function gifCall(){
    $(".gifCreate").on("click", function(){
        
        var keyword = $(this).attr("data-name");
        var queryURL = "http:/" + "/api.giphy.com/v1/gifs/search?q=" + keyword + APIKey + limit + rating
        
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){

            //put results into divs to go into gif-area//
            var results = response.data;
            console.log(results)

            for (var i=0; i < results.length; i++){
                var gifDiv = $("<div class='item'>");
                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);
                var gifImage = $("<img>")

                //url for the static image//
                gifImage.attr("src", results[i].images.fixed_height_still.url)

                //setting data for still images
                gifImage.attr("data-still", results[i].images.fixed_height_still.url)
                gifImage.attr("data-state", "static")
                
                // url for the moving gif//
                gifImage.attr("data-animate", results[i].images.fixed_height.url)
                
                gifDiv.prepend(p);
                gifDiv.append(gifImage);

                $("#gif-display-area").prepend(gifDiv)
                
            }

            //fun instructions to change from still to moving and back again//
            $("img").on("click", function(){
                var state = $(this).attr("data-state")
                console.log(state)

                if (state ==="static"){
                    $(this).attr("src", $(this).attr("data-animate"))
                    $(this).attr("data-state", "animated")
                }
                if (state === "animated"){
                    $(this).attr("src", $(this).attr("data-still"))
                    $(this).attr("data-state", "static")
                }
            })
        })
    })
}

function startup(){
    makeButtons()
    searchGif()
    gifCall()
   
}
startup()

