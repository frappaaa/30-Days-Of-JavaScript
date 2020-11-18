//EXAMPLE
function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
        plusOne: plusOne(),
        minusOne: minusOne()
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)
console.clear()
//LVL1
//1
function insertA(a) {
    let sum = 0
    function insertB(b) {
        return sum = a + b
    }
    return insertB
}
const closure = insertA(10)
console.log(closure(3))
//LVL2
//2
function outerFunction() {
    let count = 2;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }
    function expTwo() {
        count = count ** 2
        return count
    }

    return {
        plusOne: plusOne(),
        minusOne: minusOne(),
        expTwo: expTwo()
    }
}
const innerFunc = outerFunction()

console.log(innerFunc.plusOne)
console.log(innerFunc.minusOne)
console.log(innerFunc.expTwo)
//LVL3
//1
function personAccount() {
    let firstname = 0, lastname = 0, incomes = {}, expenses = {}
    function totalIncome() { }
    function totalExpense() { }
    function accountInfo() { }
    function addIncome() { }
    function addExpense() { }
    function accountBalance() { }
    return {
        totIn: totalIncome(),
        totOut: totalExpense(),
        info: accountInfo(),
        addIn: addIncome(),
        addOut: addExpense(),
        balance: accountBalance()
    }
}
const personAcc = personAccount()
console.log(personAcc.addIn)