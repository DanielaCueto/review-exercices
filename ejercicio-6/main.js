'use strict';
const inputs = document.querySelectorAll('input'); 
const button = document.querySelector('.button');

function formSubmitted(){
    let movies = []; 
    for(let input of inputs){
        const movie = input.value; 
        movies.push(movie);
    }
    for(let movie of movies){
        console.log(`¡A mi también me encanto ${movie}! tenemos mucho en común humana`);
    }
}

button.addEventListener('click', formSubmitted)
