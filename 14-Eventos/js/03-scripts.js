//eventos de teclado

//trabajaremos sobre el input de la pagina con la clase "busqueda"
const busqueda=document.querySelector(".busqueda")

//evento keydown (cuando se oprime una tecla)
// busqueda.addEventListener("keydown",()=>{
//     console.log("Escribiendo...")
// })

//evento keyup (cuando suelta una tecla)
// busqueda.addEventListener("keyup",()=>{
//     console.log("Soltando tecla...")
// })

//evento blur (cuando salgo del input, sirve para validaciones), el blur ocurre específicamente cuando un elemento pierde el foco; es decir, cuando el usuario termina de interactuar con un campo y pasa al siguiente.

//1. Menos interrupciones (Mejor UX)
// No hay nada más frustrante que empezar a escribir un correo electrónico y que aparezca un error diciendo "Correo inválido" antes de que hayas terminado de escribir el primer carácter.

// Validación no intrusiva: El usuario puede escribir a su ritmo. El mensaje de error solo aparece cuando el sistema entiende que el usuario "terminó" con ese campo.

// Claridad: El usuario recibe el feedback justo en el momento en que su atención se desplaza, lo que facilita la corrección inmediata.

// 2. Eficiencia de rendimiento
// Si validas con cada pulsación de tecla (input), estás ejecutando código (y quizás expresiones regulares complejas o llamadas a una API) docenas de veces por minuto.

// Con blur, la validación ocurre una sola vez por campo.

// Esto es especialmente útil si necesitas verificar, por ejemplo, si un nombre de usuario ya existe en tu base de datos mediante una petición al servidor.

// busqueda.addEventListener("blur",()=>{
//     console.log("Validando input...")
// })

//evento copy, cuando copio, o doy ctrl+c se ejecuta el evento
// busqueda.addEventListener("copy",()=>{
//     console.log("Copiando...")
// })

 //evento paste, cuando pego, o doy ctrl+v se ejecuta el evento
// busqueda.addEventListener("paste",()=>{
//     console.log("Pegando...")
// })

//evento cut, cuando corto, o doy ctrl+x se ejecuta el evento
// busqueda.addEventListener("cut",()=>{
//     console.log("Cortando...")
// })

//evento input es mas funcional, actua sobre el input cuando realizo cualquiera de las anteriores acciones,ya sea copiar,cortar, oprimir una tecla,etc. Para usarlo de forma practica en el input,por ejemplo para capturar lo que el usuario esta escribiendo para despues con eso validar una base de datos por ejemplo, le pasamos como parametro el evento, y con target apuntamos al elemento al que se le esta pasando ese evento,osea el mismo , y con value capturamos el valor que se le esta pasando a ese input.
busqueda.addEventListener("input",(e)=>{
    console.log(e.target.value)
})