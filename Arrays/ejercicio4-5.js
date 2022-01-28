"use strict";

//4to ejercicio: Crear un código que muestre cuándo serán las 15 próximas lunas

/*let lastMoonHunter = 2020; 
for(let i = 0; i < 15; i ++){
    lastMoonHunter = lastMoonHunter + 3; 
    console.log(lastMoonHunter);
}*/

//5to ejercicio: sacar la media de 5 números decididos por mí.

let numbers = [1, 3, 7, 4, 2];
numbers[5] = 8;

let newArray = [3, 5, 7, 4, 3, 2, 9];


// esta función te devuelve la media del array que le pases. 
function average(numbers) {

  let acc = 0;
  for (let i = 0; i < numbers.length; i++) {
    acc += numbers[i];
  }
  return acc /numbers.length
  
}
console.log(average([5, 5, 5 , 5, 5]));