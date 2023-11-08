const next = document.getElementById('nex')
const prev = document.getElementById('ant')
const slides = document.getElementsByClassName('espacos')[0];
const menu = document.getElementsByClassName('menu-button')[0];
const containerNav = document.getElementsByClassName('container-nav')[0];
let width = screen.width

let menuOpen = false

function setWidth(){
    width = screen.width
    setTimeout(setWidth, 1000)
}

menu.addEventListener('click', () => {
    if (!menuOpen) containerNav.classList.add('display')
    else containerNav.classList.remove('display')
    menuOpen = !menuOpen
})

setTimeout(setWidth, 1000)

let counter = 0
let dist = []

for(let i = 0; i < slides.children.length; i++){
    dist.push((width)*i)
}

next.addEventListener('click', () => {
    counter += 1
    if (counter >= slides.children.length) {
        slides.style.transform = `translateX(${dist[0]}px)`
        counter = 0
        return
    }
    slides.style.transform = `translateX(-${dist[counter]}px)`
})

prev.addEventListener('click', () => {
    if (counter == 0) {
        slides.style.transform = `translateX(-${dist[dist.length-1]}px)`
        counter = dist.length-1
        return
    }
    counter -= 1
    slides.style.transform = `translateX(-${dist[counter]}px)`
})