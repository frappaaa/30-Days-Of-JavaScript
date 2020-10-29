console.log(countries)
console.log('Open the console and check if the countries has been loaded')
//LVL1
//1
function FullName() {
    console.log('Francesco Luppi')
}
FullName()
//2
function fullName(firstName, lastName) {
    console.log(firstName + ' ' + lastName)
}
fullName('Francesco', 'Luppi')
//3
function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    console.log(sum)
}
sumTwoNumbers(10, 20)
//4
function areaOfRectangle(length, width) {
    let area = length * width
    return area
}
console.log(areaOfRectangle(10, 5))
//5
function perimeterOfRectangle(length, width) {
    let perimeter = 2 * (length + width)
    return perimeter
}
console.log(perimeterOfRectangle(10, 5))
//6
function volumeOfRectPrism(length, width, height) {
    let volume = length * width * height
    return volume
}
console.log(volumeOfRectPrism(10, 5, 3))
//7
function areaOfCircle(radius) {
    let areaCircle = Math.PI * radius * radius
    return areaCircle
}
console.log(areaOfCircle(10))
//8
function circumOfCircle(radius) {
    let circum = 2 * Math.PI * radius
    return circum
}
console.log(circumOfCircle(10))
//9
function density(mass, volume) {
    let den = mass / volume
    return den
}
console.log(density(10, 5))
//10
function speed(distance, time) {
    let spe = distance / time
    return spe
}
console.log(speed(10, 5))
//11
function weight(mass, gravity) {
    let wei = mass / gravity
    return wei
}
console.log(weight(10, 5))
//12
function convertCelciusToFahrenheit(C) {
    let F = (C * 9 / 5) + 32
    return F
}
console.log(convertCelciusToFahrenheit(24))
//13
function bmi(weight, height) {
    let BMI = weight / (height ** 2)
    if (BMI < 18.5) {
        console.log('This person is UNDERWEIGHT')
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        console.log('This person is NORMAL WEIGHT')
    } else if (BMI >= 25 && BMI <= 29.9) {
        console.log('This person is OVERWEIGHT')
    } else {
        console.log('This person is OBESE')
    }
}
bmi(70, 180)
//14
function checkSeason(month) {
    month = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase()
    if (month == 'September' || month == 'October' || month == 'November') {
        console.log('The season is Autumn')
    } else if (month == 'December' || month == 'January' || month == 'February') {
        console.log('The season is Winter')
    } else if (month == 'March' || month == 'April' || month == 'May') {
        console.log('The season is Spring')
    } else if (month == 'June' || month == 'July' || month == 'August') {
        console.log('The season is Summer')
    }
}
checkSeason('FebrUary')
//15
function findMax() {
    let max = 0
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i]
        }
    }
    console.log('The biggest number that you have inserted is ' + max)
}
findMax(2, 5, 0)
//LVL2
//1 - da controllare
function solveLinEquation(a, b, c) {
    let x = (-b - c) / a
    return x
}
console.log(solveLinEquation(2, 4, 5))
//2 - da controllare
function solveQuadEquation(a, b, c) {
    let x = (-b - c) / a
    return x
}
console.log(solveQuadEquation(2, 4, 5))
//3
let arrToBePrinted = [1, 2, 3, 4, 5]
function printArray(array) {
    for (const item of array) {
        console.log(item)
    }
}
printArray(arrToBePrinted)
//4
function showDateTime() {
    let date = new Date()
    console.log(date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ' ' + date.getHours() > 10 ? date.getHours() : '0' + date.getHours() + ':' + date.getMinutes() > 10 ? date.getMinutes() : '0' + date.getMinutes())
}
showDateTime()
//5
function swapValues(x, y) {
    let swap = x
    x = y
    y = swap
    console.log('x => ' + x + ', y => ' + y)
}
swapValues(3, 4)
//6
function reverseArray(array) {
    let arrayRev = []
    for (let i = array.length - 1; i >= 0; i--) {
        arrayRev.push(array[i])
    }
    return arrayRev
}
console.log(reverseArray([1, 2, 3, 4, 5]))
//7
function capitalizeArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase()
    }
    return array
}
console.log(capitalizeArray(['ciAo', 'baRCeLLONA', 'Tokyo', 'francesco']))
//8
function addItem(array, item) {
    array.push(item)
    return array
}
console.log(addItem(['ciAo', 'baRCeLLONA', 'Tokyo', 'francesco'], 'sette'))
//9
const removeItem = (arr, index) => {
    arr.splice(index, 1)
    console.log(arr)
}
removeItem()
//10
function sumOfNumbers() {
    let sumOf = 0
    for (const number of arguments) {
        sumOf += number
    }
    return sumOf
}
sumOfNumbers(1, 4, 10)
//11
const sumOfOdds = (a, b) => {
    let sumOdds = 0
    if (a > b) {
        let c = a
        b = a
        a = c
    }
    for (let i = a; i <= b; i++) {
        if (i % 2 != 0) {
            sumOdds += i
            console.log(i)
        }
    }
    return sumOdds
}
sumOfOdds(10, 20)
//12
//11
const sumOfEvem = (a, b) => {
    let sumEven = 0
    if (a > b) {
        let c = a
        b = a
        a = c
    }
    for (let i = a; i <= b; i++) {
        if (i % 2 == 0) {
            sumEven += i
            console.log(i)
        }
    }
    return sumEven
}
sumOfEvem(10, 20)
//13
function evensAndOdds(integer) {
    let numberEvens = 0
    let numberOdds = 0
    for (let i = 0; i <= integer; i++) {
        if (i % 2 == 0) {
            numberEvens++
        } else {
            numberOdds++
        }
    }
    console.log('The number of odds are ' + numberOdds)
    console.log('The number of evens are ' + numberEvens)
}
evensAndOdds(100)
//14
function evensAndOdds() {
    let sumOfArg = 0
    for (const number of arguments) {
        sumOfArg += number
    }
    return sumOfArg
}
evensAndOdds(1, 2, 3)
//15
function randomUserIp() {
    console.log(Math.floor(Math.random() * 256) + ':' + Math.floor(Math.random() * 256) + ':' + Math.floor(Math.random() * 256) + ':' + Math.floor(Math.random() * 256))
}
randomUserIp()
//16