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

