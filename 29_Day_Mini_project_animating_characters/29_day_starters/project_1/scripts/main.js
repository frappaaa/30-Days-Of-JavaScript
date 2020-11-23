const div = document.querySelector('div')
div.style.padding = '10px'
const phrase = document.createElement('p')
phrase.style.textAlign = 'center'
div.appendChild(phrase)
let string = '30 Days of Javascript Challenge 2020'
let arrayString = string.split('')
arrayString.forEach(letter => {
    let l = document.createElement('span')
    l.textContent = letter
    l.style.fontSize = '6em'
    l.style.textTransform = 'uppercase'
    l.style.fontFamily = 'Nunito'
    l.style.color = getRandomColor()
    phrase.appendChild(l)
})
let span = document.querySelectorAll('span')
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
setInterval(() => {
    div.style.backgroundColor = getRandomColor()
}, 3000)