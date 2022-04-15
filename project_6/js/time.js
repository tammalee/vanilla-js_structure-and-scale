/**
 * Returns the day of the week as a string
 * @param {Date} date The date to get the day of the week from
*/
function getDay(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[date.getDay()];
}

/**
 * Returns the month as a string
 * @param {Date} date The date to get the month from
 */
function getMonth(date) {
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthsOfYear[date.getMonth()];
}

/**
 * Adds an amount as seconds to a passed date
 * @param {Date} date The date to add seconds to
 * @param {int} amount The amount of seconds to add
 */
function addSeconds(date, amount) {
    date.setSeconds(date.getSeconds() + parseInt(amount));
}

/**
 * Adds an amount as minutes to a passed date
 * @param {Date} date The date to add minutes to
 * @param {int} amount The amount of minutes to add
 */
function addMinutes(date, amount) {
    date.setMinutes(date.getMinutes() + parseInt(amount));
}

/**
 * Adds an amount as hours to a passed date
 * @param {Date} date The date to add hours to
 * @param {int} amount The amount of hours to add
 */
function addHours(date, amount) {
    date.setHours(date.getHours() + parseInt(amount));
}

/**
 * Adds an amount as days to a passed date
 * @param {Date} date The date to add days to
 * @param {int} amount The amount of days to add
 */
function addDays(date, amount) {
    date.setDate(date.getDate() + parseInt(amount));
}

/**
 * Adds an amount as months to a passed date
 * @param {Date} date The date to add months to
 * @param {int} amount The amount of months to add
 */
function addMonths(date, amount) {
    date.setMonth(date.getMonth() + parseInt(amount));
}

/**
 * Adds an amount as years to a passed date
 * @param {Date} date The date to add years to
 * @param {int} amount The amount of years to add
 */
function addYears(date, amount) {
    date.setFullYear(date.getFullYear() +  parseInt(amount));
}

export { getDay, getMonth, addMonths, addSeconds, addMinutes, addHours, addDays, addYears }