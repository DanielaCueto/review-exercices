'use strict';
const schedule = [
    ['Kahoot', 'Pair programming'],
    ['Kahoot', 'Project'],
    ['Pair programming', 'Kahoot'],
    ['Agile', 'Interviews'],
    ['Project', 'Beers']
  ];
  
  for (let day = 0; day < schedule.length; day++) {
    for (let hour = 0; hour < schedule[day].length; hour += 1) {
      console.log(`On day ${day} at hour ${hour} we have ${schedule[day][hour]}`);
    }
  }