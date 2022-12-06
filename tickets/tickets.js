const data = {
    amount: '',
    category: ''
};

const amount = document.querySelector('#amount');
const category = document.querySelector ('#category')
const total = document.querySelector('#total');
const btnAbstract = document.querySelector('.btnAbstract');
const btnErase = document.querySelector('.btnErase');
const form = document.querySelector('.form');

amount.addEventListener('input', function(event){
    data.amount = event.target.value;
    console.log("Cantidad: " + event.target.value + " guardada");
});

category.addEventListener('change', function(event){
    data.category = event.target.value;
    console.log("Categoria: " + event.target.value + " guardada");
});

btnAbstract.addEventListener('click' , function(event){
    event.preventDefault();
    const {amount, category} = data;
    let result = 0;    
    let indice = 0;
    indice = total.textContent.indexOf('$');
    total.textContent = total.textContent.substring(0, indice+1);
    if(category == 'directivo'){
        result = (200*amount)*0.2;
        console.log("La categoria seleccionada es (D): " + category);
    } 
    else if(category == 'profesor'){
        result = (200*amount)*0.5;
        console.log("La categoria seleccionada es (P): " + category);
    }
    else if(category == 'estudiante'){
        result = (200*amount)*0.85;
        console.log("La categoria seleccionada es (E): " + category);
    }
    {
        if (amount <= 0 || amount === "") {
        console.log ("Debe ingresar la cantidad");
        }
    }

        if (category ==="") {
            console.log ("debe seleccionar la categoria")
        }


    total.textContent += result;
});

btnErase.addEventListener('click' , function(event){
    event.preventDefault();
    let indice = 0;
    indice = total.textContent.indexOf('$');
    total.textContent = total.textContent.substring(0, indice+1);
    form.reset();
});