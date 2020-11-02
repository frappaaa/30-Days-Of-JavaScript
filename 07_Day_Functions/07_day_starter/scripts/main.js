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
//2
function solveQuadEquation(a, b, c) {
    // program to solve quadratic equation
    let root1, root2;

    // take input from the user
    //let a = prompt("Enter the first number: ");
    //let b = prompt("Enter the second number: ");
    //let c = prompt("Enter the third number: ");

    // calculate discriminant
    let discriminant = b * b - 4 * a * c;

    // condition for real and different roots
    if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        // result
        console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
    }

    // condition for real and equal roots
    else if (discriminant == 0) {
        root1 = root2 = -b / (2 * a);

        // result
        console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
    }

    // if roots are not real
    else {
        let realPart = (-b / (2 * a)).toFixed(2);
        let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

        // result
        console.log(
            `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
        );
    }
}
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
let hex = Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C', 'D', 'E', 'F')
function randomMacIp() {
    return macIp = hex[Math.floor(Math.random() * 22)] + '' + hex[Math.floor(Math.random() * 22)] + ':' + hex[Math.floor(Math.random() * 22)] + '' + hex[Math.floor(Math.random() * 22)] + ':' + hex[Math.floor(Math.random() * 22)] + '' + hex[Math.floor(Math.random() * 22)] + ':' + hex[Math.floor(Math.random() * 22)] + '' + hex[Math.floor(Math.random() * 22)]
}
randomMacIp()
//17
function randomHexaNumberGenerator() {
    return colorHex = '#' + hex[Math.floor(Math.random() * 22)] + '' + hex[Math.floor(Math.random() * 22)] + '' + hex[Math.floor(Math.random() * 22)] + '' + hex[Math.floor(Math.random() * 22)] + '' + hex[Math.floor(Math.random() * 22)] + '' + hex[Math.floor(Math.random() * 22)]
}
randomHexaNumberGenerator()
//18
function userIdGenerator() {
    let iD = ''
    for (let i = 0; i < 7; i++) {
        iD += hex[Math.floor(Math.random() * 22)]
    }
    return iD
}
userIdGenerator()
//LVL3
//1
let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split('');
function userIdGeneratedByUser() {
    let numOf = prompt('Quanti caratteri deve avere l\'ID che vuoi creare?')
    let ids = prompt('Quanti ID vuoi creare?')

    for (let i = 0; i < ids; i++) {
        let id = ''
        for (let y = 0; y < numOf; y++) {
            id += alphabet[Math.floor(Math.random() * (alphabet.length + 1))]
        }
        console.log(id)
    }
}
userIdGeneratedByUser()
//2
function rgbColorGenerator() {
    console.log('rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')')
}
rgbColorGenerator()
//3
function arrayOfHexaColors(num) {
    let arrayHex = []
    for (let i = 0; i < num; i++) {
        hexCol = '#'
        for (let y = 0; y < 6; y++) {
            hexCol += hex[Math.floor(Math.random() * 22)]
        }
        arrayHex.push(hexCol)
    }
    return arrayHex
}
arrayOfHexaColors(10)
//4
function arrayOfRgbColors(num) {
    arrayRGB = []
    for (let i = 0; i < num; i++) {
        rgbCol = 'rgb('
        for (let y = 0; y < 3; y++) {
            rgbCol += Math.floor(Math.random() * 256)
            if (y < 2) {
                rgbCol += ','
            } else {
                rgbCol += ')'
            }
        }
        arrayRGB.push(rgbCol)
    }
    return arrayRGB
}
arrayOfRgbColors(10)
//5
function convertHexaToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
convertHexaToRgb('#ee4455')
//6
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function convertRgbToHexa(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

convertRgbToHexa(0, 51, 255)
//7
function generateColors(type, numOf) {
    if (type == 'hexa') {
        let arrayHex = []
        for (let i = 0; i < numOf; i++) {
            hexCol = '#'
            for (let y = 0; y < 6; y++) {
                hexCol += hex[Math.floor(Math.random() * 22)]
            }
            arrayHex.push(hexCol)
        }
        return arrayHex
    } else if (type == 'rgb') {
        arrayRGB = []
        for (let i = 0; i < numOf; i++) {
            rgbCol = 'rgb('
            for (let y = 0; y < 3; y++) {
                rgbCol += Math.floor(Math.random() * 256)
                if (y < 2) {
                    rgbCol += ','
                } else {
                    rgbCol += ')'
                }
            }
            arrayRGB.push(rgbCol)
        }
        return arrayRGB
    } else {
        console.log('Non hai inserito dei dati validi')
    }

}
generateColors('hexa', 4)
//8
function shuffleArray(array) {
    shuffled = []
    for (let i = 0; i < array.length; i++) {
        shuffled.push(array[Math.floor(Math.random() * (array.length + 1))])
    }
    return shuffled
}
shuffleArray([1, 2, 3, 4])
//9
function factorial(num) {
    fac = 1
    for (let i = num; i > 0; i--) {
        fac *= i
    }
    return fac
}
factorial(4)
//10
function isEmpty(par) {
    if (!par || par === "" || par === undefined) {
        console.log('Il parametro che hai inserito è vuoto')
    } else {
        console.log('Il parametro che hai inserito non è vuoto e il suo valore è "' + par + '"')
    }
}
let greetings
isEmpty(greetings)
isEmpty(greetings = 'ciao')
//11
function sum() {
    let Sum = 0
    for (const argument of arguments) {
        Sum += argument
    }
    return Sum
}
sum(1, 4, 6)
//12
function sumOfArrayItems(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            console.log('Tra i valori che hai inserito ci sono dei valori non numerici, controlla e riprova')
            break
        } else {
            sum += arr[i]
        }
    }
    return sum
}
sumOfArrayItems(['ciao', 1, 2, 3])
sumOfArrayItems([1, 2, 3])
sumOfArrayItems([1, 2, 3, 'ciao'])
//13
function avarage() {
    let sum = 0
    for (const arg of arguments) {
        sum += arg
    }
    av = sum / arguments.length
    return av
}
avarage(3, 5, 7)
//14
function modifyArray(arr) {
    if (arr.length >= 5) {
        arr[4] = arr[4].toUpperCase()
        return arr
    } else {
        console.log('Item not found')
    }
}
modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot'])
modifyArray(['Google', 'Facebook', 'Apple', 'Amazon'])
//15
function isPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}
isPrime(5)
//16 - da controllare
function areUnique(value, index, self) {
    return self.indexOf(value) === index;
}
areUnique([1, 2, 3, 4, 2])
areUnique([1, 2, 3, 4, 5])
//17
function sameType() {
    let a = arguments[0]
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] != typeof a) {
            console.log('Questi elementi sono diversi')
        } else {
            console.log('Questi elementi sono uguali')
        }
    }
}
sameType(3, 4, 'ciao')
//18
function isValidVariable(varia) {
    if (varia) {
        console.log('La variabile inserita non è valida')
    }
}
isValidVariable('ciao£')
//19 - non funziona
function sevenRandom() {
    let arrSeven = []
    for (let i = 0; i < 8; i++) {
        num = Math.floor(Math.random() * 10)
        if (i > 0 && !arrSeven.includes(arrSeven[i - 1])) {
            arrSeven.push(num)
        } else {
            arrSeven.push(num)
        }
    }
    return arrSeven
}
sevenRandom()
//20
function reverseCountries(countries) {
    let revCountries = []
    for (let i = countries.length; i >= 0; i--) {
        revCountries.push(countries[i])
    }
    return revCountries
}
reverseCountries(countries)