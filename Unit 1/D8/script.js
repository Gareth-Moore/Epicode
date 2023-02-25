'use strict'

const navBar = document.querySelector('nav')
const getStarted = document.querySelector('#navigation li:last-of-type')

function navChangeCss () {
    if (window.scrollY > 375) {
        navBar.classList.add('nav-scroll')
        getStarted.classList.add('get-started-scroll')
    }
    else {
        navBar.classList.remove('nav-scroll')
        getStarted.classList.remove('get-started-scroll')
    }
}

document.addEventListener('scroll', navChangeCss)
