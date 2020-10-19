console.log(countries)
console.log(webTechs)
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
