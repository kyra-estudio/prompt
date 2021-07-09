
//Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario.



const n1 = prompt("Escribe un número");
const m = prompt("Escribe otro número");
let suma = 0

if(n1>m){
  alert("El número inicial tiene que ser menor que el número final")
}else {for (let n = n1; n <= m; n++) {
  if(+n % 2 === 0){
    suma += +n
  }
     }
}

    alert(suma)
    
      
 

 

  