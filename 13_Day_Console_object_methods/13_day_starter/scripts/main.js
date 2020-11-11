console.log(countries)
console.log('Open the console and check if the countries has been loaded')
//log with CSS
console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
console.log(
    '%c30 Days%c %cOf%c %cJavaScript%c',
    'color:green',
    '',
    'color:red',
    '',
    'color:yellow'
)
console.log('%d %s of JavaScript', 30, 'Days')
//warning
console.warn('Warning is different from error')
const countriesShort = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
//time
console.time('Regular for loop')
for (let i = 0; i < countriesShort.length; i++) {
    console.log(countriesShort[i][0], countriesShort[i][1])
}
console.timeEnd('Regular for loop')

console.time('for of loop')
for (const [name, city] of countriesShort) {
    console.log(name, city)
}
console.timeEnd('for of loop')

console.time('forEach loop')
countriesShort.forEach(([name, city]) => {
    console.log(name, city)
})
console.timeEnd('forEach loop')
//info
console.info('30 Days Of HTML and CSS challenge might be released')
//assert - stampa qualcosa solo se l'operazione risulta in un valore booleano falso
console.assert(3 > 4, '3 is not greater than 4')
//group
const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries1 = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
}
const users = [
    {
        name: 'Asabeneh',
        title: 'Programmer',
        country: 'Finland',
        city: 'Helsinki',
        age: 250
    },
    {
        name: 'Eyob',
        title: 'Teacher',
        country: 'Sweden',
        city: 'London',
        age: 25
    },
    {
        name: 'Asab',
        title: 'Instructor',
        country: 'Norway',
        city: 'Oslo',
        age: 22
    },
    {
        name: 'Matias',
        title: 'Developer',
        country: 'Denmark',
        city: 'Copenhagen',
        age: 28
    }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries1)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()
//count
const func = () => {
    console.count('Function has been called')
}
func()
func()
func()
//clear
console.clear()
//LVL1
//1
console.table(countriesShort)
//2
console.table(countries)
console.clear()
//3
console.group('Logs raggruppati')
console.table(names)
console.table(users)
console.table(countries1)
console.table(countries)
console.groupEnd()
//LVL2
//1
console.assert(10 > 2 * 10, '10 non è maggiore di ' + 10 * 2)
//2
console.warn('Attenzione! Questo esercizio è stato fatto')
//3
console.error('Errore! Questo esercizio è stato portato a termine')
console.clear()
//LVL3
//1
console.time('Ciclo While')
let i = 0
while (i < countriesShort.length) {
    array = countriesShort[i][0]
    i++
}
console.timeEnd('Ciclo While')
console.time('Regular for loop')
for (let i = 0; i < countriesShort.length; i++) {
    array = countriesShort[i][0], countriesShort[i][1]
}
console.timeEnd('Regular for loop')

console.time('for of loop')
for (const [name, city] of countriesShort) {
    array = name, city
}
console.timeEnd('for of loop')

console.time('forEach loop')
countriesShort.forEach(([name, city]) => {
    array = name, city
})
console.timeEnd('forEach loop')