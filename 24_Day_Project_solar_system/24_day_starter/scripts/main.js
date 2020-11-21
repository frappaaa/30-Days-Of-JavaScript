let planets = ['Terra', 'Marte', 'Luna', 'Uranio', 'Venere', 'Saturno', 'Mercurio', 'Giove', 'Nettuno']
let description = document.querySelector('.description')
let selectPlanet = document.querySelector('select')
for (const planet of planets) {
    let planetOption = document.createElement('option')
    planetOption.textContent = planet
    planetOption.setAttribute('value', planet.toLowerCase())
    selectPlanet.appendChild(planetOption)
}
let button = document.querySelector('button')
button.addEventListener('click', () => {
    let mass = Number(document.querySelector('#mass').value)
    selectPlanet = document.querySelector('select').value
    let newMass = document.createElement('h1')
    mass = calculateMass(mass, selectPlanet)
    newMass.textContent = mass
    description.appendChild(newMass)
})
function calculateMass(mass, planet) {
    switch (planet) {
        case 'terra':
            return mass
        case 'luna':
            mass = (mass / 9.81) * 1.622
            return mass.toFixed(2)
        case 'marte':
            mass = (mass / 9.81) * 3.711
            return mass.toFixed(2)
        case 'venere':
            mass = (mass / 9.81) * 8.87
            return mass.toFixed(2)
        case 'uranio':
            mass = (mass / 9.81) * 8.69
            return mass.toFixed(2)
        case 'saturno':
            mass = (mass / 9.81) * 10.44
            return mass.toFixed(2)
        case 'giove':
            mass = (mass / 9.81) * 24.79
            return mass.toFixed(2)
        case 'mercurio':
            mass = (mass / 9.81) * 3.7
            return mass.toFixed(2)
        case 'nettuno':
            mass = (mass / 9.81) * 11.15
            return mass.toFixed(2)
        default:
            break;
    }
}