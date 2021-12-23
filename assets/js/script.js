const h1 = document.getElementById('number')
const buttonAdd = document.getElementById('add')
const buttonSub = document.getElementById('sub')


let counter = 0

const adicionarValor = ()=>{
    counter++;
    h1.innerText = counter;
}
    
const diminuirValor = () =>{
    counter--;
    h1.innerText = counter;
}

buttonAdd.addEventListener('click', adicionarValor)
buttonSub.addEventListener('click', diminuirValor)
