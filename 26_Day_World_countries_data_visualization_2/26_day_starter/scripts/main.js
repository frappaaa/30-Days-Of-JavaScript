// adding DOM element on the index file
let searchFilter = document.createElement('input')
document.body.appendChild(searchFilter)
let nameCountries = document.createElement('div')
nameCountries.setAttribute('class', 'names-wrapper')
document.body.appendChild(nameCountries)
// adding the event listener on the input element that captures every change
searchFilter.addEventListener('input', () => {
    nameCountries.textContent = ''
    let listName = ''
    listName = countries.filter(name => name.includes(searchFilter.value))
    console.log(listName)
    for (let i = 0; i < listName.length; i++) {
        let name = document.createElement('p')
        name.textContent = listName[i]
        nameCountries.appendChild(name)
    }
})