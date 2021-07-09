
// Crear una función que reciba dos valores y devuelva la suma de ellos.

function obtenerNumero(id){

  return document.getElementById(id).value
}

function suma (n1, n2) {
	const resultado = document.getElementById("resultSuma")
  let total = 0
  total = +n1 + +n2 

	
	resultado.value =  total; 
}




 

  