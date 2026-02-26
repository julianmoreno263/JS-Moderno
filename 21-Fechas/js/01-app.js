//fechas en js, las fechas residen en el objeto Date

//Date es un objeto, si pongo mi fecha de nacimiento me sale el dia en que naci: Fri Nov 11 1977 00:00:00 GMT-0500 (hora estándar de Colombia)
const diaHoy=new Date()


let valor

valor=diaHoy

//metodos para manejar fechas
valor=diaHoy.getFullYear()//trae el año actual
valor=diaHoy.getMonth()//trae el mes actual pero en numero y comienza desde 0 como un array,osea enero es el mes 0
valor=diaHoy.getMinutes()//trae los minutos
valor=diaHoy.getHours()//trae la hora
valor=diaHoy.getTime()//trae los milisegundos transcurriods desde el 1 de enero del 1970 hasta la fecha

//Date tiene metodos get y set para manipular fechas
valor=diaHoy.setFullYear(2010)//asi puedo establecer un año







console.log(diaHoy)