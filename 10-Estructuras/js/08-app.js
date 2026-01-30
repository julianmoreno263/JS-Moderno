//Buenas practicas para trabajar con if

const autenticado=true


//en los parentesis se pone solo autenticado, se da por echo que la condicion es verdadera
if (autenticado) {
    console.log("El usuario está autenticado")
}

//tambien tener siempre en cuenta que en una estructura de if-else if, el codigo evalua que condicion se cumple primero y esa la ejecuta y ya no ejecuta nada mas,por eso debemos ver muy bien como mostrar los mensajes,ponerle logica.

// en la vida real generalmente se usan solo if sin tantos else if, si queremos usar varios if para ir evaluando condiciones los podemos usar dentro de una funcion y usamos return para que si un if cumple la condicion ya no se ejecuten los otros if,pero el return se usa dentro de una funcion asi:

const puntaje=500

function revisarPuntaje() {
    if(puntaje>400){
        console.log("Excelente puntaje")
        return
    }

    if(puntaje>300){
        console.log("Buen puntaje...Felicidades")
        return
    }
    
}

revisarPuntaje()