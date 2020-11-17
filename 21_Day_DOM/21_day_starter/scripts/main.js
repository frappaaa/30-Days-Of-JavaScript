//LVL1
//1
console.log('//1 Getting the first four p elements')
const pTag = document.querySelector('p')
console.log(pTag)
//2
console.log('//2 Getting the p elements by their ids')
let pId1 = document.querySelector('#first-para')
console.log(pId1)
let pId2 = document.querySelector('#second-para')
console.log(pId2)
let pId3 = document.querySelector('#third-para')
console.log(pId3)
let pId4 = document.querySelector('#fourth-para')
console.log(pId4)
//3
console.log('//3 Getting all the p elements as nodelist with the querySelectorAll')
const pAll = document.querySelectorAll('p')
console.log(pAll)
//4
console.log('//4 Loop through the nodeList and get the text content of each paragraph')
pAll.forEach(p => console.log(p.innerText))
//5
console.log('//5 Set the innerText (or textContent) for the fourth paragraph')
pAll[3].textContent = 'Fourth Paragraph'
console.log(pAll[3].innerText)
//6
console.log('//6 Set id and class attribute for all the paragraphs using different attribute setting methods')
pAll[0].classList.add('primo-metodo')
console.log(pAll[0])
pAll[1].setAttribute('class', 'secondo-metodo')
console.log(pAll[1])
pAll[2].class = 'terzo-metodo' //not working
console.log(pAll[2])
pAll[3].className = 'quarto-metodo'
console.log(pAll[3])
//LVL2
//1
console.log('//1 Change style of the p elements')
pAll[0].style.backgroundColor = '#000'
pAll[0].style.color = '#fff'
pAll[0].style.padding = '10px'
//2
console.log('//2 Change style of the p elements')
pAll.forEach((p, i) => {
    if (i % 2 === 0) {
        p.style.color = 'red'
    } else {
        p.setAttribute('style', 'color:green')
    }
})
//3
console.log('//3 Set text content, id and class to each paragraph')
pAll.forEach(p => {
    p.innerHTML = 'ciao'
    p.className = 'nuovaClasse'
    p.id = 'nuovoId'
})
//LVL3
//1
console.log('//1 Mini project')
console.log('// The year color is changing every 1 second')
let h1 = document.querySelector('h1')
h1.innerHTML.replace('2020', '<span>2020</span>')
let colors = ['red', 'blue', 'orange', 'green', 'yellow', 'brown']
function changeYearColor() {
    h1.style.color = colors[Math.floor(Math.random() * colors.length + 1)]
}
setInterval(changeYearColor, 1000)
console.log('// The date and time background color is changing every on seconds')
let date = document.querySelector('.date')
function changeDateColor() {
    date.style.padding = '10px'
    date.style.backgroundColor = colors[Math.floor(Math.random() * colors.length + 1)]
}
setInterval(changeDateColor, 1000)
console.log('// Completed challenge has background green - Ongoing challenge has background yellow - Coming challenges have background red')
let skills = document.querySelectorAll('li')
console.log(skills)
skills.forEach(skill => {
    if (skill.innerText.match(/done/gi)) {
        skill.style.backgroundColor = 'green'
    } else if (skill.innerText.match(/ongoing/gi)) {
        skill.style.backgroundColor = 'yellow'
    } else if (skill.innerText.match(/coming/gi)) {
        skill.style.backgroundColor = 'red'
    }
})
