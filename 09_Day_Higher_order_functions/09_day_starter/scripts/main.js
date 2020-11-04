console.log(countries)
console.log('Open the console and check if the countries has been loaded')
//LVL1
const countriesShort = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
//1
//forEach funziona solo con array, prende una funzione con elementi, indice e array, ma questi ultimi due sono opzionali
countriesShort.forEach((n) => console.log(n))
//map funziona principalmente per iterare gli elementi di un array e modificarli. Utile per creare nuovi array dalle modifiche fatte dalla funcione di callback
let multipliedNums = numbers.map((n) => n * n)
console.log(multipliedNums)
//filter è molto utile per filtrare e trovare la corrispondenza con un elemento o più all'interno di un array, creando un array aggiuntivo che ti propone le corrispondenze
let filterProducts = products.filter((product) => product.product.includes('mango') && product.price >= 6)
console.log(filterProducts)
//reduce prende tre parametri: accumulatore, attuale e un valore iniziale che può essere opzionale. Restituisce un solo numero, molto utile per le somme o calcoli di array con valori numerici
let sum = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum)
//2
function print(n) {
    console.log(n)
}
countriesShort.forEach(print)
//
function multiplied(n) {
    return n * n
}
multipliedNums = numbers.map(multiplied)
console.log(multipliedNums)
//
function filterOut(product) {
    if (product.product.includes('mango')) return product
}
filterProducts = products.filter(filterOut)
console.log(filterProducts)
// - da capire meglio
function reduceFun(n) {
    return n + n
}
sum = numbers.reduce(reduceFun)
console.log(sum)
//3
countriesShort.forEach(country => console.log(country))
//4
names.forEach(name => console.log(name))
//5
numbers.forEach(num => console.log(num))
//6
let countriesUpper = countriesShort.map(country => country.toUpperCase())
//7
let countriesLength = countriesShort.map(country => country)
//8
let squareNum = numbers.map(num => num ** 2)
console.log(squareNum)
//9
let namesUpper = names.map(name => name.toUpperCase())
console.log(namesUpper)
//10
let mapProducts = products.map(product => [product.product, product.price])
console.log(mapProducts)
//11
let filterLand = countriesShort.filter(country => country.includes('land'))
console.log(filterLand)
//12
let filterSix = countriesShort.filter(country => country.length == 6)
console.log(filterSix)
//13
let filterSixMore = countriesShort.filter(country => country.length >= 6)
console.log(filterSixMore)
//14
let filterStartE = countriesShort.filter(country => country.charAt(0) == 'E')
console.log(filterStartE)
//15
let filterPrices = products.filter(product => product.price != null && product.price != undefined && product.price != ' ' && product.price != '')
console.log(filterPrices)
//16
function getStringLists(array) {
    return stringArray = array.filter(item => typeof item === 'string')
}
console.log(getStringLists([1, 2, 3, 'ciao', 'come stai', 'bello vederti']))
//17
let sumOfAll = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sumOfAll)
//18
let concatenate = countriesShort.reduce((acc, cur) => {
    return acc + ', ' + cur
})
console.log(concatenate + ' are North European countries')
//19
//every - serve per controllare se tutti gli elementi condividono una caratteristica, un aspetto, e ritorna un valore booleano
//some - serve per controllare se alcuni gli elementi condividono una caratteristica, un aspetto, e ritorna un valore booleano
//20
console.log(names.some(name => name.length > 7))
//21
console.log(countriesShort.every(country => country.includes('land')))
//22
//find - serve per controllare se una tale condizione viene rispettata da almeno un elemento dell'array inserito e ne restituisce il primo
//findIndex - serve per controllare se una tale condizione viene rispettata da almeno un elemento dell'array inserito e ne restituisce l'indice
//23
console.log(countriesShort.find(country => country.length == 6))
//24
console.log(countriesShort.findIndex(country => country.length == 6))
//25
console.log(countriesShort.findIndex(country => country == 'Norway'))
//26
console.log(countriesShort.findIndex(country => country == 'Russia'))