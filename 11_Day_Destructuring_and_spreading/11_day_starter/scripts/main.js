console.log(countries)
console.log('Open the console and check if the countries has been loaded')
//LVL1
const constants = [2.72, 3.14, 9.81, 37, 100]
const countriesShort = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}
const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
]
//1
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)
//2
let [fin, est, sw, den, nor] = countriesShort
console.log(fin, est, sw, den, nor)
//3
let { width, height: h, area, perimeter: p } = rectangle
console.log(width, h, area, p)
//LVL2
//1
for (const { name, scores, skills, age } of users) {
    console.log(name, scores, skills, age)
}
//2
for (const { name, scores, skills, age } of users) {
    if (skills.length < 2) {
        console.log(name, scores, skills, age)
    }
}
//LVL3
//1
for (const { name, capital, languages, population } of countries) {
    console.log(name, capital, languages, population)
}
//2
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [name, skills, scores, jsScore = scores[2], reactScore = scores[3]] = student
console.log(name, skills, jsScore, reactScore)
//3
function convertArrayToObject(array) {
    let newObj = {}
    for (let i = 0; i < array.length; i++) {
        let [name, skills, scores] = array[i]
        newObj[i] = { name: name, skills: skills, scores: scores }
    }
    return newObj
}
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
console.log(convertArrayToObject(students))
//4
const studentLong = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}
const newStudent = { ...studentLong }
newStudent.skills.frontEnd.push({ skill: 'Bootstrap', level: 9 })
newStudent.skills.backEnd.push('Bootstrap')
newStudent.skills.dataBase.push('Bootstrap')
newStudent.skills.dataScience.push('Bootstrap')
console.log(newStudent)