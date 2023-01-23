'use strict'

// run this function to run all the functions at the same time:
function runAllFunctions () {
    changeH1();
    changeBackground();
    changeAddress();
    changeLinks();
    changeImages();
    changeImages();
}

// EX7: Write a function to change the h1 text to something else
const h1 = document.querySelector('h1')
function changeH1() {
    const user_input = prompt("Enter a new h1 tag name:")
    h1.innerText = user_input;
}

// EX8: Write a function to change the page background color
const background = document.querySelector('main')
function changeBackground() {
        const user_input = prompt("Please enter a background color:")
        background.style.backgroundColor = user_input;
}

// EX9: Write a function to change the footer address with a fake one
const address = document.querySelector('address')
function changeAddress () {
    const user_input = prompt('Please enter a fake address:')
    address.innerText = user_input;
}

// EX10: Write a function to add a CSS class to every Amazon link
const links = document.querySelectorAll('a')
function changeLinks () {
    for(let i = 0; i < links.length; i++) {
        links[i].classList.add('tiny_links')
    }
    alert("Links have been shrunk to tiny proportions!")
}

// EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image
const images = document.querySelectorAll('img')
function changeImages () {
    if (images[0].classList.contains('hidden')) {
        for (let i = 0; i < images.length; i++) {
            images[i].classList.remove('hidden')
        }
        alert('Images are BACK!')
    }
    else {
        for (let i = 0; i < images.length; i++) {
            images[i].classList.add('hidden')
        }
        alert('Images have disappeared!')
    }
}

// EX12: Write a function to color the price of the products in a different one every time it’s invoked
const prices = document.getElementsByClassName('price')
const colourRange = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
function changePriceColour () {
    let newColour = "#"
    for (let i = 0; i < 6; i++) {
        let random_num = `#${Math.floor(Math.random()*16)}`
        newColour += colourRange[random_num];
    }
    prices.forEach(value => {
        value.innerText.style.color = newColour;
    });
    
}