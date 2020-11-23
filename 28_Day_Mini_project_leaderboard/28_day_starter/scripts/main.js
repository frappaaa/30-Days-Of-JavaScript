// create all the DOM elements necessary to create the form, where you can put the information to create the users list
const formDiv = document.createElement('div')
formDiv.className = 'form-wrapper'
document.body.appendChild(formDiv)
const form = document.createElement('form')
formDiv.appendChild(form)
const firstName = document.createElement('input')
firstName.setAttribute('type', 'text')
firstName.setAttribute('name', 'name')
firstName.setAttribute('placeholder', 'Inserisci il nome')
form.appendChild(firstName)
const secondName = document.createElement('input')
secondName.setAttribute('type', 'text')
secondName.setAttribute('name', 'surname')
secondName.setAttribute('placeholder', 'Inserisci il cognome')
form.appendChild(secondName)
const country = document.createElement('input')
country.setAttribute('type', 'text')
country.setAttribute('name', 'country')
country.setAttribute('placeholder', 'Inserisci il paese')
form.appendChild(country)
const age = document.createElement('input')
age.setAttribute('type', 'number')
age.setAttribute('name', 'age')
age.setAttribute('placeholder', 'Inserisci l\'età')
form.appendChild(age)
const button = document.createElement('button')
button.setAttribute('type', 'submit')
button.setAttribute('name', 'button')
button.textContent = 'Inserisci'
form.appendChild(button)
const usersWrapper = document.createElement('div')
usersWrapper.className = 'users-wrapper'
document.body.appendChild(usersWrapper)
const usersList = document.createElement('ul')
usersList.className = 'users-list'
usersWrapper.appendChild(usersList)
button.addEventListener('click', e => {
    e.preventDefault()
    let infos = [firstName.value, secondName.value, country.value, +age.value]
    let user = document.createElement('li')
    usersList.appendChild(user)
    let userList = document.createElement('ul')
    user.appendChild(userList)
    for (const info of infos) {
        let i = document.createElement('li')
        i.textContent = info
        userList.appendChild(i)
    }
})