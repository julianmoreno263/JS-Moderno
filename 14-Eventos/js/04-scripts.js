//Eventos de formulario, basicamente es uno, el evento submit, hay mas pero el mas importante es el submit,cuando se envia el formulario

const form=document.querySelector("#formulario")

//el preventDefault() previene que se realice la accion que haria el elemento por defecto,por ejemplo el formulario trata de enviarse automaticamente, un enlace trata de redirigirse a una url por defecto, entonces el preventDefault nos permite evitar que automaticamente se envie el input a la ruta que se le especifica en el argumento "action" en el html. Es normal usarlo para asi nosotros controlar lo que queremos que el input haga al darle submit.

// form.addEventListener("submit",(e)=>{
//     e.preventDefault()

//     console.log("Buscando")
// })

//podemos utilizar una funcion flecha como la anterior o una declarada,es lo mismo
form.addEventListener("submit",validarForm)

function validarForm(e) {
    e.preventDefault()
    console.log("Buscando información...")
}
