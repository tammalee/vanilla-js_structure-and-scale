import Time from './time.js';

// Create a new Time() instance
let halloween = new Time('October 31, 2021');

// This should also work
let halloween2 = new Time([2021, 9, 31]);
console.log('halloween2: ', halloween2.date);

// Get the date object
let date = halloween.date;
console.log('halloween: ',date)

// returns "Sunday"
let day = halloween.getDay();
console.log(day);

// returns "October"
let month = halloween.getMonth();
console.log(month);

// Add some time
halloween.addDays(3).addMonths(1).addYears(5);

// returns "Thursday"
let newDay = halloween.getDay();
console.log(newDay);

// returns "December"
let newMonth = halloween.getMonth();
console.log(newMonth);