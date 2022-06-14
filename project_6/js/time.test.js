import * as _ from "./time.js"

const halloween = new Date('October 31, 2021');

test('Gets the correct day for a date', () => {
    expect(_.getDay(halloween)).toBe('Sunday')
})

test('Gets the correct month for a date', () => {
    expect(_.getMonth(halloween)).toBe('October')
})

test('Adds 30 seconds to a date/time', () => {
    _.addSeconds(halloween, 30)
    expect(halloween.getSeconds()).toBe(30)
})

test('Adds 30 minutes to a date/time', () => {
    _.addMinutes(halloween, 30)
    expect(halloween.getMinutes()).toBe(30)
})

test('Adds 3 hours to a date/time', () => {
    _.addHours(halloween, 3)
    expect(halloween.getHours()).toBe(3)
})

test('Adds 3 days to a date', () => {
    _.addDays(halloween, 3)
    expect(halloween.getDate()).toBe(3)
})

test('Adds 3 months to a date', () => {
    _.addMonths(halloween, 3)
    expect(halloween.getMonth()).toBe(1)
})

test('Adds 3 years to a date', () => {
    _.addYears(halloween, 3)
    expect(halloween.getFullYear()).toBe(2025)
})

