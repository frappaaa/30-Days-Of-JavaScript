console.log(countries)
console.log('Open the console and check if the countries has been loaded')
//LVL1
//1
for (let i = 0; i <= 10; i++) {
    console.log(i)
}
let y = 0
while (y <= 10) {
    console.log(y)
    y++
}
let x = 0
do {
    console.log(x)
    x++
} while (x <= 10)
//2
for (let i = 10; i >= 10; i--) {
    console.log(i)
}
let y = 10
while (y >= 0) {
    console.log(y)
    y--
}
let x = 10
do {
    console.log(x)
    x--
} while (x >= 0)
//3
let n = 5
for (let i = 0; i < n; i++) {
    console.log(i)
}
//4
let hash = ''
for (let i = 0; i < 8; i++) {
    hash += '#'
    console.log(hash + '\n')
}
//5
let tab
for (let i = 0; i <= 10; i++) {
    tab = i * i
    console.log(i + ' X ' + i + ' = ' + tab + '\n')
}
//6
let exp2, exp3
console.log('i  i^2  i^3');
for (let i = 0; i <= 10; i++) {
    exp2 = i ** 2
    exp3 = i ** 3
    console.log(i + '  ' + exp2 + ' ' + exp3 + '\n')
}
//7
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) console.log(i + '\n')
}
//8
for (let i = 0; i <= 100; i++) {
    if (i % 2 != 0) console.log(i + '\n')
}
//9 - NON RISOLTO
for (let i = 2; i <= 100; i++) {
    if (i % i == 0 && i % 1 == 0) {
        if (i % 2 == 0 || i % 3 == 0 || i % 5 == 0) {
            continue
        } else {
            console.log(i + '\n')
        }
    }
}
//10
let sumOfAll = 0
for (let i = 0; i <= 100; i++) {
    sumOfAll += i
}
console.log('The sum of all numbers from 0 to 100 is ' + sumOfAll + '.')
//11
let sumE = 0, sumO = 0, arraySum = []
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) { sumE += i }
    else { sumO += i }
}
console.log('The sum of all evens from 0 to 100 is ' + sumE + '. And the sum of all odds from 0 to 100 is ' + sumO + '.')
//12
arraySum = [sumE, sumO]
console.log(arraySum)
//13
let arrayRandom = []
for (let i = 0; i < 5; i++) {
    arrayRandom.push(Math.floor(Math.random() * 10))
}
console.log(arrayRandom)
//14
let randomArNoDbl = [], newNum
for (let i = 0; i < 5; i++) {
    newNum = Math.floor(Math.random() * 100)
    if (i == 0) {
        randomArNoDbl.push(newNum)
    } else {
        do {
            newNum = Math.floor(Math.random() * 100)
        } while (randomArNoDbl[i - 1] == newNum)
        randomArNoDbl.push(newNum)
    }
}
console.log(randomArNoDbl)
//15
let randomId = ''
var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
for (let i = 0; i < 6; i++) {
    randomId += chars[Math.floor(Math.random() * chars.length)]
}
console.log(randomId)
//LVL 2
//1
let anyRandomId = ''
let numberRandom = Math.floor(Math.random() * 100)
var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
for (let i = 0; i < numberRandom; i++) {
    anyRandomId += chars[Math.floor(Math.random() * chars.length)]
}
console.log(anyRandomId)
//2
let exaDec = ''
var chars = '0123456789ABCDEFabcdef'.split('');
for (let i = 0; i < 6; i++) {
    exaDec += chars[Math.floor(Math.random() * chars.length)]
}
console.log('#' + exaDec)
//3
let rgbNum = ''
for (let i = 0; i < 3; i++) {
    rgbNum += Math.floor(Math.random() * 255)
    if (i < 2) {
        rgbNum += ', '
    }
}
console.log('rgb(' + rgbNum + ')')
//4
let arCoun = []
const countriesNew = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
for (let i = 0; i < countriesNew.length; i++) {
    arCoun.push(countriesNew[i].toUpperCase())
}
console.log(arCoun)
//5
let arCounNum = []
for (let i = 0; i < countriesNew.length; i++) {
    arCounNum.push(countriesNew[i].length)
}
console.log(arCounNum)
//6
let arCompleto = []
for (let i = 0; i < countriesNew.length; i++) {
    arCompleto[i] += [countriesNew[i], countriesNew[i].slice(0, 3).toUpperCase(), countriesNew[i].length]
}
console.log(arCompleto)
//7
let land = []
for (let i = 0; i < countriesNew.length; i++) {
    if (countriesNew[i].includes('land')) {
        land.push(countriesNew[i])
    }
}
land.length == 0 ? console.log('All these countries are without land') : console.log(land)
//8
let ia = []
for (let i = 0; i < countriesNew.length; i++) {
    if (countriesNew[i].includes('ia')) {
        ia.push(countriesNew[i])
    }
}
ia.length == 0 ? console.log('All these countries are without ia') : console.log(ia)
//9
let bigWord = ''
let max = 0
for (let i = 0; i < countriesNew.length; i++) {
    if (countriesNew[i].length > max) {
        max = countriesNew[i].length
        bigWord = countriesNew[i]
    }
}
console.log(bigWord)
//10
let onlyFive = []
for (let i = 0; i < countriesNew.length; i++) {
    if (countriesNew[i].length == 5) {
        onlyFive.push(countriesNew[i])
    }
}
console.log(onlyFive)