// this is your main.js script

//1
let nameCourse = '30 Days Of JavaScript'
//2
console.log(nameCourse)
//3
console.log(nameCourse.length)
//4
let nameCourseUp = nameCourse.toUpperCase()
console.log(nameCourseUp)
//5
let nameCourseLow = nameCourse.toLowerCase()
console.log(nameCourseLow)
//6
let firstWordSubStr = nameCourse.substr(3, 4)
console.log(firstWordSubStr)
let firstWordSubString = nameCourse.substring(3, 7)
console.log(firstWordSubString)
//7
let sliceOut = nameCourse.substr(3, 18)
console.log(sliceOut)
let sliceOut1 = nameCourse.substring(3, 21)
console.log(sliceOut1)
//8
let includeWord = nameCourse.includes('Script');
console.log(includeWord)
//9
let splittedArray = nameCourse.split()
console.log(splittedArray)
//10
let splittedArray1 = nameCourse.split(' ')
console.log(splittedArray1)
//11
let array = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(array.split(', '))
//12
console.log(nameCourse.replace('JavaScript', 'Python'))
//13
console.log(nameCourse.charAt(15))
//14
console.log(nameCourse.charCodeAt(11))
//15
console.log(nameCourse.indexOf('a'))
//16
console.log(nameCourse.lastIndexOf('a'))
//17
let newSent = 'You cannot end a sentence with because because because is a conjunction'
console.log(newSent.indexOf('because'))
//18
console.log(newSent.lastIndexOf('because'))
//19
console.log(newSent.search('because'))
//20
console.log(nameCourse.trim(''))
//21
console.log(nameCourse.startsWith('3'))
//22
console.log(nameCourse.endsWith('JavaScript'))
//23
console.log(nameCourse.match(/a/gi))
//24
let stringNew = '30 Days Of '
console.log(stringNew.concat('JavaScript'))
//25
console.log(nameCourse.repeat(2))

//LVL 2
//1
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' \nby John Holmes teaches us to help one another.')
//2
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."')
//3
console.log(typeof '10' === typeof 10) // false
console.log(typeof 10 === typeof 10) // true
//4
console.log(parseFloat('9.8') == 10) // false
console.log(Math.ceil(parseFloat('9.8')) == 10) // true
//5
console.log('python'.includes('on'))
console.log('jargon'.includes('on'))
//6
console.log('I hope this course is not full of jargon'.includes('jargon'))
//7
console.log(Math.floor(Math.random() * 101))
//8
console.log(Math.floor(Math.random() * 51) + 50)
//9
console.log(Math.floor(Math.random() * 256))
//10
let stringJ = 'JavaScript'
console.log(stringJ[Math.floor(Math.random() * (stringJ.length + 1))])
//11
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')
//12
console.log(newSent.indexOf('because'))
console.log(newSent.lastIndexOf('because'))
console.log(newSent.substr(31, 23))

//LVL 3
//1
let loveSent = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(loveSent.match(/love/gi).length) // case sensitive = 2 mentre case insensitive = 3
//2
console.log(newSent.match(/because/gi).length)
//3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let newFrom = sentence.replace(/[%\$\@\&\#\;]/gi, '')
var wordCounts = {};
var words = newFrom.split(/\b/);
for (var i = 0; i < words.length; i++)
    wordCounts[words[i]] = (wordCounts[words[i]] || 0) + 1;
console.log(newFrom)
console.log(wordCounts)
//4
let income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
incomeArray = income.match(/\d+/g)
console.log(incomeArray)
let sum = 0
for (let i = 0; i < incomeArray.length - 1; i++) {
    sum = sum + +incomeArray[i]
}
console.log(sum)

