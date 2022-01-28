'use strict'; 

const adalabers = [
    {
        name: 'Maria',
        age: 29,
        work: 'designer' 

    },
    {
        name: 'Lucía',
        age: 31,
        work: 'chemical engineer'
    },
    {
        name: 'Susana',
        age: 34,
        work: 'journalist' 
    }, 
    {
        name: 'Rocío',
        age: 25,
        work: 'Actress' 
    },

    {
        name: 'Inmaculada',
        age: 21,
        work: 'designer' 

    }

]

function countAdalabers (){
    const totalAdalabers = adalabers.length; 
    return totalAdalabers; 
}
console.log(countAdalabers());

function averageAge () {
    let acc = 0;
  for (let i = 0; i < adalabers.length; i++) {
    acc += adalabers[i].age;
  }
  return acc /adalabers.length
}

console.log(averageAge());

function theYoungest(){
    let youngestAdalaber = undefined; 
    for(let adalaber of adalabers){
        if(youngestAdalaber === undefined){
            youngestAdalaber = adalaber;
        }else if(adalaber.age < youngestAdalaber.age){
            youngestAdalaber = adalaber; 
        }
    }
    return youngestAdalaber.name; 
}
console.log(theYoungest());


function theOldest () {
     let oldestAdalaber = undefined; 
    for(let adalaber of adalabers){
        if(oldestAdalaber === undefined){
            oldestAdalaber = adalaber; 
        }else if(oldestAdalaber.age < adalaber.age){
            oldestAdalaber= adalaber;
        }
    }
    return oldestAdalaber; 
}
console.log(theOldest());
