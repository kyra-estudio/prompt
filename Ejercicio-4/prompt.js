
// Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en una alerta

let n1 = prompt("Introduce un número")
let resultado = parOimpar(n1)

alert("El número "+n1+" es "+resultado);

function parOimpar(n1){
    
    if (n1 % 2 === 0) 
    return "par"
    else 
    return ("impar")

       }
 

  