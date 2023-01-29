'use strict'

//ex 21
const x = "John"
const y = "Doe"
console.log(`${x} <> ${y}`)

//ex 22
const user = {
    name: "Gareth",
    surname: "Moore",
    email: "gareth@gmail.com"
}

//ex 23
delete user.email;

//ex 24
let arrayOfThaiFood = [
    'Pad Gra Pao Moo Graub',
    'Kua Kling',
    'Laab Moo',
    'Namtok Nua',
    'Pad Thai',
    'Geng Kiaw',
    'Nam Tok',
    'Pad Dong',
    'Salapao',
    'Pad See Ew'
]

//ex 25
arrayOfThaiFood.forEach(value => {
    console.log(value)
});

//ex 26
const arrayOfRandomNumbers = []
for (let i = 0; i < 100; i++) {
    arrayOfRandomNumbers.push(Math.floor(Math.random() * 1000))
}

//ex 27 
let [maxNum, minNum] = [,]
arrayOfRandomNumbers.forEach(value => {
    if (maxNum === undefined && minNum === undefined) {
        maxNum = value;
        minNum = value;
    }
    if (maxNum < value) {
        maxNum = value;
    }
    if (minNum > value) {
        minNum = value;
    }
});

//ex 28
const arrayOfArrays = []
for (let i = 0; i < 3; i++) {
    const newArray = []
    for(let j = 0; j < 10; j++) {
        newArray.push(Math.floor(Math.random() * 100))
    }
    arrayOfArrays.push(newArray);
}

//ex 29
function getLongestArray (arr1, arr2) {
    return arr1.length > arr2.length ? arr1 : arr2;
}

//ex 30
function getHighestSum (arr1, arr2) {
    let [arr1Sum, arr2Sum] = [0,0]
    arr1.forEach(value => {
        arr1Sum += value;
    })
    arr2.forEach(value => {
        arr2Sum += value;
    })
    return arr1Sum > arr2Sum ? arr1 : arr2;
}

//ex 31
const container = document.getElementById('container')

//ex 32 
const all_td = document.querySelectorAll('td')

//ex 33 
function change_td_text () {
    for(let i = 0; i < all_td.length; i++) {
        console.log(all_td[i].innerText)
    }
}

//ex 34
const h1 = document.querySelector('h1');
function change_h1_text (new_text) {
    h1.innerText = new_text;
}

//ex 35
const newRow = document.createElement('tr')
const tableBody = document.querySelector('tbody')
function create_new_row () {
    tableBody.appendChild(newRow, tableBody.lastChild)
}

//ex 36
function addClass () {
    const rows = document.querySelectorAll('tr')
    rows.forEach(value => {
        value.classList.add('test')
    });
}

//ex 37
function change_link_background () {
    const links = document.querySelectorAll('a')
    for (let i = 0; i < links.length; i++) {
        links[i].style.backgroundColor = "red";    
    }
}
    
//ex 38
window.onload = event => {
    console.log("The page has finished loading.")
};

//ex 39 
function add_li_to_ul () {
    const ul = document.querySelector('ul')
    const newLi = document.createElement('li')
    newLi.innerText = "New list item";
    ul.appendChild(newLi, ul.lastChild)
}

//ex 40
function remove_li_from_list (list) {
    if (list != 'ul' && list != 'ol') return "Please enter either 'ul' or 'ol'.";
    const list_to_change = document.querySelectorAll(`${list} li`)
    for (let i = 0; i < list_to_change.length; i++) {
        list_to_change[i].remove();
    }
}

//ex 41
const links = document.querySelectorAll('a')
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseover', event => {
        alert(links[i].href)
        console.log(links[i])
    })
}

//ex 42
function create_button_to_hide_image () {
    const newButton = document.createElement('button')
    const images = document.querySelectorAll('img')
    newButton.innerText = "Click me!";
    h1.append(newButton)
    newButton.addEventListener('click', event => {
        for (let i = 0; i < images.length; i++) {
            images[i].classList.add('hidden')
        }
    })
}

//ex 43
function hide_show_table () {
    const ol = document.querySelector('ol')
    const newButton = document.createElement('button')
    newButton.innerText = "Click me too!"
    ol.append(newButton)
    const table = document.querySelector('table')
    newButton.addEventListener('click', event => {
        if (table.classList.contains('hidden')) {
            table.classList.remove('hidden')
        }
        else {
            table.classList.add('hidden')
        }
    })
}

//ex 44
const table_data = document.querySelectorAll('td')
function calc_table_sum (insert_random_numbers) { //Boolean, use true/false
    let sum = 0;
    for (let i = 0; i < table_data.length; i++) {
        if (insert_random_numbers === true) table_data[i].innerText = Math.floor(Math.random() * 100)
        sum += parseInt(table_data[i].innerText)
    }
    return sum;
}

//ex 45
h1.addEventListener('click', event => {
    const array = [];
    for (let i = 0; i < h1.innerText.length - 1; i++) {
        array.push(h1.innerText[i])
    }
    h1.innerText = array.join('')
})

//ex 46
for (let i = 0; i < table_data.length; i++) {
    table_data[i].addEventListener('click', event => {
        event.target.style.backgroundColor = "purple"
    })
}

//ex 47
function delete_table_data () {
    const container = document.querySelector('main')
    const table = document.querySelector('table')
    const newButton = document.createElement('button')
    let used_indexes = ['default']
    newButton.innerText = "Delete Table";
    container.insertBefore(newButton, table.nextSibling)
    
    newButton.addEventListener('click', event => {
        let random_number;
        do {
            random_number = Math.floor(Math.random() * table_data.length)
        } while (used_indexes.includes(random_number) && used_indexes.length === table_data.length)
        used_indexes.push(random_number)
        table_data[random_number].remove()
    })
}

//ex 48 in styles.css

//ex 49
const table = document.createElement('table');
const footer = document.querySelector('footer')
const body = document.querySelector('body')
body.insertBefore(table, footer.previousSibling)

for (let i = 0; i < 4; i++) {
    const tr = document.createElement('tr')
    table.insertBefore(tr, null)
    if (i===0) {
        for (let j = 0; j < 3; j++) {
            const th = document.createElement('th');
            th.innerText = "Header";
            tr.insertBefore(th, null)
        }
    } else {
        for (let j = 0; j < 3; j++) {
            const td = document.createElement('td')
            td.innerText = "Row"
            tr.insertBefore(td, null)
        }
    }
}

//ex 50!!!

function remove_last_table () {
    const last_table = document.querySelectorAll('table')
    last_table[last_table.length - 1].remove();   
}

//Thanks for the homework. That was pretty good :)



























