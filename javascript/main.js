
document.querySelector(".js-search").addEventListener('click', function(){

	var inputValue = document.querySelector(".js-userinput").value;
	var userInput = getUserInput();
	searchGiphy(userInput);
});


document.querySelector(".js-userinput").addEventListener('keyup', function(e){

	 if(e.which == 13) {
	 	var userInput = getUserInput();
	 	searchGiphy(userInput);
	 }

});


function getUserInput() {
	var inputValue = document.querySelector('.js-userinput').value;
	return inputValue;
}


function searchGiphy(searchQuery){
	var url = "https://api.giphy.com/v1/gifs/search?api_key=X7QRcwUQN7wJtDXh3FThlLC4M104luka&q=" + searchQuery;

	var GiphyAJAXCall = new XMLHttpRequest();
	GiphyAJAXCall.open('GET', url);
	GiphyAJAXCall.send();

	GiphyAJAXCall.addEventListener('load',function(data){
		 var actualData = data.currentTarget.response;
		 console.log(data);
		 pushToDOM(actualData);
	});


	function pushToDOM(response){

	    var response = JSON.parse(response);
	    var images = response.data;

	    var container = document.querySelector(".js-container");
	    container.innerHTML = "";

	    images.forEach(function(image){

	    	var src = image.images.fixed_height.url;
			container.innerHTML +="<img src=\"" + src + "\" class=\"container-img\" style=\"width:300px; height:200px; \">";
	  });
		
	}

}
