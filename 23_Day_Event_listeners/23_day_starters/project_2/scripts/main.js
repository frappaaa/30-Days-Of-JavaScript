//LVL1
//2
let h1 = document.createElement('h1')
let p = document.createElement('p')
document.body.appendChild(h1)
document.body.appendChild(p)
document.body.addEventListener('keypress', e => {
    h1.innerHTML = 'You pressed ' + e.key
    p.innerHTML = 'The key code is: ' + e.keyCode
})