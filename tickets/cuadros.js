function asignarEventos(card) {
    card.addEventListener('mouseover', () => cuadroOver(card))
    card.addEventListener('mouseleave', () => cuadroLeave(card))
    card.addEventListener('click', () => cuadroClick(card))
}
function cuadroOver(card) {
    card.classList.replace('border-muted', 'border-primary')
}
function cuadroLeave(card) {
    card.classList.replace('border-primary', 'border-muted')
}
function cuadroClick(card) {
    card.ariaChecked = true
    card.classList.replace('border-primary', 'border-success')
    card.classList.replace('border-muted', 'border-success')

    select.value =
    card.id === 'card1' && '1' ||
    card.id === 'card2' && '2' ||
    card.id === 'card3' && '3'

    for (let item of cards) {
        if (item.id !== card.id) {
            item.classList.replace('border-success', 'border-muted')
            item.ariaChecked = false
        }
    }
    
    let cardi =  cuadroClick.select.value 
console.log ('cardi' )
}

asignarEventos(card1)
asignarEventos(card2)
asignarEventos(card3)



