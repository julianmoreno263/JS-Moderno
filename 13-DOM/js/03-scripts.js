//seleccionar elementos del DOM por su id, recordar que los id son unicos para un elemento,no se pueden repetir los id en un mismo documento. Si llegan a haber dos ids iguales en el mismo documento, no marca error,pero solo selecciona el primer id nada mas.

const formulario=document.getElementById("formulario")
console.log(formulario)

//si el id no existe saca un null
const noExiste=document.getElementById("no-existe")
console.log(noExiste)
