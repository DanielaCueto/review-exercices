'use strict'; 
const body = document.querySelector('body');
const buttons = document.querySelectorAll('button')
console.log(buttons.length);

function changeClass(){

  body.classList.toggle('newBackGround');  
}

/*for (let i = 0; i< buttons.length; i++){
    buttons[i].addEventListener('click', changeClass);
}*/

for (let button of buttons){
    button.addEventListener('click', changeClass); 
}
