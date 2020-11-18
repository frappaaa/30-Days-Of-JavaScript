console.log(countries)
//LVL2
//1
console.log('// Use the countries array to display all the countries.')
let container = document.querySelector('.countries-wrapper')
let country
for (let i = 0; i <= countries.length; i++) {
    country = document.createElement('div')
    country.style.padding = '30px'
    country.style.fontSize = '20px'
    country.style.border = '1px solid'
    country.innerHTML = countries[i]
    container.appendChild(country)
}