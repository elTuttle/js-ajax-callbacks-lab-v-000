$(document).ready(function (){
});

function displayError() {
  document.getElementById("errors").innerHTML += "<h3>error</h3>";
}

function searchRepositories() {
  var searchTerms = document.getElementById("searchTerms").value
  $.get('/https:\/\/api.github.com\/search\/repositories\?q=' + searchTerms, function(response){
    console.log(response.items[0].name)
    document.getElementById("results").innerHTML += response.items[0].name
  })
}

function showCommits(el) {
  const name = el.dataset.repository
  const owner = el.dataset.owner
  //console.log(name)
  $.get('/https:\/\/api.github.com\/repos\/' + owner + '\/' + name + '\/commits/', function(response){
    console.log(response.items[0].name)
    document.getElementById("results").innerHTML += response.items[0].name
  })
}
