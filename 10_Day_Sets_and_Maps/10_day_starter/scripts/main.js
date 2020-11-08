console.log(countries)
console.log('Open the console and check if the countries has been loaded')
//LVL1
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countriesShort = ['Finland', 'Sweden', 'Norway']
//1
const emptySet = new Set()
//2
const zeroToTen = new Set()
for (let i = 0; i <= 10; i++) {
    zeroToTen.add(i)
}
console.log(zeroToTen)
//3
zeroToTen.delete(10)
console.log(zeroToTen)
//4
zeroToTen.clear()
console.log(zeroToTen)
//5
let arrayOfStrings = ['Ciao', 'Come', 'Va']
const setFromArray = new Set(arrayOfStrings)
console.log(setFromArray)
//6
const mapOfCountries = new Map()
for (const country of countriesShort) {
    mapOfCountries.set(country, country.length)
}
console.log(mapOfCountries)
//LVL2
//1
const c = new Set([...a, ...b])
console.log(c)
//2
const intersection = new Set(a.filter((num) => b.includes(num)))
console.log(intersection)
//3
console.log(new Set(a.filter((num) => !b.includes(num))))
//LVL3
//1
let languagesArr = countries.map(country => country.languages), langArr = []
for (let i = 0; i < languagesArr.length; i++) {
    for (let y = 0; y < languagesArr[i].length; y++) {
        langArr.push(languagesArr[i][y])
    }
}
let setOfLang = new Set(langArr)
console.log(setOfLang)
//2 - da controllare
function mostSpokenLanguages(arr, num) {
    let languagesArr = arr.map(ele => ele.languages), langArr = [], counts = [], count = {}
    for (let i = 0; i < languagesArr.length; i++) {
        for (let y = 0; y < languagesArr[i].length; y++) {
            langArr.push(languagesArr[i][y])
        }
    }
    let setOfLang = new Set(langArr)
    for (const l of setOfLang) {
        const filteredLang = langArr.filter((lng) => lng === l)
        counts.push({ lang: l, count: filteredLang.length })
    }
    counts.sort((a, b) => {
        if (a.count < b.count) return 1
        if (a.count > b.count) return -1
        return 0
    })
    let arrayResult = []
    for (let i = 0; i < num; i++) {
        arrayResult.push(counts[i])
    }
    console.log(arrayResult)
}
mostSpokenLanguages(countries, 10)
mostSpokenLanguages(countries, 3)