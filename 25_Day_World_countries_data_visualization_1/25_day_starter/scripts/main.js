const population = document.querySelector('.population')
console.log(countries)
const languages = document.querySelector('.languages')
let stats = document.querySelector('#stat')
// function to calculate the 10 most used languages in the world and how much those are used
function mostSpokenLanguages(arr, num) {
    let languagesArr = arr.map(ele => ele.languages), langArr = [], counts = []
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
    return arrayResult
}

// add eventListener for the two buttons
languages.addEventListener('click', () => {
    stats.textContent = ''
    const langs = mostSpokenLanguages(countries, 10)
    for (let i = 0; i < Object.keys(langs).length; i++) {
        let lang = document.createElement('p')
        lang.textContent = langs[i].lang
        let howMany = document.createElement('div')
        howMany.style.height = '40px'
        howMany.style.width = langs[i].count * 10 + 'px'
        howMany.style.background = 'red'
        howMany.textContent = langs[i].count
        stats.appendChild(lang)
        stats.appendChild(howMany)
    }
})

// function to calculate the 10 most populated places in the world and how much they are populated
function mostPopulation(arr, num) {
    let popArr = []
    for (let i = 0; i < arr.length; i++) {
        popArr.push({ name: arr[i].name, population: arr[i].population })
    }
    popArr.sort((a, b) => {
        if (a.population < b.population) return 1
        if (a.population > b.population) return -1
        return 0
    })
    let arrayResult = []
    for (let i = 0; i < num; i++) {
        arrayResult.push(popArr[i])
    }
    return arrayResult
}

population.addEventListener('click', () => {
    stats.textContent = ''
    const pop = mostPopulation(countries, 10)
    for (let i = 0; i < Object.keys(pop).length; i++) {
        let lang = document.createElement('p')
        lang.textContent = pop[i].name
        let howMany = document.createElement('div')
        howMany.style.height = '40px'
        howMany.style.width = 200 + 'px'
        howMany.style.background = 'red'
        howMany.textContent = pop[i].population
        stats.appendChild(lang)
        stats.appendChild(howMany)
    }
})