//LVL1
//1
console.log('// Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.')
let container = document.querySelector('.wrapper')
let number
for (let i = 0; i <= 101; i++) {
    number = document.createElement('div')
    number.style.padding = '30px'
    number.style.backgroundColor = 'grey'
    number.style.fontSize = '20px'
    number.style.color = 'white'
    if (i % 2 === 0) {
        number.className = 'even'
        number.textContent = i
        number.style.backgroundColor = 'green'
        container.appendChild(number)
    } else {
        number.className = 'odd'
        number.textContent = i
        number.style.color = 'black'
        number.style.backgroundColor = 'yellow'
        container.appendChild(number)
    }

}