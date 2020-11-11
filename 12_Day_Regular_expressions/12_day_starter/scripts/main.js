console.log(countries)
console.log('Open the console and check if the countries has been loaded')
//LVL1
//1
let string = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
let totalIncome = string.match(/\d+/g)
console.log(+totalIncome[0] * 12 + +totalIncome[1] + +totalIncome[2] * 12)
//2 - da controllare
let points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
//3 - da controllare
function is_valid_variable(string) {
    if (string.match(/^[0-9 -]|\s/)) {
        return false
    } else {
        return true
    }
}
console.log(is_valid_variable('first_name'))
console.log(is_valid_variable('first-name'))
console.log(is_valid_variable('1first_name'))
console.log(is_valid_variable('firstname'))
//LVL2
//1 - da controllare
function tenMostFrequentWords(string) {
    let arrayWords = string.replace(/[.]/g, '').split(' ')
    let arrayWordsSet = new Set(arrayWords)
    let objWordCount = {}
    for (let i = 0; i < arrayWordsSet.length; i++) {
        objWordCount[i] = { word: arrayWordsSet[i], count: string.match(arrayWordsSet[i]).length }
    }
    return objWordCount
}
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
console.log(tenMostFrequentWords(paragraph))
//LVL3
//1
function cleanText(text) {
    return text.replace(/[^a-zA-Z0-9_ .-]/g, '')
}
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
console.log(cleanText(sentence))
