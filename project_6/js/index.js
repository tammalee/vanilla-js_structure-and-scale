import * as _ from "./time.js";

// Create a Date() object for halloween
let halloween = new Date('October 31, 2021');
console.log(halloween);
// returns "Sunday"
let day = _.getDay(halloween);
console.log(day);
// returns "October"
let month = _.getMonth(halloween);
console.log(month);

// Add 4 months to the date
_.addMonths(halloween, 4);
console.log(halloween);

// Add 30 seconds to the date
_.addSeconds(halloween, 30);
console.log(halloween);

// Add 30 minutes to the date
_.addMinutes(halloween, 30);
console.log(halloween);

// Add 12 hours to the date
_.addHours(halloween, 12);
console.log(halloween);

// Add 12 minutes to the date
_.addDays(halloween, 5);
console.log(halloween);

// Add 2 years to the date
_.addYears(halloween, 2);
console.log(halloween);