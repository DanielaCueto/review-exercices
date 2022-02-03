'use strict'; 

//ejercicio 3: Crear una función que devuelva algunos números del array de "Los números de la serie Lost" 

const lostNumbers = [4, 8, 15, 16, 23, 42]; 

function bestLostNumber(lostNumbers){
    let evenLostNumbers = [];
    let oddLostNumbers = [];
    for(let lostNumber of lostNumbers){
        if(lostNumber %2 === 0){
            evenLostNumbers.push(lostNumber)
        }else if(lostNumber % 3 === 0){
            oddLostNumbers.push(lostNumber);
        }
    }
    //const resultOfConcat =  evenLostNumbers.concat(oddLostNumbers);
    return {evenLostNumbers, oddLostNumbers}; 
}

const {evenLostNumbers, oddLostNumbers} = bestLostNumber(lostNumbers)
console.log(evenLostNumbers)
console.log(oddLostNumbers)