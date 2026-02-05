//Eventos en js, se manipulan con addEventListener

//DOMContentLoaded, este evento se ejecuta cuando se ha descargado todo el html de la pagina, este siempre se ejecuta con una funcion anonima. Este evento siempre espera a que todo el documento este listo y se ejecuta, aqui vemos que primero se ejecutan los console.lo(1 y 3) mientras que s etermina de cargar el documento

console.log(1)

document.addEventListener("DOMContentLoaded",()=>{
    console.log(2)
    console.log("Documento listo")
})

console.log(3)