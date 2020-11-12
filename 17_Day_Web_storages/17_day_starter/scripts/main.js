//LVL1
//1
localStorage.setItem('firstName', 'Francesco')
localStorage.setItem('lastName', 'Luppi')
localStorage.setItem('age', 24)
localStorage.setItem('country', 'Italy')
localStorage.setItem('city', 'Mirandola')
//LVL2
//1
const student = {
    firstName: 'Francesco',
    lastName: 'Luppi',
    age: 24,
    skills: ['HTML', 'CSS', 'JS'],
    country: 'Italy',
    enrolled: true
}
const studentString = JSON.stringify(student)
localStorage.setItem('student', studentString)
//LVL3
//1
const personAccount = {
    firstName: 'Francesco',
    lastName: 'Luppi',
    incomes: 1000,
    expenses: 10,
    addIncome() { },
    addExpense() { }
}
const persAccString = JSON.stringify(personAccount)
localStorage.setItem('Person Account', persAccString) 