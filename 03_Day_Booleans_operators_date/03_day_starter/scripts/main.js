// this is your main.js script
//1
let firstName = 'Francesco'
let lastName = 'Luppi'
let country = 'Italy'
let city = 'Mirandola'
let age = 24
let isMarried = false
console.log('First Name: ' + typeof firstName)
console.log('Last Name: ' + typeof lastName)
console.log('Country: ' + typeof country)
console.log('City: ' + typeof city)
console.log('Age: ' + typeof age)
console.log('Are you married? ' + typeof isMarried)
//2
console.log('Is \'10\' equal to 10 : ' + (typeof '10' === typeof 10))
//3
console.log('Is parseInt(\'9.8\') equal to 10 : ' + (parseInt('9.8') === 10))
//4
console.log(-3)
console.log(true)
console.log('true')
console.log(false)
console.log('')
console.log(undefined)
//5
console.log(4 > 3) // true
console.log(4 >= 3) // false --> ho sbagliato
console.log(4 < 3) // false
console.log(4 <= 3) // false
console.log(4 == 4) // true
console.log(4 === 4) // true
console.log(4 != 4) // false
console.log(4 !== 4) // false
console.log(4 != '4') // true  --> ho sbagliato
console.log(4 == '4') // true
console.log(4 === '4') // false
console.log('python'.length)
console.log('jargon'.length)
console.log('python' === 'jargon')
//6
console.log(4 > 3 && 10 < 12) // true
console.log(4 > 3 && 10 > 12) // false
console.log(4 > 3 || 10 < 12) // true
console.log(4 > 3 || 10 > 12) // true
console.log(!(4 > 3)) // false
console.log(!(4 < 3)) // true
console.log(!(false)) // true
console.log(!(4 > 3 && 10 < 12)) // false
console.log(!(4 > 3 && 10 > 12)) // true
console.log(!(4 === '4')) // true
console.log('python'.includes('on') != 'dragon'.includes('on'))
//7
let thisIsANewDay = new Date()
console.log(thisIsANewDay.getFullYear())
console.log(thisIsANewDay.getMonth() + 1)
console.log(thisIsANewDay.getDate())
console.log(thisIsANewDay.getDay())
console.log(thisIsANewDay.getHours())
console.log(thisIsANewDay.getMinutes())
console.log(thisIsANewDay.getTime())
//LVL 2
//1
let base = prompt('Enter base');
let height = prompt('Enter height');
let area = 0.5 * base * height;
console.log('The area of the triangle is: ' + area)
//2
let A = prompt('Enter side A')
let B = prompt('Enter side B')
let C = prompt('Enter side C')
let perimeter = a + b + c
console.log('The perimeter is: ' + perimeter)
//3
let length = prompt('Enter length')
let width = prompt('Enter width')
let areaRec = length * width
console.log('The Area of the rectangle is ' + areaRec)
//4
let pi = 3.14
let radius = prompt('I need the radius of that circle!')
let areaCirc = pi * radius ** 2
console.log('The area is ' + areaCirc)
let circu = pi * 2 * radius
console.log('The circumference is ' + circu)
//5 - Calculate the slope, x-intercept and y-intercept of y = 2x -2

//6 (m = y2-y1/x2-x1)

//7 Compare them

//8
let x = -3
let y = x ** 2 + 6 * x + 9
console.log(y)
//9
let hours = prompt('Insert Hours worked')
let payPerH = prompt('Insert Pay per Hour')
console.log('Your weekly earning is: ' + (hours * payPerH))
//10
'Francesco'.length > 7 ? console.log('My name is long, and somenthing else is too') : console.log('My name is short')
//11
'Francesco'.length > 'Luppi'.length ? console.log('My first name is longer than my family name') : console.log('My first name is not longer than my family name')
//12
let myAge = 250
let yourAge = 25
myAge > yourAge ? console.log('I am ' + (myAge - yourAge) + ' older than you') : ('You are ' + (yourAge - myAge) + ' older than me')
//13
let birthYear = prompt('Enter birth year:')
let newDate = new Date()
let yearNow = newDate.getFullYear()
let ageNow = yearNow - birthYear
ageNow > 18 ? console.log('You are ' + ageNow + '. You are old enough to drive ') : console.log('You are ' + ageNow + '. You will be allowed to drive after ' + (18 - ageNow) + ' years')
//14
let yourYears = prompt('How old are you?')
console.log('You lived ' + (yourYears * 31556952) + ' seconds')
//15
let dateReadable = new Date()
console.log(dateReadable.getFullYear() + '-' + (dateReadable.getMonth() + 1) + '-' + dateReadable.getDate() + ' ' + dateReadable.getHours() + ':' + dateReadable.getMinutes())
console.log(dateReadable.getDate() + '-' + (dateReadable.getMonth() + 1) + '-' + dateReadable.getFullYear() + ' ' + dateReadable.getHours() + ':' + dateReadable.getMinutes())
console.log(dateReadable.getDate() + '/' + (dateReadable.getMonth() + 1) + '/' + dateReadable.getFullYear() + ' ' + dateReadable.getHours() + ':' + dateReadable.getMinutes())
//LVL 3
//1
let readDate = new Date()
console.log(readDate.getFullYear() + '-' + ((readDate.getMonth() + 1) >= 10 ? readDate.getMonth() + 1 : ('0' + readDate.getMonth() + 1)) + '-' + ((readDate.getDate()) >= 10 ? readDate.getDate() : ('0' + readDate.getDate())) + ' ' + ((readDate.getHours()) >= 10 ? readDate.getHours() : ('0' + readDate.getHours())) + ':' + ((readDate.getMinutes()) >= 10 ? readDate.getMinutes() : ('0' + readDate.getMinutes())))