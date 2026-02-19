//Eliminar elementos del localStorage

localStorage.removeItem("nombre")

//local storage no tiene un metodo para actualizar,entonces para hacerlo se hace lo siguiente:

//1- capturamos el elemento a actualizar,lo parseamos de una vez, y especificamos que si no se encuentra al menos se cree un array vacio,sino lo hacemos nos dara undefined
const mesesArray=JSON.parse(localStorage.getItem("meses")) || []

//2- utilizamos un array methos pues ya lo capturamos como array
mesesArray.push("Mayo")

//3. ya actualizado volvemos a enviarlo al local storage.1. 
// Si antes de poner el || [] ejecutaste el código y se guardó un error, ese undefined se quedó grabado como texto. Al hacer JSON.parse("undefined"), JavaScript lanza un error o devuelve un valor inválido.

// Solución: Limpia el historial para empezar de cero.
// Ejecuta esto una sola vez en tu consola:
// localStorage.clear();
localStorage.setItem("meses",JSON.stringify(mesesArray))

localStorage.clear()