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