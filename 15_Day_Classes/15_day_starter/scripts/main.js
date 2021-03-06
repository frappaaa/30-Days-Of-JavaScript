class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
      ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    console.log(this)
    return info
  }
  static favoriteSkill() {
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
    const index = Math.floor(Math.random() * skills.length)
    console.log('hi')
    return skills[index]
  }
}

console.log(Person.favoriteSkill())

class Student extends Person {
  constructor(firstName, lastName, age, country, city, gender) {
    super(firstName, lastName, age, country, city)
    this.gender = gender
  }

  saySomething() {
    console.log('I am a child of the person class')
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
      ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''
    let pronoun = this.gender == 'Male' ? 'He' : 'She'

    let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
    console.log(this)
    return info
  }
}

const s1 = new Student(
  'Asabeneh',
  'Yetayeh',
  250,
  'Finland',
  'Helsinki',
  'Male'
)
const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
s1.setScore = 1
s1.setSkill = 'HTML'
s1.setSkill = 'CSS'
s1.setSkill = 'JavaScript'

s2.setScore = 1
s2.setSkill = 'Planning'
s2.setSkill = 'Managing'
s2.setSkill = 'Organizing'

console.log(s1)
console.log(s2)

console.log(s1.saySomething())
console.log(s1.getFullName())
console.log(s1.getPersonInfo())

console.log(s2.saySomething())
console.log(s2.getFullName())
console.log(s2.getPersonInfo())
console.clear()
//LVL1
//1
class Animal {
  constructor(name, age, color, legs) {
    this.name = name
    this.age = age
    this.color = color
    this.legs = legs
  }
  getAnimalDesc() {
    console.log('Questo animale è chiamato ' + this.name + ' e ha ' + this.age + ' anni. Ha un corpo di colore ' + this.color + ' e ha ' + this.legs + ' gambe.')
  }
}
const animal = new Animal('gambero', 3, 'rosso', 1)
animal.getAnimalDesc()
//2
class Dog extends Animal {
  constructor(name, age, color, legs) {
    super(name, age, color, legs = 4)
  }
}
const dog = new Dog('Oliver', 13, 'nero')
dog.getAnimalDesc()
class Cat extends Animal {
  constructor(name, age, color, legs = 4) {
    super(name, age, color, legs = 4)
  }
}
const cat = new Cat('micio', 12, 'bianco')
cat.getAnimalDesc()
//LVL2
//1
class Armadillo extends Animal {
  constructor(name, age, color, legs) {
    super(name, age, color, legs = 4)
  }
  getAnimalDesc() {
    console.log('Ma questo è un Armadillooooooo')
  }
}
const armadillo = new Armadillo
armadillo.getAnimalDesc()
//LVL3
//1
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
class Statistics {
  constructor(values) {
    this.values = values
  }
  count() { }
  sum() { }
  min() { }
  max() { }
  range() { }
  mean() { }
  median() { }
  mode() { }
  var() { }
  std() { }
  freqDist() { }
  describe() { }
}

let statistics = new Statistics(ages)
console.log('Count:', statistics.count())
console.log('Sum: ', statistics.sum())
console.log('Min: ', statistics.min())
console.log('Max: ', statistics.max())
console.log('Range: ', statistics.range())
console.log('Mean: ', statistics.mean())
console.log('Median: ', statistics.median())
console.log('Mode: ', statistics.mode())
console.log('Variance: ', statistics.var())
console.log('Standard Deviation: ', statistics.std())
console.log('Variance: ', statistics.var())
console.log('Frequency Distribution: ', statistics.freqDist())
//2
class PersonAccount {
  constructor(firstname, lastname, incomes, expenses) {
    this.firstName = firstname
    this.lastName = lastname
    this.incomes = incomes
    this.expenses = expenses
  }
  totalIncome() { }
  totalExpense() { }
  accountInfo() { }
  addIncome() { }
  addExpense() { }
  accountBalance() { }
}
let incomes = [{ income: 1000, desc: 'Lavoro' }, { income: 30, desc: 'regalo' }]
let expenses = [{ expense: 4, desc: 'coop' }, { expense: 3, desc: 'frutta' }]
const personAcc = new PersonAccount('Francesco', 'Luppi', incomes)