

//Initial array//

var gifArray = ["Fifa-bicycle-kick", "NHL-save", "NHL-hit", "NBA-block", "NBA-windmill", "NBA-half-court",
"NFL-celebration", "NFL-sack", "NFL-touchdown", "NHL-breakaway"]
//creating the buttons based on the array//  

    function makeButtons(){
          
    // Delete the content inside the movies-view div prior to adding new movies
    $("#gif-button-area").empty()
  
    for (i=0; i < gifArray.length; i++){
    var gifButton = $("<button>")
    gifButton.text(gifArray[i]);
    gifButton.addClass("btn btn-primary");
    gifButton.attr("data-name", gifArray[i]);
    $("#gif-button-area").append(gifButton);
    }
}

// add the button based on the array on the search //
    function searchGif(){
    $("#searchButton").on("click", function(event){
    event.preventDefault()
    var newGif = $("#gif-search").val().trim()
    gifArray.push(newGif)
    makeButtons()
    })
}

makeButtons()
searchGif()


// the AJAX call //

// giphy documentation to provide proper html request // 

