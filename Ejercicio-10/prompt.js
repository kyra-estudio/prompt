
//Mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo ingresa el usuario en un prompt.



const nMax = prompt("Escribe un número");
let todosNumeros = ""

for (let n = nMax; n > 0; n--) {
   todosNumeros += " " + n
  }

  alert(todosNumeros);

 

  