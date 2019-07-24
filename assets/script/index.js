//clickevent
$("#searchBtn").on('click',function(){
    //clean display
    $("#gifs").html("");
    //att value of the intext to a var 
    let searchEntry = $("#searchBox").val();
    //API url + var as a seach key
    let queryURL ="https://api.giphy.com/v1/gifs/search?api_key=PXAaADQHCfE50KlR8lkiTjmzTKxKH0Db&q="+searchEntry+"&limit=40&offset=0&rating=G&lang=en";
    console.log("this"+queryURL);
    //API call 
    $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
          //for loop to add gifs to the display 
          for (var i = 0;i<40;i++){
              console.log(response.data[i]);
              $('#gifs').append("<img alt ='"+response.data[i].title+"'src='"+response.data[i].images.fixed_height_downsampled.url+"'>");
            }
        //todo 
        //add readme.md
        //loop to turn gifs clickable
        
        
        })
    

})

   
    