//Initial array//

var gifArray = ["Fifa", "NHL", "NBA", "NFL"]
console.log(gifArray)
//creating the buttons based on the array//  

function gifButtons(){
          
    // Delete the content inside the movies-view div prior to adding new movies
    $("#gif-button-area").empty()
  
    for (i=0; i < gifArray.length; i++){
    var gifButton = $("<button>")
   gifButton.text(gifArray[i])
   gifButton.addClass("btn btn-primary")
    $("#gif-button-area").append(gifButton)
    }
}
// add the button based on the array on the search //

// the AJAX call //

// giphy documentation to provide proper html request // 

gifButtons()
