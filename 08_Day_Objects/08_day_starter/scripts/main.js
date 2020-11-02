console.log(countries)
console.log('Open the console and check if the countries has been loaded')
//LVL1
//1
let dog = {}
//2
console.log(dog)
//3
dog.name = 'Oliver'
dog.legs = 4
dog.color = 'black'
dog.age = 13
dog.bark = function () {
    console.log('woof woof')
}
//4
console.log(Object.values(dog))
//5
dog.breed = 'Labrador'
dog.getDogInfo = function () {
    console.log(`The dog name is ${this.name}. It has ${this.legs} legs and it is ${this.age} years old. Its color is ${this.color} and the breed is ${this.breed}. It mainly says ${this.bark()} when it sees you.`)
}
dog.getDogInfo()
//LVL2
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}
//1
let array = Object.values(users)
let maxSkills = 0
let user = []
for (let i = 0; i < array.length; i++) {
    if (array[i]["skills"].length > maxSkills) {
        maxSkills = array[i]["skills"].length
        user = array[i]
    }
}
console.log(user)
//2
let logged = 0
let greaterThan = 0
for (let i = 0; i < array.length; i++) {
    if (array[i].isLoggedIn) {
        logged++
    }
    if (array[i].points >= 50) {
        greaterThan++
    }
}
console.log('Gli utenti loggati sono: ' + logged + ' e quelli che hanno 50 punti o di più sono ' + greaterThan)
//3
for (let i = 0; i < array.length; i++) {
    let mern = ''
    for (let y = 0; y < array[i]["skills"].length; y++) {
        mern += array[i]["skills"][y].charAt(0).toUpperCase()
    }
    if (mern.includes('MERN')) console.log(array[i]['email'])
}
//4
users.Francesco = {
    email: 'francescoluppi@aol.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Vue', 'NuxtJS'],
    age: 24,
    isLoggedIn: true,
    points: 60
}
//5
let allKeys = Object.keys(users)
//6
let allValues = Object.values(users)
//7
countries.name
countries.capital
countries.populations
countries.languages
//LVL3
//1
let personAccount = {
    firstName = 'Francesco',
    lastName = 'Luppi',
    incomes=[
        {
            incomes: 1200,
            description: 'ArciGay'
        },
        {
            incomes: 910,
            description: 'Avv'
        }
    ],
    expenses=[
        {
            incomes: 200,
            description: 'Microfono'
        },
        {
            incomes: 10,
            description: 'Cena fuori'
        }
    ],
    totalIncome= function () {

    },
    totalExpense = function () {

    },
    accountInfo = function () {

    },
    addIncome = function () {

    },
    addExpense = function () {

    },
    accountBalance = function () {

    }

}
//
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
]
//2 - Da controllare
let arrayUsers = Object.values(users)
function signUp(email) {
    let y = 0
    for (let i = 0; i < arrayUsers.length; i++) {
        if (arrayUsers[i]['email'] == email) {
            y++
        }
    }
    if (y >= 1) {
        console.log('La tua mail è già presente, fai il sign in')
    } else {
        name = prompt('Qual è il tuo nome?')
        date = new Date()
        users =
        {
            _id: Math.floor(Math.random() * 10) + '' + Math.floor(Math.random() * 10) + '' + Math.floor(Math.random() * 10),
            username: name,
            email: email,
            createdAt: date,
            isLoggedIn: false
        }

    }
}
signUp('francesco@aol.com')
signUp('martha@martha.com')
function signIn(username, password) {
    for (let i = 0; i < arrayUsers.length; i++) {
        if (arrayUsers[i]['username'] == username && arrayUsers[i]['password'] == password) {
            arrayUsers[i]['isLoggedIn'] = true
            console.log('Sei dentro!')
        }
    }
}
signIn('Thomas', '123333')
//
const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]
//3
function rateProduct(product, userId, rate) {
    products[product]['ratings'].push({ userId: userId, rate: rate })
}
rateProduct(0, 'ciao', 4.3)
function averageRating(product) {
    avarage = 0
    sum = 0
    for (let i = 0; i < products[product]['ratings'].length; i++) {
        sum += products[product]['ratings'][i]['rate']
    }
    return avarage = sum / products[product]['ratings'].length
}
averageRating(0)
//4
function likeProduct(product) {
    if (products[product]['likes'].length > 0) {
        products[product]['likes'] = []
    } else {
        products[product]['likes'].push('fg12cy')
    }
}