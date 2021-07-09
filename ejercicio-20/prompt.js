
// Personas

// Crear un objeto Persona, que contenga nombre, edad y una función que determine si es mayor de edad o no.

// Crear una función constructora que permita crear objetos del tipo Persona pasándole solo un nombre y edad.

// Crear un array que contenga varios objetos Persona

// Crear una función que reciba el array y devuelva la edad promedio del grupo de personas.

var persona ={
    nombre: "Juan",
    edad: 32,
    esMayorDeEdad: function (edad){
        return edad >= 18
    }
}

function Persona(nombre, edad){
    persona ={
        nombre: nombre,
        edad: edad
    }
}


