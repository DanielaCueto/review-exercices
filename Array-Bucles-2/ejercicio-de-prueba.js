"use strict";
//Crear una función que me devuelva dos arrays:
//1er array:  con los elementos que estén en posición par.
//2do array: con los elementos que esten en posición inpar.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function newArrays() {
  let even = [];
  let odd = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      even.push(array[i]);
    } else {
      odd.push(array[i]);
    }
  }
  return [even, odd] ; 
}

console.log(newArrays());

//Crear una función que recibe dos arrays y que cuando es llamada, devuelve un solo array que combina elementos de los dos arrats que recibió. 

const animals = ['perro', 'gato', 'conejo', 'urón']
const colors = ['blanco', 'negro', 'rosa', 'rojo']


function zip (array1, array2){
 let outputArray = []; 
 for (let i = 0; i < array1.length; i++){
   outputArray.push(array1[i]); 
   outputArray.push(array2[i]); 
 }
 return outputArray; 
 

}
console.log(zip(animals, colors));
