
// Dado el array = [1,2,3,4,5,6]
const numeros = [1,2,3,4,5,6]

// Iterar por todos los elementos dentro del array utilizando while y mostrarlos en pantalla.
let i = 0
let label1 = document.getElementById("array1")
while (i < numeros.length){
  label1.innerHTML += numeros[i] + " ";
  ++i  
}

// Iterar por todos los elementos dentro del array utilizando for y mostrarlos en pantalla.

let label2 = document.getElementById("array2")
for (i=0; i < numeros.length; i++){
  label2.innerHTML += numeros[i] + " "; 
}

// Iterar por todos los elementos dentro del array utilizando .forEach y mostrarlos en pantalla.(https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
let label3 = document.getElementById("array3")
numeros.forEach(x => label3.innerHTML += x + " ")


// Mostrar todos los elementos dentro de un array sumándole uno a cada uno.

let label4 = document.getElementById("array4")
numeros.forEach(x => label4.innerHTML += (+x +1) + " ")

// Generar una copia de un array pero con todos los elementos incrementado en 1.

let copiaNumeros = []
let label5 = document.getElementById("array5")
numeros.forEach (x => copiaNumeros.push (+x +1))
copiaNumeros.forEach (x => label5.innerHTML += x + " ")

// Calcular el promedio

let suma = 0
let promedio = 0
let label6 = document.getElementById("array6")
numeros.forEach(x => suma += +x)
promedio = suma / numeros.length
label6.innerHTML = promedio



