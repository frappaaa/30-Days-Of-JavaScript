console.log(countries)
console.log('Open the browser console whenever you work on JavaScript')
console.log('Open the console and check if the countries has been loaded')
//LVL 1
//1
let arrayEmpty = []
let emptyArray = Array()
let arrEm = Array(3)
//2
let arrayWithFive = [0, 1, 2, 3, 4, 'Mirandola']
//3
console.log(arrayWithFive.length)
//4
console.log(arrayWithFive[0]) // first item
console.log(arrayWithFive[arrayWithFive.length - 1]) // last item
console.log(arrayWithFive[Math.floor(arrayWithFive.length / 2)])//middle item
//5
let mixedDataTypes = Array('Ciao', 34, Array('Arrivederci', 'Buongiorno'), false, 'Sidney', 23.4, 35)
console.log(mixedDataTypes.length)
//6
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
//7
console.log(itCompanies)
//8
console.log(itCompanies.length)
//9
console.log(itCompanies[0]) // first item
console.log(itCompanies[itCompanies.length - 1]) // last item
console.log(itCompanies[Math.floor(itCompanies.length / 2)])//middle item
//10
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i])
}
//11
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase())
}
//12
console.log(itCompanies.join(', ') + ' are big IT companies')
//13
let insertCompany = prompt('Check if the company is in the array:')
insertCompany = insertCompany.charAt(0).toUpperCase() + insertCompany.slice(1).toLowerCase()
if (itCompanies.includes(insertCompany)) {
    let i = itCompanies.indexOf(insertCompany)
    console.log('Here it is: ' + itCompanies[i] + ' and the index of it in the array is: ' + i)
} else {
    console.log('There is no match inside the array')
}
//14
console.log('These companies have one or lower number of \'o\'s in the name') // senza usare search()
let numOfO
for (let i = 0; i < itCompanies.length; i++) {
    for (let y = 0; y < itCompanies[i].length; y++) {
        numOfO = 0
        if (itCompanies[i][y].toLowerCase() == 'o') {
            numOfO += 1
            if (numOfO >= 2) {
                itCompanies.splice(itCompanies[i], 1)
            }
        }

    }
} // non funziona e non capisco perchè
console.log(itCompanies)
let numO
let company
for (let i = 0; i < itCompanies.length; i++) {
    company = itCompanies[i].split('')
    company = company.toLowerCase()
    numO = 0
    for (let y = 0; y < company.length; y++) {
        if (company[y] == 'o') {
            numO += 1
            if (numO >= 2) {
                itCompanies.splice(itCompanies[i], 1)
            }
        }
    }

}
console.log(itCompanies)
console.log('These companies have one or lower number of \'o\'s in the name') // con search()
let numOfO1
for (let i = 0; i < itCompanies.length; i++) {
    numOfO1 = itCompanies[i].search('o')
    if (numOfO1 >= 2) {
        itCompanies.splice(itCompanies[i], 1)
    }
    numOfO1 = 0
}
console.log(itCompanies)
//15
console.log(itCompanies.sort())
//16
console.log(itCompanies.reverse())
//17
console.log(itCompanies.slice(0, 3))
//18
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length))
//19

//20
console.log(itCompanies.shift())
//21
console.log(itCompanies.splice(Math.floor(itCompanies.length / 2), 1))
//22
console.log(itCompanies.pop())
//23
console.log(itCompanies.splice())
//LVL2
//1
console.log(webTechs)
//2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words
for (let i = 0; i < text.length; i++) {
    if (text[i] != '.' && text[i] != ',') {
        words += text[i]
    }
}
words = words.split(' ')
console.log(words)
console.log(words.length)
//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)
shoppingCart.splice(shoppingCart.indexOf('Tea'), 1, 'Green Tea')
//4
if (countries.includes('Ethiopia')) {
    console.log(countries[countries.indexOf('Ethiopia')].toUpperCase())
} else {
    countries.push('Ethiopia')
}
//5
if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess')
} else {
    webTechs.push('Sass')
    webTechs.sort()
    console.log(webTechs)
}
//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)
//LVL3
//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages[0])
console.log(ages[ages.length - 1])
console.log(ages[Math.floor(ages.length / 2)])
console.log(ages[ages.length - 1] - ages[0])
//2
console.log(countries[Math.floor(countries.length / 2)])
//3
if (countries.length % 2 == 0) {
    let countries1 = countries.slice(0, countries.length / 2)
    let countries2 = countries.slice(countries.length / 2 + 1, countries.length - 1)
}else{
    let countries1 = countries.slice(0, countries.length / 2)
    let countries2 = countries.slice(countries.length / 2 + 1, countries.length - 1)
}