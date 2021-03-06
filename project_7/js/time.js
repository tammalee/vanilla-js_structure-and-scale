/*
* The Constructor object
* @params {array} args The initial date
*/
function Time(date = []) {
    if (!Array.isArray(date)) {
        date = [date];
    }
    this.date = new Date(...date); 
}

/**
 * Returns the day of the week as a string
*/
Time.prototype.getDay = function() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[this.date.getDay()];
}

/**
 * Returns the month as a string
 */
Time.prototype.getMonth = function() {
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthsOfYear[this.date.getMonth()];
}

/**
 * Adds an amount as seconds to a passed date
 * @param {int} amount The amount of seconds to add
 */
Time.prototype.addSeconds = function(amount) {
    this.date.setSeconds(this.date.getSeconds() + parseInt(amount));
    return this;
}

/**
 * Adds an amount as minutes to a passed date
 * @param {int} amount The amount of minutes to add
 */
Time.prototype.addMinutes = function(amount) {
    this.date.setMinutes(this.date.getMinutes() + parseInt(amount));
    return this;
}

/**
 * Adds an amount as hours to a passed date
 * @param {int} amount The amount of hours to add
 */
Time.prototype.addHours = function(amount) {
    this.date.setHours(this.date.getHours() + parseInt(amount));
    return this;
}

/**
 * Adds an amount as days to a passed date
 * @param {int} amount The amount of days to add
 */
Time.prototype.addDays = function(amount) {
    this.date.setDate(this.date.getDate() + parseInt(amount));
    return this;
}

/**
 * Adds an amount as months to a passed date
 * @param {int} amount The amount of months to add
 */
Time.prototype.addMonths = function(amount) {
    this.date.setMonth(this.date.getMonth() + parseInt(amount));
    return this;
}

/**
 * Adds an amount as years to a passed date
 * @param {int} amount The amount of years to add
 */
Time.prototype.addYears = function(amount) {
    this.date.setFullYear(this.date.getFullYear() + parseInt(amount));
    return this;
}

export default Time;