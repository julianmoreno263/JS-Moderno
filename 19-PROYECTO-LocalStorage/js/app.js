//variables
const formulario=document.querySelector("#formulario")
const listaTweets=document.querySelector("#lista-tweets")
let tweets=[]





//event listeners
eventListeners()

function eventListeners(params) {

    //evento cuando el usuario agrega un nuevo tweet
    formulario.addEventListener("submit",agregarTweet)

    //Cuando el document esta listo
    document.addEventListener("DOMContentLoaded",()=>{
        //cuando el document este listo leemos del local storage los tweets, o si no hay nada en el local storage se pasa un  array vacio para que no marque un null y complica todo
        tweets=JSON.parse(localStorage.getItem("tweets")) || []

        console.log(tweets)

        crearHtml()
    })
}




//funciones
function agregarTweet(e) {
    e.preventDefault()

    //textarea donde el usuario escribe
    const tweet=document.querySelector("#tweet").value
    
    //validacion textArea
    if (tweet==="") {
        mostrarError("Un mensaje no puede ir vacio")

        return //evita que se ejecuten las demas lineas de codigo
    }

    //objeto que se crea para agregar el tweet junto con una fecha en milisegundos para diferenciar cada tweet
    tweetObj={
        id:Date.now(),
        tweet
    }

    //añadir al array de tweets, tomamos una copia del array tweets y le agregamos el tweet que el usuario escribe
    tweets=[...tweets,tweetObj]
    
    //una vez agregado se crea el html
    crearHtml()

    //Reiniciar el formulario
    formulario.reset()

}

//mostrar mensaje de error
function mostrarError(error) {
    const mensajeError=document.createElement("p")
    mensajeError.textContent=error
    mensajeError.classList.add("error")

    //insertar el error en el html
    const contenido=document.querySelector("#contenido")
    contenido.appendChild(mensajeError)

    //eliminar el mensaje error pasados 3 segundos
    setTimeout(() => {
        mensajeError.remove()
    }, 3000);
    
}

//muestra un listado de los tweets
function crearHtml(params) {

    limpiarHtml()

    if (tweets.length>0) {
        tweets.forEach(tweet=>{

            //Agregar un boton de eliminar tweet
            const btnEliminar=document.createElement("a")
            btnEliminar.classList.add("borrar-tweet")
            btnEliminar.textContent="X"

            //Añadir la funcion de eliminar
            btnEliminar.onclick=()=>{
                borrarTweet(tweet.id)
            }

            //Crear el HTML
            const li=document.createElement("li")

            //añadir el texto, es tweet.tweet porque utilizamos el objeto tweetObj
            li.innerText=tweet.tweet

            //Asignar el boton
            li.appendChild(btnEliminar)

            //insertarlo en el html
            listaTweets.appendChild(li)
        })
    }

    sincronizarStorage()
    
}

//limpiar HTML para que no hayan tweets repetidos
function limpiarHtml(params) {
    //mientras haya algo en la listaTweets,limpie el primer elemento y asi no se repiten los tweets al mostrarlos
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild)
    }
}

//Agrega los tweets actuales al local Storage
function sincronizarStorage(params) {
    localStorage.setItem("tweets",JSON.stringify(tweets))
}

//Borrar tweet, con el array methos filter()
function borrarTweet(id) {
    //aqui la logica con filter es que traiga todos los demas ids menos al que le dimos click,porque se trata de eliminar ese id, este codigo crea un nuevo array porque filter crea un nuevo array y ese array nuevo debe de traer todos los tweets menos al que le dimos borrar(osea el id que le estamos pasando como argumento a la funcion)
    tweets=tweets.filter(tweet=>tweet.id!==id)

    //se vuelve a refrescar esta seccion que muestra los tweets
    crearHtml()
}