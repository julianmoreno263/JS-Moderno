//libreria moment js para manejar fechas en js, se ponen en el html con el script para usarlas, moment maneja las fechas y moment locale es para manejarlas en español

//<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"></script>
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/locale/es.min.js" integrity="sha512-tgY2qswcbQir80Vp67s5ZdbKikl99YmVXp3V/C4Acthk4gI29ONbQ+MR8B5tpESkNoa0N1P7HnSuzC6nOflrwA==" crossorigin="anonymous"></script>

const diaHoy=new Date()

moment.locale("es")//pasamos la fecha a español

//con format le doy el formato que quiero
console.log(moment().format("MMMM Do YYYY h:mm:ss"))

//hay muchas opciones,ver documentacion
console.log(moment().format('LLLL',diaHoy))

//si quiero establecer una fecha de exiracion de algo puedo hacerlo asi
console.log(moment().add(3,'days').calendar())


