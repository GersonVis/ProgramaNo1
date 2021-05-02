const input1 = document.getElementById('val1')
const input2 = document.getElementById('val2')
const input3 = document.getElementById('val3')
const mostrarTexto= document.getElementById('pTexto')
const boton = document.getElementById('btnOrdenar')

boton.addEventListener('click', funOrdenar)

function funOrdenar(ev) {
    let num1 = input1.value
    let num2 = input2.value
    let num3 = input3.value
    if(num1=="" || num2=="" || num3==""){
        mostrarTexto.innerText="Número mayor"
        alert("rellené los campos")
        return;
    }
    if(num1>=num2 && num1>=num3){
        mostrarTexto.innerText="Mayor: "+ num1
    }else if(num2>=num3){
        mostrarTexto.innerText="Mayor: "+ num2
    }else{
        mostrarTexto.innerText="Mayor: "+ num3
    }
}

