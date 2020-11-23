const skills = ['HTML', 'CSS', 'Javascript', 'Node']
let wrapperSkill = document.createElement('div')
wrapperSkill.className = 'skillsList'
const iLike = document.createElement('p')
iLike.textContent = 'Mi piace questo: '
document.body.appendChild(wrapperSkill)
wrapperSkill.appendChild(iLike)
let i = 0
setInterval(() => {
    iLike.textContent = 'Mi piace questo: '
    let skill = document.createElement('h1')
    skill.textContent = skills[i]
    iLike.appendChild(skill)
    if (i >= skills.length - 1) {
        i = 0
    } else {
        i++
    }
}, 3000)