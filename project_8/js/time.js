/*
* The Constructor object
* @params {array} args The initial date
*/
function Time(date = [], options = {}) {
    if (!Array.isArray(date)) {
        date = [date];
    }
    // Combine user options and default settings
	let settings = Object.assign({
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	}, options);

	// Freeze settings so that they cannot be modified
	Object.freeze(settings);

	// Define instance properties
	Object.defineProperties(this, {
		date: {value: new Date(...date)},
		_settings: {value: settings}
    });
}

/**
 * Returns the day of the week as a string
*/
Time.prototype.getDay = function() {
    return this._settings.days[this.date.getDay()];
}

/**
 * Returns the month as a string
 */
Time.prototype.getMonth = function() {
    return this._settings.months[this.date.getMonth()];
}

/**
 * Adds an amount as seconds to a passed date
 * @param {int} amount The amount of seconds to add
 */
Time.prototype.addSeconds = function(amount) {
    const newDate = new Date(this.date).setSeconds(this.date.getSeconds() + parseInt(amount));
    return new Time(newDate, this._settings);
}

/**
 * Adds an amount as minutes to a passed date
 * @param {int} amount The amount of minutes to add
 */
Time.prototype.addMinutes = function(amount) {
    const newDate = new Date(this.date).setMinutes(this.date.getMinutes() + parseInt(amount));
    return new Time(newDate, this._settings);
}

/**
 * Adds an amount as hours to a passed date
 * @param {int} amount The amount of hours to add
 */
Time.prototype.addHours = function(amount) {
    const newDate = new Date(this.date).setHours(this.date.getHours() + parseInt(amount));
    return new Time(newDate, this._settings);
}

/**
 * Adds an amount as days to a passed date
 * @param {int} amount The amount of days to add
 */
Time.prototype.addDays = function(amount) {
    const newDate = new Date(this.date).setDate(this.date.getDate() + parseInt(amount));
    return new Time(newDate, this._settings);
}

/**
 * Adds an amount as months to a passed date
 * @param {int} amount The amount of months to add
 */
Time.prototype.addMonths = function(amount) {
    const newDate = new Date(this.date).setMonth(this.date.getMonth() + parseInt(amount));
    return new Time(newDate, this._settings);
}

/**
 * Adds an amount as years to a passed date
 * @param {int} amount The amount of years to add
 */
Time.prototype.addYears = function(amount) {
    const newDate = new Date(this.date).setFullYear(this.date.getFullYear() + parseInt(amount));
    return new Time(newDate, this._settings);
}

export default Time;