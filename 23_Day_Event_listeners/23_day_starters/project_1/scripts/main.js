//LVL1
//1
console.log('// Generating numbers and marking evens, odds and prime numbers with three different colors.')
let container = document.querySelector('.wrapper')
let input = document.createElement('input')
input.setAttribute('type', 'number')
let button = document.createElement('button')
button.textContent = 'Generate numbers'
let listNumbers = document.createElement('div')
listNumbers.setAttribute('class', 'numbers')
listNumbers.style.display = 'grid'
listNumbers.style.gridTemplateColumns = 'repeat(auto-fit, 200px)'
listNumbers.style.gridGap = '10px'
listNumbers.style.alignItems = 'center'
listNumbers.style.textAlign = 'center'
container.appendChild(input)
container.appendChild(button)
container.appendChild(listNumbers)
let number
button.addEventListener('click', () => {
    listNumbers.textContent = ''
    let numbers = +input.value
    for (let i = 0; i <= numbers; i++) {
        number = document.createElement('div')
        number.style.padding = '30px'
        number.style.backgroundColor = 'grey'
        number.style.fontSize = '20px'
        number.style.color = 'white'
        if (i % 2 === 0) {
            number.className = 'even'
            number.textContent = i
            number.style.backgroundColor = 'green'
            listNumbers.appendChild(number)
        } else {
            number.className = 'odd'
            number.textContent = i
            number.style.color = 'black'
            number.style.backgroundColor = 'yellow'
            listNumbers.appendChild(number)
        }
    }
})