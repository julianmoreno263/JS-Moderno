// El LocalStorage es una herramienta de JavaScript que permite guardar datos de manera persistente en el navegador del usuario. Es parte de la Web Storage API y es fundamental cuando quieres que una aplicación "recuerde" información incluso después de que el usuario cierre la pestaña o reinicie el navegador.

// Piénsalo como una pequeña base de datos integrada en el navegador que funciona bajo el esquema de clave-valor.

// Características principales
// Persistencia: Los datos no caducan. Permanecen ahí hasta que se eliminen manualmente mediante código o se limpie el caché del navegador.

// Capacidad: Permite almacenar entre 5MB y 10MB (dependiendo del navegador), lo cual es mucho más que los 4KB de una Cookie.

// Solo texto: Solo puede guardar cadenas de texto (strings). Si quieres guardar objetos o arreglos, debes convertirlos a formato JSON.

// Seguridad por origen: Los datos están vinculados a un dominio específico (protocolo + nombre de dominio + puerto). Una web no puede leer el LocalStorage de otra

//podemos verlo desde consola del navegador escribiendo el objeto global window.

//almacenar datos en local storage se hace por medio de clave y valor, con el metodo setItem(). En chrome en application podemos encontrar el localstorage, tambien esta el sesionstorage, la difencia es que el local storage es persistente,mantiene la informacion, el sesion storage apenas se cierra el navegador se pierde la informacion. En firefox se encuentra en almacenamiento.

//NOTA: LOCAL STORAGE SOLO ALMACENA STRINGS, NO PUEDE ALMACENAR ARREGLOS NI OBJETOS NI NUMEROS,SI LE PASAMOS UN ENTERO LO GUARDA COMO STRING. SI QUIERO GUARDAR UN OBJETO LO PASO A STRING CON EL METODO stringigy()

localStorage.setItem("nombre","pepe")//almacena en local strorage
sessionStorage.setItem("nombre","ingrid")//almacena en sesion storage

//almacenar objeto usando stringify
producto={
    nombre:"monitor 24 pulgadas",
    precio:300
}

localStorage.setItem("producto",JSON.stringify(producto))

//lo mismo con arrays
const meses=["Enero","Febrero","Marzo"]
localStorage.setItem("meses",JSON.stringify(meses))