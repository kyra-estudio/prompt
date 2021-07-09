
//Pedir al usuario que ingrese un número en un prompt, hacer la suma de todos los dígitos, validar que el número ingresado no contenga letras.


const cadenaNumeros = prompt("Escribe un número");
let result = 0


if(isNaN(cadenaNumeros)){
    alert ("Error, contiene letras");
}
else {
  for (let n = 0; n < cadenaNumeros.length; n++) {
   result += +cadenaNumeros[n]
   }
  alert(result)
}



 

  