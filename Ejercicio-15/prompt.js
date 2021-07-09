
// Crear una función que reciba un número entero y muestre un error si el tipo de dato pasado es de otro tipo.


function obtenerNumero(id){

  return document.getElementById(id).value
}

function entero(n1) {
const result = document.getElementById("resultEntero")

  if (Number.isInteger(+n1)) {
    resultEntero = 'Es Entero!';
  }else{
    resultEntero = 'No es entero!';
  }
 
  result.value = resultEntero
}






 

  