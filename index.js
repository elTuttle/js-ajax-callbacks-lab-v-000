$(document).ready(function (){
});

function displayError() {
  document.getElementById("errors").innerHTML += "<h3>error</h3>";
}

function searchRepositories() {
  var searchTerms = document.getElementById("searchTerms").value
  $.get('/https:\/\/api.github.com\/search\/repositories\?q=' + searchTerms, function(response){
    console.log(response.items)
    document.getElementById("results").innerHTML += response.items.name
  })
}
