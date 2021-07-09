
//Mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo ingresa el usuario en un prompt.

const nMax = prompt("Escribe un número");
let todosNumeros = ""

for (let n = 1; n <= nMax; n = n+2) {
   todosNumeros += " " + n
  }

  alert(todosNumeros);

  