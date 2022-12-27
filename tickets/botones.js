function eraser(e) {
    e.preventDefault()
    form.value1.value = ''
    form.value2.value = ''
    form.options.value = ''

    for (let item of cards) {
        item.classList.replace('border-success', 'border-muted')
        item.ariaChecked = false
    }
}

function checkError() {

    let information = false

    const value3 =
        form.options.value === '1' && 'directivo' ||
        form.options.value === '2' && 'profesor' ||
        form.options.value === '3' && 'estudiante'

    form.value1.value === ''
        ? form.value1.classList.add('border-danger')
        : form.value1.classList.remove('border-danger')

    form.value2.value === ''
        ? form.value2.classList.add('border-danger')
        : form.value2.classList.remove('border-danger')

    form.mail.value === ''
        ? form.mail.classList.add('border-danger')
        : form.mail.classList.remove('border-danger')  
        
    form.amount.value === ''
        ? form.amount.classList.add('border-danger')
        : form.amount.classList.remove('border-danger')  

    !value3
        ? form.options.classList.add('border-danger')
        : form.options.classList.remove('border-danger')


 
}

function tip(e) {
    e.preventDefault()
    const completeForm = checkError()
}

button1.onclick = (e) => { eraser(e) }
button2.onclick = (e) => { tip(e) }