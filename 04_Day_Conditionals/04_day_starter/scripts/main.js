// this is your main.js script
//LVL 1
//1
let yourAge = prompt('Enter your age:');
alert((yourAge >= 18) ? 'You are old enough to drive' : 'You need to wait ' + (18 - yourAge) + ' year(s) to drive')
//2
let yourAgeU = 35
let myAge = prompt('Enter my age')
if (yourAge > myAge) {
    alert('You are ' + (yourAge - myAge) + ' year(s) older than me')
} else {
    alert('I am ' + (myAge - yourAge) + ' year(s) older than you')
}
//3
let a = 4
let b = 3
if (a > b) {
    console.log(a + ' is greater than ' + b)
} else {
    console.log(a + ' is less than ' + b)
}
console.log((a > b) ? a + ' is greater than ' + b : a + ' is less than ' + b)
//4
let aNumber = prompt('Enter a number to check if it is even or odd:')
console.log((aNumber % 2 == 0) ? aNumber + ' is an even number.' : aNumber + 'is an odd number.')
//LVL 2
//1
let score = prompt('Enter your score and I\'ll tell you your grade:')
if (score < 100 && score > 90) {
    console.log('Your grade is A')
} else if (score < 89 && score > 70) {
    console.log('Your grade is B')
} else if (score < 69 && score > 60) {
    console.log('Your grade is C')
} else if (score < 59 && score > 50) {
    console.log('Your grade is D')
} else if (score < 49 && score > 0) {
    console.log('Your grade is F')
}

//2
let month = prompt('Tell me the month and I\'ll tell you the season')
if (month == 'September' || month == 'October' || month == 'November') {
    console.log('The season is Autumn')
} else if (month == 'December' || month == 'January' || month == 'February') {
    console.log('The season is Winter')
} else if (month == 'March' || month == 'April' || month == 'May') {
    console.log('The season is Spring')
} else if (month == 'June' || month == 'July' || month == 'August') {
    console.log('The season is Summer')
}
//3
let day = prompt('Tell me the day')
day = day.charAt(0).toUpperCase() + day.slice(1).toLowerCase()
switch (day) {
    case 'Monday':
        console.log(day + ' is a working day')
        break;
    case 'Tuesday':
        console.log(day + ' is a working day')
        break;
    case 'Wednesday':
        console.log(day + ' is a working day')
        break;
    case 'Thursday':
        console.log(day + ' is a working day')
        break;
    case 'Friday':
        console.log(day + ' is a working day')
        break;
    case 'Saturday':
        console.log(day + ' is a weekday')
        break;
    case 'Sunday':
        console.log(day + ' is a weekday')
        break;
    default:
        console.log('I don\'t recognize it as a day of the week!')
        break;
}
//LVL 3
//1
let days = prompt('Tell me the month')
days = days.charAt(0).toUpperCase() + days.slice(1).toLowerCase()
switch (days) {
    case 'January':
        console.log(days + ' has 31 days')
        break;
    case 'February':
        console.log(days + ' has 28 days')
        break;
    case 'March':
        console.log(days + ' has 31 days')
        break;
    case 'April':
        console.log(days + ' has 30 days')
        break;
    case 'May':
        console.log(days + ' has 31 days')
        break;
    case 'June':
        console.log(days + ' has 30 days')
        break;
    case 'July':
        console.log(days + ' has 31 days')
        break;
    case 'August':
        console.log(days + ' has 31 days')
        break;
    case 'September':
        console.log(days + ' has 30 days')
        break;
    case 'October':
        console.log(days + ' has 31 days')
        break;
    case 'November':
        console.log(days + ' has 30 days')
        break;
    case 'December':
        console.log(days + ' has 31 days')
        break;
    default:
        console.log('I don\'t recognize it as a month of the year!')
        break;
}
//2
let days = prompt('Tell me the month')
days = days.charAt(0).toUpperCase() + days.slice(1).toLowerCase()
let leapYear = new Date().getFullYear()
let isLeapYear
if (((leapYear % 4 == 0) && (leapYear % 100 != 0)) || (leapYear % 400 == 0)) {
    isLeapYear = true
} else {
    isLeapYear = false
}
switch (days) {
    case 'January':
        console.log(days + ' has 31 days')
        break;
    case 'February':
        console.log(days + ' has ' + ((isLeapYear) ? '29' : '28') + ' days')
        break;
    case 'March':
        console.log(days + ' has 31 days')
        break;
    case 'April':
        console.log(days + ' has 30 days')
        break;
    case 'May':
        console.log(days + ' has 31 days')
        break;
    case 'June':
        console.log(days + ' has 30 days')
        break;
    case 'July':
        console.log(days + ' has 31 days')
        break;
    case 'August':
        console.log(days + ' has 31 days')
        break;
    case 'September':
        console.log(days + ' has 30 days')
        break;
    case 'October':
        console.log(days + ' has 31 days')
        break;
    case 'November':
        console.log(days + ' has 30 days')
        break;
    case 'December':
        console.log(days + ' has 31 days')
        break;
    default:
        console.log('I don\'t recognize it as a month of the year!')
        break;
}