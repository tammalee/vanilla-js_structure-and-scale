/**
 * Emit a custom event
 * @param  {String} type   The event type
 * @param  {Object} detail Any details to pass along with the event
 * @param  {Node}   elem   The element to attach the event to
 */
function emitEvent (type, detail = {}, elem = document) {

	// Make sure there's an event type
	if (!type) return;

	// Create a new event
	let event = new CustomEvent(type, {
		bubbles: true,
		cancelable: true,
		detail: detail
	});

	// Dispatch the event
	return elem.dispatchEvent(event);

}

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
Time.prototype.addSeconds = function (amount) {
    const newDate = new Date(this.date).setSeconds(this.date.getSeconds() + parseInt(amount));
    const newTime = new Time(newDate, this._settings);
    const cancelled = !emitEvent('time:update', { time: newTime, type: 'seconds', amount });
    if (cancelled) return new Time(this.date, this._settings);
    return newTime;
}

/**
 * Adds an amount as minutes to a passed date
 * @param {int} amount The amount of minutes to add
 */
Time.prototype.addMinutes = function(amount) {
    const newDate = new Date(this.date).setMinutes(this.date.getMinutes() + parseInt(amount));
    const newTime = new Time(newDate, this._settings);
    const cancelled = !emitEvent('time:update', { time: newTime, type: 'minutes', amount });
    if (cancelled) return new Time(this.date, this._settings);
    return newTime;
}

/**
 * Adds an amount as hours to a passed date
 * @param {int} amount The amount of hours to add
 */
Time.prototype.addHours = function(amount) {
    const newDate = new Date(this.date).setHours(this.date.getHours() + parseInt(amount));
    const newTime = new Time(newDate, this._settings);
    const cancelled = !emitEvent('time:update', { time: newTime, type: 'hours', amount });
    if (cancelled) return new Time(this.date, this._settings);
    return newTime;
}

/**
 * Adds an amount as days to a passed date
 * @param {int} amount The amount of days to add
 */
Time.prototype.addDays = function(amount) {
    const newDate = new Date(this.date).setDate(this.date.getDate() + parseInt(amount));
    const newTime = new Time(newDate, this._settings);
    const cancelled = !emitEvent('time:update', { time: newTime, type: 'days', amount });
    if (cancelled) return new Time(this.date, this._settings);
    return newTime;
}

/**
 * Adds an amount as months to a passed date
 * @param {int} amount The amount of months to add
 */
Time.prototype.addMonths = function(amount) {
    const newDate = new Date(this.date).setMonth(this.date.getMonth() + parseInt(amount));
    const newTime = new Time(newDate, this._settings);
    const cancelled = !emitEvent('time:update', { time: newTime, type: 'months', amount });
    if (cancelled) return new Time(this.date, this._settings);
    return newTime;
}

/**
 * Adds an amount as years to a passed date
 * @param {int} amount The amount of years to add
 */
Time.prototype.addYears = function(amount) {
    const newDate = new Date(this.date).setFullYear(this.date.getFullYear() + parseInt(amount));
    const newTime = new Time(newDate, this._settings);
    const cancelled = !emitEvent('time:update', { time: newTime, type: 'years', amount });
    if (cancelled) return new Time(this.date, this._settings);
    return newTime;
}

export default Time;