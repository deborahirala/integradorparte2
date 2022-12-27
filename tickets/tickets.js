const data = {
    amount: '',
    select: '',
};


const amount = document.querySelector('#amount');
const total = document.querySelector('#total');

amount.addEventListener('input', function(event){
    data.amount = event.target.value;
    console.log("Cantidad: " + event.target.value + " guardada");
});

select.addEventListener('change', function(event){
    data.select = event.target.value;
    console.log("Categoria: " + event.target.value + " guardada");
});
button2.addEventListener('click' , function(event){
    event.preventDefault();
    const {amount, select} = data;
    
    let result = 0;    
    let index = 0;
    index = total.textContent.indexOf('$');
    total.textContent = total.textContent.substring(0, index+1);
    if(select == '1'){
        result = (200*amount)*0.2;
        console.log("La categoria seleccionada es (D): " + select);
    } 
    else if(select == '2'){
        result = (200*amount)*0.5;
        console.log("La categoria seleccionada es (P): " + select);
    }
    else if(select == '3'){
        result = (200*amount)*0.85;
        console.log("La categoria seleccionada es (E): " + select);
    }
    
    if(card1.value == '1'){
        result = (200*amount)*0.2;
        console.log("La categoria seleccionada es (D): " + select);
    } 

    if (form.value1.value === '') {result = "0"}
    if (form.value2.value === '') {result = "0"}
    if (form.mail.value === '') {result = "0"}



    total.textContent += result;

    if (result > 1) {
    Swal.fire('¡guardado! su total es de $' + result);
    
    }
    
});


button1.addEventListener('click' , function(event){
    event.preventDefault();
    let index = 0;
    index = total.textContent.indexOf('$');
    total.textContent = total.textContent.substring(0, index+1);
    form.reset();
});

