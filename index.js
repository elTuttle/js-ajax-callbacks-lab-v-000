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
  //console.log(name)
  const req = new XMLHttpRequest()
  req.addEventListener("load", displayCommits)
  req.open("GET", 'https://api.github.com/repos/octocat/' + name + '/commits')
  req.send()
}
