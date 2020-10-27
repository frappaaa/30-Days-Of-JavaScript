console.log(countries)
console.log('Open the console and check if the countries has been loaded')
//LVL1
//1
function FullName() {
    console.log('Francesco Luppi')
}
FullName()
//2
function fullName(firstName, lastName) {
    console.log(firstName + ' ' + lastName)
}
fullName('Francesco', 'Luppi')
//3
function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    console.log(sum)
}
sumTwoNumbers(10, 20)
//4
function areaOfRectangle(length, width) {
    let area = length * width
    return area
}
console.log(areaOfRectangle(10, 5))
//5
function perimeterOfRectangle(length, width) {
    let perimeter = 2 * (length + width)
    return perimeter
}
console.log(perimeterOfRectangle(10, 5))
//6
function volumeOfRectPrism(length, width, height) {
    let volume = length * width * height
    return volume
}
console.log(volumeOfRectPrism(10, 5, 3))
//7
function areaOfCircle(radius) {
    let areaCircle = Math.PI * radius * radius
    return areaCircle
}
console.log(areaOfCircle(10))
//8
function circumOfCircle(radius) {
    let circum = 2 * Math.PI * radius
    return circum
}
console.log(circumOfCircle(10))
//9
function density(mass, volume) {
    let den = mass / volume
    return den
}
console.log(density(10, 5))
//10
function speed(distance, time) {
    let spe = distance / time
    return spe
}
console.log(speed(10, 5))