//LVL1
const countriesAPI = 'https://restcountries.eu/rest/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
//1 - da controllare
const fetchCountries = async () => {
    try {
        const response = await fetch(countriesAPI)
        const countries = await response.json()
        console.log(countries)
    } catch (err) {
        console.log(err)
    }
}
fetchCountries()

//LVL2
//1
fetch(catsAPI)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
//o
const fetchCats = async () => {
    try {
        const response = await fetch(catsAPI)
        let cats = await response.json()
        for (let i = 0; i < Object.keys(cats).length; i++) {
            cats[i] = cats[i].name
        }
        console.log(cats)
    } catch (err) {
        console.log(err)
    }
}
fetchCats()
//LVL3
//1
const fetchCatsWeight = async () => {
    try {
        const response = await fetch(catsAPI)
        let cats = await response.json()
        let catWeightAvr = 0
        for (let i = 0; i < Object.keys(cats).length; i++) {
            cats[i] = cats[i].weight.metric
        }
        console.log(cats)
    } catch (err) {
        console.log(err)
    }
}
fetchCatsWeight()
//2 - Maybe there is a way to simplify this
const fetchCountriesLarge = async () => {
    try {
        const response = await fetch(countriesAPI)
        const countries = await response.json()
        let area = []
        for (let i = 0; i < Object.keys(countries).length; i++) {
            area[i] = countries[i].area
        }
        area.sort(function (a, b) {
            return b - a
        })
        let top10Area = []
        for (let i = 0; i < 10; i++) {
            top10Area[i] = area[i]
        }
        console.log(top10Area)
    } catch (err) {
        console.log(err)
    }
}
fetchCountriesLarge()
//3 - Not completely correct
const nativeLanguage = async () => {
    try {
        const response = await fetch(countriesAPI)
        const countries = await response.json()
        let language = []
        for (let i = 0; i < Object.keys(countries).length; i++) {
            for (let y = 0; y < Object.keys(countries[i].languages).length; y++) {
                language[i] = countries[i].languages[y].name
            }
        }
        console.log(language)
    } catch (err) {
        console.log(err)
    }
}
nativeLanguage()