
// Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.

let color = prompt("Escribe un color");
const colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"]
let existe = false
colores.forEach (x => {if (x.toLowerCase() === color.toLowerCase()){
existe = true
}})
if(existe){
    alert ("El color introducido se encuentra en el array")
}else{
    alert ("El color introducido no se encuentra en el array")
}
