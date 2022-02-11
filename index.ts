function main(){
    fetch("https://api.chucknorris.io/jokes/categories")
    .then(function(response){
        return response.json();
    }).then(result => setCategories(result));    
}

function setCategories(categories:any){
    let selectElement = (document.getElementById("action") as HTMLSelectElement);

    for (let i = 0; i < categories.length; i++) {    
        let option = document.createElement("option");   
        option.text = categories[i];
        option.value = categories[i];

        selectElement.appendChild(option);        
    }
}

function getRandomJoke()
{
    let selectElement = (document.getElementById("action") as HTMLSelectElement);
    var category = selectElement.options[selectElement.selectedIndex].text;

    fetch("https://api.chucknorris.io/jokes/random?category="+category)
    .then(function(response){
        return response.json();
    }).then(result => setJokes(result));    
}

function setJokes(jokeApi:any){
    
    let element = "<div class='joke +'><img src='" + jokeApi.icon_url + "' id='icon'><div class='text'>" + jokeApi.value + "</div></div>";

    (document.getElementById("text") as HTMLImageElement).innerHTML = element + (document.getElementById("text") as HTMLImageElement).innerHTML;
}

main();