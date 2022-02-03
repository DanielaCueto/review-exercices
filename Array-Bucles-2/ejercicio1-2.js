'use strict'

/* ejercicio 1: Vamos a crear una función get100Numbers que devuelve un array con los números del 1 al 100. Como no nos apetece tener que escribir 100 números a mano, usaremos un bucle y el método push para ir guardándolos. Para comprobar que los tenemos todos, vamos a ejecutar la función y loguearlos (con console.log) uno a uno en la consola en orden.*/

/*function get100Number (){
    const array100 = []; 
    for(let i= 1; i <= 100; i++ ){
        array100.push(i)
    }
   return array100; 
}
console.log(get100Number());*/



function get100Number (){
    const array100 = []; 
    for(let i= 100; i >= 1; i-- ){
        if(i % 2 === 0){
        array100.push(i)}
    }
   return array100; 
}
console.log(get100Number());


// Ejercicio 2:  Crear una nueva función que llame a la función get100Number() para obtener los 100 números y los cambie de orden. 

function get100Number (){
    const array100 = []; 
    for(let i= 1; i <= 100; i++ ){
        array100.push(i)
    }
   return array100; 
}
//console.log(get100Number());

function getReversed100Numbers (){
    const reversedNumbers = get100Number(); 
    return reversedNumbers.reverse();
}
console.log(getReversed100Numbers());