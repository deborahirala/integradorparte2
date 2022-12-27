

// Formulario
const form = document.forms.form

// Cuadros
const card1 = document.getElementById('card1')
const card2 = document.getElementById('card2')
const card3 = document.getElementById('card3')
const cards = document.getElementsByClassName('card')

// Botones
const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')

// Select
const select = document.querySelector('#value3')


function seleccionHecha() {
    select.value === '1' && cuadroClick(card1)
    select.value === '2' && cuadroClick(card2)
    select.value === '3' && cuadroClick(card3)
}

select.addEventListener('change', seleccionHecha)


