"use strict";
function main() {
    fetch("https://api.chucknorris.io/jokes/categories")
        .then(function (response) {
        return response.json();
    }).then(result => setCategories(result));
}
function setCategories(categories) {
    let selectElement = document.getElementById("action");
    for (let i = 0; i < categories.length; i++) {
        let option = document.createElement("option");
        option.text = categories[i];
        option.value = categories[i];
        selectElement.appendChild(option);
    }
}
function getRandomJoke() {
    let selectElement = document.getElementById("action");
    var category = selectElement.options[selectElement.selectedIndex].text;
    fetch("https://api.chucknorris.io/jokes/random?category=" + category)
        .then(function (response) {
        return response.json();
    }).then(result => setJokes(result));
}
function setJokes(jokeApi) {
    let element = "<div class='joke +'><img src='" + jokeApi.icon_url + "' id='icon'><div class='text'>" + jokeApi.value + "</div></div>";
    document.getElementById("text").innerHTML = element + document.getElementById("text").innerHTML;
}
main();
