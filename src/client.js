//require the xhr library to provide xml http requests
require("xhr2")
var XMLHttpRequest = require("xhr2").XMLHttpRequest;
//implement the getJSON function
var getJSON = function(url, successHandler, errorHandler) {
	var xhr = typeof XMLHttpRequest != 'undefined'
		? new XMLHttpRequest()
		: new ActiveXObject('Microsoft.XMLHTTP');
	xhr.open('get', url, true);
	xhr.onreadystatechange = function() {
		var status;
		var data;
		// https://xhr.spec.whatwg.org/#dom-xmlhttprequest-readystate
		if (xhr.readyState == 4) { // `DONE`
			status = xhr.status;
			if (status == 200) {
				data = JSON.parse(xhr.responseText);
				successHandler && successHandler(data);
			} else {
				errorHandler && errorHandler(status);
			}
		}
	};
	xhr.send();
};

//modularized functions
//process data handler callback on getJSON
function processData(data){
	var i = 0;
	var adata = data.query.search;
	var adatalen = data.query.search.length;
    var posts = {};
	while(i < adatalen){
        var article = data.query.search[i];
        posts[i + 1] = {"Title":  article["title"].replace(/\W/g," "), "Link": 'https://en.wikipedia.org/wiki/'+ article.title.split(" ").join("_")};
        i++;
	}
	console.log(posts);
	return posts;
}
//error handler callback function on getJSON
function handleError(status){
	return status;
}

//export the function
module.exports = {
	wiki: function(search){
        var jsonString = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=" + search;
        return getJSON(jsonString, processData, handleError);
	}
}