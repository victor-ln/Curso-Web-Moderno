const schedule = require('node-schedule')

/**
 * - A number in the specified range. To run a command in May, 
 * specify 5 in the month field.
 * 
 * - Two numbers separated by a dash to indicate an inclusive range. To run a 
 * cron job on Tuesday through Friday, place 2-5 in the weekday field.
 * 
 * - A list of numbers separated by commas. To run a command on the first and last 
 * day of January, you would specify 1,31 in the day_of_month field.
 * 
 * - A combination of two numbers separated by a dash to indicate an inclusive 
 * range and a list of numbers separated by commas can be used in conjunction. 
 * To run a command on the first, tenth to sixteenth and last day of January, 
 * you would specify 1,10-16,31 in the day_of_month field. 
 * The above two points can also be used in combination.
 * 
 * - An * (asterisk), meaning all allowed values. To run a job every hour, 
 * specify an asterisk in the hour field.
 */
const task1 = schedule.scheduleJob('*/5 * 12-18 * * 3,4,5', () => {
    console.log('Executing task 1', (new Date).getSeconds())
})

const rule = new schedule.RecurrenceRule;

rule.dayOfWeek = new schedule.Range(1, 5)
rule.hour = 12
rule.second = 30

const task2 = schedule.scheduleJob(rule, () => {
    console.log('Executing task 2', (new Date).getSeconds())
})

setTimeout(() => {
    task1.cancel()
    console.log('Stopping task 1')
}, 20000)

setTimeout(() => {
    task2.cancel()
    console.log('Stopping task 2')
}, 60000)
